import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SellerdashDoard from "./pages/SellerdashBoard";
import BuyerDashBoard from "./pages/BuyerDashBoard";
import NavBar from "./components/NavBar";
export default function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/seller/profile" element={<SellerdashDoard />} />
          <Route path="/buyer/profile" element={<BuyerDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
