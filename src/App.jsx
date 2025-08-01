import { BrowserRouter } from "react-router-dom";
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "@/components";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <BrowserRouter>
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
      </div>
    </BrowserRouter>
  );
}

export default App;