import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';
import { Head } from '../components/Head';
import { Footer } from '../components/Footer';

import { Theme } from '../theme';
import { Navbar } from '../components/NavBar';
import { AppContextProvider } from '../components/Context';

import '../styles/globals.css';

export default function Polls({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Head></Head>
      <ThemeProvider theme={Theme}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer></Footer>
    </AppContextProvider>
  );
}
