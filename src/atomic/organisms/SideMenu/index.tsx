import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaTimes } from 'react-icons/fa';

import { APIMenu } from '../../../@types';
import { useMenu } from '../../../context/Menu';
import { useUserInfo } from '../../../context/UserInfo';
import { Menu } from '../../molecules/Menu';

import {
  OffcanvasHeaderFilter,
  OffcanvasHeaderLogo,
  OffcanvasMenu,
} from './styles';

interface ISideMenu {
  appName: string;
  logo: string;
}

const filterMenu = (result: APIMenu[], items: APIMenu[], search: string) => {
  if (!items || items.length === 0) {
    return;
  }

  items
    .sort((a, b) => (a.order > b.order ? 1 : -1))
    .forEach((item) => {
      if (item.description.toLowerCase().includes(search.toLowerCase())) {
        result.push({
          ...item,
          subItems: [],
          level: 0,
          order: result.length,
        });
      }

      filterMenu(result, item.subItems, search);
    });
};

export const SideMenu: React.FC<ISideMenu> = ({ appName, logo }) => {
  const { translate } = useUserInfo();
  const { menu, showNav, setShowNav, error } = useMenu();
  const [search, setSearch] = useState<string>('');

  let messageLabel: string = '';
  let filteredMenu: APIMenu[] = [];

  if (!menu) {
    messageLabel = `${translate('Cargando')}...`;
  } else {
    if (search === '') {
      filteredMenu = menu;
    } else {
      filterMenu(filteredMenu, menu, search);
    }
  }
  if (error) {
    messageLabel = translate(error);
  }

  return (
    <>
      <OffcanvasMenu show={showNav} onHide={setShowNav}>
        <OffcanvasHeaderLogo>
          <div>
            <img alt="logo" src={logo} /> {appName}
          </div>
          <button>
            <FaTimes onClick={() => setShowNav && setShowNav(false)} />
          </button>
        </OffcanvasHeaderLogo>
        <OffcanvasHeaderFilter>
          <div>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(evt) => setSearch(evt.target.value)}
              className="form-control"
              placeholder={`${translate('Buscar')}...`}
              autoComplete="off"
            />
          </div>
        </OffcanvasHeaderFilter>
        <Offcanvas.Body>
          {filteredMenu ? (
            <Menu items={filteredMenu} />
          ) : (
            <label>{messageLabel}</label>
          )}
        </Offcanvas.Body>
      </OffcanvasMenu>
    </>
  );
};
