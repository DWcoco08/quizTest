import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Users" element={<div>User Component</div>} />
      <Route path="/Admin" element={<div>Admin Component</div>} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
