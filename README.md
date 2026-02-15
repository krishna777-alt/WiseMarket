
# 🛒 WiseMarket – Modern MERN Grocery Web Application

WiseMarket is a full-stack modern grocery e-commerce web application built using the MERN stack.  
It provides a smooth shopping experience for users and a powerful dashboard for sellers to manage products, inventory, and orders.

The goal of WiseMarket is to deliver a fast, responsive, and visually clean online grocery platform with real-world features like carts, orders, authentication, and product management.

---

## ✨ Features

### 🧑‍🤝‍🧑 User Features

- User authentication (Login / Signup)
- Browse products by category
- Search for products
- Add to cart & manage quantities
- View cart total in real-time
- Place orders
- Track order history
- Modern UI with responsive design
- Protected routes (403 / 401 handling)

### 🛍 Seller Features

- Product upload & management
- Image upload for products
- Stock & inventory control
- Discount pricing support
- Featured products
- Product categories
- Seller dashboard UI

### ⚙ Core Features

- JWT authentication
- Role-based access control (User / Seller / Admin)
- Secure API
- Cart & order system
- MongoDB schema validation
- Modern Tailwind UI
- Responsive layout
- Loading states & error pages
- Optimized UX

---

## 🧱 Tech Stack

### Frontend

- React
- Tailwind CSS
- Axios
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer / Cloudinary (for image uploads)

---

## 🗂 Project Structure

WiseMarket/
├── client/ # React frontend

│ ├── src/

│ │ ├── components/

│ │ ├── pages/

│ │ ├── layouts/

│ │ └── services/

│
├── server/ # Node + Express backend

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ ├── middlewares/

│ └── utils/

│
└── README.md

---

## 🔐 Environment Variables

Create a `.env` file inside `server/`:

DATABASE=mongodb+srv://:<PASSWORD>@cluster1.jjzqwkx.mongodb.net/wiseMarket
PASSWORD=
CLIENT_URL=http://localhost:5173
PORT=3000

SESSION_SECRET=
JWT_SECRET_KEY=
JWT_REFRESH_SECRET=

JWT_TOKEN_EXPRIES=
JWT_REFRESH_EXPRIES=

NODE_ENV=

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/wisemarket.git
cd wisemarket
`

cd server
npm install

cd client
npm install

#run server
cd server
node server

#run client
cd client
npm run dev
```
<img width="1905" height="749" alt="Screenshot from 2026-02-15 16-46-56" src="https://github.com/user-attachments/assets/205bb458-130d-44af-b524-25e4421dae5e" />
<img width="1324" height="583" alt="Screenshot from 2026-02-13 16-00-28" src="https://github.com/user-attachments/assets/4fa1dfea-b0fe-4de2-a2f0-4bc257c25a41" />
<img width="1900" height="886" alt="Screenshot from 2026-02-15 16-47-45" src="https://github.com/user-attachments/assets/db7f9ca1-94c2-4597-bd28-6db0dd4409eb" />
<img width="1900" height="886" alt="Screenshot from 2026-02-15 16-59-54" src="https://github.com/user-attachments/assets/289d261c-8e1e-41c7-a0b4-715bf05f66e3" />
