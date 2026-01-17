# 📌 Chatbot Platform

A full-stack chatbot platform where users can create projects and chat with an AI-powered assistant. Built using React, TailwindCSS, Node.js, Express, PostgreSQL (Neon), and Gemini API.

## 🚀 Tech Stack

### Frontend
- **React** (Vite)
- **Tailwind CSS**
- **Axios**
- **React Router**
- **Deployed on Netlify**

### Backend
- **Node.js**
- **Express.js**
- **PostgreSQL** (Neon DB)
- **Sequelize ORM**
- **JWT Authentication**
- **Gemini API**
- **Deployed on Render**

## ⚙️ Environment Variables

### Backend `.env`

```env
PORT=5000
DATABASE_URL=your_neon_database_url
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_key
```

### Frontend `.env`

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

## ▶️ Run Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs at: `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## 🔐 Features

- ✅ User authentication (JWT)
- ✅ Create & persist projects
- ✅ Chat history saved per project
- ✅ AI responses via Gemini API
- ✅ Fully deployed frontend & backend
- ✅ Responsive UI with Tailwind CSS
- ✅ Secure API endpoints with authentication middleware

## 🧠 Architecture Overview

The application follows a **client-server architecture**.

### Frontend
- Built as a **Single Page Application (SPA)** using React
- Uses **React Router** for navigation
- **Axios** handles API communication
- **JWT** is stored in `localStorage` and sent via Authorization headers
- State is managed using React hooks

### Backend
- **REST API** built with Express.js
- **JWT-based authentication** middleware protects routes
- **PostgreSQL (Neon)** used for persistent storage
- **Sequelize ORM** manages models and relationships
- Chat messages and projects are associated with authenticated users

### Database Design
- **Users** → can have multiple **Projects**
- **Projects** → can have multiple **Chats**
- Ensures data persistence across logins

### AI Integration
- **Gemini API** is used to generate responses
- System prompts and chat history are combined before sending to AI
- Maintains conversation context for better responses

## 🌐 Publicly Hosted Demo

### Frontend (Netlify)
```
https://majestic-bienenstitch-2e958a.netlify.app
```

### Backend (Render)
```
https://chatbot-platform-2bao.onrender.com
```

### Test Endpoints
- `GET /api/auth/login` - Login endpoint
- `POST /api/auth/register` - Register endpoint
- `GET /api/projects` - Get user projects (requires authentication)
- `POST /api/chat` - Send chat message (requires authentication)

## 📝 API Documentation

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Projects
- `GET /api/projects` - Get all user projects
- `POST /api/projects` - Create new project
- `DELETE /api/projects/:id` - Delete project

### Chat
- `GET /api/chat/:projectId` - Get chat history
- `POST /api/chat` - Send message and get AI response

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT tokens for secure authentication
- Environment variables for sensitive data
- Input validation and sanitization
- Protected API routes with authentication middleware

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database (Neon account)
- Gemini API key

### Setup
1. Clone the repository
2. Set up environment variables for both frontend and backend
3. Install dependencies for both projects
4. Run database migrations (if applicable)
5. Start development servers

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.
