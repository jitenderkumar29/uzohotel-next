"use client";
import React from "react";
import Link from "next/link";
import "./Header.css"; // Import the CSS file
import Header1 from "./header1/Header1";
import Header2 from "./header2/Header2";

const Header = () => {
  return (
    <>
      <Header2 />
      <Header1 />
    </>
  );
};

export default Header;
