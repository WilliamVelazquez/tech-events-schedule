import React from 'react';

import {LOGO} from 'Constants/file';

import '../assets/styles/components/header.css';

const Header = () => (
  <header>
    <img src={LOGO} alt="Tech Events Schedule Logo" />
    <h1>Tech Events Schedule 💻</h1>
  </header>
)

export default Header;