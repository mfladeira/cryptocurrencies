import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    account: {
        id: '',
        balance: 0
    }
}

const metaMaskSlice = createSlice({
    name: 'metaMask',
    initialState,
    reducers: {
        login(state, action) {
            state.account = action.payload;
        }
    }
})

export const { login } = metaMaskSlice.actions;
export default metaMaskSlice.reducer;