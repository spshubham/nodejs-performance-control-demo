# 🚀 Node.js Performance Control Demo

This project demonstrates three important backend performance control techniques:

- Debouncing
- Throttling
- API Rate Limiting

Built using Node.js and Express for learning, testing, debugging, and interview understanding.

---

## 📁 Project Structure

nodejs-performance-control-demo
│
├── server.js
├── routes
│   └── api.js
├── utils
│   └── performance.js
├── middleware
│   └── rateLimiter.js
└── package.json

---

## ⚙️ Installation

Clone the repository:

git clone https://github.com/<your-username>/nodejs-performance-control-demo.git

Navigate into the project:

cd nodejs-performance-control-demo

Install dependencies:

npm install

---

## ▶️ Run Project

Run the server using nodemon:

npm run dev

Server will start on:

http://localhost:3000

---

## 🔌 APIs

### 1️⃣ Debounce API

Endpoint:

GET /api/debounce

Behavior:

- If the API is called multiple times rapidly, execution happens only once.
- The function runs only after 2 seconds of inactivity.
- All intermediate calls are ignored.

Verification:

Check server console logs.

Expected console output:

✅ DEBOUNCE Executed | Count: 1 | Time: 3:21:10 PM

---

### 2️⃣ Throttle API

Endpoint:

GET /api/throttle

Behavior:

- First request executes immediately.
- Subsequent executions happen at most once every 2 seconds.
- Calls within the interval window are ignored.

Verification:

Spam the API and observe console timestamps.

Expected console output example:

✅ THROTTLE Executed | Count: 1 | Time: 3:22:01 PM  
✅ THROTTLE Executed | Count: 2 | Time: 3:22:03 PM  
✅ THROTTLE Executed | Count: 3 | Time: 3:22:05 PM  

Note: If you hit the API 5 times rapidly, execution count may be less than 5 because throttling is time-based, not call-count based.

---

### 3️⃣ Rate Limit API

Endpoint:

GET /api/rate-limit

Configuration:

- Limit: 5 requests
- Window: 1 minute
- Applied per IP

Behavior:

- First 5 requests succeed.
- Requests beyond the limit are blocked.

Success response:

{
  "success": true,
  "message": "Rate limit API success"
}

Blocked response:

{
  "success": false,
  "message": "Too many requests. Please try again later."
}

HTTP Status Code:

429 Too Many Requests

---

## 🧪 How to Test & Verify

You can test the APIs using Browser, Postman, or cURL.

---

### Test Debounce

Open multiple tabs or spam refresh:

http://localhost:3000/api/debounce

Result:

Only one execution log appears after ~2 seconds.

---

### Test Throttle

Spam the endpoint continuously:

http://localhost:3000/api/throttle

Result:

Logs appear once every 2 seconds regardless of how many times you hit.

---

### Test Rate Limiting

Call repeatedly:

http://localhost:3000/api/rate-limit

Result:

- First 5 → Success
- After that → Blocked with 429 error

---

### Test via cURL (Optional)

Debounce:

curl http://localhost:3000/api/debounce

Throttle:

curl http://localhost:3000/api/throttle

Rate Limit:

curl http://localhost:3000/api/rate-limit

Run commands multiple times quickly to observe behavior.

---

## 🧠 Concept Summary

Debounce  
Delays execution until user stops triggering events.

Throttle  
Limits execution to once per defined interval.

Rate Limit  
Restricts number of API requests in a time window.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- Lodash
- express-rate-limit
- Nodemon

---



