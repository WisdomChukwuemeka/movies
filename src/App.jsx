import { Layout } from "../components/layout";
import { Home } from "../components/home";
import { Movies } from "../routing/movie.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <><Layout />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </div>
    </>
  );
};