import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavTag = styled.nav``;

function Navbar() {
  return (
    <NavTag>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/diary">Diary</Link>
      </li>
      <li>
        <Link to="/mypage">Mypage</Link>
      </li>
      <li>
        <Link to="/account">Account</Link>
      </li>
    </NavTag>
  );
}

export default Navbar;
