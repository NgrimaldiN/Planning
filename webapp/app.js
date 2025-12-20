// === State Management ===
const state = {
    currentDayIndex: 0,
    completedTasks: JSON.parse(localStorage.getItem('completedTasks') || '{}'),
    completedBlocks: JSON.parse(localStorage.getItem('completedBlocks') || '{}'),
    completedMilestones: JSON.parse(localStorage.getItem('completedMilestones') || '{}'),
    catchupBlocks: JSON.parse(localStorage.getItem('catchupBlocks') || '[]'), // Blocks marked for catchup
    deletedBlocks: JSON.parse(localStorage.getItem('deletedBlocks') || '[]'), // Blocks deleted
    scheduledCatchups: JSON.parse(localStorage.getItem('scheduledCatchups') || '{}'), // day -> [blockIds]
    timerRunning: false,
    timerSeconds: 25 * 60,
    timerInterval: null,
    // Focus mode
    focusMode: false,
    focusBlockId: null,
    focusStartTime: null,
    focusInterval: null
};

// Exam dates for each subject (use string format to avoid mutation issues)
const EXAM_DATES = {
    econ: '2025-01-13',   // 13 janvier
    macro: '2025-01-13',  // 13 janvier
    micro: '2025-01-14',  // 14 janvier
    proc: '2025-01-15',   // 15 janvier
    stats: '2025-01-15'   // 15 janvier
};

// === Initialization ===
document.addEventListener('DOMContentLoaded', async () => {
    initNavigation();
    initDayNavigation();
    initFocusMode();
    setTodayAsCurrentDay();

    // Try to load from Supabase first
    if (window.supabaseSync && window.supabaseSync.isConfigured()) {
        console.log('🔄 Loading from Supabase...');
        await window.supabaseSync.load();
    }

    renderCurrentDay();
    renderCalendar();
    renderStats();
    renderMilestones();
    updateGlobalProgress();
});

// === Set today as current day ===
function setTodayAsCurrentDay() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dayIndex = PLANNING_DATA.days.findIndex(day => {
        const dayDate = new Date(day.date);
        dayDate.setHours(0, 0, 0, 0);
        return dayDate.getTime() === today.getTime();
    });

    if (dayIndex !== -1) {
        state.currentDayIndex = dayIndex;
    } else {
        // If today is before start, show first day
        // If today is after end, show last day
        const startDate = new Date(PLANNING_DATA.days[0].date);
        if (today < startDate) {
            state.currentDayIndex = 0;
        } else {
            state.currentDayIndex = PLANNING_DATA.days.length - 1;
        }
    }
}

// === Navigation ===
function initNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

            tab.classList.add('active');
            const viewId = tab.dataset.view + '-view';
            document.getElementById(viewId).classList.add('active');
        });
    });
}

function initDayNavigation() {
    document.getElementById('prev-day').addEventListener('click', () => {
        if (state.currentDayIndex > 0) {
            state.currentDayIndex--;
            renderCurrentDay();
        }
    });

    document.getElementById('next-day').addEventListener('click', () => {
        if (state.currentDayIndex < PLANNING_DATA.days.length - 1) {
            state.currentDayIndex++;
            renderCurrentDay();
        }
    });
}

