import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import { Container } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import GridCards from '../../components/GridCards'
import Card from '../../components/Card'
import Modal from '../../components/Modal'
import GridItems from '../../components/GridItems'
import Item from '../../components/Item'
import TeamNavigate from './components/TeamNavigate'
import SeasonSelect from './components/SeasonSelect'
import { setSeasons } from '../../store/authSlice'

export default function Home() {
  const router = useRouter()

  const [showTeamsModal, setShowTeamsModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSeasons())
  }, [dispatch])

  return (
    <>
      <Container>
        <Head>
          <title>Home page</title>
        </Head>
        <Header />
        <h2>Conheça as ligas e times de cada país e de cada temporada!</h2>
        <main>
          <div>
            <GridCards>
              <>
                <Card
                  title="Buscar times"
                  onClick={() => setShowTeamsModal(true)}
                />
                <Card title="Top players" />
                <Card title="Buscar jogadores" />
                <Card title="Técnicos" />
              </>
            </GridCards>
          </div>
        </main>
      </Container>
      {showTeamsModal && (
        <Modal
          maxWidth={'100%'}
          width={'70%'}
          title="Buscar times"
          onClose={() => setShowTeamsModal(false)}
        >
          <>
            Selecione a temporada
            <SeasonSelect season={2019} />
            <TeamNavigate season={2019} />
          </>
        </Modal>
      )}
    </>
  )
}
