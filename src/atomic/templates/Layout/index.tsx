import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '../../../context/UserInfo';
import { capitalizeFirstLetter } from '../../../utils';
import { HandlerSession } from '../../organisms/HandlerSession';
import { Header } from '../../organisms/Header';
import { SideMenu } from '../../organisms/SideMenu';

import { Container } from './styles';

interface ILayout {
  appName: string;
  linksNavbar: linksNavbar[];
  logo: string;
}

interface linksNavbar {
  to: string;
  name: string;
}

export const Layout: React.FC<ILayout> = ({ appName, linksNavbar, logo }) => {
  const { translate } = useUserInfo();
  document.title = capitalizeFirstLetter(translate(appName));

  return (
    <>
      <Header appName={appName} links={linksNavbar} />
      <SideMenu appName={appName} logo={logo} />
      <Container>
        <HandlerSession>
          <Outlet />
        </HandlerSession>
      </Container>
    </>
  );
};
