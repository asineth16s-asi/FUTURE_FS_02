# Client Lead Management System (Mini CRM)

This is a full-stack CRM application built for **Future Interns Task 2**. It allows an admin to manage client leads, track lead status, add follow-up notes, and manage conversions.

---

## 📋 Project Overview

The **Client Lead Management System (Mini CRM)** is designed to streamline client lead tracking for small businesses and sales teams. It provides a comprehensive dashboard with real-time statistics, lead conversion funnels, search and filter capabilities, lead detail views, and full CRUD (Create, Read, Update, Delete) operations.

---

## ✨ Features

- **Admin login**: Secure administrative authentication with session persistence.
- **Dashboard with lead statistics**: Visual metrics displaying Total Leads, New Leads, Contacted Leads, and Converted Leads alongside conversion pipeline progress indicators.
- **Lead listing**: Clean, interactive data table displaying Name, Email, Phone, Company, Source, Status, Created Date, and Action options.
- **Add new leads**: Structured creation form supporting lead sources and status categories.
- **Edit leads**: In-place modal dialog to update contact details, company information, lead status, and notes.
- **Delete leads**: Safety confirmation modal to prevent accidental deletion.
- **View lead details**: Comprehensive detail modal showcasing all lead information and notes.
- **Search leads**: Instant real-time search across Name, Email, and Company fields.
- **Filter by status**: Quick filtering options for *All*, *New*, *Contacted*, and *Converted* status states.
- **Lead status: New, Contacted, Converted**: Distinct color-coded status badges for tracking lead progress.
- **Follow-up notes**: Add and manage detailed customer interaction notes.
- **Local data persistence**: Browser `localStorage` sync for seamless offline testing and session preservation.
- **MongoDB backend**: REST API powered by Express.js and Mongoose for persistent server storage.

---

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **JavaScript**
- **CSS**
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

---

## 🔑 Demo Login

- **Email**: `admin@minicrm.com`
- **Password**: `admin123`

*(Note: The login page includes a 1-click **Auto-fill** button for instant testing access.)*

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
    ├── .env
    ├── package.json
    ├── server.js
    ├── models/
    │   └── Lead.js
    └── routes/
        └── leadRoutes.js
```

---

## ⚙️ Installation and Setup

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will be running at `http://localhost:5173`.

### 2. Backend Setup

```bash
# Navigate to the backend folder
cd backend

# Install backend dependencies
npm install

# Start the backend server
npm run dev
```

The backend server will run at `http://localhost:5000`.

---

## 🔌 Backend API Endpoints

- `GET /api/health` - Check API service health status
- `GET /api/leads` - Fetch all leads
- `GET /api/leads/:id` - Fetch single lead by ID
- `POST /api/leads` - Create a new lead
- `PUT /api/leads/:id` - Update an existing lead
- `DELETE /api/leads/:id` - Delete a lead

---

## 🗄️ MongoDB Configuration

MongoDB connection details are stored in the `backend/.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/minicrm
```

> ⚠️ **Important Security Note**: Connection strings and credentials in `backend/.env` should never be committed to public GitHub repositories.

---

## 🚀 Future Improvements

- Add user role-based access control (RBAC) for sales representatives.
- Implement email notifications and follow-up reminder alerts.
- Support CSV import and export for client leads.
- Integrate full JWT token authentication connected to MongoDB user records.
- Add visual monthly analytics charts.

---

## 🎯 Future Interns Task 2

This project was completed as part of the **Future Interns Internship Program (Task 2)**, demonstrating full-stack web development skills including frontend component design, state management, and backend RESTful API architecture.

---

## 👤 Author

**ASINETH SUHARATH**
