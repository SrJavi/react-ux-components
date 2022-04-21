import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export const CustomNavbar = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  background-color: ${(props) => props.theme.header};
  height: ${(props) => props.theme.headerHeight};
  flex-wrap: nowrap;

  > div {
    display: flex;

    button.show-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      padding: 0 5px;
      width: 38px;
      height: ${(props) => props.theme.headerHeight};
      color: ${(props) => props.theme.textLight};
      background-color: ${(props) => props.theme.header};
      cursor: pointer;
      transition: color 0.2s;
      transition: background-color 0.2s;
      &:hover {
        color: rgba(255, 255, 255, 0.9);
        background-color: ${(props) => props.theme.headerHover};
      }
    }

    a.navbar-brand.align-items-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5px;
      height: ${(props) => props.theme.headerHeight};
      color: ${(props) => props.theme.textLight};
      background-color: ${(props) => props.theme.header};
      cursor: pointer;
      transition: color 0.2s;
      transition: background-color 0.2s;
      text-transform: uppercase;
      &:hover {
        color: rgba(255, 255, 255, 0.9);
        background-color: ${(props) => props.theme.headerHover};
      }
    }
  }
`;

export const LinkNav = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-radius: 2px;
  color: ${(props) => props.theme.textLight};
  background-color: ${(props) => props.theme.header};
  text-transform: capitalize;
  cursor: pointer;
  transition: color 0.2s;
  transition: text-decoration 0.2s;
  text-decoration: none;
  &:hover {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: underline;
    background-color: ${(props) => props.theme.headerHover};
  }
`;
