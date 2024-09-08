import React from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => (
  <>
    <Navbar />
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </section>
    <Footer />
  </>
);

export default Contact;
