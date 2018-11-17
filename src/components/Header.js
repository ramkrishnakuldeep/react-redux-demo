import React from 'react';
import './css/header.css'

const Header = (props) => {
  return (
    <nav className="page_header">
      <h1 className="text-center">
        <strong>relayr</strong><span style={{ color: 'red' }}>.</span>
      </h1>
    </nav>
  )
}

export default Header;