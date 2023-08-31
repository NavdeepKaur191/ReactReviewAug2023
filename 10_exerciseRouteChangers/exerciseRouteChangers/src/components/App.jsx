import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "./pages/Homepage";

import MensPage from "./pages/MensPage";
import SalePage from "./pages/SalePage";
import SeasonalCollection from "./pages/SeasonalCollection";
import WomensPage from "./pages/WomensPage";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MensPage />} />
        <Route path="/seasonal" element={<SeasonalCollection />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/women" element={<WomensPage />} />
      </Routes>
    </>
  );
}

export default App;
