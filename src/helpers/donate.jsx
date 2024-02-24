
import React from 'react';

const Donate = () => {
  return (
    <div className="bg-black text-white p-8 border-t-2 border-white">
      <h2 className="text-2xl bg-black font-semibold mb-4">Donate to Support Our Food Kitchens</h2>
      <p className="mb-4 bg-black">
        Your generous donation will help us provide meals to those in need. Please consider contributing
        through one of the following sources:
      </p>
      <ul className="list-disc bg-black ml-8 mb-4">
        <li className="bg-black">
          <a href="https://www.example.com/donate" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-black underline">Donate via Example Charity</a>
        </li>
        <li className="bg-black">
          <a href="https://www.example.org/donate" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-black underline">Donate via Example Foundation</a>
        </li>
        <li className="bg-black">
          <a href="https://www.example.net/donate" target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-black underline">Donate via Example Nonprofit</a>
        </li>
      </ul>
      <p className="mb-4 bg-black ">For donations , please contact us at: <a href="tel:+1234567890" className="text-blue-500 bg-black underline">1800-XXX-XXXX</a></p>
      <p className="text-sm bg-black  text-gray-500">Please note: These links are for demonstration purposes only and do not lead to actual donation pages.</p>
    </div>
  );
};

export default Donate;
