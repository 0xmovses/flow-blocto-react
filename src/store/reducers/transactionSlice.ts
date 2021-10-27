import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TPayload = {
    data: any | null
    count: number 
}

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: {
        data: {},
        count: 0
    },
    reducers: {
        setData: (state, { payload }: PayloadAction<TPayload>) => {
            state.data = payload.data
        },
        setCount: (state, { payload }: PayloadAction<TPayload>) => {
            state.count = payload.count
        }
    }
});

export const transactionReducer = transactionSlice.reducer;
export const { setData, setCount } = transactionSlice.actions;