import React, { memo } from 'react';
import { useTheme } from 'styled-components';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { ThemeType } from '../../../styles/themes';
import { capitalizeFirstLetter } from '../../../utils';

const MySwal = withReactContent(Swal);

export interface IAlert {
  title: string;
  detail: string;
  confirmButtonText: string;
  type?: SweetAlertIcon;
}

export const Alert: React.FC<IAlert> = memo(
  ({ title, detail, confirmButtonText, type }) => {
    const theme = useTheme() as ThemeType;

    const showMessage = () => {
      MySwal.fire({
        title: capitalizeFirstLetter(title),
        html: detail,
        icon: type,
        confirmButtonColor: theme.primary,
        confirmButtonText: capitalizeFirstLetter(confirmButtonText),
      });
    };

    return <>{showMessage()}</>;
  }
);
