import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <div>
      <main className = "bg-stone-200 min-h-screen">
        <Navbar />
        <div className = "bg-gray-600 p-15 rounded-lg text-white w-full max-w-xl mx-auto mt-30">
          <p>
            Welcome to AlgoTrackr a webpage designed to store and categorize completed LeetCode problems for future studying.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
