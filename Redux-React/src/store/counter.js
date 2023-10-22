import { createSlice } from "@reduxjs/toolkit";


const initialCounterState = {counter:0,showCounter:true}

//using slice is leaner code which uses the reduxjs toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter += action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer