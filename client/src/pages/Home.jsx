import React from 'react';
import Layout from '../components/Layout';
import WhyChooseUs from './WhyChooseUs.jsx';
import Research from './Research.jsx';
import Events from './Events.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
   <>  
   <HeroSection />
   <WhyChooseUs />
   <Research />
   <Events />
   <Footer />
   </>
  );
}

export default Home;