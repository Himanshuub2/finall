
import {createSlice} from "@reduxjs/toolkit"


const productSlice = createSlice({

    name:"product",

    initialState:{item:{},flag:true},

    reducers:{

        handleClick:(state,action)=>{
            state.item = action.payload.payload.data1
            state.flag = action.payload.payload.data2
           
        },

        handleHome:(state,action)=>{
            state.flag = action.payload.payload
        }
    }
})

export default productSlice.reducer;

export const {handleClick,handleHome}= productSlice.actions