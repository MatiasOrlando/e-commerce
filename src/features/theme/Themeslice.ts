import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  themeValue: 'light' | 'dark';
}

const initialState: ThemeState = {
  themeValue: 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    handleTheme: (state) => {
      state.themeValue = state.themeValue === 'light' ? 'dark' : 'light';
    }
  },
});

export const { handleTheme } = themeSlice.actions;

export default themeSlice.reducer;
