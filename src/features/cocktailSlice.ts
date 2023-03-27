import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    cocktails:[{}],
    cocktail:[],
    loading:false,
    error:null
}

export const cocktailApi :any = createAsyncThunk("cocktail/fetch", async ()=>{
  const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  return response.data.drinks
})

export const cocktailByOptionApi :any = createAsyncThunk("cocktail/fetch", async (id:any)=>{
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
    return response.data.drinks
  })

  export const cocktailByIdApi :any = createAsyncThunk("cocktail/fetch", async (id:any)=>{
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    return response.data.drinks
  })
  

const  cocktailSlice = createSlice({
    name:'cocktails',
    initialState,
    reducers:{
        getCocktailsBycatagory:(state:any,action:any)=>{
            console.log(state);
            // const cocktails = state.cocktails.find((x:any)=>x.strCategory ===action.payload)
            // state.cocktails=cocktails
        }
    },
    extraReducers:{
        [cocktailApi.pending]:(state:any,action:any)=>{
            state.loading=true
        },
        [cocktailApi.fulfilled]:(state:any,action:any)=>{
            state.cocktails= action.payload
            state.loading=false
        },
        [cocktailApi.rejected]:(state:any,action:any)=>{
            state.loading=false
            state.error=action.payload
        },
        [cocktailByOptionApi.pending]:(state:any,action:any)=>{
            state.loading=true
        },
        [cocktailByOptionApi.fulfilled]:(state:any,action:any)=>{
            state.cocktails= action.payload
            state.loading=false
        },
        [cocktailByOptionApi.rejected]:(state:any,action:any)=>{
            state.loading=false
            state.error=action.payload
        },
        [cocktailByIdApi.pending]:(state:any,action:any)=>{
            state.loading=true
        },
        [cocktailByIdApi.fulfilled]:(state:any,action:any)=>{
            state.cocktails= action.payload
            state.loading=false
        },
        [cocktailByIdApi.rejected]:(state:any,action:any)=>{
            state.loading=false
            state.error=action.payload
        }
    }
})

export const {getCocktailsBycatagory} = cocktailSlice.actions

export const getCocktails = (state:any)=>state.cocktails

export default cocktailSlice.reducer