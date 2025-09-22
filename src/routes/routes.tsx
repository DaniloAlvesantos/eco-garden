import { Routes, Route } from "react-router-dom";
import { App } from "../App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* Catch-all 404 route */}
      <Route path="*" element={<div>Page 404!</div>} />
    </Routes>
  );
};
