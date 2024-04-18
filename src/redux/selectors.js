// import { selectContacts } from "./contactsSlice";
// import { selectNameFilter } from "./filtersSlice";
// import { createSelector } from "@reduxjs/toolkit";

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, value) => {
//     console.log(contacts, value);
//     if (!value) {
//       return contacts;
//     }
//     return contacts.filter((contact) => {
//       return contact.name.toLowerCase().includes(value.toLowerCase());
//     });
//   }
// );
