import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchdata=createAsyncThunk('netflix/fetchdata',async()=>{
    const response=await instance.get(fetchurl)
    const data=await response.data.results
    return data 
})

const netflixslice=createSlice({

    name:"netflix",
    initialState:{
        netflix:[],
        status:"idle",
        error:null
    },reducers:{},
    extraReducers:(builder)=>{
        builder.addCase (fetchdata.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchdata.fulfilled,(state,action)=>{
            console.log(action);
            state.status="success"
            state.netflix=action.payload
            
        })

        .addCase(fetchdata.rejected,(state,action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})

export default netflixslice.reducer