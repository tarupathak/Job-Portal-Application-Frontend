# 🧠 Job Listing Backend (Express + MongoDB)

This is the **backend service** for the **Job Listing Web Application**. It serves job data through RESTful APIs and uses MongoDB for storing and querying jobs. The backend is built with **Express.js**, **Node.js**, and **Mongoose**.

---

## ✅ Features

- 📥 Imports job listings from a provided JSON file into MongoDB
- 📡 Provides REST APIs to fetch all jobs and filter by location
- 🔍 Location-based filtering happens on the server side for performance
- ⚙️ Built with scalable backend architecture using Express

---

## 🛠️ Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Runtime   | Node.js             |
| Server    | Express.js          |
| Database  | MongoDB Atlas       |
| ORM       | Mongoose            |
| Config    | dotenv              |
| CORS      | cors                |

---

## 📁 Project Structure

backend/
├── models/
│ └── Job.js # Mongoose schema for job listings
├── routes/
│ └── jobs.js # Job-related API routes
├── index.js # Main server file
├── .env # Environment variables (Mongo URI)
├── package.json

## 🚀 Getting Started Locally

### 1️⃣ Clone the Repository

git clone [git@github.com:tarupathak/Job-Portal-Application-Backend.git](https://github.com/tarupathak/Job-Portal-Application-Backend.git)
cd server

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Configure Environment Variables

Create a .env file in the root folder with the following:

MONGO_URI=mongodb+srv://<username>:<password>@<your-cluster>.mongodb.net/jobDB?retryWrites=true&w=majority
Replace <username>, <password>, and <your-cluster> with your actual MongoDB Atlas credentials.

### 4️⃣ Import Job Data to MongoDB (if not already imported)

You can import JSON data into MongoDB using Compass or a script (optional):

# If using mongoimport CLI (optional):
mongoimport --uri="$MONGO_URI" --collection=jobs --file=data/jobs.json --jsonArray

### 5️⃣ Start the Server

npm start

The server will run at:

http://localhost:5000

## 🌐 API Endpoints

GET /api/jobs
Returns all job listings.

GET /api/jobs/search?location=Bangalore
Returns jobs that match the provided location string (case-insensitive).

## 📡 Deployed Backend

🔗 [https://job-listing-backend.up.railway.app](https://job-portal-application-backend-production.up.railway.app/)
