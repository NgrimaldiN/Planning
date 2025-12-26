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
// ============================================
// MICROÉCONOMIE (80+ cards)
// ============================================
micro: [
    // === CHAPTER 1: AUTO-SÉLECTION (Level 1) ===
    {
        id: 'mi001', type: 'info', difficulty: 1, chapter: 'Ch1 Auto-sélection',
        question: "Qu'est-ce que l'auto-sélection?",
        answer: "Situation où un agent informé (TYPE CACHÉ) révèle son type par ses CHOIX.\n\nEx: Le monopole propose un menu de contrats."
    },

    {
        id: 'mi002', type: 'info', difficulty: 1, chapter: 'Ch1 Auto-sélection',
        question: "Modèle Baron-Myerson (1982)",
        answer: "Régulation d'un monopole avec coût PRIVÉ θ.\n\nLe régulateur propose un menu (q,t) pour extraire l'information."
    },

    {
        id: 'mi003', type: 'info', difficulty: 1, chapter: 'Ch1 Auto-sélection',
        question: "Contrainte d'incitation (CI)",
        answer: "Le type θ doit préférer son propre contrat:\n\nU(θ) ≥ U(θ̃) pour tout θ̃\n\n→ Révélation du type par le choix."
    },

    {
        id: 'mi004', type: 'info', difficulty: 1, chapter: 'Ch1 Auto-sélection',
        question: "Contrainte de participation (CP)",
        answer: "L'agent doit accepter le contrat:\n\nU(θ) ≥ Ū (utilité de réserve)"
    },

    {
        id: 'mi005', type: 'info', difficulty: 1, chapter: 'Ch1 Auto-sélection',
        question: "Résultat clé: Distorsion au bas",
        answer: "Le type INEFFICACE (θ élevé) produit MOINS que l'optimum social.\n\nLe type EFFICACE (θ bas) produit l'optimum mais garde une RENTE."
    },

    {
        id: 'mi006', type: 'quiz', difficulty: 2, chapter: 'Ch1 Auto-sélection',
        question: "Qui a une rente informationnelle?",
        options: ["A. Type inefficace", "B. Type efficace", "C. Les deux", "D. Aucun"],
        correct: "B",
        explanation: "Le type efficace (θ bas) peut imiter le type inefficace et garder la différence."
    },

    {
        id: 'mi007', type: 'quiz', difficulty: 2, chapter: 'Ch1 Auto-sélection',
        question: "Quelle contrainte est saturée pour le type efficace?",
        options: ["A. CI", "B. CP", "C. Les deux", "D. Aucune"],
        correct: "A",
        explanation: "Le type efficace est indifférent entre son contrat et celui du type inefficace."
    },

    // === CHAPTER 2: ALÉA MORAL (Level 1) ===
    {
        id: 'mi010', type: 'info', difficulty: 1, chapter: 'Ch2 Aléa moral',
        question: "Qu'est-ce que l'aléa moral?",
        answer: "Situation où l'ACTION de l'agent est non-observable.\n\n→ Le principal doit inciter à l'effort via le contrat."
    },

    {
        id: 'mi011', type: 'info', difficulty: 1, chapter: 'Ch2 Aléa moral',
        question: "Structure Principal-Agent",
        answer: "PRINCIPAL: propose le contrat (employeur)\nAGENT: choisit l'effort (employé)\n\nL'effort affecte le résultat mais n'est pas observable."
    },

    {
        id: 'mi012', type: 'info', difficulty: 1, chapter: 'Ch2 Aléa moral',
        question: "Condition d'incitation (aléa moral)",
        answer: "L'agent choisit l'effort qui maximise son utilité ESPÉRÉE:\n\nE[u(w) | e] - c(e)\n\n→ Le contrat doit rendre l'effort désirable."
    },

    {
        id: 'mi013', type: 'info', difficulty: 1, chapter: 'Ch2 Aléa moral',
        question: "Trade-off assurance vs incitation",
        answer: "Agent AVERSE au risque → veut salaire FIXE.\n\nMais salaire fixe → PAS d'incitation.\n\n→ Contrat OPTIMAL: compromis."
    },

    {
        id: 'mi014', type: 'quiz', difficulty: 2, chapter: 'Ch2 Aléa moral',
        question: "Agent risque-neutre: le contrat optimal?",
        options: ["A. Salaire fixe", "B. Prime variable", "C. Vente de l'entreprise", "D. Aucun contrat"],
        correct: "C",
        explanation: "L'agent achète l'entreprise et garde tout le profit qui dépend de son effort."
    },

    {
        id: 'mi015', type: 'quiz', difficulty: 2, chapter: 'Ch2 Aléa moral',
        question: "Responsabilité limitée: effet?",
        options: ["A. Plus d'effort", "B. Moins d'effort, plus de risque", "C. Pas d'effet", "D. Contrat impossible"],
        correct: "B",
        explanation: "L'agent ne supporte pas les pertes → prend plus de risque, moins d'effort."
    },

    // === CHAPTER 3: SIGNAL (Level 1) ===
    {
        id: 'mi020', type: 'info', difficulty: 1, chapter: 'Ch3 Signal',
        question: "Théorie du signal (Spence)",
        answer: "L'agent informé INVESTIT dans un signal coûteux pour révéler son type.\n\nEx: Éducation pour signaler la productivité."
    },

    {
        id: 'mi021', type: 'info', difficulty: 1, chapter: 'Ch3 Signal',
        question: "Condition pour que le signal fonctionne",
        answer: "Le coût du signal doit être PLUS FAIBLE pour le type de haute qualité.\n\nSingle-crossing: c'(e, θ_H) < c'(e, θ_L)"
    },

    {
        id: 'mi022', type: 'info', difficulty: 1, chapter: 'Ch3 Signal',
        question: "Équilibre séparateur vs mélangeant",
        answer: "SÉPARATEUR: Chaque type choisit un signal différent → révélation.\n\nMÉLANGEANT: Tous choisissent le même signal → pas de révélation."
    },

    {
        id: 'mi023', type: 'info', difficulty: 1, chapter: 'Ch3 Signal',
        question: "Marché des voitures d'occasion (Akerlof)",
        answer: "Asymétrie d'info → seules les mauvaises voitures (lemons) restent.\n\nSolution: GARANTIE comme signal de qualité."
    },

    {
        id: 'mi024', type: 'quiz', difficulty: 2, chapter: 'Ch3 Signal',
        question: "L'éducation comme signal: effet sur le bien-être?",
        options: ["A. Toujours positif", "B. Peut être gaspillage pur", "C. Toujours négatif", "D. Neutre"],
        correct: "B",
        explanation: "Si l'éducation ne produit rien, c'est un coût pur pour séparer les types."
    },

    // === CHAPTER 4: BIENS PUBLICS (Level 1) ===
    {
        id: 'mi030', type: 'info', difficulty: 1, chapter: 'Ch4 Biens publics',
        question: "Typologie des biens",
        answer: "PRIVÉ: Rival + Excludable\nPUBLIC PUR: Non-rival + Non-excludable\nCLUB: Non-rival + Excludable\nCOMMUN: Rival + Non-excludable"
    },

    {
        id: 'mi031', type: 'info', difficulty: 1, chapter: 'Ch4 Biens publics',
        question: "Condition de Samuelson",
        answer: "Σ TMS = TMT\n\nSomme des dispositions à payer = Coût marginal.\n\n(≠ bien privé: TMS = TMT pour chaque agent)"
    },

    {
        id: 'mi032', type: 'info', difficulty: 1, chapter: 'Ch4 Biens publics',
        question: "Problème du passager clandestin",
        answer: "Chacun veut bénéficier du bien public sans payer.\n\n→ Sous-provision privée.\n→ Justifie l'intervention publique."
    },

    {
        id: 'mi033', type: 'quiz', difficulty: 2, chapter: 'Ch4 Biens publics',
        question: "Un phare est un bien...",
        options: ["A. Privé", "B. Public pur", "C. Club", "D. Commun"],
        correct: "B",
        explanation: "Non-rival (tous les bateaux en profitent) et non-excludable (impossible d'empêcher l'usage)."
    },

    // === CHAPTER 5: EXTERNALITÉS (Level 1) ===
    {
        id: 'mi040', type: 'info', difficulty: 1, chapter: 'Ch5 Externalités',
        question: "Externalité: définition",
        answer: "Effet d'une action sur un tiers NON pris en compte par le marché.\n\nPositive: Vaccin, R&D\nNégative: Pollution"
    },

    {
        id: 'mi041', type: 'info', difficulty: 1, chapter: 'Ch5 Externalités',
        question: "Taxe pigouvienne",
        answer: "Taxe = Coût marginal social de l'externalité.\n\nInternalise l'externalité → rétablit l'optimalité."
    },

    {
        id: 'mi042', type: 'info', difficulty: 1, chapter: 'Ch5 Externalités',
        question: "Théorème de Coase",
        answer: "Avec droits de propriété bien définis et coûts de transaction nuls:\n\n→ Négociation privée → allocation optimale.\n\n(Indépendamment de l'attribution initiale des droits)"
    },

    {
        id: 'mi043', type: 'quiz', difficulty: 2, chapter: 'Ch5 Externalités',
        question: "Une externalité négative implique...",
        options: ["A. Sous-production", "B. Sur-production", "C. Production optimale", "D. Dépend du marché"],
        correct: "B",
        explanation: "Le coût privé < coût social → on produit TROP."
    },

    // === CHAPTER 6: CONCURRENCE (Level 1) ===
    {
        id: 'mi050', type: 'info', difficulty: 1, chapter: 'Ch6 Concurrence',
        question: "Cournot vs Bertrand",
        answer: "COURNOT: Firmes choisissent les QUANTITÉS.\nBERTRAND: Firmes choisissent les PRIX.\n\n→ Bertrand: prix = Cm (concurrence parfaite)."
    },

    {
        id: 'mi051', type: 'info', difficulty: 1, chapter: 'Ch6 Concurrence',
        question: "Paradoxe de Bertrand",
        answer: "Avec 2 firmes identiques, le prix = coût marginal.\n\n→ Concurrence parfaite avec seulement 2 firmes!"
    },

    {
        id: 'mi052', type: 'info', difficulty: 1, chapter: 'Ch6 Concurrence',
        question: "Leader de Stackelberg",
        answer: "Une firme (leader) choisit en PREMIER.\n\nAvantage du premier arrivé (first-mover advantage)."
    },

    {
        id: 'mi053', type: 'quiz', difficulty: 2, chapter: 'Ch6 Concurrence',
        question: "Duopole Cournot: le prix est...",
        options: ["A. = Cm", "B. Entre Cm et monopole", "C. = monopole", "D. > monopole"],
        correct: "B",
        explanation: "Plus de concurrence que monopole, moins que Bertrand. Prix intermédiaire."
    },

    // === CHAPTER 7: BIAIS COMPORTEMENTAUX (Level 1) ===
    {
        id: 'mi060', type: 'info', difficulty: 1, chapter: 'Ch7 Biais',
        question: "Escompte hyperbolique",
        answer: "Les agents sont plus impatients à COURT terme qu'à LONG terme.\n\nIncohérence temporelle: les préférences changent."
    },

    {
        id: 'mi061', type: 'info', difficulty: 1, chapter: 'Ch7 Biais',
        question: "Optimisme et gym",
        answer: "Les gens pensent qu'ils iront (Surévaluation).\nIls paient des abonnements mais n'y vont pas.\n\n→ Biais d'optimisme exploité par les firmes."
    },

    {
        id: 'mi062', type: 'quiz', difficulty: 2, chapter: 'Ch7 Biais',
        question: "Un consommateur naïf face à l'escompte hyperbolique...",
        options: ["A. Anticipe son biais", "B. Ne l'anticipe pas", "C. Le surmonte", "D. N'a pas de biais"],
        correct: "B",
        explanation: "Le naïf pense qu'il sera patient demain (mais il ne le sera pas)."
    },

    // === LEVEL 3: CHALLENGES MICRO ===
    {
        id: 'mi070', type: 'input', difficulty: 3, chapter: 'Ch1 Auto-sélection',
        question: "Dans Baron-Myerson, donnez la forme de la rente informationnelle du type efficace.",
        answer: "(θ_H - θ_L) × q(θ_H)",
        hint: "C'est la différence de coût × quantité du type inefficace."
    },

    {
        id: 'mi071', type: 'input', difficulty: 3, chapter: 'Ch2 Aléa moral',
        question: "Condition d'incitation locale (FOC de l'agent)?",
        answer: "E[u'(w) × dP/de] = c'(e)",
        hint: "Dérivez l'utilité espérée par rapport à e."
    },

    {
        id: 'mi072', type: 'input', difficulty: 3, chapter: 'Ch4 Biens publics',
        question: "Écrivez la condition de Samuelson avec 2 agents.",
        answer: "TMS_1 + TMS_2 = TMT",
        hint: "Somme des TMS = coût marginal de transformation."
    },
],
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
