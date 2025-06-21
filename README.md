# Smart Inventory Management System for Small Retailers

A complete web-based inventory management solution designed for small retail businesses to manage stock, sales, and purchases efficiently. Built using Node.js, Express, MongoDB, and React.js, this system simplifies day-to-day inventory operations for store owners.

### Show Some Support!  

<a href="https://www.buymeacoffee.com/vikrant.verma" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 70px; width: 300px;" >
</a>


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

```javascript
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```


###  3. Setup frontend
```javascript
cd ../frontend
npm install
npm start
```

