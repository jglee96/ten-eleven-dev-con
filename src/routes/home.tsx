import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import json from '../assets/card_list.json';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Grid container spacing={4}>
      {json.component.map((card) => (
        <Grid item key={card.path} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {card.subtitle}
              </Typography>
              <Typography variant="body2">{card.body}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate(card.path)}>
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
