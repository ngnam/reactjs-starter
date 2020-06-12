import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between item-center">
      <Link className="font-bold" to="/">My React Starter</Link>
        
      <Navigation />
    </header>
  );
};

export default Header;
