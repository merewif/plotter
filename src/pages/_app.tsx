import {type AppType} from 'next/app';
import {type Session} from 'next-auth';
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider, createTheme} from '@mui/material/styles';

import {trpc} from '../utils/trpc';

import '../styles/globals.css';
import {Layout} from '../components/Layout';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontWeightBold: 900,
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#4e4e4e',
    },
    error: {
      main: '#bb0f03',
      light: '#d50000',
    },
  },
});

const Plotter: AppType<{session: Session | null}> = ({
  Component,
  pageProps: {session, ...pageProps},
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(Plotter);
