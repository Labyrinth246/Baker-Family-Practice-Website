import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./app";
import Contact from "./components/contact.js";
import React from "react";

export default function BakerRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </Router>
  );
}
