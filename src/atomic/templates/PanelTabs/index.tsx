import React, {
  Children,
  cloneElement,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
} from 'react';
import Tab, { ITab } from './Tab';

import { Container, TabList, TabPanel } from './styles';
import { useUserInfo } from '../../../context/UserInfo';
import { capitalizeFirstLetter } from '../../../utils';

interface IPanelTabs {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

export const PanelTabs: React.FC<IPanelTabs> = ({
  activeTab,
  setActiveTab,
  children,
}) => {
  const { translate } = useUserInfo();

  const childActive = Children.toArray(children)[activeTab] as ReactElement<
    PropsWithChildren<ITab>
  >;

  return (
    <Container>
      <TabList>
        {Children.map(children, (child, index) => {
          const item = child as ReactElement<PropsWithChildren<ITab>>;

          if (item.type === Tab) {
            const isActive = index === activeTab;
            const onClick = () => {
              setActiveTab(index);
            };
            const label = capitalizeFirstLetter(translate(item.props.label));
            return cloneElement(item, { isActive, label, onClick });
          } else {
            return child;
          }
        })}
      </TabList>
      <TabPanel>
        {childActive.type === Tab ? childActive.props.children : childActive}
      </TabPanel>
    </Container>
  );
};

export { Tab };
