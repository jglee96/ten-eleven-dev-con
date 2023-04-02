import { Typography, Grid } from '@mui/material';
import Info from './components/Info';
import Road from './components/Road';

export const Component = () => {
  return (
    <>
      <Typography variant="h1">Zustand</Typography>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Info />
        </Grid>
        <Grid item xs={6}>
          <Road />
        </Grid>
      </Grid>
    </>
  );
};
