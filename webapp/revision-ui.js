// === REVISION UI COMPONENT ===
// Handles the continuous revision interface with swipe + button support

const RevisionUI = {
    // State
    currentSubject: null,
    currentFatigue: 2, // 1=éveillé, 2=normal, 3=fatigué
    currentDeck: [],
    currentIndex: 0,
    streak: 0,
    answered: 0,
    correct: 0,
    isFlipped: false,
    touchStartX: 0,
    touchEndX: 0,

    // Subject colors and emojis
    subjectInfo: {
        macro: { emoji: '📈', color: '#0066cc', name: 'Macroéconomie' },
        micro: { emoji: '🔬', color: '#cc6600', name: 'Microéconomie' },
        econ: { emoji: '📊', color: '#006633', name: 'Économétrie' },
        proc: { emoji: '🎲', color: '#660066', name: 'Proc. Stochastiques' },
        stats: { emoji: '📉', color: '#cc0066', name: 'Statistiques' }
    },

    // Initialize
    init() {
        this.renderSelector();
        this.setupEventListeners();
    },

    // Render subject selector
    renderSelector() {
        const container = document.getElementById('revision-view');
        if (!container) return;

        container.innerHTML = `
            <div class="revision-selector">
                <h2>📚 Révision Continue</h2>
                <p class="revision-subtitle">Choisis ta matière et ton niveau de fatigue</p>
                
                <div class="subject-grid">
                    ${Object.entries(this.subjectInfo).map(([key, info]) => `
                        <button class="subject-btn" data-subject="${key}" style="--subject-color: ${info.color}">
                            <span class="subject-emoji">${info.emoji}</span>
                            <span class="subject-name">${info.name}</span>
                            <span class="subject-count">${REVISION_CARDS[key]?.length || 0} cartes</span>
                        </button>
                    `).join('')}
                </div>

                <div class="fatigue-selector">
                    <label>Niveau de fatigue:</label>
                    <div class="fatigue-options">
                        <button class="fatigue-btn" data-fatigue="1">
                            <span>⚡</span>
                            <span>Éveillé</span>
                        </button>
                        <button class="fatigue-btn active" data-fatigue="2">
                            <span>😊</span>
                            <span>Normal</span>
                        </button>
                        <button class="fatigue-btn" data-fatigue="3">
                            <span>😴</span>
                            <span>Fatigué</span>
                        </button>
                    </div>
                    <p class="fatigue-hint" id="fatigue-hint">Mix équilibré de cartes</p>
                </div>

                <button id="start-revision-btn" class="start-revision-btn" disabled>
                    Commencer la révision
                </button>
            </div>
        `;

        // Add event listeners
        container.querySelectorAll('.subject-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectSubject(e.target.closest('.subject-btn').dataset.subject));
        });

        container.querySelectorAll('.fatigue-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectFatigue(parseInt(e.target.closest('.fatigue-btn').dataset.fatigue)));
        });

        document.getElementById('start-revision-btn')?.addEventListener('click', () => this.startRevision());
    },

    selectSubject(subject) {
        this.currentSubject = subject;
        document.querySelectorAll('.subject-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.subject === subject);
        });
        document.getElementById('start-revision-btn').disabled = false;
    },

    selectFatigue(level) {
        this.currentFatigue = level;
        document.querySelectorAll('.fatigue-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.fatigue) === level);
        });

        const hints = {
            1: '⚡ Cartes avancées: exercices, dérivations, papier recommandé',
            2: '😊 Mix équilibré: quiz et concepts',
            3: '😴 Cartes simples: définitions et rappels'
        };
        document.getElementById('fatigue-hint').textContent = hints[level];
    },

    // Build deck based on fatigue level
    buildDeck(subject, fatigue) {
        const allCards = REVISION_CARDS[subject] || [];

        // Distribution based on fatigue
        const distributions = {
            1: { 1: 0.2, 2: 0.4, 3: 0.4 }, // Éveillé: plus de challenges
            2: { 1: 0.4, 2: 0.5, 3: 0.1 }, // Normal: équilibré
            3: { 1: 0.7, 2: 0.3, 3: 0.0 }  // Fatigué: que du simple
        };

        const dist = distributions[fatigue];
        const deck = [];

        // Group cards by difficulty
        const byDifficulty = { 1: [], 2: [], 3: [] };
        allCards.forEach(card => {
            byDifficulty[card.difficulty].push(card);
        });

        // Shuffle each group
        Object.values(byDifficulty).forEach(arr => this.shuffle(arr));

        // Build deck with target distribution
        const targetSize = Math.min(50, allCards.length); // Max 50 cards per session

        for (let diff = 1; diff <= 3; diff++) {
            const count = Math.floor(targetSize * dist[diff]);
            deck.push(...byDifficulty[diff].slice(0, count));
        }

        // Fill remaining with level 1 if needed
        while (deck.length < targetSize && byDifficulty[1].length > deck.filter(c => c.difficulty === 1).length) {
            const remaining = byDifficulty[1].filter(c => !deck.includes(c));
            if (remaining.length > 0) deck.push(remaining[0]);
            else break;
        }

        this.shuffle(deck);
        return deck;
    },

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    // Start revision session
    startRevision() {
        if (!this.currentSubject) return;

        this.currentDeck = this.buildDeck(this.currentSubject, this.currentFatigue);
        this.currentIndex = 0;
        this.streak = 0;
        this.answered = 0;
        this.correct = 0;
        this.isFlipped = false;

        this.renderCard();
    },

    // Render current card
    renderCard() {
        const container = document.getElementById('revision-view');
        if (!container || this.currentIndex >= this.currentDeck.length) {
            this.showResults();
            return;
        }

        const card = this.currentDeck[this.currentIndex];
        const info = this.subjectInfo[this.currentSubject];
        const difficultyLabels = { 1: '😌 Chill', 2: '🎯 Normal', 3: '🔥 Challenge' };

        container.innerHTML = `
            <div class="revision-session" style="--subject-color: ${info.color}">
                <div class="revision-header">
                    <button class="back-btn" id="revision-back">← Retour</button>
                    <div class="revision-progress">
                        <span>${this.currentIndex + 1}/${this.currentDeck.length}</span>
                        <div class="progress-bar-mini">
                            <div class="progress-fill" style="width: ${(this.currentIndex / this.currentDeck.length) * 100}%"></div>
                        </div>
                    </div>
                    <div class="streak-counter">🔥 ${this.streak}</div>
                </div>

                <div class="card-container" id="card-container">
                    <div class="revision-card ${this.isFlipped ? 'flipped' : ''}" id="revision-card">
                        <div class="card-front">
                            <div class="card-meta">
                                <span class="card-chapter">${card.chapter}</span>
                                <span class="card-difficulty">${difficultyLabels[card.difficulty]}</span>
                            </div>
                            <div class="card-type-icon">${card.type === 'info' ? '📖' : card.type === 'quiz' ? '❓' : '✏️'}</div>
                            <div class="card-question">${this.formatText(card.question)}</div>
                            ${card.type === 'quiz' ? this.renderQuizOptions(card) : ''}
                            ${card.type === 'input' ? this.renderInputField(card) : ''}
                            ${card.type === 'info' ? '<p class="tap-hint">Tap pour voir la réponse</p>' : ''}
                        </div>
                        <div class="card-back">
                            <div class="card-answer">${this.formatText(card.answer)}</div>
                            ${card.explanation ? `<div class="card-explanation">💡 ${this.formatText(card.explanation)}</div>` : ''}
                        </div>
                    </div>
                </div>

                <div class="card-actions">
                    <button class="action-btn skip-btn" id="skip-btn">⏭️ Passer</button>
                    ${card.type === 'info' ? `<button class="action-btn flip-btn" id="flip-btn">🔄 Retourner</button>` : ''}
                    <button class="action-btn next-btn" id="next-btn" ${!this.isFlipped && card.type === 'info' ? 'disabled' : ''}>✅ Suivant</button>
                </div>

                <div class="swipe-hint">
                    <span>← Swipe pour passer</span>
                    <span>Swipe pour suivant →</span>
                </div>
            </div>
        `;

        this.setupCardListeners(card);
    },

    renderQuizOptions(card) {
        if (!card.options) return '';
        return `
            <div class="quiz-options">
                ${card.options.map((opt, i) => `
                    <button class="quiz-option" data-option="${String.fromCharCode(65 + i)}">${opt}</button>
                `).join('')}
            </div>
        `;
    },

    renderInputField(card) {
        return `
            <div class="input-field">
                <input type="text" id="answer-input" placeholder="Tapez votre réponse..." autocomplete="off">
                <button class="check-btn" id="check-answer">Vérifier</button>
                ${card.hint ? `<p class="hint-text">💡 Indice: ${card.hint}</p>` : ''}
            </div>
        `;
    },

    formatText(text) {
        // Basic LaTeX-like formatting
        return text
            .replace(/\n/g, '<br>')
            .replace(/\$(.*?)\$/g, '<span class="math">$1</span>')
            .replace(/→/g, '→')
            .replace(/↑/g, '↑')
            .replace(/↓/g, '↓');
    },

    setupCardListeners(card) {
        // Back button
        document.getElementById('revision-back')?.addEventListener('click', () => this.renderSelector());

        // Flip button (info cards)
        document.getElementById('flip-btn')?.addEventListener('click', () => this.flipCard());

        // Skip button
        document.getElementById('skip-btn')?.addEventListener('click', () => this.nextCard(false));

        // Next button
        document.getElementById('next-btn')?.addEventListener('click', () => this.nextCard(true));

        // Quiz options
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', (e) => this.checkQuizAnswer(e.target, card));
        });

        // Input check
        document.getElementById('check-answer')?.addEventListener('click', () => this.checkInputAnswer(card));
        document.getElementById('answer-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.checkInputAnswer(card);
        });

        // Card tap to flip (info only)
        if (card.type === 'info') {
            document.getElementById('revision-card')?.addEventListener('click', () => this.flipCard());
        }

        // Swipe support
        const container = document.getElementById('card-container');
        container?.addEventListener('touchstart', (e) => this.touchStartX = e.touches[0].clientX);
        container?.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });
    },

    flipCard() {
        this.isFlipped = !this.isFlipped;
        document.getElementById('revision-card')?.classList.toggle('flipped', this.isFlipped);
        document.getElementById('next-btn')?.removeAttribute('disabled');
    },

    checkQuizAnswer(button, card) {
        const selected = button.dataset.option;
        const isCorrect = selected === card.correct;

        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option === card.correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.option === selected && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        this.answered++;
        if (isCorrect) {
            this.correct++;
            this.streak++;
        } else {
            this.streak = 0;
        }

        // Show explanation if exists
        if (card.explanation) {
            this.flipCard();
        }

        setTimeout(() => this.nextCard(isCorrect), 1500);
    },

    checkInputAnswer(card) {
        const input = document.getElementById('answer-input');
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = card.answer.toLowerCase();

        // Flexible matching
        const isCorrect = correctAnswer.includes(userAnswer) ||
            userAnswer.includes(correctAnswer.split(' ')[0]) ||
            this.similarEnough(userAnswer, correctAnswer);

        input.classList.add(isCorrect ? 'correct' : 'incorrect');

        this.answered++;
        if (isCorrect) {
            this.correct++;
            this.streak++;
        } else {
            this.streak = 0;
        }

        this.flipCard();
        setTimeout(() => this.nextCard(isCorrect), 2000);
    },

    similarEnough(a, b) {
        // Very basic similarity check
        const aWords = a.split(/\s+/);
        const bWords = b.split(/\s+/);
        const matches = aWords.filter(w => bWords.some(bw => bw.includes(w) || w.includes(bw)));
        return matches.length >= Math.min(2, aWords.length);
    },

    handleSwipe() {
        const diff = this.touchEndX - this.touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                this.nextCard(true); // Swipe right = next
            } else {
                this.nextCard(false); // Swipe left = skip
            }
        }
    },

    nextCard(wasCorrect) {
        this.currentIndex++;
        this.isFlipped = false;
        this.renderCard();
    },

    showResults() {
        const container = document.getElementById('revision-view');
        const info = this.subjectInfo[this.currentSubject];
        const accuracy = this.answered > 0 ? Math.round((this.correct / this.answered) * 100) : 0;

        container.innerHTML = `
            <div class="revision-results" style="--subject-color: ${info.color}">
                <div class="results-emoji">${accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '💪'}</div>
                <h2>Session terminée!</h2>
                <div class="results-stats">
                    <div class="stat">
                        <span class="stat-value">${this.currentDeck.length}</span>
                        <span class="stat-label">Cartes vues</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${accuracy}%</span>
                        <span class="stat-label">Précision</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${this.streak}</span>
                        <span class="stat-label">Meilleur streak</span>
                    </div>
                </div>
                <div class="results-actions">
                    <button class="action-btn" id="restart-btn">🔄 Recommencer</button>
                    <button class="action-btn" id="change-subject-btn">📚 Autre matière</button>
                </div>
            </div>
        `;

        document.getElementById('restart-btn')?.addEventListener('click', () => this.startRevision());
        document.getElementById('change-subject-btn')?.addEventListener('click', () => this.renderSelector());
    },

    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!document.getElementById('revision-view')?.classList.contains('active')) return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('next-btn')?.click();
            } else if (e.key === 'ArrowLeft') {
                document.getElementById('skip-btn')?.click();
            } else if (e.key === 'Enter' || e.key === 'f') {
                document.getElementById('flip-btn')?.click();
            }
        });
    }
};

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    RevisionUI.init();
});
