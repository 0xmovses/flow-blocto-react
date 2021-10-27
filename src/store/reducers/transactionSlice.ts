import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TPayload = {
    data: any | null
}

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        data: {},
        count: 0,
        latestBlock: 0
    },
    reducers: {
        setData: (state, action : PayloadAction<TPayload>) => {
            state.data = action.payload
        },
        setCount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        },
        setLatestBlock: (state, action: PayloadAction<number>) => {
            state.latestBlock = action.payload
        }
    }
});

export const transactionReducer = transactionSlice.reducer;
export const { setData, setCount, setLatestBlock } = transactionSlice.actions;