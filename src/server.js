import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import indexRoute from './routes/index';
// import authCheck from './middlewares/authCheck';
import apiVxod from './routes/apiVxod';
import apiShop from './routes/apiShop';
import Korzina from './routes/Korzina';
import Shop from './routes/Shop';

const PORT = 3000;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test',	 // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(morgan('dev'));
app.use(session(sessionConfig));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRoute);
// app.use(authCheck);
app.use('/api', apiVxod);
app.use('/api/shop', apiShop);
app.use('/shop', Shop);
app.use('/Korzina', Korzina);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
//
