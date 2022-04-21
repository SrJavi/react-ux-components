import React, { useCallback, useRef } from 'react';
import { useTheme } from 'styled-components';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Unauthorized } from '../../../@types';
import { useSession } from '../../../context/Session';
import { useUserInfo } from '../../../context/UserInfo';
import { Get } from '../../../services/api';
import { ThemeType } from '../../../styles/themes';
import { capitalizeFirstLetter } from '../../../utils';

const ALERT = withReactContent(Swal);
const WARNING_TIME_IN_SECONDS = 5 * 60; //5 minutes

export const HandlerSession: React.FC = ({ children }) => {
  const theme = useTheme() as ThemeType;
  const { translate } = useUserInfo();
  const { countdown, resetCountdown, finishCountdown } = useSession();
  const alertRef = useRef<Promise<SweetAlertResult<any>>>();

  const refreshSession = useCallback(() => {
    resetCountdown();
    (async function () {
      try {
        let response = await Get<Unauthorized>('api/Access/Ping');
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        resetCountdown();
      } catch (err) {
        finishCountdown();
      }
    })();
  }, []);

  if (countdown < WARNING_TIME_IN_SECONDS) {
    const isExpired = countdown === 0;

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const time = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    let message = `${translate('su sesión va a expirar en')} ${time}`;
    let confirmButtonText = capitalizeFirstLetter(
      translate('continuar sesión')
    );
    let icon: SweetAlertIcon = 'warning';

    if (isExpired) {
      message = capitalizeFirstLetter(translate('sesion expirada'));
      confirmButtonText = capitalizeFirstLetter(translate('recargar sitio'));
      icon = 'error';
      alertRef.current = undefined;
    }

    if (!alertRef.current) {
      alertRef.current = ALERT.fire({
        html: message,
        icon: icon,
        confirmButtonText: confirmButtonText,
        confirmButtonColor: theme.primary,
        allowOutsideClick: false,
      });

      alertRef.current.then((r) => {
        alertRef.current = undefined;
        if (r.isConfirmed) {
          if (countdown === 0) {
            window.location.reload();
          } else {
            refreshSession();
          }
        }
      });
    } else {
      ALERT.update({
        html: message,
        icon: icon,
        confirmButtonText: confirmButtonText,
      });
    }
  }

  return <>{children}</>;
};
