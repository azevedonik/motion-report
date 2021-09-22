import { KeyboardArrowRight } from '@mui/icons-material';
import { Button, Card, CardContent, Container, TextField, Typography } from '@mui/material';
import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import { Box } from '@mui/system';
import { useInput } from '../hooks/useInput';

interface CreatePatientProps {}

const CreatePatient: FunctionComponent<CreatePatientProps> = () => {
  const { value: name, setValue: setName, bind: bindName } = useInput('');
  const { value: email, setValue: setEmail, bind: bindEmail } = useInput('');
  const [birthdate, setBirthdate] = useState(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    
  };
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant='h6' component='h2' gutterBottom color='textSecondary'>
            Criar novo paciente
          </Typography>
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
            <TextField
              sx={{
                mb: '20px',
              }}
              label='Nome'
              fullWidth
              required
              {...bindName}
            />
            <TextField
              sx={{
                mb: '20px',
              }}
              label='Email'
              fullWidth
              required
              {...bindEmail}
            />
            <Box sx={{ display: 'block', mb: '20px' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label='Data de nascimento'
                  value={birthdate}
                  onChange={(newValue) => {
                    setBirthdate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>

            <Button type='submit' color='secondary' variant='contained' disableElevation endIcon={<KeyboardArrowRight />}>
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CreatePatient;
