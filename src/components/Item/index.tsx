import React, { FC } from 'react'
import { Container } from './styles'

type Props = {
  title: string
  onClick?: () => void
}

const Item: FC<Props> = ({ title, onClick }) => {
  return (
    <div onClick={onClick}>
      <Container>
        <h1>{title}</h1>
      </Container>
    </div>
  )
}
export default Item
