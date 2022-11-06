import React from 'react'
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import { Container } from './styles'
import { useSelector } from 'react-redux'

import { selectAuthState } from '../../store/authSlice'

export default function Home() {
  const name = useSelector(selectAuthState)
  return (
    <Container>
      <Image
        alt="Loading Icon"
        src={logo}
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <h1>{`Bem vindo(a) ` + name}</h1>
    </Container>
  )
}