// === Render Current Day ===
function renderCurrentDay() {
    const day = PLANNING_DATA.days[state.currentDayIndex];

    document.getElementById('current-day-name').textContent = day.name;
    document.getElementById('current-day-hours').textContent = `${day.totalHours}h prévues`;

    const container = document.getElementById('blocks-container');
    container.innerHTML = '';

    // Render regular blocks (skip deleted ones)
    day.blocks.forEach(block => {
        if (!state.deletedBlocks.includes(block.id)) {
            const blockEl = createBlockElement(block);
            container.appendChild(blockEl);
        }
    });

    // Render scheduled catchup blocks for this day
    const scheduledCatchups = getCatchupBlocksForDay(state.currentDayIndex);
    scheduledCatchups.forEach(blockId => {
        const block = findBlockById(blockId);
        if (block && !state.deletedBlocks.includes(block.id)) {
            const blockEl = createBlockElement(block, true);
            blockEl.classList.add('catchup-block');
            container.appendChild(blockEl);
        }
    });

    // Render catchup zone if there are blocks to catch up
    const availableCatchups = getAvailableCatchupBlocks();
    if (availableCatchups.length > 0 || scheduledCatchups.length > 0) {
        const catchupZone = document.createElement('div');
        catchupZone.className = 'catchup-zone';
        catchupZone.innerHTML = `
            <div class="catchup-zone-header">
                <span>📅 Zone de rattrapage (21h30 - 23h00)</span>
                ${availableCatchups.length > 0 ? `<span class="catchup-count">${availableCatchups.length} bloc(s) en attente</span>` : ''}
            </div>
            ${availableCatchups.length > 0 ? `
            <button class="add-catchup-btn" id="add-catchup-btn">+ Ajouter un bloc à rattraper</button>
            <div class="catchup-selector hidden" id="catchup-selector">
                ${availableCatchups.map(block => {
            const subject = PLANNING_DATA.subjects[block.subject];
            return `<button class="catchup-option" data-block-id="${block.id}">
                        ${subject.emoji} ${subject.name} - ${block.time}
                    </button>`;
        }).join('')}
            </div>
            ` : ''}
        `;
        container.appendChild(catchupZone);

        // Event listeners for catchup zone
        const addBtn = catchupZone.querySelector('#add-catchup-btn');
        if (addBtn) {
            addBtn.addEventListener('click', () => {
                catchupZone.querySelector('#catchup-selector').classList.toggle('hidden');
            });
        }

        catchupZone.querySelectorAll('.catchup-option').forEach(btn => {
            btn.addEventListener('click', () => {
                scheduleCatchupBlock(state.currentDayIndex, btn.dataset.blockId);
            });
        });
    }

    // Update nav buttons
    document.getElementById('prev-day').disabled = state.currentDayIndex === 0;
    document.getElementById('next-day').disabled = state.currentDayIndex === PLANNING_DATA.days.length - 1;
}

