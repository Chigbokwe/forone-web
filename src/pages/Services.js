import React from 'react';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

const Services = () => (
  <>
    <Navbar />
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Basic Plan" description="Basic website design and setup." />
          <ServiceCard title="Standard Plan" description="Includes ongoing maintenance and updates." />
          <ServiceCard title="Premium Plan" description="Advanced features and priority support." />
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Services;
