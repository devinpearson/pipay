import React from 'react';
import Amount from './Amount';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Amount',
    chunks: ['amount'],
    component: (
      <Layout>
        <Amount />
      </Layout>
    ),
  };
}

export default action;
