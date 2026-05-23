import React, { useState } from 'react';
import SplitLanding from './components/SplitLanding';
import AsisportPage from './components/AsisportPage';
import SaasportPage from './components/SaasportPage';

function App() {
  const [currentPage, setCurrentPage] = useState('split');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {currentPage === 'split' && <SplitLanding onNavigate={handleNavigate} />}
      {currentPage === 'asisport' && <AsisportPage onBack={() => handleNavigate('split')} />}
      {currentPage === 'saasport' && <SaasportPage onBack={() => handleNavigate('split')} />}
    </>
  );
}

export default App;
