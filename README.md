# 💼 Job Listing Frontend (Next.js + Tailwind CSS + TypeScript)

This is the **frontend** for the **Job Listing Web Application**. It allows users to browse job opportunities, filter jobs by location, and view job details dynamically — all within a modern and responsive interface.

---

## ✅ Features

- 📄 Displays a scrollable list of jobs on the left-hand side
- 📌 Clicking a job displays details on the right-hand side
- 🔍 Location-based search filter
- ⚡ Dynamic rendering of job title, location, description, and more
- 🎨 Styled with Tailwind CSS
- 🔗 Connects to a backend REST API (Express + MongoDB)

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Framework  | Next.js (TypeScript) |
| Styling    | Tailwind CSS       |
| HTTP       | Axios              |
| Language   | TypeScript         |

---

## 🚀 Getting Started Locally

### 1️⃣ Clone the Repository

git clone [https://github.com/tarupathak/Job-Portal-Application-Frontend](https://github.com/tarupathak/Job-Portal-Application-Frontend)
cd client

### 2️⃣ Install Dependencies

npm install

### 3️⃣ Start the Development Server

npm run dev

Frontend will be available at:

http://localhost:3000


## 🌐 API Integration

The frontend connects to:

GET /api/jobs – to fetch all jobs

GET /api/jobs/search?location=Delhi – to filter jobs by location

You can configure the API base URL in page.tsx.

## 📡 Deployed Backend

🔗 [https://job-portal-application-frontend-lnt.vercel.app/](https://job-portal-application-frontend-lnt.vercel.app/)
