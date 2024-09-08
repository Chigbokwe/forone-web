import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => (
  <div className="bg-white p-8 shadow-md rounded">
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          <Link to="/blog/1">How to Choose the Right Web Design Plan</Link>
        </h2>
        <p className="text-gray-600">An in-depth guide to selecting the best plan for your needs.</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">
          <Link to="/blog/2">The Benefits of Ongoing Website Maintenance</Link>
        </h2>
        <p className="text-gray-600">Why continuous support is crucial for your website's success.</p>
      </div>
    </div>
  </div>
);

export default BlogList;
