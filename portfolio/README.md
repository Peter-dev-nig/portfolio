# Portfolio

Personal portfolio website built with plain HTML, CSS and JavaScript, hosted on Firebase Hosting (Google Cloud).

## Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── css/style.css
│   ├── js/main.js
│   └── images/        <- add your images here
├── firebase.json
├── .gitignore
└── README.md
```

## Run locally

Open `public/index.html` in your browser, or use the **Live Server** extension in VS Code
(right-click `index.html` -> *Open with Live Server*).

## Images to add (in `public/images/`)

- `me.jpg` - your portrait (square works best)
- `clientflow.png`, `project-2.png`, `project-3.png` - project screenshots (16:10 ratio)
- `favicon.png` - small square icon
- `preview.png` - 1200x630 image shown when the link is shared
- Optional: `resume.pdf` goes in `public/`

## GitHub setup

1. Install Git: https://git-scm.com
2. Tell Git who you are (once per computer):
   ```
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
3. Create an empty repo on https://github.com/new named `portfolio` (do not tick README/.gitignore).
4. In the project folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
5. After any change:
   ```
   git add .
   git commit -m "Describe what changed"
   git push
   ```

## Deploy to Firebase Hosting

```
npm install -g firebase-tools
firebase login
firebase init hosting     # choose your project, public directory: public, single-page app: No
firebase deploy
```

Your site goes live at `https://YOUR-PROJECT.web.app`.

### Auto-deploy on every push (optional)

```
firebase init hosting:github
```

Follow the prompts to link your GitHub repo. Every push to `main` will then deploy automatically.

### Custom domain

Firebase console -> Hosting -> *Add custom domain*, then add the DNS records it shows at your domain registrar.

## Checklist before sharing

- [ ] Replace placeholder text, links and email
- [ ] Add real screenshots and project links
- [ ] Set your Formspree ID in the contact form (`YOUR_FORM_ID` in `index.html`)
- [ ] Test on a phone
- [ ] Run Lighthouse in Chrome DevTools
