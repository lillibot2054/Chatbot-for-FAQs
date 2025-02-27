# Chatbot for FAQs

## Description
This is an AI-powered chatbot designed to answer frequently asked questions using Natural Language Processing (NLP) techniques. It provides quick and accurate responses to user queries by processing them through a backend Flask API.

## Features
- Interactive chatbot UI
- AI-based response generation
- Easy-to-use web interface
- Flask-powered backend API
- Handles user queries efficiently

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Flask (Python)
- **AI/NLP:** Pre-trained AI model for FAQ responses

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/lillibot2054/Chatbot-for-FAQs.git
cd Chatbot-for-FAQs
```

### 2. Set Up a Virtual Environment (Optional but Recommended)
```sh
python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate     # On Windows
```

### 3. Install Dependencies
```sh
pip install -r requirements.txt
```

### 4. Run the Flask Server
```sh
python app.py
```
The API will start at `http://127.0.0.1:5000/`

### 5. Open the Frontend
Open `index.html` in a browser to interact with the chatbot.

## API Endpoints
- **POST** `/ask` - Sends a question to the chatbot and receives a response.
  - **Request:** `{ "question": "Your question here" }`
  - **Response:** `{ "answer": "Chatbot's response" }`

## Deployment
To deploy the chatbot on a server:
1. Use **Gunicorn** or **uWSGI** for running Flask in production.
2. Set up **Nginx** or **Apache** as a reverse proxy.
3. Deploy the frontend on GitHub Pages, Netlify, or any static hosting service.

### **Contributor**
- **DHEEPAK.G** - Developer  
- **GitHub:** [@lillibot2054](https://github.com/lillibot2054)  

---

### **📜 License**
This project is licensed under the **MIT License** – feel free to modify and use!  

---

### **⭐ Star This Repo**
If you like this project, don't forget to ⭐ star the repository! 😊✨  
