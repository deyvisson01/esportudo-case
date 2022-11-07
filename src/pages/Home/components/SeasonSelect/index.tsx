import React, { FC, useState } from 'react'
import {
  DropDownList,
  ListItem,
  Main,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { selectSeasons, setSeasonSelected } from '../../../../store/authSlice'

type Props = {
  season: number
}

const TeamNavigate: FC<Props> = ({ season }) => {
  const dispatch = useDispatch()
  const [seasons, setSeasons] = useState([])
  const [seasonSelected, setSeasonSelectedLocal] = useState()

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (values: any) => () => {
    setSeasonSelectedLocal(values)
    dispatch(setSeasonSelected(values))
    setIsOpen(false)
  }

  useSelector(selectSeasons).then((values: []) => setSeasons(values))

  return (
    <>
      <Main onClick={toggling}>
        <DropDownContainer>
          <DropDownHeader>
            {seasonSelected || 'Selecione a temporada que deseja filtrar'}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {seasons.map(option => (
                  <ListItem onClick={onOptionClicked(option)} key={option}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </Main>
    </>
  )
}
export default TeamNavigate
