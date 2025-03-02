import React from 'react';
import Navbar from './components/Layout/Navbar'; 
import Footer from './components/Layout/Footer';
import Webroutes from './components/Webroutes';

const App = () => {
  return (
    <> 
      <Navbar />
      <Webroutes/> 
      <Footer />
    </>
  );
};

export default App;
