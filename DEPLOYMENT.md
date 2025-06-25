# 🚀 Deployment Documentation for Numberverse

This document outlines the deployment process and considerations for deploying the **Numberverse** React application.

---

## 📦 Build the Project

Before deploying, you need to create a production build of the project.

```bash
npm run build
```

This will create an optimized production-ready version of the application inside the `build/` directory.

---

## 🛠️ Deployment Options

You can deploy the project using any static hosting service. Below are some common options:

---

### ✅ Option 1: **Vercel**

**Steps:**

1. Go to [https://vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Import the `numberverse` project
4. Vercel will auto-detect the React app and build it
5. Hit **Deploy**

---

### ✅ Option 2: **Netlify**

**Steps:**

1. Go to [https://netlify.com](https://netlify.com)
2. Drag and drop the `/build` folder
3. Or, connect a GitHub repo and select build command:
   - Build command: `npm run build`
   - Publish directory: `build`

---

### ✅ Option 3: **GitHub Pages**

**Steps:**

1. Install the GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following to your `package.json`:

```json
"homepage": "https://<your-username>.github.io/numberverse",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy the site:
   ```bash
   npm run deploy
   ```

---

## 🌐 Environment Considerations

- **API Usage:** This app fetches data from [NumbersAPI](http://numbersapi.com) without any authentication.
- **HTTPS:** Use a secure HTTPS environment to avoid browser warnings.
- **Routing:** This app uses `react-router-dom`. Make sure your host supports client-side routing or configure redirects appropriately.

---

## 🔄 Continuous Deployment

For platforms like **Vercel** and **Netlify**, connect your GitHub repo to enable automatic deployments on push to `main` or `master`.

---

## ✅ Summary

| Platform     | Status | Auto Deploy | HTTPS | Free Tier |
|--------------|--------|-------------|-------|-----------|
| Vercel       | ✅     | ✅          | ✅    | ✅         |
| Netlify      | ✅     | ✅          | ✅    | ✅         |
| GitHub Pages | ✅     | ❌          | ✅    | ✅         |

---

## 📞 Support

For deployment issues, open an issue or contact the maintainer.
