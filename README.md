# Omar Mehenni — Portfolio

Portfolio personnel développé avec Next.js 14, Tailwind CSS, TypeScript et Framer Motion.

## Stack technique

- **Next.js 14** (App Router)
- **Tailwind CSS v3**
- **TypeScript**
- **Framer Motion** (animations)
- **Lucide React** (icônes)
- **EmailJS** (formulaire de contact — à configurer)

---

## Installation

### Prérequis

1. Installe **Node.js** (version 18+) depuis : https://nodejs.org/en/download
2. Redémarre ton terminal après l'installation

### Lancer le projet

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvre http://localhost:3000 dans ton navigateur.

---

## Configuration EmailJS

1. Crée un compte sur https://www.emailjs.com
2. Crée un **Service** (Gmail, Outlook, etc.)
3. Crée un **Template** avec les variables : `from_name`, `from_email`, `subject`, `message`
4. Ouvre le fichier `src/components/Contact.tsx`
5. Remplace les valeurs et **décommente** les blocs EmailJS :

```typescript
const EMAILJS_SERVICE_ID = "ton_service_id";
const EMAILJS_TEMPLATE_ID = "ton_template_id";
const EMAILJS_PUBLIC_KEY = "ta_public_key";
```

6. Décommente le bloc `try { await emailjs.send(...) }` et supprime la simulation en bas.

---

## Ajouter ton CV

Place ton fichier PDF ici :
```
public/cv/Omar_Mehenni_CV.pdf
```

---

## Ajouter des screenshots de projets

Place les images dans :
```
public/images/projects/
```

Puis modifie le composant `Projects.tsx` pour les afficher avec `next/image`.

---

## Déploiement sur Vercel

1. Crée un compte sur https://vercel.com
2. Connecte ton repo GitHub
3. Importe le projet — Vercel détecte automatiquement Next.js
4. C'est tout ! Chaque push sur `main` déploie automatiquement.

---

## Changer la langue par défaut

Dans `src/app/page.tsx`, modifie :
```typescript
const [locale, setLocale] = useState<Locale>("en"); // "en" | "fr" | "es" | "ca"
```

---

## Modifier le contenu

Tout le texte est dans les fichiers de traduction :
- `src/locales/en.json` — Anglais
- `src/locales/fr.json` — Français
- `src/locales/es.json` — Espagnol
- `src/locales/ca.json` — Catalan
