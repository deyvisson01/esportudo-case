import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import { Container } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import GridCards from '../../components/GridCards'
import Card from '../../components/Card'

export default function Home() {
  const router = useRouter()

  const dispatch = useDispatch()

  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>
      <Header />

      <main>
        <div>
          Conheça as ligas e times de cada país e de cada temporada!
          <GridCards>
            <>
              <Card title="Buscar times" />
              <Card title="Top players" />
              <Card title="Buscar jogadores" />
              <Card title="Técnicos" />
            </>
          </GridCards>
        </div>
      </main>
    </Container>
  )
}
