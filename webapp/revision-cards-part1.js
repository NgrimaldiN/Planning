// === REVISION CARDS DATABASE ===
// 3 Difficulty Levels:
// 1 = Chill (read & remember, definitions)
// 2 = Normal (quiz, interpretations)
// 3 = Challenge (exercises, derivations, paper needed)

const REVISION_CARDS = {
    // ============================================
    // MACROÉCONOMIE (100+ cards)
    // ============================================
    macro: [
        // === CHAPTER 1: SOLOW-SWAN (Level 1 - Chill) ===
        {
            id: 'm001', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Qu'est-ce que le modèle de Solow-Swan?",
            answer: "Modèle de croissance EXOGÈNE où le taux d'épargne s et le progrès technique g sont donnés. Ne permet pas d'analyser le bien-être (pas de fonction d'utilité)."
        },

        {
            id: 'm002', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Fonction de production Cobb-Douglas",
            answer: "Y = K^α (AL)^(1-α)\n\nα = part du capital dans le revenu (≈ 1/3)\nK = capital, A = technologie, L = travail"
        },

        {
            id: 'm003', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Les 2 limites de Solow-Swan",
            answer: "1) Taux d'épargne s EXOGÈNE\n2) Progrès technique g EXOGÈNE"
        },

        {
            id: 'm004', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Équation fondamentale de Solow",
            answer: "κ̇ = sf(κ) - (n+g+δ)κ\n\nVariation du capital = Épargne - Dilution&Dépréciation"
        },

        {
            id: 'm005', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Règle d'Or",
            answer: "Niveau de capital κ_or qui MAXIMISE la consommation à l'état régulier.\n\nCondition: f'(κ_or) = n + g + δ\nTaux optimal: s_or = α"
        },

        {
            id: 'm006', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Inefficience dynamique",
            answer: "Situation où κ* > κ_or: l'économie SUR-ÉPARGNE.\n\nBaisser s augmenterait la consommation à TOUTES les dates.\n\nPossible en Solow car s est exogène."
        },

        {
            id: 'm007', type: 'info', difficulty: 1, chapter: 'Ch1 Solow',
            question: "Convergence conditionnelle",
            answer: "Les pays convergent vers des états réguliers DIFFÉRENTS (selon s, n, δ...).\n\nUn pays plus pauvre que son état rég. croît plus vite."
        },

        // === CHAPTER 1: SOLOW-SWAN (Level 2 - Quiz) ===
        {
            id: 'm008', type: 'quiz', difficulty: 2, chapter: 'Ch1 Solow',
            question: "Comment κ* dépend-il de s?",
            options: ["A. Négativement", "B. Positivement", "C. Pas de lien", "D. Dépend de α"],
            correct: "B",
            explanation: "Plus s élevé → plus d'investissement → plus de capital à l'état régulier."
        },

        {
            id: 'm009', type: 'quiz', difficulty: 2, chapter: 'Ch1 Solow',
            question: "Que représente α dans Cobb-Douglas?",
            options: ["A. Élasticité du travail", "B. Part du capital dans le revenu", "C. Taux d'épargne", "D. Productivité"],
            correct: "B",
            explanation: "α ≈ 1/3 empiriquement. C'est la part de la rémunération du capital."
        },

        {
            id: 'm010', type: 'quiz', difficulty: 2, chapter: 'Ch1 Solow',
            question: "Effet d'une hausse permanente de s sur la croissance?",
            options: ["A. Hausse permanente de g", "B. Hausse temporaire puis retour à g", "C. Baisse de g", "D. Aucun effet"],
            correct: "B",
            explanation: "La croissance augmente pendant la transition, puis revient à g à l'état régulier."
        },

        // === CHAPTER 1: SOLOW-SWAN (Level 3 - Challenge) ===
        {
            id: 'm011', type: 'input', difficulty: 3, chapter: 'Ch1 Solow',
            question: "Donnez la formule de κ* à l'état régulier (Cobb-Douglas).",
            answer: "(s/(n+g+δ))^(1/(1-α))",
            hint: "Posez κ̇ = 0 et résolvez pour κ."
        },

        {
            id: 'm012', type: 'input', difficulty: 3, chapter: 'Ch1 Solow',
            question: "Formule de la vitesse de convergence β dans Solow?",
            answer: "(1-α)(n+g+δ)",
            hint: "Linéarisez autour de l'état régulier."
        },

        // === CHAPTER 2: CKR (Level 1 - Chill) ===
        {
            id: 'm020', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Différence CKR vs Solow",
            answer: "CKR: Taux d'épargne ENDOGÈNE (ménages optimisent).\n\nSolow: s EXOGÈNE.\n\n→ Pas d'inefficience dynamique possible en CKR."
        },

        {
            id: 'm021', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Équation d'Euler",
            answer: "ċ/c = (r - ρ)/θ\n\nr = taux d'intérêt\nρ = impatience\nθ = aversion au lissage"
        },

        {
            id: 'm022', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Interprétation de ρ",
            answer: "ρ = Taux de préférence pour le présent (IMPATIENCE).\n\nPlus ρ grand → plus le ménage veut consommer AUJOURD'HUI."
        },

        {
            id: 'm023', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Interprétation de θ",
            answer: "θ = Inverse de l'élasticité de substitution intertemporelle.\n\nPlus θ grand → plus le ménage veut LISSER sa consommation."
        },

        {
            id: 'm024', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Formule de Ramsey",
            answer: "r* = ρ + θg\n\nTaux d'intérêt à l'état régulier."
        },

        {
            id: 'm025', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Condition de transversalité",
            answer: "lim(t→∞) b_t·e^(-∫(r-n)ds) ≥ 0\n\nInterdit les schémas de PONZI: pas de dette infinie."
        },

        {
            id: 'm026', type: 'info', difficulty: 1, chapter: 'Ch2 CKR',
            question: "Pourquoi r = f'(κ) - δ?",
            answer: "ARBITRAGE: Indifférence entre prêter (rendement r) et louer du capital (rendement z-δ).\n\nÀ l'équilibre: z = f'(κ)."
        },

        // === CHAPTER 2: CKR (Level 2 - Quiz) ===
        {
            id: 'm027', type: 'quiz', difficulty: 2, chapter: 'Ch2 CKR',
            question: "Effet de r↑ sur ċ/c?",
            options: ["A. ċ/c diminue", "B. ċ/c augmente", "C. Pas d'effet", "D. Ambigu"],
            correct: "B",
            explanation: "r↑ → épargne plus rentable → report de consommation vers le futur → ċ/c↑"
        },

        {
            id: 'm028', type: 'quiz', difficulty: 2, chapter: 'Ch2 CKR',
            question: "Y a-t-il inefficience dynamique en CKR?",
            options: ["A. Oui toujours", "B. Oui parfois", "C. Non jamais", "D. Dépend de θ"],
            correct: "C",
            explanation: "Les ménages optimisent → ils ne sur-épargnent jamais. L'eq. d'Euler garantit κ* < κ_or."
        },

        {
            id: 'm029', type: 'quiz', difficulty: 2, chapter: 'Ch2 CKR',
            question: "Isocline γ̇ = 0 dans le diagramme des phases?",
            options: ["A. Courbe en cloche", "B. Droite verticale", "C. Droite horizontale", "D. Parabole"],
            correct: "B",
            explanation: "γ̇ = 0 ⟺ f'(κ) = δ+ρ+θg ⟺ κ = κ*. C'est une droite verticale."
        },

        {
            id: 'm030', type: 'quiz', difficulty: 2, chapter: 'Ch2 CKR',
            question: "Lors d'un choc non-anticipé, que saute?",
            options: ["A. κ saute", "B. γ saute", "C. Les deux sautent", "D. Rien ne saute"],
            correct: "B",
            explanation: "κ est un STOCK (continu). γ est un contrôle: il peut SAUTER instantanément."
        },

        {
            id: 'm031', type: 'quiz', difficulty: 2, chapter: 'Ch2 CKR',
            question: "CKR vs Solow face à un choc anticipé?",
            options: ["A. Même réaction", "B. CKR réagit avant, Solow après", "C. Solow réagit avant, CKR après", "D. Aucun ne réagit"],
            correct: "B",
            explanation: "CKR: agents forward-looking → réaction à l'ANNONCE. Solow: agents myopes → réaction au CHOC."
        },

        // === CHAPTER 2: CKR (Level 3 - Challenge) ===
        {
            id: 'm035', type: 'input', difficulty: 3, chapter: 'Ch2 CKR',
            question: "Écrivez le Hamiltonien du programme ménage.",
            answer: "H = e^(-(ρ-n)t)u(c) + λ[(r-n)b + w - c]",
            hint: "Objectif + λ × contrainte dynamique"
        },

        {
            id: 'm036', type: 'input', difficulty: 3, chapter: 'Ch2 CKR',
            question: "État régulier: f'(κ*) = ?",
            answer: "δ + ρ + θg",
            hint: "Posez γ̇ = 0 dans le système dynamique."
        },

        {
            id: 'm037', type: 'input', difficulty: 3, chapter: 'Ch2 CKR',
            question: "Condition pour utilité finie?",
            answer: "ρ - n > (1-θ)g",
            hint: "L'intégrale d'utilité doit converger."
        },

        // === CHAPTER 3: DICE (Level 1) ===
        {
            id: 'm040', type: 'info', difficulty: 1, chapter: 'Ch3 DICE',
            question: "DICE = ?",
            answer: "Dynamic Integrated Climate-Economy\n\n(Nordhaus)\n\nL'économie interagit avec le CLIMAT."
        },

        {
            id: 'm041', type: 'info', difficulty: 1, chapter: 'Ch3 DICE',
            question: "Externalité dans DICE",
            answer: "Externalité de pollution NÉGATIVE.\n\nLes entreprises ne prennent pas en compte le coût climatique de leurs émissions."
        },

        {
            id: 'm042', type: 'info', difficulty: 1, chapter: 'Ch3 DICE',
            question: "Taxe pigouvienne",
            answer: "Taxe = Coût marginal social du dommage à l'optimum.\n\nEx: Taxe carbone."
        },

        {
            id: 'm043', type: 'quiz', difficulty: 2, chapter: 'Ch3 DICE',
            question: "Relation entre r et taxe carbone optimale?",
            options: ["A. Positive", "B. Négative", "C. Nulle", "D. Non-linéaire"],
            correct: "B",
            explanation: "r↑ → dommages futurs comptent moins → taxe carbone plus faible."
        },

        {
            id: 'm044', type: 'quiz', difficulty: 2, chapter: 'Ch3 DICE',
            question: "Relation entre r et incertitude sur g?",
            options: ["A. Positive", "B. Négative", "C. Nulle", "D. Dépend de θ"],
            correct: "B",
            explanation: "Incertitude → motif de précaution → épargne↑ → r↓"
        },

        // === CHAPTER 4: ROMER 86 (Level 1) ===
        {
            id: 'm050', type: 'info', difficulty: 1, chapter: 'Ch4 Romer86',
            question: "Mécanisme Romer 86",
            answer: "Learning-by-doing + Spillovers.\n\nA = K/L\n\nLa connaissance est un SOUS-PRODUIT de l'investissement."
        },

        {
            id: 'm051', type: 'info', difficulty: 1, chapter: 'Ch4 Romer86',
            question: "Rendements privés vs sociaux (Romer 86)",
            answer: "Privés: DÉCROISSANTS (F concave en K_i)\nSociaux: CONSTANTS (Y = f(1)K au niveau agrégé)\n\n→ Sous-investissement"
        },

        {
            id: 'm052', type: 'info', difficulty: 1, chapter: 'Ch4 Romer86',
            question: "Connaissance dans Romer 86",
            answer: "INVOLONTAIRE (sous-produit)\nNON-RÉMUNÉRÉE (externalité positive)\n\n≠ Romer 90"
        },

        {
            id: 'm053', type: 'quiz', difficulty: 2, chapter: 'Ch4 Romer86',
            question: "Y a-t-il dynamique transitoire en Romer 86?",
            options: ["A. Oui, lente", "B. Oui, rapide", "C. Non", "D. Dépend de α"],
            correct: "C",
            explanation: "Croissance IMMÉDIATE au taux g* = (f(1)-δ-ρ)/θ. Pas de convergence."
        },

        {
            id: 'm054', type: 'input', difficulty: 3, chapter: 'Ch4 Romer86',
            question: "Taux de subvention optimal τ pour corriger l'externalité?",
            answer: "(f(1) - f'(1))/f(1)",
            hint: "Égaliser rendement privé f'(1)/(1-τ) au rendement social f(1)."
        },

        // === CHAPTER 5: ROMER 90 (Level 1) ===
        {
            id: 'm060', type: 'info', difficulty: 1, chapter: 'Ch5 Romer90',
            question: "Mécanisme Romer 90",
            answer: "Innovation HORIZONTALE: augmentation de la variété N.\n\nR&D volontaire récompensée par une rente de MONOPOLE (brevet)."
        },

        {
            id: 'm061', type: 'info', difficulty: 1, chapter: 'Ch5 Romer90',
            question: "Connaissance dans Romer 90",
            answer: "VOLONTAIRE (secteur R&D)\nRÉMUNÉRÉE (monopole/brevet)\n\n≠ Romer 86"
        },

        {
            id: 'm062', type: 'info', difficulty: 1, chapter: 'Ch5 Romer90',
            question: "Prix du monopoleur (Romer 90)",
            answer: "p = 1/α\n\nMarkup sur le coût marginal (Cm = 1)."
        },

        {
            id: 'm063', type: 'quiz', difficulty: 2, chapter: 'Ch5 Romer90',
            question: "Combien de distorsions en Romer 90?",
            options: ["A. 1", "B. 2", "C. 3", "D. 4"],
            correct: "C",
            explanation: "1) P > Cm (monopole). 2) Surplus non capturé. 3) Spillovers R&D."
        },

        {
            id: 'm064', type: 'quiz', difficulty: 2, chapter: 'Ch5 Romer90',
            question: "Destruction créatrice (Schumpeter) vs Romer 90?",
            options: ["A. Identique", "B. Romer: biens s'ajoutent", "C. Romer: biens se remplacent", "D. Aucun lien"],
            correct: "B",
            explanation: "Schumpeter: remplacement. Romer 90: les nouveaux biens s'AJOUTENT aux anciens."
        },

        // === CHAPTER 6: POLITIQUE BUDGÉTAIRE (Level 1) ===
        {
            id: 'm070', type: 'info', difficulty: 1, chapter: 'Ch6 Politique',
            question: "Équivalence ricardienne",
            answer: "Neutralité du mode de financement (Dette vs Impôt).\n\nLes ménages anticipent les impôts futurs et ajustent leur épargne."
        },

        {
            id: 'm071', type: 'info', difficulty: 1, chapter: 'Ch6 Politique',
            question: "Conditions pour équivalence ricardienne",
            answer: "1) Impôts FORFAITAIRES (lump-sum)\n2) Horizon INFINI\n3) Marchés PARFAITS"
        },

        {
            id: 'm072', type: 'info', difficulty: 1, chapter: 'Ch6 Politique',
            question: "Impôt distorsif vs forfaitaire",
            answer: "DISTORSIF: dépend des choix de l'agent (ex: taxe travail)\n\nFORFAITAIRE: indépendant des choix, ne distord pas."
        },

        {
            id: 'm073', type: 'quiz', difficulty: 2, chapter: 'Ch6 Politique',
            question: "Pourquoi l'équiv. ricardienne échoue en OLG?",
            options: ["A. Horizon fini", "B. Impôts distorsifs", "C. Marchés incomplets", "D. Pas de capital"],
            correct: "A",
            explanation: "Générations actuelles ne se soucient pas des futures: préfèrent dette aux impôts."
        },

        {
            id: 'm074', type: 'quiz', difficulty: 2, chapter: 'Ch6 Politique',
            question: "Effet d'une hausse permanente de G?",
            options: ["A. C↓, K↓", "B. C↓, K inchangé", "C. C inchangé, K↓", "D. C↑, K↓"],
            correct: "B",
            explanation: "Effet richesse négatif → C baisse immédiatement et définitivement. K inchangé car crowding out de C uniquement."
        },
    ],
