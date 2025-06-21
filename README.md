# React-Inventory-Management-System
Inventory Management System Built with React JS, Node JS, Express JS, MongoDB and Tailwind CSS.

### Show Some Support!  
[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/vikrant.verma)


# Smart Inventory Management System for Small Retailers

A complete web-based inventory management solution designed for small retail businesses to manage stock, sales, and purchases efficiently. Built using Node.js, Express, MongoDB, and React.js, this system simplifies day-to-day inventory operations for store owners.

## 🧠 Project Objective

This system aims to:
- Help small retailers track stock levels and avoid overstocking/understocking.
- Provide real-time product management with a user-friendly interface.
- Maintain a digital log of sales, purchases, and inventory adjustments.
- Support role-based access (admin, manager, staff).

---

## 📦 Tech Stack

| Technology | Description |
|------------|-------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Authentication** | JWT, bcrypt |
| **Other Tools** | Redux Toolkit, Axios, React Router, Dotenv |

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based auth)
- ✅ Role-based Access Control (Admin, Manager, Staff)
- ✅ Product CRUD with Pagination and Search
- ✅ Category & Supplier Management
- ✅ Inventory Adjustment & Stock Tracking
- ✅ Purchase and Sales Records
- ✅ Dashboard with Analytics
- ✅ Mobile-friendly Responsive UI

---

## 🖼️ Screenshots

> Add screenshots or screen recordings here (Login page, Dashboard, Product Listing, etc.)

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/vikrant-d1/smart-inventory-management-system-for-small-retailers.git
cd smart-inventory-management-system-for-small-retailers
```

###  2. Setup backend

```bash
cd backend
npm install
```

Create a .env file inside the backend folder:

PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


###  3. Setup frontend
cd ../frontend
npm install
npm start

###  4. Folder Structure
smart-inventory-management-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── App.js
└── README.md

