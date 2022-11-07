import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GridItems from '../../../../components/GridItems'
import Item from '../../../../components/Item'
import {
  selectLeaguesBySeason,
  selectSeasonSelected,
  setLeaguesBySeason
} from '../../../../store/authSlice'
import { Container } from './styles'

type Props = {
  season: number
}

const TeamNavigate: FC<Props> = ({ season }) => {
  const dispatch = useDispatch()
  const [leagues, setLeagues] = useState([])
  const selectedSeason = useSelector(selectSeasonSelected)

  useEffect(() => {
    if (selectedSeason !== 0) {
      dispatch(setLeaguesBySeason(selectedSeason))
    }
  }, [selectedSeason])

  useSelector(selectLeaguesBySeason).then((values: []) => setLeagues(values))
  console.log(leagues)

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
export default TeamNavigate
