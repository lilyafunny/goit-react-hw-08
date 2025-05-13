import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";


export const addContact = createAsyncThunk("contacts/addTask",
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await goitApi.post("/contacts", { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await goitApi.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await goitApi.get("/contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }

});


