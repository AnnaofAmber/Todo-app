import { createSlice } from "@reduxjs/toolkit";

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