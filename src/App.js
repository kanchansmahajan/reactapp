import "./App.css";
import Navbar from "./Components/Navbar";
import MidContainer from "./Components/MidContainer";
import Footer from "./Components/Footer";
import IndianFood from "./Components/IndianFood";
import CONTINENTAL from "./Components/CONTINENTAL";
import MEXICAN from "./Components/MEXICAN";
import KOREAN from "./Components/KOREAN";
import GERMAN from "./Components/GERMAN";
import CHINESE from "./Components/CHINESE";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loginreg from "./Loginreg";

function App() {
  return (
    <>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/IndianFood" element={<IndianFood />} />
          <Route path="/MEXICAN" element={<MEXICAN/>} />
          <Route path="/KOREAN" element={<KOREAN/>} />
          <Route path="/GERMAN" element={<GERMAN/>} />
          <Route path="/CONTINENTAL" element={<CONTINENTAL/>} />
          <Route path="/CHINESE" element={<CHINESE/>} />
          <Route path="/" element={<MidContainer />} />
        </Routes>
       
        <Footer/>
      </Router>
    </>
  );
}

export default App;
