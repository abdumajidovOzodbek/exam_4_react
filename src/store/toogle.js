import { createSlice } from "@reduxjs/toolkit";

const uiSlice2=createSlice({
    name:'ui2',
    initialState:{cartVisiblity:false},
    reducers:{
        toggle2(state){
            state.cartVisiblity=!state.cartVisiblity
        }
    }
})
export const uiAction2=uiSlice2.actions
export default uiSlice2 