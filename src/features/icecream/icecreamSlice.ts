import {createSlice,PayloadAction} from '@reduxjs/toolkit';
import {order as cakeOrder} from '../cake/cakeSlice';

type InitialState = {
    numOfIcecreams: number
}

const initialState:InitialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        order: (state,action:PayloadAction<number>) => {
            state.numOfIcecreams -= action.payload
        },
        restock: (state,action:PayloadAction<number>) => {
            state.numOfIcecreams += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrder,(state) => {
            state.numOfIcecreams--;
        })
    }
})

export const {order,restock} = icecreamSlice.actions;
export default icecreamSlice.reducer;