import React from 'react';

const Footer = ({ length }) => {
  return (
    <div className="fixed bottom-0 w-full bg-gray-200 py-2">
      <div className="container mx-auto text-center">
        <span className="text-xl">Number of Item: </span>
        <span className="text-xl text-blue-500">{length ? length : '0'}</span>
      </div>
    </div>
  );
};

export default Footer;
