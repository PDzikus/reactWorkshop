import React from 'react';
import './index.css';
import Footer from './Footer';
import TextSection from './TextSection';
import Header from './Header';
import Counter from './Counter';

const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function App() {
  return ( 
    <div>
      <Header />
      <div className="main">
        <TextSection text={text} />
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
