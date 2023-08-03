import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
    name:'ui',
    initialState:{cartVisiblity:false},
    reducers:{
        toggle(state){
            state.cartVisiblity=!state.cartVisiblity
        }
    }
})
export const uiAction=uiSlice.actions
export default uiSlice 