import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '../theme';
import { Navbar } from '../components/navbar';

import React from 'react';
import { useContext } from 'react';

const AuthContext = React.createContext({
  log: false,
  setLog: function (v: boolean) {
    this.log = v;
  },
});

export const context = () => useContext(AuthContext);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Henry's Polls</title>
        <meta name='description' content='Polls project, all thanks to henry' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider theme={Theme}>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </ThemeProvider>
      <footer className={styles.footer}>
        <div>
          <a
            href='https://es.wikipedia.org/wiki/Mr._Robot'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by{' '}
          </a>
        </div>
        <div>
          <span className={styles.logo}>
            <Image src='/mrrobot.png' alt='' width={72} height={52} />
          </span>
        </div>
      </footer>
    </>
  );
}

export default MyApp;
