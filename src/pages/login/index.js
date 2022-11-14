import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Hidden,
  Container,
  Button,
  Grid,
  TextField
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
// import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
// import LoadingButton from '@mui/lab/LoadingButton';

import { styled } from '@mui/material/styles';

const GridWrapper = styled(Grid)(
  ({ theme }) => `
    background: ${theme.colors.gradients.black1};
`
);

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const TypographyPrimary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[100]};
`
);

const TypographySecondary = styled(Typography)(
  ({ theme }) => `
      color: ${theme.colors.alpha.white[70]};
`
);

function Login() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  function handleClick() {
    setPending(true);
  }

  return (
    <>
      <Helmet>
        <title>Login to Ripple Finance</title>
      </Helmet>
      <MainContent>
        <Grid
          container
          sx={{ height: '100%' }}
          alignItems="stretch"
          spacing={0}
        >
          <Hidden mdDown>
            <GridWrapper
              xs={12}
              md={6}
              alignItems="center"
              display="flex"
              justifyContent="center"
              item
            >
              <Container maxWidth="sm">
                <Box textAlign="center">
                  <img
                    alt="500"
                    height={200}
                    src="/static/images/overview/collage-1.jpg"
                  />
                  <Typography variant="h2" sx={{ my: 2, color: 'white' }}>
                    Ripple Finance
                  </Typography>
                </Box>
              </Container>
            </GridWrapper>
          </Hidden>

          <Grid
            xs={12}
            md={6}
            alignItems="center"
            display="flex"
            justifyContent="center"
            item
          >
            <Container maxWidth="sm">
              <Box textAlign="center" sx={{ mb: 2 }}>
                <img
                  alt="500"
                  height={140}
                  src="/static/images/logo/rfinance.png"
                />
              </Box>

              <Box textAlign="center" flexDirection={'column'}>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  placeholder="username"
                  fullWidth
                />
              </Box>
              <Box margin={'20px 0px'}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  placeholder="******8"
                  autoComplete="current-password"
                  fullWidth
                />
              </Box>
              <Button
                onClick={() => navigate('/app/overview')}
                variant="contained"
                sx={{ ml: 1, width: '100%' }}
              >
                Login
              </Button>
            </Container>
          </Grid>
        </Grid>
      </MainContent>
    </>
  );
}

export default Login;
