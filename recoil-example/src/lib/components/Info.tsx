import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { withProject } from '../projectAtom';

const Info = () => {
  const name = useRecoilValue(withProject('name')) as string;
  const project_id = useRecoilValue(withProject('project_id')) as number;
  const building_type = useRecoilValue(withProject('building_type')) as string;
  const building_shape_type = useRecoilValue(
    withProject('building_shape_type')
  ) as string;

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
