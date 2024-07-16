import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import axios from 'axios';
import "./addmeal.css"

export default function  AddMeal(){
    const [choose, setchoose] = useState("meal")
    const [mealName, setMealName] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
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

      formData.append('mealName', mealName);
      formData.append('description', description);
      formData.append('duration', duration);
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
        <div className="addmeal">
          <div className="logo">ASBEZA</div>
          <div className="content">
              <div className="choice">
              <div className="addm"><a href="/addmeal">Add Meal</a></div>
              <div className="addi"><a href="/addingredient">Add Ingredient</a></div>
              </div>
              <div className="mealform">
          <Box display="flex" flexDirection="column" gap={2}>
            <div className="dt1">
              <div className="dt11">
            <TextField
              label="Meal Name"
              value={mealName}
              onChange={(e) => setMealName(e.target.value)}
              width="100px"

            />
            <TextField
              label="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              width="100px"

            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              multiline
              rows={3}
              width="100px"
            />

              </div>


           
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="meal-image-upload"
            />
            <label className='ttt' htmlFor="meal-image-upload">Image
              <Box

                width="300px"
                height="250px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px dashed gray"
                borderRadius="4px"
                sx={{ cursor: 'pointer' }}
              >
                {mealImage ? (
                  <img
                    src={URL.createObjectURL(mealImage)}
                    alt="Meal"
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <Typography color="gray">+</Typography>
                )}
              </Box> 
            </label>
            </div>

            <div className="dt2">

            
            <Box display="flex" alignItems="center" gap={1}>
              <Typography>Number of Ingredients</Typography>
              <IconButton onClick={handleRemoveIngredient} disabled={ingredients.length === 1}>
                <RemoveCircleOutline />
              </IconButton>
              <Typography>{ingredients.length}</Typography>
              <IconButton onClick={handleAddIngredient}>
                <AddCircleOutline />
              </IconButton>
            </Box>
            <Typography variant="h6">Ingredients</Typography>
            {ingredients.map((ingredient, index) => (
              <div className="dtt3">
              <Box key={index} display="flex" gap={2}>
                <TextField
                  label="Ingredient Name"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                  width="200px"
                />
                <TextField
                  label="Portion"
                  value={ingredient.portion}
                  onChange={(e) => handleIngredientChange(index, 'portion', e.target.value)}
                  width="100px"
                />
              </Box>
              </div>
            ))}
            <Button onClick={(e)=>handleSubmit()} type="submit" variant="contained" color="primary" width="100px">
              Add
            </Button>
            </div>
          </Box>
          
          </div>
      </div>

        </div>
    )
}
