# Client Lead Management System (Mini CRM)

A full-stack **Client Lead Management System (Mini CRM)** built for **Future Interns – Task 2**. This application helps businesses manage client leads, track their status, add follow-up notes, and monitor lead conversions through a clean and interactive dashboard.

## 🚀 Live Demo

**Live Website:** https://mini-crm-phi-red.vercel.app/

**GitHub Repository:** https://github.com/asineth16s-asi/FUTURE_FS_02

---

## 📋 Project Overview

The **Client Lead Management System (Mini CRM)** is designed to simplify lead management for small businesses and sales teams.

The application provides:

* Lead management
* Lead status tracking
* Follow-up notes
* Search and filtering
* Lead conversion tracking
* Dashboard statistics
* CRUD operations
* Responsive user interface

---

## ✨ Features

* **Admin Login** – Secure login interface with session persistence.
* **Dashboard** – Displays Total Leads, New Leads, Contacted Leads, and Converted Leads.
* **Lead Management** – Add, view, edit, and delete client leads.
* **Lead Details** – View complete information about individual leads.
* **Search** – Search leads by name, email, or company.
* **Status Filtering** – Filter leads by New, Contacted, or Converted status.
* **Follow-up Notes** – Add notes for customer interactions and follow-ups.
* **Conversion Tracking** – Monitor the progress of leads through the sales pipeline.
* **Local Data Persistence** – Uses browser `localStorage` for frontend data persistence and session handling.
* **REST API** – Backend API built using Express.js.
* **MongoDB Integration** – Supports persistent lead storage using MongoDB and Mongoose.
* **Responsive UI** – Designed to work across desktop and mobile screen sizes.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Tools

* Git
* GitHub
* VS Code
* Vercel

---

## 🔑 Demo Login

Use the following credentials to test the application:

**Email:** `admin@minicrm.com`

**Password:** `admin123`

> The login page also provides an Auto-fill option for quick testing.

---

## 📁 Project Structure

```text
Mini CRM/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ConfirmModal.jsx
│   │   ├── EditLeadModal.jsx
│   │   ├── Header.jsx
│   │   ├── LeadDetailModal.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatCard.jsx
│   ├── data/
│   │   └── sampleLeads.js
│   ├── pages/
│   │   ├── AddLeadPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── LeadsPage.jsx
│   │   ├── Login.jsx
│   │   └── SettingsPage.jsx
│   ├── utils/
│   │   └── storage.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── backend/
    ├── package.json
    ├── server.js
    ├── models/
    │   └── Lead.js
    └── routes/
        └── leadRoutes.js
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/asineth16s-asi/FUTURE_FS_02.git
cd FUTURE_FS_02
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Start the Frontend

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

### 4. Backend Setup

Navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Then start the backend:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

---

## 🔌 Backend API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/health`    | Check API health    |
| GET    | `/api/leads`     | Fetch all leads     |
| GET    | `/api/leads/:id` | Fetch a single lead |
| POST   | `/api/leads`     | Create a new lead   |
| PUT    | `/api/leads/:id` | Update a lead       |
| DELETE | `/api/leads/:id` | Delete a lead       |

---

## 🗄️ Database

The backend uses **MongoDB** with **Mongoose** for database operations.

MongoDB connection details should be stored securely in the backend `.env` file.

> **Security:** Never upload passwords, API keys, database credentials, or other secrets to GitHub.

---

## 🔮 Future Improvements

* Role-based access control for sales representatives
* Email notifications and follow-up reminders
* CSV import and export
* JWT-based authentication
* Monthly analytics and charts
* Advanced lead management features
* Cloud database integration

---

## 🎯 Future Interns – Task 2

This project was developed as part of the **Future Interns Internship Program – Task 2**.

The project demonstrates practical skills in:

* Full-stack web development
* React component development
* State management
* REST API development
* Database integration
* CRUD operations
* Git and GitHub
* Deployment using Vercel

---

## 👤 Author

**ASINETH SUHARATH**

**B.Tech Information Technology**

[GitHub](https://github.com/asineth16s-asi)

---

## 🔗 Project Links

🌐 **Live Demo:** https://mini-crm-phi-red.vercel.app/

💻 **GitHub Repository:** https://github.com/asineth16s-asi/FUTURE_FS_02
