import Layout from "./components/layout/Layout.jsx"
import HomePage from "./pages/NavPages/HomePage.jsx";
import Progetti from "./pages/NavPages/Progetti.jsx";
import About from "./pages/NavPages/About.jsx"
import Contatti from "./pages/NavPages/Contatti.jsx"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="progetti" element={<Progetti />} />
        <Route path="about" element={<About />} />
        <Route path="contatti" element={<Contatti />} />
      </Route>
    </Routes>
  );
}
export default App;