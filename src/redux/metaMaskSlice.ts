import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MetaMaskState {
    account: {
        id: string,
        balance: string
    }
}
const initialState: MetaMaskState = {
    account: {
        id: '',
        balance: ''
    }
}

const metaMaskSlice = createSlice({
    name: 'metaMask',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ id: string, balance: string }>) {
            state.account = action.payload;
        }
    }
})

export const { login } = metaMaskSlice.actions;
export default metaMaskSlice.reducer;