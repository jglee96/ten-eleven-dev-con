import { Box, Button, Typography } from '@mui/material';
import { Project } from '../routes/props';

interface Props {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
}
const Road = ({ project, setProject }: Props) => {
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
        {project.road_list.map((road) => (
          <Typography>{road}</Typography>
        ))}
      </div>
    </Box>
  );
};

export default Road;
