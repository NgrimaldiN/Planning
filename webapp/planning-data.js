// Planning data - All blocks for 17 days
const PLANNING_DATA = {
    startDate: new Date(2024, 11, 20), // Dec 20, 2024
    endDate: new Date(2025, 0, 4),     // Jan 4, 2025
    totalHours: 120,
    
    subjects: {
        econ: { name: "Économétrie", emoji: "🔵", hours: 30, color: "#4a9eff" },
        proc: { name: "Processus Stochastiques", emoji: "🟣", hours: 28, color: "#a855f7" },
        macro: { name: "Macroéconomie", emoji: "🟢", hours: 24, color: "#22c55e" },
        micro: { name: "Microéconomie", emoji: "🟡", hours: 22, color: "#eab308" },
        stats: { name: "Statistiques", emoji: "🔴", hours: 16, color: "#ef4444" }
    },
    
    milestones: [
        { date: "2024-12-20", text: "Écon Chap 4+5 lus" },
        { date: "2024-12-23", text: "Quiz 4 Écon TERMINÉ" },
        { date: "2024-12-25", text: "3 exams Processus faits" },
        { date: "2024-12-26", text: "Stats intensif terminé" },
        { date: "2024-12-27", text: "4ème exam Processus + Quiz 5 Écon" },
        { date: "2024-12-28", text: "Macro Chap 3-6 TOUS terminés" },
        { date: "2024-12-30", text: "Macro TDs + Micro TD5 terminés" },
        { date: "2024-12-31", text: "Quiz 2 Écon + Micro exams terminés" },
        { date: "2025-01-02", text: "Macro 3 exams = PRÊT" },
        { date: "2025-01-04", text: "TOUT PRÊT ! 🚀" }
    ],
    
    days: [
        // DAY 1 - Samedi 20 Décembre (8h - stop 18h)
        {
            date: "2024-12-20",
            name: "Samedi 20 Décembre",
            totalHours: 8,
            blocks: [
                {
                    id: "d1b1",
                    time: "08:00 - 10:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Espérances conditionnelles - révision intensive flashcards existantes",
                        "Exercices espérance conditionnelle (TP1 entier)",
                        "Consolider les points encore flous"
                    ]
                },
                {
                    id: "d1b2",
                    time: "10:10 - 12:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Lire Chap 4 - Causality (41 pages)",
                        "Prendre notes des concepts clés",
                        "Ajouter aux flashcards si nécessaire"
                    ]
                },
                {
                    id: "d1b3",
                    time: "13:00 - 15:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "TP2 complet - Chaînes de Markov (5 pages, ~4-5 exos)",
                        "Avec corrigés TD-Processus-Corrigés"
                    ]
                },
                {
                    id: "d1b4",
                    time: "15:10 - 17:10",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Lire Chap 5 - Instrumental Variables (47 pages)",
                        "Prendre notes + compléter flashcards"
                    ]
                }
            ]
        },
        
        // DAY 2 - Dimanche 21 Décembre (3h matin)
        {
            date: "2024-12-21",
            name: "Dimanche 21 Décembre",
            totalHours: 3,
            blocks: [
                {
                    id: "d2b1",
                    time: "08:00 - 10:00",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "TD5 - EMV complet avec corrigés (~1h30-2h)",
                        "Créer flashcards questions de cours EMV"
                    ]
                },
                {
                    id: "d2b2",
                    time: "10:10 - 11:00",
                    subject: "macro",
                    duration: 1,
                    tasks: [
                        "Début Chap 3 - Modèle DICE (44 pages) + création Anki",
                        "Objectif : ~20 premières pages avec flashcards"
                    ]
                }
            ]
        },
        
        // DAY 3 - Lundi 22 Décembre (11h)
        {
            date: "2024-12-22",
            name: "Lundi 22 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d3b1",
                    time: "08:00 - 10:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "TP3 complet - Martingales et temps d'arrêt (2 pages, 4-5 exos)",
                        "Avec corrigés"
                    ]
                },
                {
                    id: "d3b2",
                    time: "10:10 - 12:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Suite Chap 3 DICE (p.20-44) + création Anki",
                        "Finaliser les flashcards Chap 3"
                    ]
                },
                {
                    id: "d3b3",
                    time: "13:00 - 15:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "TP4 complet - Martingales suite (3 pages)",
                        "Révision flashcards Markov + Martingales"
                    ]
                },
                {
                    id: "d3b4",
                    time: "15:10 - 17:10",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Chap 4 - Romer 1986 (53 pages, p.1-25) + création Anki",
                        "Focus sur concepts clés et graphiques"
                    ]
                },
                {
                    id: "d3b5",
                    time: "17:20 - 19:20",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "TP5 - Processus temps continu (2 pages)",
                        "Début exercices Baldi sélection (p.1-10)"
                    ]
                }
            ]
        },
        
        // DAY 4 - Mardi 23 Décembre (11h)
        {
            date: "2024-12-23",
            name: "Mardi 23 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d4b1",
                    time: "08:00 - 10:00",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "TD6 complet avec corrigés (~1h30-2h)",
                        "Flashcards complémentaires si besoin"
                    ]
                },
                {
                    id: "d4b2",
                    time: "10:10 - 12:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Quiz 4 - Causality SANS correction (7 pages) - 40min",
                        "Début correction Quiz 4 Sol (44 pages) - p.1-20"
                    ]
                },
                {
                    id: "d4b3",
                    time: "13:00 - 15:00",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "TD7 complet avec corrigés (~1h30-2h)",
                        "Révision flashcards Stats"
                    ]
                },
                {
                    id: "d4b4",
                    time: "15:10 - 17:10",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Suite correction Quiz 4 Sol (p.20-44)",
                        "Notes sur les erreurs types et raisonnements"
                    ]
                },
                {
                    id: "d4b5",
                    time: "17:20 - 19:20",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "TD8 + TD9 avec corrigés (méthode bayésienne)",
                        "Consolidation EMV + Bayésien"
                    ]
                }
            ]
        },
        
        // DAY 5 - Mercredi 24 Décembre (9h - stop 19h)
        {
            date: "2024-12-24",
            name: "Mercredi 24 Décembre 🎄",
            totalHours: 9,
            blocks: [
                {
                    id: "d5b1",
                    time: "08:00 - 10:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Exercices Baldi (p.10-20)",
                        "Focus sur exercices type examen"
                    ]
                },
                {
                    id: "d5b2",
                    time: "10:10 - 12:00",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Lire Chap 4 - Biens publics (28 pages) + Anki",
                        "Points clés pour l'exo théorique 5pts"
                    ]
                },
                {
                    id: "d5b3",
                    time: "13:00 - 15:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Exercices Baldi (p.20-30)",
                        "Commencer à repérer les exos récurrents"
                    ]
                },
                {
                    id: "d5b4",
                    time: "15:10 - 17:10",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Lire Chap 5 - Externalités (39 pages) + Anki",
                        "Points clés pour l'exo théorique"
                    ]
                },
                {
                    id: "d5b5",
                    time: "17:20 - 18:50",
                    subject: "proc",
                    duration: 1.5,
                    tasks: [
                        "Finir Baldi (p.30-37)",
                        "Révision flashcards Processus"
                    ]
                }
            ]
        },
        
        // DAY 6 - Jeudi 25 Décembre (11h)
        {
            date: "2024-12-25",
            name: "Jeudi 25 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d6b1",
                    time: "08:00 - 10:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Partiel 2020 (en conditions) - 2h complètes"
                    ]
                },
                {
                    id: "d6b2",
                    time: "10:10 - 12:00",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Correction Partiel 2020 Processus",
                        "Analyse des erreurs et patterns"
                    ]
                },
                {
                    id: "d6b3",
                    time: "13:00 - 15:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Partiel 2021 (en conditions) - 2h complètes"
                    ]
                },
                {
                    id: "d6b4",
                    time: "15:10 - 17:10",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Lire Chap 6 - Concurrence (45 pages) + Anki",
                        "Points clés économie industrielle"
                    ]
                },
                {
                    id: "d6b5",
                    time: "17:20 - 19:20",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Correction Partiel 2021 Processus",
                        "Synthèse patterns d'examen"
                    ]
                }
            ]
        },
        
        // DAY 7 - Vendredi 26 Décembre (11h)
        {
            date: "2024-12-26",
            name: "Vendredi 26 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d7b1",
                    time: "08:00 - 10:00",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "TD1-TD2-TD3 (convergences, méthodes empiriques)",
                        "Révision rapide car chap MIP connus"
                    ]
                },
                {
                    id: "d7b2",
                    time: "10:10 - 12:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Suite Chap 4 Romer 1986 (p.25-53) + Anki",
                        "Finaliser flashcards Chap 4"
                    ]
                },
                {
                    id: "d7b3",
                    time: "13:00 - 15:00",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "TD4 avec corrigé complet",
                        "Révision approfondie méthode des moments"
                    ]
                },
                {
                    id: "d7b4",
                    time: "15:10 - 17:10",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Chap 5 - Romer 1990 (75 pages, p.1-35) + Anki",
                        "⚠️ Chapitre long - focus concepts essentiels"
                    ]
                },
                {
                    id: "d7b5",
                    time: "17:20 - 19:20",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "MIP 2024 correction - analyse détaillée",
                        "Révision finale questions de cours (28-fin)",
                        "Test flashcards 100%"
                    ]
                }
            ]
        },
        
        // DAY 8 - Samedi 27 Décembre (11h)
        {
            date: "2024-12-27",
            name: "Samedi 27 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d8b1",
                    time: "08:00 - 10:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Exam 2022-2023 (en conditions) - 2h complètes"
                    ]
                },
                {
                    id: "d8b2",
                    time: "10:10 - 12:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Quiz 5 IV SANS correction (6 pages) - 30min",
                        "Début Solutions Chap 5 (17 pages) - 60min"
                    ]
                },
                {
                    id: "d8b3",
                    time: "13:00 - 15:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Correction Exam 2022-2023",
                        "Révision Baldi - exos clés identifiés"
                    ]
                },
                {
                    id: "d8b4",
                    time: "15:10 - 17:10",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Fin Solutions Chap 5",
                        "Recap TD9 - Variables instrumentales (3 pages)"
                    ]
                },
                {
                    id: "d8b5",
                    time: "17:20 - 19:20",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Exam 2023-2024 (en conditions) - 2h complètes"
                    ]
                }
            ]
        },
        
        // DAY 9 - Dimanche 28 Décembre (11h)
        {
            date: "2024-12-28",
            name: "Dimanche 28 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d9b1",
                    time: "08:00 - 10:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Suite Chap 5 Romer 1990 (p.35-75) + Anki",
                        "Finaliser ce chapitre long !"
                    ]
                },
                {
                    id: "d9b2",
                    time: "10:10 - 12:00",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "TD1 complet + correction (26 pages total)",
                        "Focus sur auto-sélection Baron-Myerson"
                    ]
                },
                {
                    id: "d9b3",
                    time: "13:00 - 15:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Chap 6 - Politique budgétaire (56 pages, p.1-30) + Anki",
                        "Concepts clés dette publique"
                    ]
                },
                {
                    id: "d9b4",
                    time: "15:10 - 17:10",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "TD2 complet + correction (18 pages)",
                        "Aléa moral et aversion au risque"
                    ]
                },
                {
                    id: "d9b5",
                    time: "17:20 - 19:20",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Suite Chap 6 (p.30-56) + Conclusion (15 pages)",
                        "Flashcards récap graphiques conclusion"
                    ]
                }
            ]
        },
        
        // DAY 10 - Lundi 29 Décembre (11h)
        {
            date: "2024-12-29",
            name: "Lundi 29 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d10b1",
                    time: "08:00 - 10:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Relire Chap 1 (39 pages) - ciblé points faibles MIP",
                        "Quiz 1 SANS correction (8 pages)"
                    ]
                },
                {
                    id: "d10b2",
                    time: "10:10 - 12:00",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "TD3 complet + correction (24 pages)",
                        "Théorie du signal, garanties"
                    ]
                },
                {
                    id: "d10b3",
                    time: "13:00 - 15:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Quiz 1 Sol (29 pages) - lecture active complète",
                        "Notes sur erreurs et raisonnements clés"
                    ]
                },
                {
                    id: "d10b4",
                    time: "15:10 - 17:10",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "TD4 complet + correction (20 pages)",
                        "Biens publics et externalités"
                    ]
                },
                {
                    id: "d10b5",
                    time: "17:20 - 19:20",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Relire Chap 2 (61 pages) - ciblé",
                        "Début Quiz 2 + Sol (si temps)"
                    ]
                }
            ]
        },
        
        // DAY 11 - Mardi 30 Décembre (11h)
        {
            date: "2024-12-30",
            name: "Mardi 30 Décembre",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d11b1",
                    time: "08:00 - 10:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "TD1 + correction (14 pages) - Solow-Swan",
                        "Révision rapide car chap MIP connu"
                    ]
                },
                {
                    id: "d11b2",
                    time: "10:10 - 12:00",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "TD5 complet + correction (29 pages)",
                        "Économie industrielle et expérimentale"
                    ]
                },
                {
                    id: "d11b3",
                    time: "13:00 - 15:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "TD2 + correction (17 pages) - Cass-Koopmans",
                        "Révision rapide car chap MIP connu"
                    ]
                },
                {
                    id: "d11b4",
                    time: "15:10 - 17:10",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Partiel 2021-2022 en conditions - 2h complètes"
                    ]
                },
                {
                    id: "d11b5",
                    time: "17:20 - 19:20",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "TD3 + TD4 avec corrections",
                        "Focus sur les exos types récurrents"
                    ]
                }
            ]
        },
        
        // DAY 12 - Mercredi 31 Décembre (9h - stop 19h)
        {
            date: "2024-12-31",
            name: "Mercredi 31 Décembre 🎆",
            totalHours: 9,
            blocks: [
                {
                    id: "d12b1",
                    time: "08:00 - 10:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Quiz 2 SANS correction (5 pages) - 30min",
                        "Quiz 2 Sol (39 pages) - p.1-20"
                    ]
                },
                {
                    id: "d12b2",
                    time: "10:10 - 12:00",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Correction Partiel 2021-2022 (9 pages)",
                        "Analyse des erreurs"
                    ]
                },
                {
                    id: "d12b3",
                    time: "13:00 - 15:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Suite Quiz 2 Sol (p.20-39)",
                        "Notes synthèse erreurs Chap 2"
                    ]
                },
                {
                    id: "d12b4",
                    time: "15:10 - 17:10",
                    subject: "micro",
                    duration: 2,
                    tasks: [
                        "Partiel 2022-2023 en conditions - 2h complètes"
                    ]
                },
                {
                    id: "d12b5",
                    time: "17:20 - 18:50",
                    subject: "econ",
                    duration: 1.5,
                    tasks: [
                        "Début Quiz 3 + Sol"
                    ]
                }
            ]
        },
        
        // DAY 13 - Jeudi 1er Janvier (2h)
        {
            date: "2025-01-01",
            name: "Jeudi 1er Janvier 🎉",
            totalHours: 2,
            blocks: [
                {
                    id: "d13b1",
                    time: "10:00 - 12:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Suite Quiz 3 Sol - lecture",
                        "Révision flashcards Écon"
                    ]
                }
            ]
        },
        
        // DAY 14 - Vendredi 2 Janvier (11h)
        {
            date: "2025-01-02",
            name: "Vendredi 2 Janvier",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d14b1",
                    time: "08:00 - 10:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Exam 1 en conditions - 2h complètes"
                    ]
                },
                {
                    id: "d14b2",
                    time: "10:10 - 12:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Fin Quiz 3 Sol",
                        "Recap TD5-TD6 (Prédictions, Neyman-Rubin)"
                    ]
                },
                {
                    id: "d14b3",
                    time: "13:00 - 15:00",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Correction Exam 1 + Exam 2 début"
                    ]
                },
                {
                    id: "d14b4",
                    time: "15:10 - 17:10",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Recap TD7-TD8 (Confounders, variables binaires)",
                        "Maîtriser les questions d'interprétation"
                    ]
                },
                {
                    id: "d14b5",
                    time: "17:20 - 19:20",
                    subject: "macro",
                    duration: 2,
                    tasks: [
                        "Exam 2 + Exam 3 (condensé si possible)",
                        "Révision flashcards complète"
                    ]
                }
            ]
        },
        
        // DAY 15 - Samedi 3 Janvier (11h)
        {
            date: "2025-01-03",
            name: "Samedi 3 Janvier",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d15b1",
                    time: "08:00 - 10:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Final Exam 1 en conditions - 2h complètes"
                    ]
                },
                {
                    id: "d15b2",
                    time: "10:10 - 12:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Révision finale Markov - points clés",
                        "Test flashcards"
                    ]
                },
                {
                    id: "d15b3",
                    time: "13:00 - 15:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Correction Final Exam 1",
                        "Analyse erreurs et types d'exos"
                    ]
                },
                {
                    id: "d15b4",
                    time: "15:10 - 17:10",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Révision finale Martingales - points clés",
                        "Re-faire 2 exos Baldi clés"
                    ]
                },
                {
                    id: "d15b5",
                    time: "17:20 - 19:20",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Final Exam 2 en conditions - 2h complètes"
                    ]
                }
            ]
        },
        
        // DAY 16 - Dimanche 4 Janvier (11h) - DERNIER JOUR
        {
            date: "2025-01-04",
            name: "Dimanche 4 Janvier - DERNIER JOUR",
            totalHours: 11,
            hasCatchup: true,
            blocks: [
                {
                    id: "d16b1",
                    time: "08:00 - 10:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Correction Final Exam 2",
                        "Final Exam 2024 corrigé - lecture active"
                    ]
                },
                {
                    id: "d16b2",
                    time: "10:10 - 12:00",
                    subject: "proc",
                    duration: 2,
                    tasks: [
                        "Simulation examen final",
                        "Dernière révision points faibles"
                    ]
                },
                {
                    id: "d16b3",
                    time: "13:00 - 15:00",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Analyse patterns des 3 finals",
                        "Summary Econo.pdf - révision"
                    ]
                },
                {
                    id: "d16b4",
                    time: "15:10 - 17:10",
                    subject: "stats",
                    duration: 2,
                    tasks: [
                        "Révision finale express",
                        "Test flashcards questions de cours 100%",
                        "PRÊT pour le 15 janvier !"
                    ]
                },
                {
                    id: "d16b5",
                    time: "17:20 - 19:20",
                    subject: "econ",
                    duration: 2,
                    tasks: [
                        "Révision ultime - points faibles identifiés",
                        "Test flashcards 100%",
                        "PRÊT pour le 13 janvier !"
                    ]
                }
            ]
        }
    ]
};

// Make it available globally
window.PLANNING_DATA = PLANNING_DATA;
