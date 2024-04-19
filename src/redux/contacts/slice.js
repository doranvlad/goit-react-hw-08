import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/slice";
import { logoutThunk } from "../auth/operations";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => {
      return state.contacts.items;
    },
    selectIsLoading: (state) => {
      return state.contacts.loading;
    },
    selectIsError: (state) => {
      return state.contacts.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.pending, (state) => {
        state.contacts.items = [];
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.error = null;
        state.contacts.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.error = action.payload;
        state.contacts.loading = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.contacts.items, selectNameFilter],
  (contacts, value) => {
    if (!value) {
      return contacts;
    }
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(value.toLowerCase());
    });
  }
);

export const contactsReducer = contactsSlice.reducer;
export const { selectContacts, selectIsLoading, selectIsError } =
  contactsSlice.selectors;
