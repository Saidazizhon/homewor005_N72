import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WeeklyMovies from "./components/WeeklyMovies";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <WeeklyMovies />
      <Footer />
    </div>
  );
}

export default App;