import React, { useState, useCallback } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  FaTruck,
  FaClipboard,
  FaRoad,
  FaCubes,
  FaMap,
  FaCogs,
  FaCog,
  FaFlask,
  FaDesktop,
  FaChevronLeft,
  FaChevronDown,
} from 'react-icons/fa';
import { APIMenu } from '../../../../@types';
import { useMenu } from '../../../../context/Menu';
import { useUserInfo } from '../../../../context/UserInfo';
import { getKeyValue } from '../../../../utils';

//import { Menu } from '..';

import { Container } from './styles';

interface Props {
  item: APIMenu;
}

const ICONS: { [key: string]: JSX.Element } = {
  'fa-truck': <FaTruck />,
  'fa-clipboard': <FaClipboard />,
  'fa-road': <FaRoad />,
  'fa-cubes': <FaCubes />,
  'fa-map': <FaMap />,
  'fa-cogs': <FaCogs />,
  'fa-cog': <FaCog />,
  'fa-flask': <FaFlask />,
  'fa-desktop': <FaDesktop />,
};

export const MenuItem: React.FC<Props> = ({ item, children }) => {
  const { setShowNav } = useMenu();
  const { translate } = useUserInfo();

  const [expanded, setExpanded] = useState(false);
  const hasSubmenu = item.subItems.length > 0;
  const renderSubmenu = expanded && hasSubmenu;
  const toggle = useCallback(() => setExpanded(!expanded), [expanded]);

  const navigateTo = () => {
    setShowNav && setShowNav(false);
    window.location.href = item.url;
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    if (hasSubmenu) {
      toggle();
    } else {
      if (event.button === 0) {
        navigateTo();
      } else if (event.button === 1) {
        window.open(item.url, '_blank');
      }
    }
  };

  return (
    <Container>
      <ListGroup.Item>
        <div
          className={`infoItem level-${item.level}`}
          onMouseDown={handleClick}
        >
          <div>
            {item.iconCssClass && getKeyValue(ICONS)(item.iconCssClass)}
            {translate(item.description)}
          </div>
          {hasSubmenu && (
            <div className="chevron">
              {expanded ? <FaChevronDown /> : <FaChevronLeft />}
            </div>
          )}
        </div>
        {renderSubmenu && children}
        {/* {renderSubmenu && <Menu items={item.subItems} />} */}
      </ListGroup.Item>
    </Container>
  );
};
