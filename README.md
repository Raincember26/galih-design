# galih.design Portfolio

Modern portfolio and blog built with vanilla HTML/CSS/JS and Tailwind CSS, using Ghost as a headless CMS.

![Project Screenshot](https://i.imgur.com/YOUR_SCREENSHOT.jpg) <!-- Replace with actual image URL -->

## 🚀 Quick Start

1. **Clone the repo**
    
    ```bash
   git clone https://github.com/Raincember26/galih-design.git
   cd galih-design

2. **Install dependencies**

    ```bash
    npm install

3. **Start development**

    ```bash
    npx tailwindcss -i ./css/main.css -o ./dist/output.css --watch
    
4. **Open index.html in your browser**

## 🔧 Ghost CMS Setup (Optional)

1. Run Ghost locally at http://localhost:2368
2. Get your Content API Key from Ghost Admin
3. Update js/blog.js:

    ```javascript
    const API_KEY = "YOUR_GHOST_API_KEY"; // ← Paste your key here

## 📂 Project Structure

    ```bash
    ├── assets/       # Static assets
    ├── css/          # Custom styles
    ├── dist/         # Compiled CSS (auto-generated)
    ├── js/           # JavaScript modules
    ├── index.html    # Homepage
    ├── blog.html     # Blog listing
    └── post.html     # Blog post template