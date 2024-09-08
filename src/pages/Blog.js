import React from 'react';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import Footer from '../components/Footer';

const Blog = () => (
  <>
    <Navbar />
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <BlogList />
      </div>
    </section>
    <Footer />
  </>
);

export default Blog;
