import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface favoritesCharactersStateProps {
  charactersList: number[]
}

const initialState: favoritesCharactersStateProps = {
  charactersList: [],
}

export const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<number>): favoritesCharactersStateProps => {
      return {charactersList: [...state.charactersList, action.payload]}
    },
    removeCharacter: (state, action: PayloadAction<number>): favoritesCharactersStateProps => {
      return {charactersList: state.charactersList.filter((character) => character !== action.payload)}
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCharacter, removeCharacter } = charactersSlice.actions

export default charactersSlice.reducer