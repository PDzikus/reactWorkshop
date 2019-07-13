import React from 'react';
import './index.css';
import Footer from './Footer';
import TextSection from './TextSection';
import Header from './Header';

function App() {
  return ( 
    <div>
      <Header />
      <TextSection text="Lorem Ipsum" />
      <Footer />
    </div>
  );
}

export default App;
