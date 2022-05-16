import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography } from '@material-ui/core';
import Link from 'next/link';

import styles from './styles/navbar-styles.module.css';

import { context } from '../pages/_app';

export const Navbar = () => {
  const { log } = context();
  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar className={styles.navbar}>
        <Typography variant='h4'>Henry´s Polls</Typography>
        {!log && (
          <div className={styles.links}>
            <Link href={'/'}>Home</Link>
            <Link href={'/login'}>Login</Link>
          </div>
        )}
        {log && (
          <div className={styles.links}>
            <Link href={'/'}>Logout</Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
