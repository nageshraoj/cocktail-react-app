import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {cocktailByOptionApi,getCocktails} from '../../features/cocktailSlice'
import ShowCocktails from './../show/index';


const Cocktile = () => {
const params:any =useParams()
const dispatch =useDispatch()
useEffect(()=>{
    dispatch(cocktailByOptionApi(params.id))
},[params])


const {cocktails, loading,error} = useSelector(getCocktails)


  return (
   
  <>
     <ShowCocktails cocktails={cocktails}  loading={loading} error={error} />
    </>
   
  
  )
}

export default Cocktile