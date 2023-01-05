import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./app";
import React from "react";

export default function BakerRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}
