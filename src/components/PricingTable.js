import React from 'react';

const PricingTable = () => (
  <div className="bg-white shadow-md rounded">
    <table className="min-w-full">
      <thead>
        <tr>
          <th>Plan</th>
          <th>Features</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Basic</td>
          <td>Basic Design</td>
          <td>$100/month</td>
        </tr>
        <tr>
          <td>Standard</td>
          <td>Design + Maintenance</td>
          <td>$200/month</td>
        </tr>
        <tr>
          <td>Premium</td>
          <td>Advanced Features + Priority Support</td>
          <td>$300/month</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PricingTable;
