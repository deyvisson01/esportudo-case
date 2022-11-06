import React, { FC } from 'react'
import { Container } from './styles'

type Props = {
  children: JSX.Element
}

const Card: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}
export default Card
