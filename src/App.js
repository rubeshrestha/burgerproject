import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import React from 'react'

export default function App() {
  return (
    <div>
    <Layout>
      <BurgerBuilder />
    </Layout>
    </div>
  )
}

