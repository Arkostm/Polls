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
import { useState } from 'react';
import { useRouter } from 'next/router';
import { context } from '../pages/_app';

const Login: NextPage = () => {
  const [check, setCheck] = useState<boolean>(true);
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/dashboard');
    const { setLog } = context();
    setLog(true);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Login</h3>
        <form onSubmit={handleSubmit}>
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
                      checked={check}
                      onChange={() => setCheck(!check)}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }
                  label='Keep me logged in'
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth type={'submit'}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </main>
    </div>
  );
};

export default Login;
