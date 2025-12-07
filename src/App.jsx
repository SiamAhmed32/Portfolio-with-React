import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "@/components";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className='relative z-0 bg-primary' >
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Education />
          <div className='relative z-0'>
            <Tech />
            <Works />
            <Contact />
            <StarsCanvas />
          </div>

          <Footer/>
          <ScrollToTop />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;