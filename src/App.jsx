import { Layout } from "../components/layout";
import { Home } from "../components/home";
import { Movies } from "../routing/movie.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </>
  );
};