import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser } from "../services/auth.service";


export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
    const res = await getCurrentUser();
    return res.data; 
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle', // 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkAuth.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.user = {
                    username: action.payload.username,
                    roles: action.payload.roles,
                };
                state.status = 'succeeded';
            })
            .addCase(checkAuth.rejected, (state) => {
                state.user = null;
                state.status = 'failed';
            });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;