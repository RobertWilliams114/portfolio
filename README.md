## Portfolio Website (mern_portfolio)

# MERN Portfolio Website

A full-stack portfolio showcasing my projects, skills, and professional experiences. This application is built with modern web technologies to deliver a fast, responsive, and maintainable user experience.

### 🚀 Live Demo
[View the live site on Vercel](https://robertwilliams-portfolio.vercel.app)

---

## 📂 Project Structure

```bash
mern_portfolio/
├── client/           # React frontend (create-react-app)
├── server/           # Express backend API
├── .env              # Environment configurations
├── package.json      # Scripts & dependencies (client + server)
└── README.md         # Project overview
```

---

## 🔨 Technologies & Why I Chose Them

- **React**: Component-driven UI, easy state management with hooks, and a thriving ecosystem (Create React App for rapid setup).
- **Node.js & Express**: Lightweight, performant server to handle API routes; aligns seamlessly with JavaScript stack.
- **MongoDB & Mongoose**: Flexible NoSQL database for storing contact submissions and project metadata; Mongoose ODM for schema modeling.
- **CORS & dotenv**: Secure environment variable management and cross-origin request handling between client and server.
- **Concurrently**: Run client and server in development mode with a single command (`npm run dev`).
- **Heroku & Vercel**: Automated deployment pipelines for backend (Heroku) and frontend (Vercel) to ensure CI/CD and zero-downtime updates.

---

## ✨ Features

- **Responsive Design**: Mobile-first layout using CSS Flexbox and Grid for seamless viewing on any device.
- **Modern UI/UX**: Smooth animations powered by React Spring and styled-components for maintainable styling.
- **Dynamic Project Showcase**: Fetches project data from server; easily add new projects without manual HTML updates.
- **Contact Form**: Email integration with Nodemailer to receive inquiries directly in my inbox.

---

## ⚙️ Setup & Development

```bash
# 1. Clone the repo
git clone https://github.com/RobertWilliams114/portfolio.git

# 2. Install dependencies
npm install
npm run client-install

# 3. Configure environment variables
# Create .env with:
#   MONGO_URI=<your_mongo_uri>

# 4. Start in development mode
npm run dev
```

---

## 🎯 Deployment

- **Production Build**: `npm run build` in the client directory produces optimized static files.
- **Heroku Postbuild**: Automatically installs client dependencies and builds during deployment (`heroku-postbuild`).

---

## 🙏 Acknowledgements

- Inspired by the MERN Boilerplate projects and React community best practices.

---
