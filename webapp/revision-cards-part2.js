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
