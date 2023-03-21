import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ width: 275 }} onClick={() => navigate('/recoil')}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">
              Recoil
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              atom
            </Typography>
            <Typography variant="body2">
              Recoil lets you create a data-flow graph that flows from atoms
              (shared state) through selectors (pure functions) and down into
              your React components.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ width: 275 }} onClick={() => navigate('/zustand')}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="div">
              Zustand
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              store
            </Typography>
            <Typography variant="body2">
              <span role="img" aria-label="zustand bear">
                🐻
              </span>
              Bear necessities for state management in React
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Home;
