import React from 'react';
import { TableColumn } from 'react-data-table-component';
import { Preference } from '../../../@types';

import { useUserInfo } from '../../../context/UserInfo';
import { Table } from '../../atoms/Table';

import {
  Container,
  Avatar,
  Card,
  Photo,
  Info,
  PreferenceValue,
  Label,
  Value,
} from './styles';

interface IUserInfo {
  userLogo: string;
}

export const UserInfo: React.FC<IUserInfo> = ({ userLogo }) => {
  const { user, translate } = useUserInfo();

  const columns: TableColumn<Preference>[] = [
    {
      name: translate('attribute'),
      selector: (row) => row.attribute,
      width: '20%',
    },
    {
      name: translate('valor'),
      selector: (row) => row.value || '',
    },
  ];

  return (
    <Container>
      <Card>
        <Photo>
          <Avatar
            src={
              user?.thumbnailPhoto
                ? 'data:image/jpg;base64,' + user?.thumbnailPhoto
                : userLogo
            }
            alt={user?.fullName}
          />
        </Photo>
        <Info>
          <PreferenceValue>
            <Label>{`${translate('nombre')}: `}</Label>
            <Value>{user?.displayName}</Value>
          </PreferenceValue>
          <PreferenceValue>
            <Label>{`${translate('usuario')}: `}</Label>
            <Value>{user?.accountName}</Value>
          </PreferenceValue>
          <PreferenceValue>
            <Label>{`${translate('lenguaje')}: `}</Label>
            <Value>{user?.culture}</Value>
          </PreferenceValue>
          <PreferenceValue>
            <Label>{`${translate('formato de fecha')}: `}</Label>
            <Value>{`${user?.dateFormat}`}</Value>
          </PreferenceValue>
          <PreferenceValue>
            <Label>{`${translate('moneda')}: `}</Label>
            <Value>{`${user?.currency}`}</Value>
          </PreferenceValue>
          <PreferenceValue>
            <Label>{`${translate('separador decimal')}: `}</Label>
            <Value>{`"${user?.decimalSeparator}"`}</Value>
          </PreferenceValue>
        </Info>
      </Card>
      {user?.preferences && (
        <div>
          <Table columns={columns} data={user?.preferences || []} />
        </div>
      )}
    </Container>
  );
};
