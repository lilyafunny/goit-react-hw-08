import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global',
});


const setAuthHeader = token => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
    goitApi.defaults.headers.common.Authorization = ``;
};



export const register = createAsyncThunk('auth/register', async (body, thunkAPI) => {
    try {
        const response = await goitApi.post('/users/signup', body,);
        setAuthHeader(response.data.token);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
    try {
        const response = await goitApi.post('/users/login', body);
        setAuthHeader(response.data.token);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await goitApi.post('/users/logout');
        removeAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const savedToken = thunkAPI.getState().auth.token;
        if (!savedToken) {
            return thunkAPI.rejectWithValue('Token kaput');
        }

        setAuthHeader(savedToken);
        const response = await goitApi.get('users/current');
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})