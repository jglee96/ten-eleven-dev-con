import { Box, Button, Stack, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react';

interface LabelProps {
  counter: number;
}

const Label = (props: LabelProps) => {
  return <Typography variant="h1">{props.counter}</Typography>;
};

export const Component = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <Box>
      <Label counter={counter} />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="large"
          sx={{ width: 100 }}
          onClick={() => setCounter((state) => state + 1)}
        >
          <Typography variant="h1">+</Typography>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: 100 }}
          onClick={() => setCounter((state) => state - 1)}
        >
          <Typography variant="h1">-</Typography>
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ width: 100 }}
          onClick={() => setCounter(0)}
        >
          <RefreshIcon />
        </Button>
      </Stack>
    </Box>
  );
};
