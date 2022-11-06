import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import { Container } from './Home/container'

import {
  selectAuthState,
  selectLeagues,
  setAuthState,
  setLeagues
} from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Home() {
  const router = useRouter()
  const authState = useSelector(selectAuthState)
  const leagues = useSelector(selectLeagues)

  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const enterUserName = () => {
    setLoading(true)
    dispatch(setAuthState(userName))
    setTimeout(() => router.push('/teste'), 3000)
  }

  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>ESPORTUDO</h1>
        <div>
          <Input
            width="500px"
            placeholder="Entre com o seu nome de usuário"
            error={''}
            defaultValue={userName}
            onChange={e => setUserName(e.target.value)}
          />

          <Button
            children="Avançar"
            disabled={false}
            type="primary"
            loading={loading}
            onClick={() => enterUserName()}
          />
        </div>
      </main>
    </Container>
  )
}
