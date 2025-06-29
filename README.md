# 🎓 Course Selling Platform

A fully backend-powered web application inspired by Udemy, built using **Node.js**, **Express**, and **MongoDB**. This app allows two types of users: **Admins** who can create courses, and **Users** who can browse and purchase them.

---

## 🚀 Features

### 👩‍🏫 Admins
- Sign up as an admin
- Create new courses
- Get list of all courses

### 👨‍🎓 Users
- Sign up as a user
- Browse all available courses
- Purchase courses
- View purchased courses

> Note: Authentication is done using simple username and password in headers for learning purposes (not production-safe).

---

## 📂 Project Structure
course-selling-app/
├── db.js # MongoDB schemas and connection
├── server.js # App entry point and route setup
├── routes/
│ ├── admin.js # Admin-related endpoints
│ └── user.js # User-related endpoints
├── middleware/
│ ├── admin.js # Middleware for admin auth
│ └── user.js # Middleware for user auth
└── README.md # You're reading it


---

## 🛠 Tech Stack

- ⚙️ **Node.js** – JavaScript runtime
- 🌐 **Express.js** – Backend web framework
- 🍃 **MongoDB** – NoSQL database
- 🧠 **Mongoose** – ODM for MongoDB
- 🔐 Custom middleware – Basic authentication logic

---

## 📦 Installation & Setup

### Prerequisites
- Node.js and npm installed
- MongoDB URI (local or Atlas)

### Steps

```bash
# Clone the repo
git clone https://github.com/aryankushwaha007/course-selling-app.git
cd course-selling-app

# Install dependencies
npm install

# Start the server
node server.js

MongoDB Connection
Make sure your db.js contains a valid connection string. Example using MongoDB Atlas:
mongoose.connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/courses');

API Documentation
All requests must include Content-Type: application/json. Authenticated routes require headers:

makefile
username: your_username
password: your_password

👩‍🏫 Admin Routes
All prefixed with /admin

Method  	Route            	Description
POST   	/signup	            Create a new admin account
POST  	/courses          	Create a course (auth required)
GET	    /courses	          Get all courses (auth required)


👨‍🎓 User Routes
All prefixed with /user

Method     	Route                     	Description
POST	     /signup	               Create a new user
GET       	/courses	             List all available courses
POST	     /courses/:courseId    	Purchase a course (auth required)
GET	       /purchasedCourses      	View purchased courses (auth)

⚠️ Important Notes
This project uses plain-text passwords — do not use in production.

No JWT or session-based authentication — it's for educational use only.

Improve security using:

Password hashing (e.g., bcrypt)

Token-based auth (e.g., JWT)

Input validation (e.g., zod or joi)

👨‍💻 Author
Built with 💛 by Aryan Kushwaha
For learning, practice, and fun!




