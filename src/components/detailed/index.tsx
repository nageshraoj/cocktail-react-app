import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {cocktailByIdApi,getCocktails} from '../../features/cocktailSlice'
import ShowCocktails from './../show/index';
import ShowDetailedCocktail from '../show/ShowDetailedCocktail';

const Detailed = () => {
    const params:any =useParams()
    const dispatch =useDispatch()
    const {cocktails, loading,error} = useSelector(getCocktails)

    useEffect(()=>{
        dispatch(cocktailByIdApi(params.id))
    },[params])

  return (
    <>
    <ShowDetailedCocktail cocktails={cocktails}  loading={loading} error={error} />
    </>
  )
}

export default Detailed