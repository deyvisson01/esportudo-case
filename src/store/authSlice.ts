import { createSlice } from '@reduxjs/toolkit'
import { getLeaguesByName } from '../api/webApi'
import { AppState } from './store'

// Type for our state
export interface AuthState {
  authState: boolean
  leagues: {}
}

// Initial state
const initialState: AuthState = {
  authState: false,
  leagues: {}
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
    setLeagues(state) {
      //state.leagues = getLeagues()
      state.leagues = getLeaguesByName('premier league')
    }
  }
})

export const { setAuthState, setLeagues } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState
export const selectLeagues = (state: AppState) => state.auth.leagues

export default authSlice.reducer
