import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/index';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
