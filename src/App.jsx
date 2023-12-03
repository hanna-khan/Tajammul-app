import "./App.css";
import Hero from "./components/Hero";
import Navbar from './components/Navbar'
import Feature from "./components/Feature";
import About from "./components/About";
import MerchantPerspective from "./components/MerchantPerspective";
import DownloadApp from "./components/DownloadApp";
import ServiceOfferings from "./components/ServiceOfferings";
import Footer from './components/Footer'
function App() {
  return (
    <div className="font-poppins scroll-smooth overflow-x-hidden">
      <Navbar/>
      <Hero />
      <About />
      <Feature />
      <MerchantPerspective />
      <DownloadApp/>
      <ServiceOfferings/>
      <Footer/>
      
    </div>
  );
}

export default App;
