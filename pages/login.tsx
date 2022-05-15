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

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Login</h3>
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
      </main>
    </div>
  );
};

export default Login;
