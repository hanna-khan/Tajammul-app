import "./App.css";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import About from "./components/About";
import MerchantPerspective from "./components/MerchantPerspective";
import DownloadApp from "./components/DownloadApp";
import ServiceOfferings from "./components/ServiceOfferings";

function App() {
  return (
    <div className="font-poppins overflow-hidden">
      <Hero />
      <About />
      <Feature />
      <MerchantPerspective />
      <DownloadApp/>
      <ServiceOfferings/>
      
    </div>
  );
}

export default App;
