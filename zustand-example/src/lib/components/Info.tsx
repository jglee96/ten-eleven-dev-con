import { Box, Typography } from '@mui/material';
import { useProjectStore } from '../useProjectStore';

const Info = () => {
  const name = useProjectStore((state) => state.project.name);
  const project_id = useProjectStore((state) => state.project.project_id);
  const building_type = useProjectStore((state) => state.project.building_type);
  const building_shape_type = useProjectStore(
    (state) => state.project.building_shape_type
  );

  return (
    <Box sx={{ border: '3px dashed grey' }}>
      <Typography variant="h5">Info Component</Typography>
      <Typography>{name}</Typography>
      <Typography>{project_id}</Typography>
      <Typography>{building_type}</Typography>
      <Typography>{building_shape_type}</Typography>
    </Box>
  );
};

export default Info;
