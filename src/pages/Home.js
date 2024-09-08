import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/Herosection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <Features />
    <Testimonials />
    <Footer />
  </>
);

export default Home;
