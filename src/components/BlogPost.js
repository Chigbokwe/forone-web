import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  // Fetch post data using the `id` (this example uses static content)
  const post = {
    title: "How to Choose the Right Web Design Plan",
    content: "Choosing the right web design plan can be overwhelming. Here's a comprehensive guide to help you make the best decision for your needs..."
  };

  return (
    <div className="bg-white p-8 shadow-md rounded">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
