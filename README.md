<!-- <h3><b>Tech Stack:</b> MongoDB • Express • ReactJS • NodeJS • JWT • Graph Theory</h3>


<h1>Overview</h1>

• Helps to keep track and manage group expenses and monitor debts among group members.<br>
• Simplifies settle ups by minimizing the number of internal transactions using a graph-based algorithm.<br>
• Used Json Web Token to implement “remember me” functionality.

<h1>Key Features</h1>
<h2>1) Expense Tracking</h2>

SplitX simplifies financial tracking by allowing users to categorize expenses across different activities and groups. This feature provides clear visibility into spending patterns, aiding users in budgeting and financial planning.

<h2>2) Splitting and Sharing</h2>

Users can effortlessly divide bills and expenses among friends or teammates. SplitX automates the process, ensuring fairness and reducing disputes over who owes what, enhancing group financial transparency and efficiency.

<h2>3) Group Budgeting</h2>

SplitX facilitates collaborative budget management by enabling groups to set and monitor financial targets together. It supports shared financial planning for households, clubs, or projects, promoting accountability towards common financial goals.

<h2>4) Payment Management</h2>

It streamlines payment processes within groups by providing tools for tracking debts and facilitating easy settlements. This feature reduces the administrative burden of managing group finances, ensuring timely payments and financial clarity.



 -->



























 # 💸 SplitX — Group Expense Tracker

<p align="center">
  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" title="React" height="40"/>
  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" title="Node.js" height="40"/>
  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" title="MongoDB" height="40"/>
  <img src="https://img.icons8.com/color/48/000000/json-web-token.png" alt="JWT" title="JWT" height="40"/>
</p>

> **SplitX** is your smart, hassle-free way to split, track, and settle group expenses.  
> Designed for trips, households, events, and any shared costs — powered by **graph theory algorithms** to minimize transactions.

---

## 📑 Table of Contents
1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Architecture](#-architecture)
5. [Installation & Setup](#-installation--setup)
6. [Usage](#-usage)
7. [Future Enhancements](#-future-enhancements)
8. [Contributing](#-contributing)
9. [License](#-license)

---

## 📖 Overview
**SplitX** simplifies group expense management by:
- 📊 **Tracking** and organizing expenses in real-time.
- 🔄 **Minimizing settlements** using graph theory for the fewest possible transactions.
- 🔐 Providing secure **JWT authentication** with “Remember Me” sessions.
- 🏷️ Offering **category-based insights** for budgeting.
- 👥 Supporting multiple groups simultaneously.

---

## ✨ Features

### 🧾 Expense Tracking
- Add, edit, and remove expenses effortlessly.
- Categorize spending for better financial analysis.

### ➗ Smart Splitting
- Automatically split bills among group members.
- Use **graph theory optimization** to reduce total settlements.

### 📅 Group Budgeting
- Create shared financial goals.
- Track progress collectively.

### 💳 Payment Management
- Monitor who owes whom at a glance.
- Mark debts as settled in seconds.

### 🔐 Authentication
- Secure signup/login with **JWT tokens**.
- Persistent sessions with “Remember Me”.

---

## 🛠 Tech Stack

**Frontend:**  
- React.js (Create React App)  
- Tailwind CSS  

**Backend:**  
- Node.js  
- Express.js  

**Database & Auth:**  
- MongoDB  
- JSON Web Token (JWT)  

**Algorithm:**  
- Graph Theory for settlement optimization  

---

## 🏗 Architecture

```

Frontend (React)  -->  Backend API (Express + Node.js)  -->  Database (MongoDB)
↑
JWT Authentication Layer

````

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/splitx.git
cd splitx
````

### 2️⃣ Install dependencies

**Backend:**

```bash
cd backend
npm install
```

**Frontend:**

```bash
cd ../frontend
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the **backend** folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 4️⃣ Run the application

**Start Backend:**

```bash
cd backend
npm start
```

**Start Frontend:**

```bash
cd ../frontend
npm start
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🖥 Usage

1. **Register** or log in to your account.
2. **Create a group** (e.g., Trip to Goa, Flatmates).
3. **Add expenses** with amount, payer, and description.
4. **View settlements** optimized for minimal transactions.
5. **Mark debts as settled** when payments are made.

---

## 🔮 Future Enhancements

* 🌍 Multi-currency support.
* 📊 Advanced analytics dashboard.
* 🔔 Real-time notifications.
* 💰 Direct UPI/PayPal integration.
* 📱 Mobile app (React Native).

---

## 🤝 Contributing

We welcome contributions from the community!

1. Fork the repository
2. Create a feature branch (`feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.
Feel free to use, modify, and distribute it.

---
####
**💡 Made with ❤️ by Kirtan Soni**


