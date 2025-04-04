"use client";
import React from 'react';
import Image from 'next/image';
import './Banner.css'

const Banner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden -mt-4 banner-container">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Container with padding */}
      <div className="absolute inset-0 py-8 md:py-12 lg:py-16"> {/* Padding here */}
        <Image
          src="/images/banner1.jpg"
          alt="Luxury hotel banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{
            objectPosition: 'center' // Ensures image stays centered with padding
          }}
        />
      </div>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
          Discover Premium Luxury Hotels Across 20+ Countries
        </h2>
      </div>
    </div>
  );
};

export default Banner;