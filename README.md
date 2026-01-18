# AI‑Driven Website Summarizer Web App

## 📌 Project Overview

This project is a **modern AI‑driven website summarizer** where users can enter any public URL and instantly get a short, meaningful summary of the webpage content.

The application uses a **glassmorphism + neon AI themed frontend** built with **HTML, CSS, and JavaScript**, and a **Node.js backend** that fetches webpage content and sends it to an AI model for summarization.

---

## ✨ Features

* 🌐 Enter any public website URL
* 🤖 AI‑generated concise summary
* 🌙 Dark / Light mode toggle
* 💎 Glassmorphism & neon UI
* ⚡ Smooth animations
* 📱 Responsive design

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3 (Glassmorphism, Neon gradients)
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js
* Axios (for fetching webpage content)
* Cheerio (for extracting text from HTML)
* OpenAI / AI API (for summarization)

---

## 📂 Project Structure

```
website-summarizer/
│
├── index.html        # Frontend UI (single page)
├── server.js         # Backend server
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone <your-github-repo-link>
cd website-summarizer
```

### 2️⃣ Install Backend Dependencies

```
npm install
```

### 3️⃣ Add Environment Variable

Create a `.env` file:

```
OPENAI_API_KEY=your_api_key_here
```

### 4️⃣ Start Backend Server

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

### 5️⃣ Run Frontend

Simply open `index.html` in your browser.

---

## 🔄 How the AI Works

1. User enters a website URL
2. Frontend sends URL to backend API
3. Backend fetches webpage HTML
4. Cheerio extracts readable text
5. Text is sent to AI model
6. AI returns summarized content
7. Summary is displayed on UI
---

## 🎓 Assignment Justification

This project demonstrates:

* Practical AI integration
* API handling
* Web scraping
* Clean UI/UX design
* Real‑world problem solving

---

## 👤 Author

**Lovely Kumari**

---

## 📌 Future Enhancements

* Summary length control
* Multiple language support
* History of summaries
* Deployment on cloud

---

✨ *Thank you for reviewing this project!*

