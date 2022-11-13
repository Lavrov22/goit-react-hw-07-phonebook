import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectorOperation = state => state.contacts.operation;

export const selectFilter = state => state.filter;

export const selectFilterByName = createSelector([selectContacts, selectFilter],
    (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
})