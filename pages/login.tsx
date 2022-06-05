import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useState } from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,
} from '@material-ui/core';

import { useAppContext } from '../components/Context';

import styles from '../styles/Login.module.css';

const Login: NextPage = () => {
  const [check, setCheck] = useState<boolean>(true);
  const { setLog } = useAppContext();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'hi',
      }),
    });
    if (response.ok) {
      setLog(true);
      router.push('/dashboard');
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} method={'POST'}>
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
