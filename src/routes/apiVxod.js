import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../db/models';

const route = express.Router();

route.post('/registration', async (req, res) => {
  const { name, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.findOne({ where: { name } });
    if (!user) {
      const newUser = await User.create({ name, email, password: hashPassword });
      req.session.userSession = { name: newUser.name };
      return res.json({ name: newUser.name });
    }
    res.status(400).json({ message: 'Такой name уже занят' });
  } catch (err) {
    console.error(err);
  }
});

route.post('/login', async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.userSession = { name: user.name };
        return res.json({ name: user.name });
      }
    }
    res.status(400).json({ message: 'name или пароль не верны' });
  } catch (err) {
    console.error(err);
  }
});

route.get('/logout', async (req, res) => {
  res.clearCookie('user_sid'); // Удалить куку
  req.session.destroy(); // Завершить сессию
  res.sendStatus(200);
});

export default route;
