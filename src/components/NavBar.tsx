import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            BUILDIT DEVELOPER CONFERENCE
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
};

export default NavBar;
