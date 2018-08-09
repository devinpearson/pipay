import React from 'react';
import Currencies from './Currencies';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Currencies',
    chunks: ['currencies'],
    component: (
      <Layout>
        <Currencies />
      </Layout>
    ),
  };
}

export default action;
