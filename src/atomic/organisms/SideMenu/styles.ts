import styled from 'styled-components';

import Offcanvas from 'react-bootstrap/Offcanvas';

export const OffcanvasMenu = styled(Offcanvas)`
  width: 280px;

  background-color: ${(props) => props.theme.menuBg};

  .offcanvas-body {
    padding: 6px 0px;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.secondary};
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.scrollbarThumbHover};
    }

    label {
      width: 100%;
      color: white;
      text-align: center;
    }
  }
`;

export const OffcanvasHeaderLogo = styled(Offcanvas.Header)`
  padding: 6px 12px;
  div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.textLight};
    cursor: default;
    img {
      height: 36px;
      width: 36px;
      margin-right: 10px;
    }
  }
  button {
    color: ${(props) => props.theme.textLight};
    background-color: ${(props) => props.theme.menuBg};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const OffcanvasHeaderFilter = styled(Offcanvas.Header)`
  padding: 6px 12px;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    cursor: default;
    input {
      color: ${(props) => props.theme.textLight};
      background: ${(props) => props.theme.menuBg};
      border-color: transparent;
      box-shadow: none;
      -webkit-transition: 0.2s;
      -moz-transition: 0.2s;
      -o-transition: 0.2s;
      -ms-transition: 0.2s;
      transition: 0.2s;
      &:focus {
        border-color: transparent;
        box-shadow: none;
        color: ${(props) => props.theme.textLight};
        background: var(--color-bg-menu-filter);
      }
    }
  }
`;
