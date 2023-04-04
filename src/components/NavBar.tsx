import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Outlet } from 'react-router-dom';
import { useDarkModeStore } from 'src/useDarkModeStore';

const NavBar = () => {
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BUILDIT DEVELOPER CONFERENCE
          </Typography>
          <div>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => toggleDarkMode()}
            >
              <DarkModeIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
};

export default NavBar;
