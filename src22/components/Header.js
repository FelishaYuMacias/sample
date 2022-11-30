import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  heading: {
    background: '#ff0000',
    height: "200px"
  },
  h1: {
    fontSize: '100px',
    color: 'white'
  }

};

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.heading} className="header">
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;
