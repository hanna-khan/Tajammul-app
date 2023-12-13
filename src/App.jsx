import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import About from "./components/About";
import Merchant from "./components/Merchant";
import DownloadApp from "./components/DownloadApp";
import ServiceOfferings from "./components/ServiceOfferings";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PolicyBusiness from "./components/PolicyBusiness";
import PolicyCustomer from "./components/PolicyCustomer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/privacy-policy-business" element={<PolicyBusiness />}></Route>
          <Route
            path="/privacy-policy-customer"
            element={<PolicyCustomer />}
          ></Route>
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
