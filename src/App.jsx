import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import ProblemSolution from './components/ProblemSolution';
import VisualDemo from './components/VisualDemo';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import { Testimonial, FinalCTA, Footer } from './components/FinalSections';

function App() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Navbar />
      
      <main className="flex-grow">
         <HeroSection />
         <SocialProof />
         <ProblemSolution />
         <VisualDemo />
         <HowItWorks />
         <Benefits />
         <Testimonial />
         
         <div className="px-4 sm:px-6 lg:px-8 mt-12 bg-white">
            <FinalCTA />
         </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
