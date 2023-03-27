import React,{useEffect} from 'react'
import ShowCocktails from './../show/index';
import {useDispatch,useSelector} from 'react-redux'
import {cocktailApi,getCocktails} from '../../features/cocktailSlice'

const HomePage = () => {
    const {cocktails, loading,error} = useSelector(getCocktails)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(cocktailApi())
    },[])

  return (
    <>
     <ShowCocktails cocktails={cocktails}  loading={loading} error={error} />
    </>
  )
}

export default HomePage