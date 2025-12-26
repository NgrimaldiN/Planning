// ============================================
// ÉCONOMÉTRIE (70+ cards)
// ============================================
econ: [
    // === CHAPTER 1: OLS FUNDAMENTALS (Level 1) ===
    {
        id: 'e001', type: 'info', difficulty: 1, chapter: 'Ch1 OLS',
        question: "Qu'est-ce que l'estimateur OLS?",
        answer: "Ordinary Least Squares (Moindres Carrés Ordinaires).\n\nMinimise Σ(Y_i - X_i'β)²\n\nβ̂ = (X'X)⁻¹X'Y"
    },

    {
        id: 'e002', type: 'info', difficulty: 1, chapter: 'Ch1 OLS',
        question: "Interprétation de R²",
        answer: "Part de la variance de Y expliquée par X.\n\nR² = 1 - SSR/SST = Var(Ŷ)/Var(Y)\n\nR² ∈ [0,1], plus proche de 1 = meilleur ajustement."
    },

    {
        id: 'e003', type: 'info', difficulty: 1, chapter: 'Ch1 OLS',
        question: "Propriété FWL (Frisch-Waugh-Lovell)",
        answer: "Pour isoler l'effet de X₁:\n\n1) Régresser Y sur X₂ → résidus Ỹ\n2) Régresser X₁ sur X₂ → résidus X̃₁\n3) β₁ = Cov(Ỹ, X̃₁)/Var(X̃₁)"
    },

    {
        id: 'e004', type: 'info', difficulty: 1, chapter: 'Ch1 OLS',
        question: "Biais de variable omise",
        answer: "Si on omet Z corrélé avec X ET qui affecte Y:\n\nβ̂ biaisé.\n\nBiais = Cov(X,Z)/Var(X) × effet de Z sur Y."
    },

    {
        id: 'e005', type: 'quiz', difficulty: 2, chapter: 'Ch1 OLS',
        question: "R² très proche de 1 (0.99) indique...",
        options: ["A. Excellente causalité", "B. Régresseurs probablement corrélés avec ε", "C. Régresseurs probablement très corrélés entre eux", "D. Modèle parfait"],
        correct: "C",
        explanation: "Multicolinéarité quasi-parfaite: les X sont presque combinaisons linéaires les uns des autres."
    },

    {
        id: 'e006', type: 'quiz', difficulty: 2, chapter: 'Ch1 OLS',
        question: "OLS sans constante: R² peut être...",
        options: ["A. Toujours dans [0,1]", "B. Négatif", "C. Supérieur à 1", "D. Ne change pas"],
        correct: "B",
        explanation: "Sans constante, SSR peut être > SST, donc R² = 1 - SSR/SST < 0."
    },

    // === CHAPTER 2: INFERENCE (Level 1) ===
    {
        id: 'e010', type: 'info', difficulty: 1, chapter: 'Ch2 Inference',
        question: "Hypothèse d'homoscédasticité",
        answer: "Var(ε|X) = σ² constante.\n\nSi violée: hétéroscédasticité → erreurs standards biaisées."
    },

    {
        id: 'e011', type: 'info', difficulty: 1, chapter: 'Ch2 Inference',
        question: "Erreurs standards robustes (Eicker-White)",
        answer: "Valides MÊME en cas d'hétéroscédasticité.\n\nÊ = Var(β̂) = (X'X)⁻¹(Σε̂²x_ix_i')(X'X)⁻¹"
    },

    {
        id: 'e012', type: 'info', difficulty: 1, chapter: 'Ch2 Inference',
        question: "Test de Student",
        answer: "H₀: β_j = 0\n\nt = β̂_j / SE(β̂_j)\n\nSous H₀: t ~ t(n-k) ≈ N(0,1) pour n grand."
    },

    {
        id: 'e013', type: 'info', difficulty: 1, chapter: 'Ch2 Inference',
        question: "Intervalle de confiance à 95%",
        answer: "β̂ ± 1.96 × SE(β̂)\n\nContient la vraie valeur 95% du temps (interprétation fréquentiste)."
    },

    {
        id: 'e014', type: 'quiz', difficulty: 2, chapter: 'Ch2 Inference',
        question: "Quand utiliser les erreurs robustes?",
        options: ["A. Toujours", "B. Seulement si hétéroscédasticité", "C. Jamais", "D. Seulement si n petit"],
        correct: "A",
        explanation: "Les erreurs robustes sont toujours valides (même sous homoscédasticité), donc autant les utiliser par défaut."
    },

    {
        id: 'e015', type: 'quiz', difficulty: 2, chapter: 'Ch2 Inference',
        question: "p-value = 0.03 signifie...",
        options: ["A. β = 0 avec proba 0.03", "B. Proba d'observer ça si β=0 est 0.03", "C. β ≠ 0 avec proba 0.97", "D. L'effet est de 3%"],
        correct: "B",
        explanation: "p-value = P(observer une stat ≥ |t| | H₀ vraie)."
    },

    // === CHAPTER 3: PRÉDICTION (Level 1) ===
    {
        id: 'e020', type: 'info', difficulty: 1, chapter: 'Ch3 Prédiction',
        question: "Erreur de prédiction",
        answer: "Y - Ŷ = Bruit irréductible + Biais² + Variance\n\nTrade-off biais-variance."
    },

    {
        id: 'e021', type: 'info', difficulty: 1, chapter: 'Ch3 Prédiction',
        question: "Cross-validation (CV)",
        answer: "Diviser les données en K folds.\n\nEntraîner sur K-1, tester sur le Kème.\n\nRépéter et moyenner l'erreur."
    },

    {
        id: 'e022', type: 'info', difficulty: 1, chapter: 'Ch3 Prédiction',
        question: "Leave-One-Out CV (LOOCV)",
        answer: "K = n folds.\n\nChaque observation est test une fois.\n\nÉquivalent: Σ(y_i - ŷ_{-i})² / n"
    },

    {
        id: 'e023', type: 'info', difficulty: 1, chapter: 'Ch3 Prédiction',
        question: "LASSO (L1 regularization)",
        answer: "Minimise: Σ(Y_i - X_i'β)² + λΣ|β_j|\n\nPénalise la somme des valeurs absolues.\n\nMet certains β à EXACTEMENT 0 → sélection."
    },

    {
        id: 'e024', type: 'info', difficulty: 1, chapter: 'Ch3 Prédiction',
        question: "Ridge (L2 regularization)",
        answer: "Minimise: Σ(Y_i - X_i'β)² + λΣβ_j²\n\nPénalise la somme des carrés.\n\nShrink les β vers 0 mais ne les annule PAS."
    },

    {
        id: 'e025', type: 'quiz', difficulty: 2, chapter: 'Ch3 Prédiction',
        question: "Pour sélection de variables, utiliser...",
        options: ["A. Ridge", "B. LASSO", "C. OLS", "D. Aucun"],
        correct: "B",
        explanation: "LASSO met des coefficients exactement à 0, donc fait de la sélection automatique."
    },

    // === CHAPTER 4: CAUSALITÉ (Level 1) ===
    {
        id: 'e030', type: 'info', difficulty: 1, chapter: 'Ch4 Causalité',
        question: "Cadre des résultats potentiels (Rubin)",
        answer: "Y(1) = résultat avec traitement\nY(0) = résultat sans traitement\n\nEffet causal = Y(1) - Y(0) (non observable!)"
    },

    {
        id: 'e031', type: 'info', difficulty: 1, chapter: 'Ch4 Causalité',
        question: "ATE vs ATT",
        answer: "ATE = E[Y(1) - Y(0)] (Average Treatment Effect)\nATT = E[Y(1) - Y(0) | D=1] (sur les traités)\n\nSouvent ATT > ATE (sélection)."
    },

    {
        id: 'e032', type: 'info', difficulty: 1, chapter: 'Ch4 Causalité',
        question: "Biais de sélection",
        answer: "Les traités et non-traités sont DIFFÉRENTS.\n\nE[Y(0)|D=1] ≠ E[Y(0)|D=0]\n\n→ OLS biaisé pour l'effet causal."
    },

    {
        id: 'e033', type: 'info', difficulty: 1, chapter: 'Ch4 Causalité',
        question: "Sélection sur observables (CIA)",
        answer: "Conditional Independence Assumption:\n\nY(0), Y(1) ⊥ D | X\n\n→ Contrôler pour X suffit pour identifier l'effet."
    },

    {
        id: 'e034', type: 'quiz', difficulty: 2, chapter: 'Ch4 Causalité',
        question: "Régression salaire sur éducation: pourquoi biaisé?",
        options: ["A. Erreur de mesure", "B. Sélection (capacité, motivation)", "C. Hétéroscédasticité", "D. Multicolinéarité"],
        correct: "B",
        explanation: "Les plus éduqués sont aussi plus capables/motivés → Cov(educ, ε) ≠ 0."
    },

    {
        id: 'e035', type: 'quiz', difficulty: 2, chapter: 'Ch4 Causalité',
        question: "RCT (expérience randomisée) élimine...",
        options: ["A. L'erreur de mesure", "B. Le biais de sélection", "C. L'hétéroscédasticité", "D. Tous les problèmes"],
        correct: "B",
        explanation: "Randomisation → D ⊥ Y(0), Y(1) → pas de biais de sélection."
    },

    // === CHAPTER 5: VARIABLES INSTRUMENTALES (Level 1) ===
    {
        id: 'e040', type: 'info', difficulty: 1, chapter: 'Ch5 IV',
        question: "Qu'est-ce qu'un instrument?",
        answer: "Variable Z telle que:\n\n1) PERTINENCE: Cov(Z, X) ≠ 0\n2) EXOGÉNÉITÉ: Cov(Z, ε) = 0\n\nZ affecte Y UNIQUEMENT via X."
    },

    {
        id: 'e041', type: 'info', difficulty: 1, chapter: 'Ch5 IV',
        question: "Estimateur IV (exactement identifié)",
        answer: "β̂_IV = Cov(Z, Y) / Cov(Z, X)\n\n= (Z'Y) / (Z'X) en notation matricielle."
    },

    {
        id: 'e042', type: 'info', difficulty: 1, chapter: 'Ch5 IV',
        question: "2SLS (Two-Stage Least Squares)",
        answer: "1ère étape: X̂ = Z'π̂ (prédire X par Z)\n2ème étape: Y = X̂'β̂ (régression avec X prédit)\n\nβ̂_2SLS = (X̂'X̂)⁻¹X̂'Y"
    },

    {
        id: 'e043', type: 'info', difficulty: 1, chapter: 'Ch5 IV',
        question: "Instrument faible",
        answer: "Cov(Z, X) faible → β̂_IV très imprécis et biaisé.\n\nRègle: F-stat de 1ère étape > 10."
    },

    {
        id: 'e044', type: 'info', difficulty: 1, chapter: 'Ch5 IV',
        question: "Test de Hausman",
        answer: "Comparer OLS et IV:\n\nH₀: OLS consistant (pas d'endogénéité)\n\nSi OLS ≠ IV significativement → endogénéité."
    },

    {
        id: 'e045', type: 'quiz', difficulty: 2, chapter: 'Ch5 IV',
        question: "Exemple classique d'IV pour éducation?",
        options: ["A. Revenu des parents", "B. Proximité d'une université", "C. QI", "D. Motivation"],
        correct: "B",
        explanation: "La distance à l'université affecte l'éducation mais pas directement le salaire."
    },

    {
        id: 'e046', type: 'quiz', difficulty: 2, chapter: 'Ch5 IV',
        question: "Sur-identification: plus d'instruments que d'endogènes. Avantage?",
        options: ["A. Plus de précision", "B. Possibilité de tester l'exogénéité", "C. Les deux", "D. Aucun avantage"],
        correct: "C",
        explanation: "Plus d'info (A) et test de Sargan pour vérifier que tous les Z sont valides (B)."
    },

    // === LEVEL 3: CHALLENGES ÉCONOMÉTRIE ===
    {
        id: 'e050', type: 'input', difficulty: 3, chapter: 'Ch1 OLS',
        question: "Formule de l'estimateur OLS en notation matricielle?",
        answer: "(X'X)^(-1)X'Y",
        hint: "Dérivez la fonction objectif β'X'Xβ - 2β'X'Y par rapport à β."
    },

    {
        id: 'e051', type: 'input', difficulty: 3, chapter: 'Ch2 Inference',
        question: "Variance de β̂ sous homoscédasticité?",
        answer: "σ²(X'X)^(-1)",
        hint: "Var(β̂) = Var((X'X)^(-1)X'ε) = (X'X)^(-1)X' σ²I X(X'X)^(-1)"
    },

    {
        id: 'e052', type: 'input', difficulty: 3, chapter: 'Ch5 IV',
        question: "Formule de l'estimateur 2SLS?",
        answer: "(X'P_Z X)^(-1) X'P_Z Y",
        hint: "P_Z = Z(Z'Z)^(-1)Z' est la matrice de projection sur Z."
    },

    {
        id: 'e053', type: 'input', difficulty: 3, chapter: 'Ch4 Causalité',
        question: "LATE (Local Average Treatment Effect) = effet sur qui?",
        answer: "Les compliers (ceux qui changent de traitement quand Z change)",
        hint: "Pas les always-takers ni les never-takers."
    },
],
