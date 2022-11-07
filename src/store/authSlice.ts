import { createSlice } from '@reduxjs/toolkit'
import { apiDefault } from '../api/webApi'
import { AppState } from './store'

// Type for our state
export interface AuthState {
  authState: string
  seasonSelected: number
  seasons: any
  leagues: {}
  leaguesById: {}
  leaguesBySeason: any
  leaguesByName: {}
  leaguesByCountry: {}

  teamsById: {}
  teamsByName: {}
  teamsByLeague: {}
  teamsByCountry: {}

  countryByName: {}
  countryByCode: {}

  playersById: {}
  playersByTeam: {}
  playersByName: {}

  trophiesByPlayer: {}

  squadsByTeam: {}
  squadsByPlayer: {}

  topScoresByPlayer: {}
  topAssistsByPlayer: {}
  topYellowCardByPlayer: {}
  topRedCardByPlayer: {}

  coachs: {}
  coachsById: {}
  coachsByTeam: {}
  coachsByName: {}
}

// Initial state
const initialState: AuthState = {
  authState: '',
  seasonSelected: 2019,
  seasons: {},
  leagues: {},
  leaguesById: {},
  leaguesBySeason: [],
  leaguesByName: {},
  leaguesByCountry: {},

  teamsById: {},
  teamsByName: {},
  teamsByLeague: {},
  teamsByCountry: {},

  countryByName: {},
  countryByCode: {},

  playersById: {},
  playersByTeam: {},
  playersByName: {},

  trophiesByPlayer: {},

  squadsByTeam: {},
  squadsByPlayer: {},

  topScoresByPlayer: {},
  topAssistsByPlayer: {},
  topYellowCardByPlayer: {},
  topRedCardByPlayer: {},

  coachs: {},
  coachsById: {},
  coachsByTeam: {},
  coachsByName: {}
}

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload
    },
    setSeasonSelected(state, action) {
      state.seasonSelected = action.payload
    },
    setSeasons(state) {
      state.seasons = apiDefault.getSeasons()
    },
    setLeagues(state) {
      state.leagues = apiDefault.getLeagues()
    },
    setLeaguesById(state, action) {
      state.leaguesById = apiDefault.getLeaguesById(action.payload)
    },
    setLeaguesByName(state, action) {
      state.leaguesByName = apiDefault.getLeaguesByName(action.payload)
    },
    setLeaguesBySeason(state, action) {
      state.leaguesBySeason = apiDefault.getLeaguesBySeason(action.payload)
    },
    setLeaguesByCountry(state, action) {
      state.leaguesByCountry = apiDefault.getLeaguesByCountry(action.payload)
    },
    setTeamsById(state, action) {
      state.teamsById = apiDefault.getTeamsById(action.payload)
    },
    setTeamsByName(state, action) {
      state.teamsByName = apiDefault.getTeamsByName(action.payload)
    },
    setTeamsByLeague(state, action) {
      state.teamsByLeague = apiDefault.getTeamsByLeague(action.payload)
    },
    setTeamsByCountry(state, action) {
      state.teamsByCountry = apiDefault.getTeamsByCountry(action.payload)
    },
    setCountryByName(state, action) {
      state.countryByName = apiDefault.getCountryByName(action.payload)
    },
    setCountryByCode(state, action) {
      state.countryByCode = apiDefault.getCountryByCode(action.payload)
    },
    setPlayersById(state, action) {
      state.playersById = apiDefault.getPlayersById(action.payload)
    },
    setPlayersByTeam(state, action) {
      state.playersByTeam = apiDefault.getPlayersByTeam(action.payload)
    },
    setPlayersByName(state, action) {
      state.playersByName = apiDefault.getPlayersByName(action.payload)
    },
    setTrophiesByPlayer(state, action) {
      state.trophiesByPlayer = apiDefault.getTrophiesByPlayer(action.payload)
    },
    setSquadsByTeam(state, action) {
      state.squadsByTeam = apiDefault.getSquadsByTeam(action.payload)
    },
    setSquadsByPlayer(state, action) {
      state.squadsByPlayer = apiDefault.getSquadsByPlayer(action.payload)
    },
    setTopScores(state, action) {
      state.topScoresByPlayer = apiDefault.getTopScorers(
        action.payload.season,
        action.payload.league
      )
    },
    setTopAssists(state, action) {
      state.topAssistsByPlayer = apiDefault.getTopAssists(
        action.payload.season,
        action.payload.league
      )
    },
    setTopYellowCards(state, action) {
      state.topYellowCardByPlayer = apiDefault.getTopYellowCards(
        action.payload.season,
        action.payload.league
      )
    },
    setTopRedCards(state, action) {
      state.topRedCardByPlayer = apiDefault.getTopRedCards(
        action.payload.season,
        action.payload.league
      )
    },
    setCoachs(state) {
      state.coachs = apiDefault.getCoachs()
    },
    setCoachsById(state, action) {
      state.coachsById = apiDefault.getCoachsById(action.payload)
    },
    setCoachsByTeam(state, action) {
      state.coachsByTeam = apiDefault.getCoachsByTeam(action.payload)
    },
    setCoachsByName(state, action) {
      state.coachsByName = apiDefault.getCoachsByName(action.payload)
    }
  }
})

export const {
  setAuthState,
  setLeagues,
  setSeasons,
  setSeasonSelected,
  setLeaguesBySeason
} = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState
export const selectSeasonSelected = (state: AppState) =>
  state.auth.seasonSelected

export const selectSeasons = (state: AppState) => state.auth.seasons

export const selectLeagues = (state: AppState) => state.auth.leagues
export const selectLeaguesById = (state: AppState) => state.auth.leaguesById
export const selectLeaguesByName = (state: AppState) => state.auth.leaguesByName
export const selectLeaguesBySeason = (state: AppState) =>
  state.auth.leaguesBySeason
export const selectLeaguesByCountry = (state: AppState) =>
  state.auth.leaguesByCountry

export const selectTeamsById = (state: AppState) => state.auth.teamsById
export const selectTeamsByName = (state: AppState) => state.auth.teamsByName
export const selectTeamsByLeague = (state: AppState) => state.auth.teamsByLeague
export const selectTeamsByCountry = (state: AppState) =>
  state.auth.teamsByCountry

export const selectCountryByName = (state: AppState) => state.auth.countryByName
export const selectCountryByCode = (state: AppState) => state.auth.countryByCode

export const selectPlayersById = (state: AppState) => state.auth.playersById
export const selectPlayersByTeam = (state: AppState) => state.auth.playersByTeam
export const selectPlayersByName = (state: AppState) => state.auth.playersByName

export const selectTrophiesByPlayer = (state: AppState) =>
  state.auth.trophiesByPlayer

export const selectSquadsByTeam = (state: AppState) => state.auth.squadsByTeam
export const selectSquadsByPlayer = (state: AppState) =>
  state.auth.squadsByPlayer

export const selectTopScores = (state: AppState) => state.auth.topScoresByPlayer
export const selectTopAssists = (state: AppState) =>
  state.auth.topAssistsByPlayer
export const selectTopYellowCard = (state: AppState) =>
  state.auth.topYellowCardByPlayer
export const selectTopRedCard = (state: AppState) =>
  state.auth.topRedCardByPlayer

export const selectCoachs = (state: AppState) => state.auth.coachs
export const selectCoachsById = (state: AppState) => state.auth.coachsById
export const selectCoachsByTeam = (state: AppState) => state.auth.coachsByTeam
export const selectCoachsByName = (state: AppState) => state.auth.coachsByName

export default authSlice.reducer
