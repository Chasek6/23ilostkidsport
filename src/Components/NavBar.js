import React from 'react';
import Image from './Image'; // Import the Image component
import logo from './Logo.png'; // Import the image file

const NavBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a style={{ marginRight: '1rem' }} href="/">Home</a>
      <a style={{ marginRight: '1rem' }} href="/portfolio">Portfolio</a>
      <a style={{ marginRight: '1rem' }} href="/resume">Resume</a>
      <a style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }} href="/">
        {/* Render the Image component and pass the logo image and alt text as props */}
        <Image src={logo} alt="Chase Stratton" />
      </a>
      <a style={{ marginRight: '1rem' }} href="/blog">My Blog</a>
      <a style={{ marginRight: '1rem' }} href="/about">About</a>
      <a href="/contact">Contact Me</a>
    </div>
  );
};

export default NavBar;
