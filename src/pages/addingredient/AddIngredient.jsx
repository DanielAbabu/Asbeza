import "./addingredient.css"
import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import axios from 'axios';


export default function AddIngredient(){
    const [choose, setchoose] = useState("meal")
    const [Ingredientname, setIngredientname] = useState('');
    const [price, setprice] = useState('');
    const [mealImage, setMealImage] = useState(null);
    const [ingredients, setIngredients] = useState([{ name: '', portion: '' }]);
  
    const handleAddIngredient = () => {
      setIngredients([...ingredients, { name: '', portion: '' }]);
    };
  
    const handleRemoveIngredient = () => {
      setIngredients(ingredients.slice(0, -1));
    };
  
    const handleIngredientChange = (index, field, value) => {
      const newIngredients = [...ingredients];
      newIngredients[index][field] = value;
      setIngredients(newIngredients);
    };
  
    const handleImageChange = (e) => {
      setMealImage(e.target.files[0]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('Ingredientname', Ingredientname);
      formData.append('price', price);
      formData.append('mealImage', mealImage);
      formData.append('ingredients', JSON.stringify(ingredients));
    
      try {
        const response = await axios.post('YOUR_BACKEND_URL_HERE', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        if (response.status === 200) {
          console.log('Meal added successfully');
        } else {
          console.error('Error adding meal');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return(
        <div className="adding">
          <div className="logo"> ASBEZA</div>
          <div className="content">
          <div className="choice">
                <div className="didi">

              <div className="addm"><a href="/addmeal">Add Meal</a></div>
              <div className="addi"><a href="/addingredient">Add Ingredient</a></div>
                </div>
                <div className="logout"><a href="/login">Logout</a> </div>
              </div>
          <Box className="kkkk" display="flex" flexDirection="column" width={"400px"} gap={5}>

            <TextField
              label="Ingredient Name"
              value={Ingredientname}
              onChange={(e) => setIngredientname(e.target.value)}
              fullWidth

            />
            <TextField
              label="price"
              value={price}
              onChange={(e) => setprice(e.target.value)}
              
              fullWidth
            />



            <Button onClick={(e)=>handleSubmit()} type="submit" variant="contained" color="primary" width="100px">
              Add
            </Button>
          </Box>
          
          </div>

        </div>
    )
}
