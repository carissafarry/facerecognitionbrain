import React, { useState } from 'react';
import HeroSection from '../components/LandingPage/HeroSection/index.js';
import InfoSection from '../components/LandingPage/InfoSection/index.js';
import Navbar from '../components/LandingPage/Navbar/index.js';
import Sidebar from '../components/LandingPage/Sidebar/index.js';
import AboutSection from '../components/LandingPage/AboutSection/index.js';
import FooterSection from '../components/LandingPage/FooterSection/index.js';
// import {
//     homeObjOne,
//     homeObjTwo,
//     homeObjThree
// } from '../components/LandingPage/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection />
            {/* <InfoSection {...homeObjOne}/> */}
            {/* <InfoSection {...homeObjTwo}/> */}
            {/* <InfoSection {...homeObjThree}/> */}
            <AboutSection />
            <FooterSection />
        </>
    );
}

export default Home;