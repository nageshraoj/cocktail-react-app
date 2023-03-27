import React from 'react'
import {Card,CardMedia,CardContent,Typography,Paper, CircularProgress,Grid} from '@mui/material'

const ShowDetailedCocktail = ({cocktails, loading,error} :any) => {
  return (
    <>
     {
                loading?<CircularProgress size={50} />:
      <Paper sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
  
          
   { cocktails!==null&& cocktails.map((cocktail:any,index:any)=>
          <Card key={index}  sx={{width:'100vw',  margin:'5px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}} 
         
           >
   <CardMedia
          component="img"
          image={cocktail.strDrinkThumb}
          alt={cocktail.strCategory}
         sx={{width:'50%'}}
         
        />
         <CardContent>
          <Typography variant="body2" color="text.secondary">
          <strong>Category:</strong>   {cocktail.strCategory}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>Alcoholic:</strong>  {cocktail.strAlcoholic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>Instructions:</strong>  {cocktail.strInstructions}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <strong>Glass:</strong>  {cocktail.strGlass}
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

export default ShowDetailedCocktail