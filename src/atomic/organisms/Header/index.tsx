import React from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import { CustomNavbar, LinkNav } from './styles';

import { useMenu } from '../../../context/Menu';
import { useUserInfo } from '../../../context/UserInfo';

interface IHeader {
  appName: string;
  links: LinkMenu[];
}

interface LinkMenu {
  to: string;
  name: string;
}

export const Header: React.FC<IHeader> = ({ appName, links }) => {
  const { setShowNav } = useMenu();
  const { translate } = useUserInfo();

  return (
    <>
      <CustomNavbar fixed="top" expand={false}>
        <div>
          <button
            className="show-menu"
            onClick={() => setShowNav && setShowNav(true)}
          >
            <FaBars />
          </button>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            {translate(appName)}
          </Link>
        </div>
        <div>
          <ul className="navbar-nav ms-auto flex-nowrap">
            {links.map((item, index) => (
              <li key={index} className="nav-item">
                <LinkNav to={item.to}>{translate(item.name)}</LinkNav>
              </li>
            ))}
          </ul>
        </div>
      </CustomNavbar>
    </>
  );
};
