import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout.jsx"
import Home from "./components/pages/NavPages/HomePage.jsx"
import Progetti from "./components/pages/NavPages/Progetti.jsx"
import ChiSono from "./components/pages/NavPages/ChiSono.jsx"
import Contatti from "./components/pages/NavPages/Contatti.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="progetti" element={<Progetti />} />
        <Route path="chi_sono" element={<ChiSono />} />
        <Route path="contatti" element={<Contatti />} />
      </Route>
    </Routes>
  );
}
export default App;