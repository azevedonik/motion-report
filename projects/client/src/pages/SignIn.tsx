import React, { FunctionComponent } from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Checkbox, FormControlLabel, Link, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAppDispatch } from '../hooks';
import { login } from '../features/auth/authSlice';
import { useHistory } from 'react-router';

interface SigninPageProps {}

const SigninPage: FunctionComponent<SigninPageProps> = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const signin = login;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    dispatch(signin());
    history.push('/report');
  };

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Acessar
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin='normal' required fullWidth id='email' label='Digite seu email' name='email' autoComplete='email' autoFocus />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Lembrar' />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Esqueceu sua senha ?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {'N??o tem um login ? Cadastre-se'}
                </Link>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SigninPage;
