import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="p-6 bg-white shadow-md rounded">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
