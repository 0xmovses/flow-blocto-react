import { combineReducers } from '@reduxjs/toolkit'
import { profileReducer } from './profileSlice'
import { transactionReducer } from './transactionSlice'

export const rootReducer = combineReducers({
    profile: profileReducer,
    transaction: transactionReducer,
})


