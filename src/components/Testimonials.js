import React from 'react';

const Testimonials = () => (
  <section className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center space-x-4">
        <div className="w-full md:w-1/3 p-4 bg-white shadow-md rounded">
          <p>"ForOne transformed our online presence. Their team is professional and responsive."</p>
          <p className="font-semibold mt-4">- Jane Doe, CEO of ExampleCorp</p>
        </div>
        <div className="w-full md:w-1/3 p-4 bg-white shadow-md rounded">
          <p>"The subscription model is a game-changer. Affordable and reliable maintenance."</p>
          <p className="font-semibold mt-4">- John Smith, Founder of StartupX</p>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
