import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState,
  selectors: {
    selectNameFilter: (state) => state.filters.name,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters.name = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const { selectNameFilter } = filtersSlice.selectors;
