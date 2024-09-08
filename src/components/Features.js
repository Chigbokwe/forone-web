import React from 'react';

const Features = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Our Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-semibold mb-4">Custom Design</h3>
          <p>Tailored designs to match your brand and business needs.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-semibold mb-4">Flexible Plans</h3>
          <p>Choose a plan that fits your budget and requirements.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
          <p>Continuous support to ensure your website runs smoothly.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
