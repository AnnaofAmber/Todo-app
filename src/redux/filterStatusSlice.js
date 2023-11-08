import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const initialFilterState = {
  status: statusFilters.all,
  };

  const filterStatusSlice = createSlice({
    name: 'filters',
    initialState: initialFilterState,
    reducers: {
      setStatusFilter(state, action) {
        state.status = action.payload;
      },
    },
  })

export const { setStatusFilter } = filterStatusSlice.actions;
export const filtersReducer = filterStatusSlice.reducer;

const initialTheme = {
  theme: false
}

const changeThemeSlice = createSlice({
  name: 'theme',
  initialState:initialTheme,
  reducers:{
    setTheme(state,action){
      state.theme = action.payload
    }
  }
})

export const {setTheme} = changeThemeSlice.actions;
export const themeReducer = changeThemeSlice.reducer;

