import "./App.css";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import About from "./components/About";
import MerchantPerspective from "./components/MerchantPerspective";

function App() {
  return (
    <div className="font-poppins overflow-hidden">
      <Hero />
      <About />
      <Feature />
      <MerchantPerspective />
    </div>
  );
}

export default App;