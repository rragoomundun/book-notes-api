import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

if (ENV === 'dev') {
  app.use(morgan('dev'));
}

app.listen(PORT, () => {
  console.log(`Server is running in ${ENV} mode on port ${PORT}`);
});