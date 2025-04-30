import { Layout } from "../components/layout"
import { Home } from "../components/home"
import { Movies } from "../routing/movie.jsx"
import {Routes, Route} from "react-router-dom"
export const App = () => {
  return(
    <>
      <div>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </>
  )
}