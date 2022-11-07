import React, { FC } from 'react'
import GridItems from '../../../../components/GridItems'
import Item from '../../../../components/Item'
import { Container } from './styles'

type Props = {
  children: JSX.Element
}

const PlayerNavigate: FC<Props> = ({ children }) => {
  return (
    <Container>
      <GridItems>
        <>
          <Item title="TESTE" />
          <Item title="TESTE" />
          <Item title="TESTE" />
          <Item title="TESTE" />
          <Item title="TESTE" />
          <Item title="TESTE" />
          <Item title="TESTE" />
        </>
      </GridItems>
    </Container>
  )
}
export default PlayerNavigate
