import React from 'react'
import Historycard from '../components/Historycard'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

function history() {
  return (
    <Layout>
      <Navbar namePages="History" />
      <Historycard />
    </Layout>
  )
}

export default history