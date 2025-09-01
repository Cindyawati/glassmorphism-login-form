import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Glassmorphism from "./Glassmorphism.jsx";
import "./GlassmorphismStyle.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Glassmorphism />
    {/* https://youtu.be/mW0Z1T8l7sU?si=RV21kPxslqnGIJ5w */}
  </StrictMode>
);
