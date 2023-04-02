import { Box, Button, Typography } from '@mui/material';
import { useProjectActions, useProjectStore } from '../useProjectStore';

const Road = () => {
  const roadList = useProjectStore((state) => state.project.road_list);
  const { addRoad, popRoad } = useProjectActions();
  return (
    <Box sx={{ border: '3px dashed grey' }}>
      <Typography variant="h5">Road Component</Typography>
      <Button
        onClick={() => {
          addRoad();
        }}
      >
        add road
      </Button>{' '}
      <Button
        onClick={() => {
          popRoad();
        }}
      >
        pop road
      </Button>
      <div>
        {roadList.map((road) => (
          <Typography>{road}</Typography>
        ))}
      </div>
    </Box>
  );
};

export default Road;
