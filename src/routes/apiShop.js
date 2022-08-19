import express from 'express';
import { Drug } from '../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  // console.log('im in shop');
  const drug = await Drug.findAll({ raw: true });
  res.json(drug);
});

export default route;
