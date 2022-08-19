import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { Drug } from '../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  // console.log('im in shop');
  const drug = await Drug.findAll({ raw: true });
  res.json(drug);
});

export default route;
