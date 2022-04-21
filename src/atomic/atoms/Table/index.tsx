import React from 'react';
import DataTable, { createTheme, TableProps } from 'react-data-table-component';
import { useTheme } from 'styled-components';
import { useUserInfo } from '../../../context/UserInfo';
import { ThemeType } from '../../../styles/themes';
import { capitalizeFirstLetter } from '../../../utils';

import { Container } from './styles';

interface ITableProps<T> extends TableProps<T> {
  customTheme?: any;
}
type ITable<T = any> = React.FC<ITableProps<T>>;

export const Table: ITable = ({
  columns,
  customTheme = {},
  customStyles = {},
  paginationPerPage,
  paginationRowsPerPageOptions,
  ...props
}) => {
  const theme = useTheme() as ThemeType;

  const { translate } = useUserInfo();

  const terniumStyles = {
    rows: {
      style: {
        minHeight: '35px',
        fontSize: theme.fontSize,
        color: theme.text,
      },
    },
    headCells: {
      style: {
        marginLeft: '5px',
        marginRight: '5px',
        borderBottom: `1px solid ${theme.secondary}`,
        paddingLeft: '10px',
        paddingRight: '10px',
        fontWeight: 600,
        minHeight: '60px',
        fontFamily: 'Open-Sans',
        fontSize: theme.fontSize,
        color: theme.text,
      },
    },
    cells: {
      style: {
        marginLeft: '5px',
        marginRight: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontFamily: 'Open-Sans',
        fontSize: theme.fontSize,
        color: theme.text,
        borderBottom: `1px solid ${theme.border}`,
      },
    },
  };

  createTheme('default', {
    divider: {
      default: 'transparent',
    },
    ...customTheme,
  });

  const paginationComponentOptions = {
    rowsPerPageText: translate('Filas por página'),
    rangeSeparatorText: translate('de'),
    selectAllRowsItem: true,
    selectAllRowsItemText: translate('Todos'),
  };

  const styles = { ...terniumStyles, ...customStyles };

  const columnsCapitalize = columns.map((item) => {
    return {
      ...item,
      name: capitalizeFirstLetter(item.name?.toString() || ''),
    };
  });

  const paginationRowsPerPageDefault = [10, 15, 25, 50];

  if (paginationPerPage)
    paginationRowsPerPageDefault.unshift(paginationPerPage);

  return (
    <Container>
      <DataTable
        columns={columnsCapitalize}
        customStyles={styles}
        pagination
        paginationPerPage={paginationPerPage}
        paginationRowsPerPageOptions={
          paginationRowsPerPageOptions || paginationRowsPerPageDefault
        }
        paginationComponentOptions={paginationComponentOptions}
        theme="default"
        {...props}
      />
    </Container>
  );
};
