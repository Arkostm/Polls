import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography } from '@material-ui/core';
import Link from 'next/link';

import styles from './styles/NavBar.module.css';

import { useAppContext } from './Context';

import { PUBLIC_ROUTES, PRIVATE_ROUTES, Route } from '../services/routes';

const showRoutes = (routes: Array<Route>) =>
  routes.map(({ path, name }, index) => (
    <Link key={index} href={path}>
      {name}
    </Link>
  ));

export const Navbar = () => {
  const { log } = useAppContext();
  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar className={styles.navbar}>
        <Typography variant='h4'>Henry´s Polls</Typography>
        {!log && (
          <div className={styles.links}>{showRoutes(PUBLIC_ROUTES)}</div>
        )}
        {log && (
          <div className={styles.links}>{showRoutes(PRIVATE_ROUTES)}</div>
        )}
      </Toolbar>
    </AppBar>
  );
};
