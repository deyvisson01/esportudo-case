import Head from 'next/head'

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

export default function Home() {
  const authState = useSelector(selectAuthState)
  const leagues = useSelector(selectLeagues)
  const dispatch = useDispatch()

  return (
    <Container>
      <Head>
        <title>Home page</title>
      </Head>

      <main>
        <h1>ESPORTUDO</h1>
        <div>
          <div>{authState ? 'Logged in' : 'Not Logged In'}</div>
          <button
            onClick={() =>
              authState
                ? dispatch(setAuthState(false))
                : dispatch(setAuthState(true))
            }
          >
            {authState ? 'Logout' : 'LogIn'}
          </button>

          <Button
            children="Teste"
            disabled={false}
            type="primary"
            loading={false}
            onClick={() => dispatch(setLeagues())}
          />
        </div>
      </main>
    </Container>
  )
}
