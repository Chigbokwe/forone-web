import React from 'react';
import Navbar from '../components/Navbar';
import PricingTable from '../components/PricingTable';
import Footer from '../components/Footer';

const Pricing = () => (
  <>
    <Navbar />
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Pricing</h1>
        <PricingTable />
      </div>
    </section>
    <Footer />
  </>
);

export default Pricing;