function createBlockElement(block, isCatchup = false) {
    const div = document.createElement('div');
    div.className = `block-card ${block.subject}`;
    div.dataset.blockId = block.id;

    const isBlockCompleted = state.completedBlocks[block.id];
    const isInCatchup = state.catchupBlocks.includes(block.id);

    if (isBlockCompleted) {
        div.classList.add('completed');
    }
    if (isInCatchup && !isCatchup) {
        div.classList.add('in-catchup');
    }

    const subject = PLANNING_DATA.subjects[block.subject];

    div.innerHTML = `
        <div class="block-header">
            <span class="block-time">${block.time} (${block.duration}h)</span>
            <div class="block-header-right">
                <span class="block-subject ${block.subject}">${subject.emoji} ${subject.name}</span>
                ${!isBlockCompleted && !isCatchup ? `
                <div class="block-menu">
                    <button class="block-menu-btn" data-block-id="${block.id}">⋮</button>
                    <div class="block-menu-dropdown hidden">
                        <button class="menu-item catchup-item" data-block-id="${block.id}">📅 Reporter</button>
                        <button class="menu-item delete-item" data-block-id="${block.id}">🗑️ Supprimer</button>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
        ${isInCatchup && !isCatchup ? '<div class="catchup-badge">📅 En rattrapage</div>' : ''}
        <ul class="block-tasks">
            ${block.tasks.map((task, i) => {
        const taskId = `${block.id}-t${i}`;
        const isChecked = state.completedTasks[taskId];
        return `
                    <li class="block-task" data-task-id="${taskId}" data-block-id="${block.id}">
                        <div class="task-checkbox ${isChecked ? 'checked' : ''}"></div>
                        <span class="task-text ${isChecked ? 'completed' : ''}">${task}</span>
                    </li>
                `;
    }).join('')}
        </ul>
        <button class="complete-block-btn ${isBlockCompleted ? 'completed' : ''} ${areAllTasksCompleted(block) ? 'ready' : ''}" 
                data-block-id="${block.id}">
            ${isBlockCompleted ? '✓ Bloc terminé (cliquer pour modifier)' : 'Marquer le bloc comme terminé'}
        </button>
    `;

    // Add event listeners - click on entire task row toggles checkbox
    div.querySelectorAll('.block-task').forEach(taskRow => {
        taskRow.addEventListener('click', handleTaskToggle);
    });

    div.querySelector('.complete-block-btn').addEventListener('click', handleBlockComplete);

    // Menu toggle
    const menuBtn = div.querySelector('.block-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = div.querySelector('.block-menu-dropdown');
            dropdown.classList.toggle('hidden');
        });

        // Catchup action
        div.querySelector('.catchup-item')?.addEventListener('click', (e) => {
            e.stopPropagation();
            markForCatchup(block.id);
        });

        // Delete action
        div.querySelector('.delete-item')?.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteBlock(block.id);
        });
    }

    return div;
}

function areAllTasksCompleted(block) {
    return block.tasks.every((_, i) => state.completedTasks[`${block.id}-t${i}`]);
}

function handleTaskToggle(e) {
    // Get the task row (li element) whether clicking checkbox or text
    const taskRow = e.target.closest('.block-task');
    if (!taskRow) return;

    const taskId = taskRow.dataset.taskId;
    const blockId = taskRow.dataset.blockId;

    state.completedTasks[taskId] = !state.completedTasks[taskId];
    localStorage.setItem('completedTasks', JSON.stringify(state.completedTasks));

    // Sync to Supabase
    if (window.supabaseSync && window.supabaseSync.isConfigured()) {
        window.supabaseSync.save();
    }

    // Update UI
    const checkbox = taskRow.querySelector('.task-checkbox');
    const text = taskRow.querySelector('.task-text');
    checkbox.classList.toggle('checked');
    text.classList.toggle('completed');

    // Check if all tasks are done
    const block = findBlockById(blockId);
    const btn = taskRow.closest('.block-card').querySelector('.complete-block-btn');
    if (areAllTasksCompleted(block)) {
        btn.classList.add('ready');
    } else {
        btn.classList.remove('ready');
    }

    updateGlobalProgress();
    renderStats();
}

function handleBlockComplete(e) {
    const blockId = e.target.dataset.blockId;
    const isCurrentlyCompleted = state.completedBlocks[blockId];

    // Toggle block completion
    state.completedBlocks[blockId] = !isCurrentlyCompleted;
    localStorage.setItem('completedBlocks', JSON.stringify(state.completedBlocks));

    // Mark/unmark all tasks accordingly
    const block = findBlockById(blockId);
    block.tasks.forEach((_, i) => {
        state.completedTasks[`${blockId}-t${i}`] = !isCurrentlyCompleted;
    });
    localStorage.setItem('completedTasks', JSON.stringify(state.completedTasks));

    // Sync to Supabase
    if (window.supabaseSync && window.supabaseSync.isConfigured()) {
        window.supabaseSync.save();
    }

    // Full re-render to update menu visibility
    renderCurrentDay();
    updateGlobalProgress();
    renderStats();
}

function findBlockById(blockId) {
    for (const day of PLANNING_DATA.days) {
        for (const block of day.blocks) {
            if (block.id === blockId) return block;
        }
    }
    return null;
}

// === Catchup Functions ===
function markForCatchup(blockId) {
    if (!state.catchupBlocks.includes(blockId)) {
        state.catchupBlocks.push(blockId);
        localStorage.setItem('catchupBlocks', JSON.stringify(state.catchupBlocks));

        if (window.supabaseSync && window.supabaseSync.isConfigured()) {
            window.supabaseSync.save();
        }

        renderCurrentDay();
    }
}

function deleteBlock(blockId) {
    if (!state.deletedBlocks.includes(blockId)) {
        state.deletedBlocks.push(blockId);
        localStorage.setItem('deletedBlocks', JSON.stringify(state.deletedBlocks));

        // Also remove from catchup if it was there
        state.catchupBlocks = state.catchupBlocks.filter(id => id !== blockId);
        localStorage.setItem('catchupBlocks', JSON.stringify(state.catchupBlocks));

        if (window.supabaseSync && window.supabaseSync.isConfigured()) {
            window.supabaseSync.save();
        }

        renderCurrentDay();
        updateGlobalProgress();
    }
}

function scheduleCatchupBlock(dayIndex, blockId) {
    const dayKey = `day-${dayIndex}`;
    if (!state.scheduledCatchups[dayKey]) {
        state.scheduledCatchups[dayKey] = [];
    }
    if (!state.scheduledCatchups[dayKey].includes(blockId)) {
        state.scheduledCatchups[dayKey].push(blockId);
        localStorage.setItem('scheduledCatchups', JSON.stringify(state.scheduledCatchups));

        // Remove from general catchup list
        state.catchupBlocks = state.catchupBlocks.filter(id => id !== blockId);
        localStorage.setItem('catchupBlocks', JSON.stringify(state.catchupBlocks));

        if (window.supabaseSync && window.supabaseSync.isConfigured()) {
            window.supabaseSync.save();
        }

        renderCurrentDay();
    }
}

function getCatchupBlocksForDay(dayIndex) {
    const dayKey = `day-${dayIndex}`;
    return state.scheduledCatchups[dayKey] || [];
}

function getAvailableCatchupBlocks() {
    return state.catchupBlocks.map(id => findBlockById(id)).filter(b => b);
}

function startTimer() {
    if (state.timerRunning) return;

    state.timerRunning = true;
    document.getElementById('timer-start').disabled = true;
    document.getElementById('timer-pause').disabled = false;

    state.timerInterval = setInterval(() => {
        state.timerSeconds--;
        updateTimerDisplay();

        if (state.timerSeconds <= 0) {
            pauseTimer();
            playNotification();
            // Switch between work (25min) and break (5min)
            if (state.timerSeconds === 0) {
                state.timerSeconds = 5 * 60; // 5 min break
                updateTimerDisplay();
            }
        }
    }, 1000);
}

function pauseTimer() {
    state.timerRunning = false;
    clearInterval(state.timerInterval);
    document.getElementById('timer-start').disabled = false;
    document.getElementById('timer-pause').disabled = true;
}

function resetTimer() {
    pauseTimer();
    state.timerSeconds = 25 * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.timerSeconds / 60);
    const seconds = state.timerSeconds % 60;
    document.getElementById('timer-minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('timer-seconds').textContent = seconds.toString().padStart(2, '0');
}

function playNotification() {
    // Simple beep using Web Audio API
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// === Calendar ===
function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    PLANNING_DATA.days.forEach((day, index) => {
        const dayDate = new Date(day.date);
        const isPast = dayDate < today;
        const isToday = dayDate.getTime() === today.getTime();

        const subjects = [...new Set(day.blocks.map(b => b.subject))];
        const completedHours = calculateDayCompletedHours(day);

        const div = document.createElement('div');
        div.className = `calendar-day ${isPast ? 'past' : ''} ${isToday ? 'today' : ''}`;
        div.innerHTML = `
            <div class="calendar-day-date">${dayDate.getDate()}</div>
            <div class="calendar-day-name">${getDayName(dayDate)}</div>
            <div class="calendar-day-hours">${completedHours}/${day.totalHours}h</div>
            <div class="calendar-subjects">
                ${subjects.map(s => `<div class="calendar-subject-dot ${s}"></div>`).join('')}
            </div>
        `;

        div.addEventListener('click', () => {
            state.currentDayIndex = index;
            renderCurrentDay();
            // Switch to today view
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            document.querySelector('[data-view="today"]').classList.add('active');
            document.getElementById('today-view').classList.add('active');
        });

        grid.appendChild(div);
    });
}

function getDayName(date) {
    const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    return days[date.getDay()];
}

function calculateDayCompletedHours(day) {
    let hours = 0;
    day.blocks.forEach(block => {
        if (state.completedBlocks[block.id]) {
            hours += block.duration;
        }
    });
    return hours;
}

// === Stats ===
function renderStats() {
    const subjectHours = {
        econ: { done: 0, total: 30 },
        proc: { done: 0, total: 28 },
        macro: { done: 0, total: 24 },
        micro: { done: 0, total: 22 },
        stats: { done: 0, total: 16 }
    };

    PLANNING_DATA.days.forEach(day => {
        day.blocks.forEach(block => {
            if (state.completedBlocks[block.id]) {
                subjectHours[block.subject].done += block.duration;
            }
        });
    });

    Object.keys(subjectHours).forEach(subject => {
        const data = subjectHours[subject];
        const percent = Math.round((data.done / data.total) * 100);

        document.getElementById(`bar-${subject}`).style.width = `${percent}%`;
        document.getElementById(`hours-${subject}`).textContent = `${data.done}/${data.total}h`;
    });

    // Add click handlers to stat cards
    document.querySelectorAll('.stat-card[data-subject]').forEach(card => {
        card.onclick = () => showSubjectDetail(card.dataset.subject);
    });
}

function showSubjectDetail(subject) {
    const subjectInfo = PLANNING_DATA.subjects[subject];
    const detailPanel = document.getElementById('subject-detail');
    const statsGrid = document.getElementById('stats-grid');
    const milestones = document.querySelector('.milestones');

    // Hide stats grid and milestones, show detail panel
    statsGrid.classList.add('hidden');
    milestones.classList.add('hidden');
    detailPanel.classList.remove('hidden');

    // Update header
    document.getElementById('detail-icon').textContent = subjectInfo.emoji;
    document.getElementById('detail-title').textContent = subjectInfo.name;

    // Get all blocks for this subject
    const blocksContainer = document.getElementById('subject-blocks');
    blocksContainer.innerHTML = '';

    PLANNING_DATA.days.forEach(day => {
        day.blocks.forEach(block => {
            if (block.subject === subject) {
                const isCompleted = state.completedBlocks[block.id];
                const div = document.createElement('div');
                div.className = `subject-block-item ${isCompleted ? 'completed' : ''}`;

                // Build task list HTML
                const tasksHtml = block.tasks.map((task, i) => {
                    const taskId = `${block.id}-t${i}`;
                    const isChecked = state.completedTasks[taskId];
                    return `
                        <div class="detail-task ${isChecked ? 'checked' : ''}">
                            <span class="detail-task-check">${isChecked ? '✓' : '○'}</span>
                            <span class="detail-task-text">${task}</span>
                        </div>
                    `;
                }).join('');

                div.innerHTML = `
                    <div class="subject-block-header">
                        <div class="subject-block-day">${day.name}</div>
                        <div class="subject-block-time">${block.time} (${block.duration}h)</div>
                    </div>
                    <div class="subject-block-tasks-list">
                        ${tasksHtml}
                    </div>
                    <div class="subject-block-status">${isCompleted ? '✅ Terminé' : ''}</div>
                `;
                blocksContainer.appendChild(div);
            }
        });
    });

    // Back button handler
    document.getElementById('back-to-stats').onclick = () => {
        detailPanel.classList.add('hidden');
        statsGrid.classList.remove('hidden');
        milestones.classList.remove('hidden');
    };
}

// === Milestones ===
function renderMilestones() {
    const list = document.getElementById('milestones-list');
    list.innerHTML = '';

    PLANNING_DATA.milestones.forEach((milestone, i) => {
        const isChecked = state.completedMilestones[i];
        const div = document.createElement('div');
        div.className = 'milestone';
        div.innerHTML = `
            <div class="milestone-checkbox ${isChecked ? 'checked' : ''}" data-milestone-id="${i}"></div>
            <span class="milestone-text">${milestone.text}</span>
            <span class="milestone-date">${formatDate(milestone.date)}</span>
        `;

        div.querySelector('.milestone-checkbox').addEventListener('click', (e) => {
            const id = e.target.dataset.milestoneId;
            state.completedMilestones[id] = !state.completedMilestones[id];
            localStorage.setItem('completedMilestones', JSON.stringify(state.completedMilestones));
            e.target.classList.toggle('checked');

            // Sync to Supabase
            if (window.supabaseSync && window.supabaseSync.isConfigured()) {
                window.supabaseSync.save();
            }
        });

        list.appendChild(div);
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'déc'];
    return `${day} ${months[date.getMonth()]}`;
}

// === Global Progress ===
function updateGlobalProgress() {
    let totalDone = 0;

    PLANNING_DATA.days.forEach(day => {
        day.blocks.forEach(block => {
            if (state.completedBlocks[block.id]) {
                totalDone += block.duration;
            }
        });
    });

    const percent = Math.round((totalDone / PLANNING_DATA.totalHours) * 100);

    document.getElementById('hours-done').textContent = totalDone;
    document.getElementById('progress-percent').textContent = `${percent}%`;
    document.getElementById('progress-ring-fill').setAttribute('stroke-dasharray', `${percent}, 100`);

    // Update calendar too
    renderCalendar();
}

// === Focus Mode ===
function initFocusMode() {
    const startBtn = document.getElementById('start-focus-btn');
    const stopBtn = document.getElementById('stop-focus');

    startBtn.addEventListener('click', () => {
        if (state.focusMode) {
            stopFocusMode();
        } else {
            startFocusMode();
        }
    });

    stopBtn.addEventListener('click', stopFocusMode);
}

function getCurrentBlock() {
    const day = PLANNING_DATA.days[state.currentDayIndex];
    if (!day || !day.blocks.length) return null;

    // Find the first uncompleted block
    for (const block of day.blocks) {
        if (!state.completedBlocks[block.id]) {
            return block;
        }
    }
    return day.blocks[0]; // Fallback to first block
}

function countBlocksForSubject(subject) {
    let total = 0;
    let current = 0;
    let found = false;

    PLANNING_DATA.days.forEach(day => {
        day.blocks.forEach(block => {
            if (block.subject === subject) {
                total++;
                if (!found && block.id === state.focusBlockId) {
                    current = total;
                    found = true;
                }
            }
        });
    });

    return { current, total };
}

function getDaysUntilExam(subject) {
    const examDateStr = EXAM_DATES[subject];
    if (!examDateStr) return null;

    // Parse the date string (YYYY-MM-DD)
    const examDate = new Date(examDateStr + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = examDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

function startFocusMode() {
    const block = getCurrentBlock();
    if (!block) return;

    state.focusMode = true;
    state.focusBlockId = block.id;
    state.focusStartTime = Date.now();

    // Update header button to Stop state
    const headerBtn = document.getElementById('start-focus-btn');
    headerBtn.innerHTML = '<span class="start-icon">⏹</span><span>Stop</span>';
    headerBtn.classList.add('active');

    // Show focus panel
    document.getElementById('live-focus-panel').classList.remove('hidden');

    // Update focus panel content
    const subject = PLANNING_DATA.subjects[block.subject];
    document.getElementById('focus-subject').textContent = `${subject.emoji} ${subject.name}`;
    document.getElementById('focus-time').textContent = block.time;

    // Days until exam
    const daysUntil = getDaysUntilExam(block.subject);
    if (daysUntil !== null && daysUntil <= 30) {
        document.getElementById('focus-exam-days').textContent = `J-${daysUntil}`;
        document.getElementById('focus-exam-days').style.display = 'inline';
    } else {
        document.getElementById('focus-exam-days').style.display = 'none';
    }

    // Block count
    const blockCount = countBlocksForSubject(block.subject);
    document.getElementById('focus-block-count').textContent = `Bloc ${blockCount.current}/${blockCount.total}`;

    // Render tasks
    const tasksContainer = document.getElementById('focus-tasks');
    tasksContainer.innerHTML = block.tasks.map((task, i) => {
        const taskId = `${block.id}-t${i}`;
        const isChecked = state.completedTasks[taskId];
        return `
            <div class="block-task">
                <div class="task-checkbox ${isChecked ? 'checked' : ''}" 
                     data-task-id="${taskId}" 
                     data-block-id="${block.id}"></div>
                <span class="task-text ${isChecked ? 'completed' : ''}">${task}</span>
            </div>
        `;
    }).join('');

    // Add task toggle listeners
    tasksContainer.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            handleTaskToggle(e);
            // Also update in main view if visible
            renderCurrentDay();
        });
    });

    // Start progress tracking
    const blockDurationMs = block.duration * 60 * 60 * 1000; // in milliseconds

    state.focusInterval = setInterval(() => {
        const elapsed = Date.now() - state.focusStartTime;
        const progress = Math.min((elapsed / blockDurationMs) * 100, 100);

        document.getElementById('live-progress-bar').style.width = `${progress}%`;

        // Format time
        const elapsedSec = Math.floor(elapsed / 1000);
        const elapsedMin = Math.floor(elapsedSec / 60);
        const elapsedHrs = Math.floor(elapsedMin / 60);
        const remainingMin = elapsedMin % 60;
        const remainingSec = elapsedSec % 60;

        const totalMin = block.duration * 60;
        const totalHrs = Math.floor(totalMin / 60);
        const totalRemMin = totalMin % 60;

        const timeText = `${elapsedHrs}:${remainingMin.toString().padStart(2, '0')}:${remainingSec.toString().padStart(2, '0')} / ${totalHrs}:${totalRemMin.toString().padStart(2, '0')}:00`;
        document.getElementById('live-progress-time').textContent = timeText;

        // Update block card in main view
        const blockCards = document.querySelectorAll('.block-card');
        blockCards.forEach(card => {
            const btn = card.querySelector('.complete-block-btn');
            if (btn && btn.dataset.blockId === state.focusBlockId) {
                card.classList.add('live');
                // Add or update progress overlay
                let overlay = card.querySelector('.block-progress-overlay');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.className = 'block-progress-overlay';
                    card.insertBefore(overlay, card.firstChild);
                }
                overlay.style.height = `${progress}%`;
            }
        });

    }, 1000);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function stopFocusMode() {
    state.focusMode = false;
    clearInterval(state.focusInterval);

    // Reset header button to Start state
    const headerBtn = document.getElementById('start-focus-btn');
    headerBtn.innerHTML = '<span class="start-icon">▶</span><span>Start</span>';
    headerBtn.classList.remove('active');

    // Hide focus panel
    document.getElementById('live-focus-panel').classList.add('hidden');

    // Remove live class from block cards
    document.querySelectorAll('.block-card.live').forEach(card => {
        card.classList.remove('live');
        const overlay = card.querySelector('.block-progress-overlay');
        if (overlay) overlay.remove();
    });

    // Reset progress bar
    document.getElementById('live-progress-bar').style.width = '0%';
    document.getElementById('live-progress-time').textContent = '0:00 / 2:00:00';

    state.focusBlockId = null;
    state.focusStartTime = null;
}

