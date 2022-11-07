import { Get } from './apiBase'
import { urls } from '../utils/urls.constantes'

const getSeasons = async () => {
  return Get(`${urls.GET_LEAGUES}/seasons`)
}

const getLeagues = () => {
  return Get(`${urls.GET_LEAGUES}`)
}
const getLeaguesById = (id: number) => {
  return Get(`${urls.GET_LEAGUES}?id=${id}`)
}
const getLeaguesByName = (name: string) => {
  return Get(`${urls.GET_LEAGUES}?search=${name}`)
}
const getLeaguesBySeason = (season: number) => {
  return Get(`${urls.GET_LEAGUES}?season=${season}`)
}
const getLeaguesByCountry = (country: string) => {
  return Get(`${urls.GET_LEAGUES}?country=${country}`)
}

const getTeamsById = (id: number) => {
  return Get(`${urls.GET_TEAMS}?id=${id}`)
}
const getTeamsByName = (name: string) => {
  return Get(`${urls.GET_TEAMS}?search=${name}`)
}
const getTeamsByLeague = (id: number) => {
  return Get(`${urls.GET_TEAMS}?league=${id}`)
}
const getTeamsByCountry = (country: string) => {
  return Get(`${urls.GET_TEAMS}?country=${country}`)
}

const getCountryByName = (name: string) => {
  return Get(`${urls.GET_COUNTRY}?search=${name}`)
}
const getCountryByCode = (code: string) => {
  return Get(`${urls.GET_COUNTRY}?code=${code}`)
}

const getPlayersById = (id: number) => {
  return Get(`${urls.GET_PLAYERS}?id=${id}`)
}
const getPlayersByTeam = (id: number) => {
  return Get(`${urls.GET_PLAYERS}?team=${id}`)
}
const getPlayersByName = (name: string) => {
  return Get(`${urls.GET_PLAYERS}?search=${name}`)
}

const getTrophiesByPlayer = (player: number) => {
  return Get(`${urls.GET_TROPHIES}?player=${player}`)
}

const getSquadsByTeam = (team: number) => {
  return Get(`${urls.GET_SQUADS}?team=${team}`)
}
const getSquadsByPlayer = (player: number) => {
  return Get(`${urls.GET_SQUADS}?player=${player}`)
}

const getTopScorers = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_SCORES}?season${season}&league=${league}`)
}
const getTopAssists = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_ASSISTS}?season${season}&league=${league}`)
}
const getTopYellowCards = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_YELLOW_CARDS}?season${season}&league=${league}`)
}
const getTopRedCards = (season: number, league: number) => {
  return Get(`${urls.GET_TOP_RED_CARDS}?season${season}&league=${league}`)
}

const getCoachs = () => {
  return Get(`${urls.GET_COACHS}`)
}
const getCoachsById = (id: number) => {
  return Get(`${urls.GET_COACHS}?id=${id}`)
}
const getCoachsByTeam = (team: number) => {
  return Get(`${urls.GET_COACHS}?team=${team}`)
}
const getCoachsByName = (name: string) => {
  return Get(`${urls.GET_COACHS}?search=${name}`)
}

export const apiDefault = {
  getSeasons,
  getLeagues,
  getLeaguesById,
  getLeaguesByName,
  getLeaguesBySeason,
  getLeaguesByCountry,
  getTeamsById,
  getTeamsByName,
  getTeamsByLeague,
  getTeamsByCountry,
  getCountryByName,
  getCountryByCode,
  getPlayersById,
  getPlayersByTeam,
  getPlayersByName,
  getTrophiesByPlayer,
  getSquadsByTeam,
  getSquadsByPlayer,
  getTopScorers,
  getTopAssists,
  getTopYellowCards,
  getTopRedCards,
  getCoachs,
  getCoachsById,
  getCoachsByTeam,
  getCoachsByName
}
