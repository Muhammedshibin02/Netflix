import { configureStore } from "@reduxjs/toolkit";
import  netflixreducer from "./netflixslice"

const store=configureStore({

    reducer:{
        netflix:netflixreducer
    }
})

export default store