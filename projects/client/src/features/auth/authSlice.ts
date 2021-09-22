import { createAsyncThunk } from '@reduxjs/toolkit';

const login = createAsyncThunk('auth/login', async (username: string) => {
  const response = await fetch('https://google.com.br');
  return response.json();
});

