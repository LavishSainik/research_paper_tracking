# 📚 Research Paper Reading Tracker

A full-stack web application built for **academics and researchers** to manage research papers, track reading progress, and gain **data-driven insights** through interactive analytics.

This project was developed as part of a **Full-Stack Developer (Node & React)** assignment, with a strong focus on **clean architecture, analytics correctness, UI/UX quality, and production-ready deployment**.

---

## 🚀 Live Demo

- **Frontend (Vercel):** <FRONTEND_URL>
- **Backend API (Vercel):** <BACKEND_URL>

> ⚠️ Authentication is intentionally disabled to allow easy evaluation of the application.

---

## 🧠 Problem Statement

Researchers frequently deal with:
- A growing number of research papers
- Difficulty tracking reading progress
- Lack of visibility into reading completion
- No analytics on research focus or depth

This application solves these problems by combining:
- Structured paper tracking
- Advanced filtering
- Backend-driven analytics
- Clean, intuitive UI

---

## ✨ Features

### 📄 Paper Management
- Add research papers with the following fields:
  - Paper Title
  - First Author Name
  - Research Domain
  - Reading Stage
  - Citation Count
  - Impact Score
  - Date Added
- Persistent storage using MongoDB
- Clean, card-based paper library UI

---

### 🔍 Advanced Filtering
Filter papers using multiple selections:
- Research Domain
- Reading Stage
- Impact Score
- Date Added (This Week, This Month, Last 3 Months, All Time)

Filters can be combined and update results dynamically.

---

### 📊 Analytics Dashboard (Core Highlight)

All analytics are **computed on the backend** using MongoDB aggregation pipelines.

#### 1️⃣ Reading Progress Funnel
Visualizes how papers progress through reading stages and highlights drop-offs.

#### 2️⃣ Citations vs Impact Scatter Plot
Shows the relationship between citation count and impact classification.

#### 3️⃣ Domain × Reading Stage Stacked Bar Chart
Displays reading depth across different research domains.

#### 4️⃣ Summary Metrics
- Completion rate (Fully Read / Total papers)
- Papers grouped by reading stage
- Average citations per domain

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Recharts
- Axios

### Backend
- Node.js
- Express
- MongoDB Atlas
- Mongoose

### Deployment
- Vercel (Frontend + Backend)
- Serverless backend architecture

---

## 🏗️ Architecture Overview

- Frontend and backend are deployed independently
- Backend exposes REST APIs via serverless functions
- All analytics calculations happen server-side

---

## 📁 Project Structure

```text
research-paper-tracker/
├── backend/
│   ├── api/
│   │   └── index.js          # Vercel serverless entry point
│   ├── src/
│   │   ├── app.js            # Express app configuration
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   ├── vercel.json
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── constants/
│   ├── index.css
│   ├── vite.config.js
│   └── package.json

```

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone <repository-url>
cd research-paper-tracker
```

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in the backend directory:

MONGODB_URI=your_mongodb_connection_string
PORT=5000

🔐 Environment Variables
Backend

MONGODB_URI – MongoDB Atlas connection string

PORT – Server port (used locally)

Frontend

VITE_API_BASE_URL – Base URL of the backend API

🧪 Data & Analytics Notes

Demo data was seeded to ensure meaningful analytics visualizations

Analytics endpoints are implemented using MongoDB aggregation pipelines

Charts are designed for clarity and interpretability, not decoration

🧠 Key Engineering Decisions

Serverless backend architecture for scalability

Explicit CORS handling for secure cross-origin communication

Backend-driven analytics for correctness and performance

Clean separation of concerns between frontend and backend

UI designed specifically for researchers (calm, data-focused, minimal)

📌 Known Limitations

Authentication is not implemented (optional as per assignment guidelines)

Edit and delete functionality for papers is not included

🚀 Future Enhancements

User authentication and user-specific libraries

Notes and annotations for research papers

Export analytics data (CSV / PDF)

Dark mode support

Collaborative paper libraries

👤 Author

Lavish Sainik
Full-Stack Developer
Focused on building scalable, analytics-driven web applications