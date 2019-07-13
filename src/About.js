import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About () {
    return (
        <div>
            <Header />
            <div className="about">
                Strona napisana w ramach zajęć "React dla początkujących"
            </div>
            <Footer />
        </div>
    );
}

export default About;