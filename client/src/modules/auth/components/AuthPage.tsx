import { useDispatch } from 'react-redux';

import { Container, Box, Paper, Avatar, Typography, Grid, TextField, Link } from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import { registration } from '../store/actions.ts';
import { ReactElement, useState } from 'react';

interface IFormData {
  email: string;
  password: string;
  repeatPassword: string;
}
const Auth = (): ReactElement => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e, e.target, formData);
    // const {  } = e.target;
    // const te = await authApi.registration({ email: 'yurets09711@gmail.com', password: '21sdsad' });
    // console.log(te);
    dispatch(registration(formData));
  };

  return (
    <Container maxWidth={'xs'}>
      <Paper elevation={3} sx={{ marginTop: 4 }}>
        <Box
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repeatPassword"
                  label="Repeat password"
                  type="password"
                  id="repeatPassword"
                  autoComplete="new-password"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 1 }}>
                  Sign Up
                </Button>
              </Grid>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;
