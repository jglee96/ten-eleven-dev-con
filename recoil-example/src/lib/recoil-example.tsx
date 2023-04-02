import { Grid, Typography } from '@mui/material';
import { RecoilRoot } from 'recoil';
import Info from './components/Info';
import Road from './components/Road';

export interface Project {
  name: string;
  project_id: number;
  building_type: string;
  building_shape_type: string;
  road_list: number[];
}

const Content = () => {
  return (
    <>
      <Typography variant="h1">Recoil</Typography>
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

export const Component = () => {
  return (
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  );
};
