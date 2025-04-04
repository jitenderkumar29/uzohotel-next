"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import './Header1.css';

const Header1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="text-white py-3 px-20 md:px-6 flex justify-between items-center header1">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold logo">
            UZO
          </span>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-sm font-semibold">
          <Link href="/browse" className="hover:underline whitespace-nowrap">
            BECOME A MEMBER
          </Link>
          <Link href="/sapphire" className="hover:underline whitespace-nowrap">
            CORPORATE MEMBER
          </Link>
          <Link href="/membership" className="hover:underline whitespace-nowrap">
            LIST YOUR PROPERTY
          </Link>
          <Link href="/membership" className="hover:underline whitespace-nowrap">
            +91 9267958302
          </Link>
        </div>

        {/* Login Button - Hidden on mobile */}
        <div className="hidden md:flex">
          <button className="bg-white text-purple-900 px-6 py-1 rounded font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow hover:shadow-md">
            Log In/SignUp
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Shown only when toggled */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-900 text-white px-4 py-3 flex flex-col space-y-3 mobile-menu">
          <Link
            href="/browse"
            className="hover:underline py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Become a member
          </Link>
          <Link
            href="/sapphire"
            className="hover:underline py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Corporate Member
          </Link>
          <Link
            href="/membership"
            className="hover:underline py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            List your property
          </Link>
          <Link
            href="/membership"
            className="hover:underline py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            +91 9267958302
          </Link>
          <button className="bg-white text-purple-900 px-4 py-2 rounded font-semibold mt-2 hover:bg-gray-100 hover:scale-105 transition-all duration-200">
            Log In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header1;