export const GLOBAL_CONFIG = {
  API: {
    SERVER_PORT: process.env.API_SERVER_PORT || 3000,
    API_ROUTES: {
      AUTH: 'auth',
      PATIENT: 'patient',
    },
  },

  // Database config

  POSTGRES: {
    HOST: process.env.DATABASE_HOST || 'localhost',
    PORT: Number.parseInt(process.env.DATABASE_PORT) || 5432,
    USERNAME: process.env.DATABASE_USERNAME || 'postgres',
    PASSWORD: process.env.DATABASE_PASSWORD || '',
    DATABASE: process.env.DATABASE_DB || 'postgres',
  },
};
