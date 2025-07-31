import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Add() {



    return (
        <div>
            <main className = "bg-stone-200 min-h-screen">
                <Navbar />
                <form className = "flex flex-col text-black space-y-4 mt-10 items-center">

                    <div className = "flex flex-col items-center">
                        <label>Problem Name</label>
                        <input type = "text" name = "problemText" required className = "border border-black"/>
                    </div>

                    
                    <div className = "flex flex-col items-center">
                        <label>Problem Link</label>
                        <input type = "text" className="border border-black"/>
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Topics</label>
                        <input type = "text" className="border border-black"/>
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Problem Difficulty</label>
                        <select className = "border border-black">
                            <option value="">--Please choose an option--</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>

                    <div className = "flex flex-col items-center">
                        <label>Date Completed</label>
                        <input type = "date" className="border border-black"/>
                    </div>

                    <button className = "border border-black bg-gray-400 rounded-md">Submit</button>
                </form>
            </main>
            <Footer />
        </div>
    )
}
