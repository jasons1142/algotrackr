"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Add() {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [topics, setTopics] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [dateCompleted, setDateCompleted] = useState("")


    return (
        <div>
            <main className = "bg-stone-200 min-h-screen">
                <Navbar />
                <form className = "flex flex-col text-black space-y-4 mt-10 items-center">

                    <div className = "flex flex-col items-center">
                        <label>Problem Name</label>
                        <input 
                            type = "text" 
                            name = "problemText" 
                            required 
                            className = "border border-black"
                            value = {title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    
                    <div className = "flex flex-col items-center">
                        <label>Problem Link</label>
                        <input 
                            type = "text" 
                            className="border border-black"
                            value = {link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Topics</label>
                        <input 
                            type = "text" 
                            className="border border-black"
                            value = {topics}
                            onChange={(e) => setTopics(e.target.value)}
                        />
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Problem Difficulty</label>
                        <select className = "border border-black" value = {difficulty} onChange = {(e) => setDifficulty(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Date Completed</label>
                        <input 
                            type = "date" 
                            className="border border-black"
                            value = {dateCompleted}
                            onChange = {(e) => setDateCompleted(e.target.value)}
                        />
                    </div>

                    <button type = "submit" className = "border border-black bg-gray-400 rounded-md">Submit</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}
