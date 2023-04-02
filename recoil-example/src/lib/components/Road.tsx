import { Box, Button, Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { projectAtom, withProject } from '../projectAtom';

const Road = () => {
  const roadList = useRecoilValue(withProject('road_list')) as number[];
  const setProject = useSetRecoilState(projectAtom);
  return (
    <Box sx={{ border: '3px dashed grey' }}>
      <Typography variant="h5">Road Component</Typography>
      <Button
        onClick={() => {
          setProject((prev) => ({
            ...prev,
            road_list: [...prev.road_list, prev.road_list.length + 1],
          }));
        }}
      >
        add road
      </Button>{' '}
      <Button
        onClick={() => {
          setProject((prev) => ({
            ...prev,
            road_list: [...prev.road_list.slice(0, -1)],
          }));
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
