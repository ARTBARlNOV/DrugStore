import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Layout from '../components/Layout';
import { Drug } from '../db/models';

const route = express.Router();

route.get('/', async (req, res) => {
  const drug = await Drug.findAll({ raw: true });
  console.log(drug);
  const initState = { path: req.originalUrl, userSession: req.session.userSession, drug };
  const html = renderToString(<Layout initState={initState} />);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

export default route;
