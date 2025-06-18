# 🌡️ Gizantech Web Project

This is a full-stack real-time temperature dashboard built with **React.js** (frontend) and **Node.js/Express** (backend). It fetches live temperature data and displays it on a dynamic, real-time chart.

---

## 📁 Folder Structure

project-root/
├── backend/ # Express API serving temperature data
│ └── server.js
├── frontend/ # React app with Chart.js visualization
│ ├── src/
│ └── package.json
└── README.md

# Run the Backend

cd backend
npm install
node server.js

# Run the Frontend

cd frontend
npm install
npm start

# API Endpoint

GET http://localhost:5000/temperature

Returns a JSON response


{
  "temperature": 32,
  "timestamp": "2025-06-17T10:35:44.321Z"
}
