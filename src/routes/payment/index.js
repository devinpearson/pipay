import React from 'react';
import Payment from './Payment';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Payment',
    chunks: ['payment'],
    component: (
      <Layout>
        <Payment />
      </Layout>
    ),
  };
}

export default action;
