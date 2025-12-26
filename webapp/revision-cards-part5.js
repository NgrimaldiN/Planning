// ============================================
// STATISTIQUES (50+ cards)
// ============================================
stats: [
    // === ESTIMATION (Level 1) ===
    {
        id: 's001', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Estimateur sans biais",
        answer: "E[θ̂] = θ\n\nL'estimateur est correct EN MOYENNE."
    },

    {
        id: 's002', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Estimateur consistant",
        answer: "θ̂_n →^P θ quand n → ∞\n\nConverge vers la vraie valeur avec assez de données."
    },

    {
        id: 's003', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Maximum de vraisemblance (EMV)",
        answer: "θ̂_MLE = argmax L(θ)\n\noù L(θ) = Π f(x_i; θ)\n\nMaximise la probabilité d'avoir observé les données."
    },

    {
        id: 's004', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Log-vraisemblance",
        answer: "ℓ(θ) = log L(θ) = Σ log f(x_i; θ)\n\nPlus facile à optimiser (somme vs produit)."
    },

    {
        id: 's005', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Méthode des moments",
        answer: "Égaliser moments empiriques et théoriques:\n\n1/n Σ X_i^k = E[X^k]\n\nRésoudre pour θ."
    },

    {
        id: 's006', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Information de Fisher",
        answer: "I(θ) = -E[∂²ℓ/∂θ²] = Var(∂ℓ/∂θ)\n\nMesure la quantité d'information sur θ dans les données."
    },

    {
        id: 's007', type: 'info', difficulty: 1, chapter: 'Estimation',
        question: "Borne de Cramér-Rao",
        answer: "Var(θ̂) ≥ 1/(nI(θ))\n\nBorne inférieure sur la variance de tout estimateur sans biais."
    },

    {
        id: 's008', type: 'quiz', difficulty: 2, chapter: 'Estimation',
        question: "EMV est toujours...",
        options: ["A. Sans biais", "B. Consistant", "C. Efficace", "D. Robuste"],
        correct: "B",
        explanation: "EMV est consistant sous conditions de régularité. Pas toujours sans biais!"
    },

    {
        id: 's009', type: 'quiz', difficulty: 2, chapter: 'Estimation',
        question: "Pour X ~ N(μ, σ²), EMV de μ?",
        options: ["A. Médiane", "B. Mode", "C. Moyenne X̄", "D. Variance"],
        correct: "C",
        explanation: "La log-vraisemblance est maximisée en μ = X̄."
    },

    // === TESTS D'HYPOTHÈSES (Level 1) ===
    {
        id: 's010', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "Erreur de type I (α)",
        answer: "Rejeter H₀ alors qu'elle est VRAIE.\n\nα = P(rejeter H₀ | H₀ vraie)\n\n(Faux positif)"
    },

    {
        id: 's011', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "Erreur de type II (β)",
        answer: "Ne pas rejeter H₀ alors qu'elle est FAUSSE.\n\nβ = P(ne pas rejeter H₀ | H₁ vraie)\n\n(Faux négatif)"
    },

    {
        id: 's012', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "Puissance d'un test",
        answer: "Puissance = 1 - β = P(rejeter H₀ | H₁ vraie)\n\nProbabilité de détecter un effet quand il existe."
    },

    {
        id: 's013', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "p-value",
        answer: "Plus petite valeur de α pour laquelle on rejette H₀.\n\nOu: P(observer une stat. aussi extrême | H₀ vraie)."
    },

    {
        id: 's014', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "Test de Student (t-test)",
        answer: "H₀: μ = μ₀\n\nt = (X̄ - μ₀) / (s/√n)\n\nSous H₀: t ~ t(n-1)"
    },

    {
        id: 's015', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "Test de Wald",
        answer: "(θ̂ - θ₀)² / Var(θ̂) ~ χ²(1) sous H₀\n\nTest asymptotique pour EMV."
    },

    {
        id: 's016', type: 'info', difficulty: 1, chapter: 'Tests',
        question: "Test du rapport de vraisemblance (LRT)",
        answer: "Λ = L(θ₀) / L(θ̂)\n\n-2 log Λ ~ χ² sous H₀\n\n(Compare vraisemblance sous H₀ vs sans contrainte)"
    },

    {
        id: 's017', type: 'quiz', difficulty: 2, chapter: 'Tests',
        question: "Si p-value = 0.03 et α = 0.05, on...",
        options: ["A. Rejette H₀", "B. Ne rejette pas H₀", "C. Accepte H₁", "D. Calcule t"],
        correct: "A",
        explanation: "p-value < α donc on rejette H₀ au niveau 5%."
    },

    {
        id: 's018', type: 'quiz', difficulty: 2, chapter: 'Tests',
        question: "Augmenter n (taille échantillon) fait...",
        options: ["A. ↑ puissance, ↑ α", "B. ↑ puissance, α inchangé", "C. ↓ puissance, ↓ β", "D. α et β inchangés"],
        correct: "B",
        explanation: "n↑ → variance↓ → plus facile de détecter un effet → puissance↑. α est fixé par le chercheur."
    },

    // === INTERVALLES DE CONFIANCE (Level 1) ===
    {
        id: 's020', type: 'info', difficulty: 1, chapter: 'IC',
        question: "Intervalle de confiance à 95%",
        answer: "θ̂ ± 1.96 × SE(θ̂)\n\nContient θ avec probabilité 95% (avant observation)."
    },

    {
        id: 's021', type: 'info', difficulty: 1, chapter: 'IC',
        question: "Interprétation fréquentiste de l'IC",
        answer: "Si on répète l'expérience ∞ fois, 95% des IC contiendront θ.\n\n(L'IC est aléatoire, θ est fixe!)"
    },

    {
        id: 's022', type: 'info', difficulty: 1, chapter: 'IC',
        question: "IC pour moyenne avec σ connu",
        answer: "[X̄ - z_{α/2}σ/√n, X̄ + z_{α/2}σ/√n]\n\nz_{0.025} = 1.96 pour 95%."
    },

    {
        id: 's023', type: 'info', difficulty: 1, chapter: 'IC',
        question: "IC pour moyenne avec σ inconnu",
        answer: "[X̄ - t_{α/2, n-1} s/√n, X̄ + t_{α/2, n-1} s/√n]\n\nUtilise la distribution t de Student."
    },

    {
        id: 's024', type: 'quiz', difficulty: 2, chapter: 'IC',
        question: "Un IC à 99% est... qu'un IC à 95%",
        options: ["A. Plus étroit", "B. Plus large", "C. Même largeur", "D. Dépend de n"],
        correct: "B",
        explanation: "Plus de confiance → plus large. z_{0.005} ≈ 2.58 > z_{0.025} = 1.96."
    },

    // === LOI DES GRANDS NOMBRES & TCL (Level 1) ===
    {
        id: 's030', type: 'info', difficulty: 1, chapter: 'Asymptotique',
        question: "Loi des grands nombres (LGN)",
        answer: "X̄_n →^P E[X] quand n → ∞\n\nLa moyenne empirique converge vers l'espérance."
    },

    {
        id: 's031', type: 'info', difficulty: 1, chapter: 'Asymptotique',
        question: "Théorème central limite (TCL)",
        answer: "√n (X̄_n - μ) →^d N(0, σ²)\n\nLa moyenne normalisée est asymptotiquement normale."
    },

    {
        id: 's032', type: 'info', difficulty: 1, chapter: 'Asymptotique',
        question: "Delta method",
        answer: "Si √n(θ̂-θ) →^d N(0, σ²), alors:\n\n√n(g(θ̂)-g(θ)) →^d N(0, [g'(θ)]²σ²)"
    },

    {
        id: 's033', type: 'quiz', difficulty: 2, chapter: 'Asymptotique',
        question: "Le TCL nécessite...",
        options: ["A. Distribution normale", "B. Variance finie", "C. Symétrie", "D. Indépendance et n > 1000"],
        correct: "B",
        explanation: "Var(X) < ∞ suffit. Pas besoin de normalité des X."
    },

    // === LEVEL 3: CHALLENGES STATS ===
    {
        id: 's040', type: 'input', difficulty: 3, chapter: 'Estimation',
        question: "Pour X ~ Exp(λ), EMV de λ?",
        answer: "1/X̄",
        hint: "Dérivez log L = n log λ - λ Σ x_i par rapport à λ."
    },

    {
        id: 's041', type: 'input', difficulty: 3, chapter: 'Tests',
        question: "Formule LRT: -2 log (L₀/L₁) suit quelle loi sous H₀?",
        answer: "χ²(k) où k = nb de contraintes",
        hint: "Théorème de Wilks."
    },

    {
        id: 's042', type: 'input', difficulty: 3, chapter: 'Estimation',
        question: "Variance asymptotique de l'EMV?",
        answer: "1/(nI(θ))",
        hint: "L'EMV atteint la borne de Cramér-Rao asymptotiquement."
    },
]
};

// Export for use in other files
if (typeof module !== 'undefined') {
    module.exports = { REVISION_CARDS };
}
