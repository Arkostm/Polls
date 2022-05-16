import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { ThemeProvider } from '@material-ui/core';
import type { AppProps } from 'next/app';

import { Theme } from '../theme';
import { Navbar } from '../components/NavBar';
import { AppContextProvider } from '../components/Context';

import '../styles/globals.css';
import styles from '../styles/Home.module.css';

export default function Polls({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  );
}
