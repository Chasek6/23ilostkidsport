import React from 'react';

const NavBar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a style={{ marginRight: '1rem' }} href="/">Home</a>
      <a style={{ marginRight: '1rem' }} href="/portfolio">Portfolio</a>
      <a style={{ marginRight: '1rem' }} href="/resume">Resume</a>
      <a style={{ marginRight: '1rem', display: 'flex', alignItems: 'center' }} href="/">
        <img src="/img/my-name.png" alt="My name" />
      </a>
      <a style={{ marginRight: '1rem' }} href="/blog">My Blog</a>
      <a style={{ marginRight: '1rem' }} href="/about">About</a>
      <a href="/contact">Contact Me</a>
    </div>
  );
};

export default NavBar;
