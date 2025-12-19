# 🚀 Guide de Déploiement - Révisions Webapp

## Étape 1: Créer le projet Supabase

1. Va sur [supabase.com](https://supabase.com) et connecte-toi
2. Clique **"New Project"**
3. Choisis un nom (ex: `revision-planning`)
4. Choisis un mot de passe pour la base de données
5. Sélectionne la région **eu-west-2 (Paris)** pour moins de latence

## Étape 2: Créer la table

1. Dans ton projet Supabase, va dans **SQL Editor**
2. Copie-colle le contenu de `supabase-setup.sql`
3. Clique **Run** pour créer la table

## Étape 3: Récupérer les clés

1. Va dans **Settings > API**
2. Copie :
   - **Project URL** (ex: `https://xxxxx.supabase.co`)
   - **anon public** key (la clé qui commence par `eyJ...`)

## Étape 4: Configurer la webapp

Ouvre `supabase-sync.js` et remplace :

```javascript
const SUPABASE_URL = 'https://ton-projet.supabase.co';
const SUPABASE_ANON_KEY = 'eyJ...ta-clé-anon...';
```

## Étape 5: Déployer sur nicolasgrimaldi.com

### Option A: Via FTP/SFTP
1. Connecte-toi à ton hébergeur via FileZilla ou similaire
2. Upload tout le dossier `webapp/` dans `public_html/revisions/` (ou similaire)
3. Accède via `https://nicolasgrimaldi.com/revisions/`

### Option B: Via Vercel (gratuit, recommandé)
1. Crée un compte sur [vercel.com](https://vercel.com)
2. `npm i -g vercel` puis `vercel` dans le dossier webapp
3. Lie ton domaine custom dans les settings

### Option C: Via GitHub Pages
1. Push le dossier webapp sur GitHub
2. Settings > Pages > Source: main branch
3. Configure ton domaine custom

---

## ✅ Test

1. Ouvre l'app sur ton PC et coche une case
2. Ouvre sur ton téléphone
3. La case devrait être cochée ! 🎉

## 📱 Ajouter à l'écran d'accueil (iOS/Android)

- **iOS**: Safari > Partager > "Sur l'écran d'accueil"
- **Android**: Chrome > Menu (⋮) > "Ajouter à l'écran d'accueil"

---

## Structure des fichiers

```
webapp/
├── index.html          # Page principale
├── styles.css          # Styles (dark mode)
├── app.js              # Logique principale
├── planning-data.js    # Données du planning
├── supabase-sync.js    # Synchronisation cloud
└── supabase-setup.sql  # Script SQL pour Supabase
```
