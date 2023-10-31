import { createSlice } from "@reduxjs/toolkit";
import { getCharacterById, getCharacters } from "../actions";


const initialState = {
    characters: [],
    selectedCharacter: null
}

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: {
        [getCharacters.pending]: (state, action) => {
            console.log("Loading...");
        },
        [getCharacters.fulfilled]: (state, action) => {
            state.characters = action.payload
        },
        [getCharacterById.fulfilled]: (state, action) => {
            state.selectedCharacter = action.payload
        },
        [getCharacters.rejected]: (state, action) => {
            console.log("Error");
        }
    }
    }
)


export const {}  = charactersSlice.actions