import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Dashboard from "./components/pages/Dashboard";
import Sidebar from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import SignInSide from "./components/pages/LantingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Overview from "./components/pages/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide/>}/>
          <Route path="/admin-dashboard" element={<Sidebar/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/overview" element={<Overview/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
