import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Preference } from '../../../@types';
import { MenuProvider } from '../../../context/Menu';
import { SessionProvider } from '../../../context/Session';
import { TraceProvider } from '../../../context/Trace';
import { UserInfoProvider } from '../../../context/UserInfo';
import GlobalStyles from '../../../styles/GlobalStyles';
import { defaultTheme, ThemeType } from '../../../styles/themes';

interface IContextLayout {
  theme: ThemeType;
  preferences?: Preference[];
}

export const ContextLayout: React.FC<IContextLayout> = ({
  theme = defaultTheme,
  preferences,
  children,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider>
          <UserInfoProvider preferences={preferences}>
            <TraceProvider>
              <MenuProvider>{children}</MenuProvider>
            </TraceProvider>
          </UserInfoProvider>
        </SessionProvider>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};
