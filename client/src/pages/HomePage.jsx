import React from 'react';
import Layout from '../components/Layout.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import ResearchPage from './ResearchPage.jsx';
import EventsPage from './EventsPage.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
   <>  
   <HeroSection />
   <WhyChooseUs />
   <ResearchPage />
   <EventsPage />
   <Footer />
   </>
  );
}

export default Home;