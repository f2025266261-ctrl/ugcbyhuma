import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandTicker from './components/BrandTicker';
import WhyMe from './components/WhyMe';
import Services from './components/Services';
import About from './components/About';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-[#FFF5F5] min-h-screen text-[#4A2831]">
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <WhyMe />
        <Services />
        <About />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
