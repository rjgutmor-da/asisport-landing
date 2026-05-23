import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SocialProof from './SocialProof';
import ProblemSolution from './ProblemSolution';
import VisualDemo from './VisualDemo';
import HowItWorks from './HowItWorks';
import Benefits from './Benefits';
import { Testimonial, FinalCTA, Footer } from './FinalSections';
import Pricing from './Pricing';

const AsisportPage = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col pt-20 animate-fade-in bg-[var(--color-bg-main)] text-[var(--color-text-main)]">
      <Navbar onBack={onBack} />
      
      <main className="flex-grow">
         <HeroSection />
         <SocialProof />
         <ProblemSolution />
         <VisualDemo />
         <HowItWorks />
         <Benefits />
         <Testimonial />
         <Pricing />
         
         <div className="px-4 sm:px-6 lg:px-8 mt-12">
            <FinalCTA />
         </div>
      </main>

      <Footer />
    </div>
  );
};

export default AsisportPage;
