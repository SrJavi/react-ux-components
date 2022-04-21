import React, { memo, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import { FaChevronLeft, FaEllipsisV, FaRegClock, FaUser } from 'react-icons/fa';
import { Transaction } from '../../../@types';
import { useTrace } from '../../../context/Trace';
import { useUserInfo } from '../../../context/UserInfo';
import { DropdownButton } from '../../atoms/DropdownButton';
import { Modal } from '../../atoms/Modal';
import { Table } from '../../atoms/Table';
import { UserInfo } from '../../organisms/UserInfo';

import {
  Container,
  Breadcrumb,
  LinkBreadcrumb,
  MenuRight,
  ModalSM,
} from './styles';

interface IPanelBreadcrumb {
  path: Path[];
  userLogo: string;
}

interface Path {
  path: string;
  breadcrumbName: string;
}

export const PanelBreadcrumb: React.FC<IPanelBreadcrumb> = memo(
  ({ path, userLogo }) => {
    const { translate } = useUserInfo();
    const { trace } = useTrace();
    const [modalTraceShow, setModalTraceShow] = useState(false);
    const [modalUserShow, setModalUserShow] = useState(false);

    const columns: TableColumn<Transaction>[] = [
      {
        name: translate('nombre'),
        selector: (row) => row.name,
        grow: 1,
      },
      {
        name: translate('backendTime'),
        selector: (row) => row.backendTime,
        right: true,
        grow: 0.2,
      },
      {
        name: translate('dalTime'),
        selector: (row) => row.dalTime,
        right: true,
        grow: 0,
      },
    ];

    return (
      <>
        <Container>
          <Breadcrumb>
            <FaChevronLeft size={13} />
            <span>{translate('Inicio')}</span>
            {path.map((item, index, row) => (
              <div key={index}>
                |{' '}
                <LinkBreadcrumb
                  to={item.path}
                  active={index + 1 === row.length ? 1 : 0}
                >
                  {item.breadcrumbName}
                </LinkBreadcrumb>
              </div>
            ))}
          </Breadcrumb>
          <MenuRight>
            <DropdownButton title={<FaEllipsisV size={13} />}>
              <DropdownButton.Item onClick={() => setModalTraceShow(true)}>
                <FaRegClock size={18} /> {translate('Trace')}
              </DropdownButton.Item>
              <DropdownButton.Item onClick={() => setModalUserShow(true)}>
                <FaUser size={18} /> {translate('Usuario')}
              </DropdownButton.Item>
            </DropdownButton>
          </MenuRight>
        </Container>
        <Modal
          show={modalTraceShow}
          onHide={() => setModalTraceShow(false)}
          title={translate('Trace')}
        >
          <Table columns={columns} data={trace} />
        </Modal>
        <ModalSM
          show={modalUserShow}
          onHide={() => setModalUserShow(false)}
          title={translate('Informacion del usuario')}
        >
          <UserInfo userLogo={userLogo} />
        </ModalSM>
      </>
    );
  }
);
