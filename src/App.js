// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Componet/Screen/Home/Home";
import Franchiselist from "./Componet/Screen/Franchise-list/Franchiselist";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Categorypage from "./Componet/Screen/Categorypage/Categorypage.jsx";
import Dailog from "./Componet/Dailog/Dailog.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchiselist" element={<Franchiselist />} />
          <Route path="/Categorypage" element={<Categorypage/>} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
