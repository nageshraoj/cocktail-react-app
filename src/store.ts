import {configureStore} from '@reduxjs/toolkit'
import cocktailsReducer from './features/cocktailSlice'

const store = configureStore({
    reducer:{
        cocktails:cocktailsReducer
    }
})

export default store