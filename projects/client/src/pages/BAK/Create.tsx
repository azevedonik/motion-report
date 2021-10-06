import React, { FunctionComponent, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const [title, setTitle] = useState<string>('');
  const [details, setDetails] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (title && details) {
      fetch('http://localhost:8888/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          details,
        }),
      });
    }
  };

  return (
    <Container>
      <Typography variant='h6' component='h2' gutterBottom color='textSecondary'>
        Create a note
      </Typography>

      <form autoComplete='off' noValidate onSubmit={handleSubmit}>
        <TextField
          label='Note title'
          fullWidth
          required
          sx={{
            mb: '20px',
            display: 'block',
          }}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label='Note title'
          fullWidth
          required
          multiline
          rows={4}
          sx={{
            mb: '20px',
            display: 'block',
          }}
          onChange={(e) => setDetails(e.target.value)}
        />

        <Button type='submit' color='primary' variant='contained' disableElevation endIcon={<KeyboardArrowRightIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
