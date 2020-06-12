import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = (props) => {
  return (
    <div>
      <div className="font-bold py-3">My React Starter</div>
      <ul>
        <li>
          <Link
            to="/"
            onClick={props.closeMenu}
            className="text-blue-500 py-4 border-t border-b block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={props.closeMenu}
            className="text-blue-500 py-4 border-b block"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
