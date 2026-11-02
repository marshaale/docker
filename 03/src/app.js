import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hello, World!',
    stage: process.env.NODE_ENV || 'development',
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Not Found',
  });
});

export default app;
