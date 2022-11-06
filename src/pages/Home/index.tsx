import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import { Container } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'

export default function Home() {
  const router = useRouter()

  const dispatch = useDispatch()

  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <Header />
        <h1>ESPORTUDO</h1>
        <div></div>
      </main>
    </Container>
  )
}
