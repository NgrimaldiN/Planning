// ============================================
// PROCESSUS STOCHASTIQUES (60+ cards)
// ============================================
proc: [
    // === CHAÎNES DE MARKOV (Level 1) ===
    {
        id: 'p001', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "Propriété de Markov",
        answer: "Le futur ne dépend que du PRÉSENT, pas du passé.\n\nP(X_{n+1}|X_n,...,X_0) = P(X_{n+1}|X_n)"
    },

    {
        id: 'p002', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "Matrice de transition P",
        answer: "P_{ij} = P(X_{n+1}=j | X_n=i)\n\nSomme des lignes = 1 (matrice stochastique)."
    },

    {
        id: 'p003', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "Distribution stationnaire π",
        answer: "π = πP\n\nUne fois atteinte, la distribution ne change plus.\n\n(π est vecteur propre à gauche pour valeur propre 1)"
    },

    {
        id: 'p004', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "État absorbant",
        answer: "État i tel que P_{ii} = 1.\n\nUne fois atteint, on n'en sort jamais."
    },

    {
        id: 'p005', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "Chaîne irréductible",
        answer: "Tous les états communiquent.\n\n∀i,j ∃n: P^n_{ij} > 0\n\n(On peut aller partout depuis n'importe où)"
    },

    {
        id: 'p006', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "Chaîne apériodique",
        answer: "Période d(i) = pgcd{n: P^n_{ii} > 0} = 1.\n\nPas de cycle régulier."
    },

    {
        id: 'p007', type: 'info', difficulty: 1, chapter: 'Chaînes Markov',
        question: "Théorème ergodique",
        answer: "Si irréductible + apériodique + récurrente positive:\n\nP^n → Π (chaque ligne = π)\n\nConvergence vers l'unique distrib. stationnaire."
    },

    {
        id: 'p008', type: 'quiz', difficulty: 2, chapter: 'Chaînes Markov',
        question: "Une chaîne à 2 états avec P = [[0,1],[1,0]] est...",
        options: ["A. Apériodique", "B. Périodique de période 2", "C. Absorbante", "D. Transitoire"],
        correct: "B",
        explanation: "On alterne entre les états: 0→1→0→1... Période = 2."
    },

    {
        id: 'p009', type: 'quiz', difficulty: 2, chapter: 'Chaînes Markov',
        question: "Pour trouver π, on résout...",
        options: ["A. πP = π et Σπ_i = 1", "B. Pπ = π", "C. det(P-I) = 0", "D. P^n pour n→∞"],
        correct: "A",
        explanation: "π est vecteur propre à gauche de P pour λ=1, normalisé pour sommer à 1."
    },

    // === MARTINGALES (Level 1) ===
    {
        id: 'p020', type: 'info', difficulty: 1, chapter: 'Martingales',
        question: "Définition de martingale",
        answer: "E[X_{n+1} | F_n] = X_n\n\nL'espérance future = valeur actuelle.\n\n(Jeu équitable)"
    },

    {
        id: 'p021', type: 'info', difficulty: 1, chapter: 'Martingales',
        question: "Sous-martingale",
        answer: "E[X_{n+1} | F_n] ≥ X_n\n\nTendance à MONTER en moyenne.\n\n(Ex: |M_n| si M martingale)"
    },

    {
        id: 'p022', type: 'info', difficulty: 1, chapter: 'Martingales',
        question: "Sur-martingale",
        answer: "E[X_{n+1} | F_n] ≤ X_n\n\nTendance à BAISSER en moyenne.\n\n(Ex: fortune d'un joueur dans un casino défavorable)"
    },

    {
        id: 'p023', type: 'info', difficulty: 1, chapter: 'Martingales',
        question: "Théorème d'arrêt de Doob",
        answer: "Si τ temps d'arrêt borné et M martingale:\n\nE[M_τ] = E[M_0]\n\n(L'espérance est conservée jusqu'à l'arrêt)"
    },

    {
        id: 'p024', type: 'info', difficulty: 1, chapter: 'Martingales',
        question: "Temps d'arrêt τ",
        answer: "τ est un temps d'arrêt si {τ ≤ n} ∈ F_n.\n\nLa décision de s'arrêter ne dépend que du passé."
    },

    {
        id: 'p025', type: 'quiz', difficulty: 2, chapter: 'Martingales',
        question: "S_n = Σ X_i avec X_i iid, E[X]=0. S_n est...",
        options: ["A. Martingale", "B. Sous-martingale", "C. Sur-martingale", "D. Aucun"],
        correct: "A",
        explanation: "E[S_{n+1}|F_n] = S_n + E[X_{n+1}] = S_n + 0 = S_n."
    },

    {
        id: 'p026', type: 'quiz', difficulty: 2, chapter: 'Martingales',
        question: "S_n² - n est une martingale si...",
        options: ["A. E[X] = 0", "B. Var(X) = 1", "C. E[X]=0 et Var(X)=1", "D. Jamais"],
        correct: "C",
        explanation: "E[S_{n+1}² - (n+1) | F_n] = S_n² + 2S_n·0 + 1 - n - 1 = S_n² - n."
    },

    // === CALCUL STOCHASTIQUE (Level 1) ===
    {
        id: 'p030', type: 'info', difficulty: 1, chapter: 'Calcul Stochastique',
        question: "Mouvement brownien B_t",
        answer: "1) B_0 = 0\n2) Accroissements indépendants\n3) B_t - B_s ~ N(0, t-s)\n4) Trajectoires continues"
    },

    {
        id: 'p031', type: 'info', difficulty: 1, chapter: 'Calcul Stochastique',
        question: "Propriétés du brownien",
        answer: "E[B_t] = 0\nVar(B_t) = t\nCov(B_s, B_t) = min(s,t)"
    },

    {
        id: 'p032', type: 'info', difficulty: 1, chapter: 'Calcul Stochastique',
        question: "Formule d'Itô",
        answer: "df(B_t) = f'(B_t)dB_t + ½f''(B_t)dt\n\nLe terme ½f''dt vient de (dB)² = dt."
    },

    {
        id: 'p033', type: 'info', difficulty: 1, chapter: 'Calcul Stochastique',
        question: "Intégrale stochastique ∫ H dB",
        answer: "Limite des sommes de Riemann:\n\nΣ H_{t_i}(B_{t_{i+1}} - B_{t_i})\n\nAttention: H évalué à GAUCHE (non-anticipant)."
    },

    {
        id: 'p034', type: 'info', difficulty: 1, chapter: 'Calcul Stochastique',
        question: "∫₀ᵗ B_s dB_s = ?",
        answer: "= ½(B_t² - t)\n\n(Par Itô: d(B²) = 2B dB + dt, donc ∫B dB = ½B² - ½t)"
    },

    {
        id: 'p035', type: 'quiz', difficulty: 2, chapter: 'Calcul Stochastique',
        question: "(dB_t)² = ?",
        options: ["A. 0", "B. dt", "C. dB_t", "D. 2dt"],
        correct: "B",
        explanation: "Règle fondamentale du calcul d'Itô: (dB)² = dt."
    },

    {
        id: 'p036', type: 'quiz', difficulty: 2, chapter: 'Calcul Stochastique',
        question: "dt × dB_t = ?",
        options: ["A. 0", "B. dt", "C. dB_t", "D. dt²"],
        correct: "A",
        explanation: "Les termes en dt × dB et dt² sont négligeables."
    },

    // === LEVEL 3: CHALLENGES PROCESSUS ===
    {
        id: 'p040', type: 'input', difficulty: 3, chapter: 'Chaînes Markov',
        question: "Temps moyen de premier passage de i à j: formule?",
        answer: "m_ij = 1 + Σ_{k≠j} P_ik × m_kj",
        hint: "Un pas + espérance conditionnelle selon où on va."
    },

    {
        id: 'p041', type: 'input', difficulty: 3, chapter: 'Martingales',
        question: "Si M martingale, E[M_τ] = E[M_0] sous quelles conditions?",
        answer: "τ borné OU E[τ] < ∞ et |M_{n+1}-M_n| borné",
        hint: "Théorème d'arrêt optionnel de Doob."
    },

    {
        id: 'p042', type: 'input', difficulty: 3, chapter: 'Calcul Stochastique',
        question: "Appliquez Itô à f(t,B_t) = e^(σB_t - σ²t/2). Que vaut df?",
        answer: "df = σf dB_t (donc f est une martingale)",
        hint: "Calculez ∂f/∂t, ∂f/∂B, ∂²f/∂B² et appliquez Itô."
    },
],
