from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, Column, Integer, Text
from sqlalchemy.orm import sessionmaker, declarative_base

# Load environment variables
load_dotenv()

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup (SQLite)
DATABASE_URL = "sqlite:///./chat.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

class ChatHistory(Base):
    __tablename__ = "chat_history"
    id = Column(Integer, primary_key=True, index=True)
    question = Column(Text)
    answer = Column(Text)

Base.metadata.create_all(bind=engine)

class ChatRequest(BaseModel):
    message: str

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

@app.post("/chat")
def chat(req: ChatRequest):

    resume_context = """
    Name: Bhawana Bisht

Professional Summary:
Full Stack Developer specializing in React, TypeScript, and Python backend systems.
Strong focus on scalable architecture, responsive UI, and clean backend structure.

Technical Skills:
- Frontend: React, TypeScript, Next.js, Tailwind CSS
- Backend: Python, FastAPI, REST API development
- Tools: Git, GitHub, Postman
- Database: SQLite, SQLAlchemy
- UI/UX: Responsive Design, Performance Optimization

Projects & Achievements:

1. Student Counseling Web Application
- Built a multi-authentication system for students and administrators.
- Designed admin panel for ranking, seat allocation, and payment tracking.
- Structured scalable frontend architecture.
- Improved UI responsiveness and mobile performance significantly.

2. Technova Freelancer Marketplace (10-page platform)
- Developed complete frontend architecture using React.
- Implemented reusable components and modular structure.
- Optimized loading performance and UI interactions.
- Designed responsive layout for cross-device compatibility.

AI Portfolio Project:
- Integrated AI chat functionality using OpenRouter API.
- Built FastAPI backend with database integration.
- Implemented real-time chat with typing indicators.
- Structured clean API architecture following best practices.

Strengths:
- Clean and scalable code structure
- Strong UI/UX decision-making
- Backend API design understanding
- Fast learner and problem solver
    """

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {

        "model": "openai/gpt-3.5-turbo",

        "max_tokens": 180,
        "temperature": 0.7,

        "messages": [
        {
        "role": "system",
        "content": f"""
        You are a professional AI Resume Assistant for Bhawana Bisht.
        
        Guidelines:
        - Answer confidently and professionally.
        - Highlight measurable impact when possible.
        - Keep answers under 120 words.
        - Maximum 5 bullet points.
        - No long explanations.
        - Be sharp, confident, and direct.
        - Do not invent information outside the resume.
        - If something is not in the resume, politely say it is not mentioned.
        Resume Data:
        {resume_context}
        """
        },
        {
            "role": "user",
            "content": req.message
        }
        ]
    }

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        json=data
    )

    if response.status_code != 200:
        return {"reply": "AI service is temporarily unavailable. Please try again later."}

    reply = response.json()["choices"][0]["message"]["content"]

    # Save to database
    db = SessionLocal()
    new_chat = ChatHistory(question=req.message, answer=reply)
    db.add(new_chat)
    db.commit()
    db.close()

    return {"reply": reply}