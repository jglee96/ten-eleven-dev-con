import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  path: string;
  title: string;
  subtitle: string;
  body: ReactNode;
}

const ExampleCard = ({ path, title, subtitle, body }: Props) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 275 }} onClick={() => navigate(path)}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {subtitle}
          </Typography>
          <Typography variant="body2">{body}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExampleCard;
