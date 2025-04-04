"use client";
import { useState } from 'react';
import "./Header2.css";

const Header2 = () => {
  const [, setIsEnabled] = useState(true);
  const items = [
    'Bangalore',
    'Chennai',
    'Delhi',
    'Gurgaon',
    'Hyderabad',
    'Kolkata',
    'Mumbai',
    'Noida',
    'Pune',
    'Agra',
    'Bareilly',
    'All Cities'
  ];

  const handleCity = (message: string) => {
    console.log(message);
  };

  return (
    <header className="cityHeader">
      <div className="cityContainer">
        <div className="cityList">
          <ul className="cityUlList">
            {items.map((item, index) => (
              <li
                key={index}
                className="cityItem"
                onMouseEnter={() => setIsEnabled(false)}
                onMouseLeave={() => setIsEnabled(true)}
                onClick={() => handleCity(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header2;