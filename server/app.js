import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes';

mongoose.connect('mongodb://localhost:27017/redditClone', () => {
  console.log('connected to the DATABASE');
});

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());

app.use('/api', routes);

export default app;