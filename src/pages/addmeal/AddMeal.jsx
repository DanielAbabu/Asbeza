import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, Typography } from '@mui/material';
// import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import "./addmeal.css"

export default function  AddMeal(){
    const [choose, setchoose] = useState("meal")
    const [mealName, setMealName] = useState('');
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
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit form logic here
    };
  
    return(
        <div className="addmeal">
            <div className="logo">ASBEZA</div>
            <div className="box">
                <div className="choi">
                    <button onClick={setchoose = "meal"}> Add Meal</button>
                    <button onClick={setchoose = "ingridient"}>Add Ingredient</button>
                </div>

                <div className="meall">
                <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Meal Name"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          fullWidth
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="meal-image-upload"
        />
        <label htmlFor="meal-image-upload">
          <Box
            width="200px"
            height="200px"
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
          <Box key={index} display="flex" gap={2}>
            <TextField
              label="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              fullWidth
            />
            <TextField
              label="Portion"
              value={ingredient.portion}
              onChange={(e) => handleIngredientChange(index, 'portion', e.target.value)}
              fullWidth
            />
          </Box>
        ))}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add
        </Button>
      </Box>
    </form>
                </div>
            </div>
        </div>
    )
}
