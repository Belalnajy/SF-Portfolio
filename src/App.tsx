
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import HomePage from "./pages/MainPage";
import StorePage from "./pages/MainPageStore";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InvestPage from "./pages/InvestPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}
