import { Box, Typography } from '@mui/material';
import { Project } from '../routes/props';

interface Props {
  project: Project;
}
const Info = ({ project }: Props) => {
  return (
    <Box sx={{ border: '3px dashed grey' }}>
      <Typography variant="h5">Info Component</Typography>
      <Typography>{project.name}</Typography>
      <Typography>{project.project_id}</Typography>
      <Typography>{project.building_type}</Typography>
      <Typography>{project.building_shape_type}</Typography>
    </Box>
  );
};

export default Info;
