import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="font-nunito py-4 min-h-0 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PhuketAce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
