import Head from 'next/head'
//import Image from 'next/image'

import { selectAuthState, setAuthState } from '../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const authState = useSelector(selectAuthState)
  const dispatch = useDispatch()

  return (
    <div>
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
        </div>
      </main>
    </div>
  )
}
