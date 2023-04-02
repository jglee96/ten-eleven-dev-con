import { useState } from 'react';
import Road from '../components/Road';
import { Grid, Typography } from '@mui/material';
import Info from '../components/Info';

export interface Project {
  name: string;
  project_id: number;
  building_type: string;
  building_shape_type: string;
  road_list: number[];
}

const example: Project = {
  name: 'State Management Project',
  project_id: 1234,
  building_type: '아파트',
  building_shape_type: 'Linear',
  road_list: [1, 2, 3, 4, 5],
};

export const Component = () => {
  const [project, setProject] = useState<Project>(example);

  return (
    <>
      <Typography variant="h1">Props</Typography>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Info project={project} />
        </Grid>
        <Grid item xs={6}>
          <Road project={project} setProject={setProject} />
        </Grid>
      </Grid>
    </>
  );
};
