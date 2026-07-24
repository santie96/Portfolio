import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout.jsx"
import Home from "./components/pages/NavPages/HomePage.jsx"
import Progetti from "./components/pages/NavPages/Progetti.jsx"
import ChiSono from "./components/pages/NavPages/ChiSono.jsx"
import Contatti from "./components/pages/NavPages/Contatti.jsx"
import Skills from "./components/pages/NavPages/Skills.jsx"
import Esperienza from "./components/pages/NavPages/Esperienza.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chi-sono" element={<ChiSono />} />
        <Route path="progetti" element={<Progetti />} />
        <Route path="skills" element={<Skills />} />
        <Route path="esperienza" element={<Esperienza />} />
        
        <Route path="contatti" element={<Contatti />} />
      </Route>
    </Routes>
  );
}
export default App;