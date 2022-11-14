import { Helmet } from 'react-helmet-async';
import PageHeader from './pageHeader';
import PageTitleWrapper from '../../components/pageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '../../components/footer';

import AccountBalance from './accountBalance';
// import Wallets from './Wallets';
// import AccountSecurity from './AccountSecurity';
import WatchList from './watchList';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Crypto Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          {/* <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid> */}
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
