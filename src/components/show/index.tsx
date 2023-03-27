import React from 'react'
import {Card,CardMedia,CardContent,Typography,Paper, CircularProgress} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const ShowCocktails = ({cocktails, loading,error} :any) => {

    const navigate = useNavigate()
  return (
    <>
    {
                loading?<CircularProgress size={50} />:
      <Paper sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
  
          
   { cocktails!==null&& cocktails.map((cocktail:any,index:any)=>
          <Card key={index}  sx={{width:'300px', height:'300px', margin:'5px',cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} 
         
           >
   <CardMedia
          component="img"
          image={cocktail.strDrinkThumb}
          alt={cocktail.strCategory}
          sx={{width:'200px', height:'200px', marginTop:2}}
          onClick ={()=>navigate(`/detailed/${cocktail.idDrink}`)}
        />
         <CardContent>
          <Typography variant="body2" color="text.secondary">
            {cocktail.strCategory}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cocktail.strAlcoholic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cocktail.strGlass}
          </Typography>
        </CardContent>
          </Card>
          )
      }
      </Paper>
   }
     
      </>
  )
}

export default ShowCocktails