import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PolicyBusiness from "./components/PolicyBusiness";
import PolicyCustomer from "./components/PolicyCustomer";
import Home from "./components/Home";
import {Animation} from './components/Animation'
function App() {
  return (
    <>
      <BrowserRouter>
        <Animation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy-business" element={<PolicyBusiness />} />
          <Route path="/privacy-policy-customer" element={<PolicyCustomer />}/>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
