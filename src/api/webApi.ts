import { Get, Post, Put, Delete } from './apiBase'
import { urls } from '../utils/urls.constantes'

export const getLeagues = () => {
  return Get(`${urls.GET_LEAGUES}`)
}
export const getLeaguesById = (id: number) => {
  return Get(`${urls.GET_LEAGUES}?id=${id}`)
}
export const getLeaguesByName = (name: string) => {
  return Get(`${urls.GET_LEAGUES}?search=${name}`)
}
export const getLeaguesByCountry = (country: string) => {
  return Get(`${urls.GET_LEAGUES}?country=${country}`)
}

export const getTeamsById = (id: number) => {
  return Get(`${urls.GET_TEAMS}?id=${id}`)
}
export const getTeamsByName = (name: string) => {
  return Get(`${urls.GET_TEAMS}?search=${name}`)
}
export const getTeamsByLeague = (id: number) => {
  return Get(`${urls.GET_TEAMS}?league=${id}`)
}
export const getTeamsByCountry = (country: string) => {
  return Get(`${urls.GET_TEAMS}?country=${country}`)
}

export const getCountryByName = (name: string) => {
  return Get(`${urls.GET_COUNTRY}?search=${name}`)
}
export const getCountryByCode = (code: string) => {
  return Get(`${urls.GET_COUNTRY}?code=${code}`)
}

export const getPlayersById = (id: number) => {
  return Get(`${urls.GET_PLAYERS}?id=${id}`)
}
export const getPlayersByTeam = (id: number) => {
  return Get(`${urls.GET_PLAYERS}?team=${id}`)
}
export const getPlayersByName = (name: string) => {
  return Get(`${urls.GET_PLAYERS}?search=${name}`)
}

export const getTrophiesByPlayer = (player: number) => {
  return Get(`${urls.GET_TROPHIES}?player=${player}`)
}

export const getSquadsByTeam = (team: number) => {
  return Get(`${urls.GET_SQUADS}?team=${team}`)
}
export const getSquadsByPlayer = (player: number) => {
  return Get(`${urls.GET_SQUADS}?player=${player}`)
}

export const getTopScorers = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_SCORES}?season${season}&league=${league}`)
}
export const getTopAssists = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_ASSISTS}?season${season}&league=${league}`)
}
export const getTopYellowCards = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_YELLOW_CARDS}?season${season}&league=${league}`)
}
export const getTopRedCards = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_RED_CARDS}?season${season}&league=${league}`)
}

export const getCoachs = () => {
  return Get(`${urls.GET_COACHS}`)
}
export const getCoachsById = (id: number) => {
  return Get(`${urls.GET_COACHS}?id=${id}`)
}
export const getCoachsByTeam = (team: number) => {
  return Get(`${urls.GET_COACHS}?team=${team}`)
}
export const getCoachsByName = (name: string) => {
  return Get(`${urls.GET_COACHS}?search=${name}`)
}
