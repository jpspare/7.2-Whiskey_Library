import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        region: "Region",
        years_aged: "Years Aged",
        tastes: "Tastes",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseRegion: (state, action) => { state.region = action.payload},
        chooseYearsAged: (state, action) => { state.years_aged = action.payload},
        chooseTastes: (state, action) => { state.tastes = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseRegion, chooseYearsAged, chooseTastes } = rootSlice.actions