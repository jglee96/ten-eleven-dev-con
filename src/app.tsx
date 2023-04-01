import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './routes/home';
import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import NavBar from './components/NavBar';

const theme = createTheme();

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}>
      <Route path="/" element={<Home />} />
      <Route
        path="state"
        lazy={() => import('@ten-eleven-dev-con/state-example')}
      />
      <Route
        path="dom"
        lazy={() => import('@ten-eleven-dev-con/dom-example')}
      />
      <Route path="props" lazy={() => import('./routes/props')} />
      <Route
        path="zustand"
        lazy={() => import('@ten-eleven-dev-con/zustand-example')}
      />
      <Route
        path="recoil"
        lazy={() => import('@ten-eleven-dev-con/recoil-example')}
      />
    </Route>
  )
);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />{' '}
    </ThemeProvider>
  );
}

export default App;
