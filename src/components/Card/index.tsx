import React, { FC } from 'react'
import { Container } from './styles'

type Props = {
  title: string
}

const Card: FC<Props> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  )
}
export default Card
