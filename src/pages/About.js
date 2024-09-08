import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => (
  <>
    <Navbar />
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <p className="mb-4">ForOne is dedicated to providing high-quality, affordable website design and maintenance services. Our mission is to make professional online presence accessible to everyone.</p>
        <p>Our team of experienced designers and developers is committed to delivering custom solutions tailored to your needs.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default About;
