import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logout } from '../auth/operations';

const handlePending = state => {
    state.isLoading = true;
};

const handelRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const slice = createSlice({
    name: "contacts",
    initialState,

    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(logout.fulfilled, () => initialState)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handelRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handelRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, handelRejected)
    },

});

export default slice.reducer;
export const contactsReducer = slice.reducer;


export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], (contacts, filters) => contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()))
);



