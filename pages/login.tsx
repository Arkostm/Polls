import type { NextPage } from 'next';
import styles from '../styles/Login.module.css';

import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import { Theme } from '../styles/theme';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Login</h1>
        <ThemeProvider theme={Theme}>
          <Paper>
            <Grid
              container
              spacing={3}
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Grid item xs={12}>
                <TextField label='Username'></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label='Password' type={'password'}></TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={true}
                      onChange={() => {}}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label='Keep me logged in'
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth> Login </Button>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </main>
    </div>
  );
};

export default Login;
