export const meals = [
  {
    id: 1,
    name: "Smoked Beef",
    ingredientId: [24, 2, 23],
    imgSrc: "../public/steak.jpg",
    preparationTime: "30 - 40 minutes",
    description: "Tender smoked beef with rich spices.",
    price: 340,
  },
  {
    id: 2,
    name: "Cheese Burger",
    ingredientId: [3, 5, 4, 1], // Beef, Cheese, Lettuce, Tomato
    imgSrc: "../public/cheeseburger.jpg",
    preparationTime: "20 - 30 minutes",
    description: "Classic burger with melted cheese.",
    price: 280,
  },
  {
    id: 3,
    name: "Chicken Alfredo",
    ingredientId: [3, 7, 5], // Chicken, Pasta, Cream (assuming Cream is an ingredient we need to add), Parmesan
    imgSrc: "../public/chickenalfredo.jpg",
    preparationTime: "25 - 35 minutes",
    description: "Creamy pasta with grilled chicken.",
    price: 320,
  },
  {
    id: 4,
    name: "Veggie Pizza",
    ingredientId: [7, 1, 5, 4], // Dough, Tomato Sauce, Cheese, Vegetables
    imgSrc: "../public/veggiepizza.jpg",
    preparationTime: "30 - 40 minutes",
    description: "Loaded with fresh vegetables.",
    price: 250,
  },
  {
    id: 5,
    name: "Grilled Salmon",
    ingredientId: [10, 14], // Salmon, Lemon, Herbs
    imgSrc: "../public/grilledsalmon.jpg",
    preparationTime: "20 - 25 minutes",
    description: "Perfectly grilled salmon with lemon.",
    price: 450,
  },
  {
    id: 6,
    name: "Pasta Primavera",
    ingredientId: [7, 14, 8], // Pasta, Seasonal Vegetables (assuming it's included in Vegetables), Olive Oil
    imgSrc: "../public/pastaprimavera.jpg",
    preparationTime: "30 minutes",
    description: "Fresh pasta with seasonal vegetables.",
    price: 280,
  },
  {
    id: 7,
    name: "Beef Tacos",
    ingredientId: [3, 1, 12, 8], // Beef, Tortillas (assuming Tortillas is an ingredient we need to add), Lettuce, Salsa
    imgSrc: "../public/beeftacos.jpg",
    preparationTime: "15 - 20 minutes",
    description: "Spicy beef tacos with fresh toppings.",
    price: 220,
  },
  {
    id: 8,
    name: "Shrimp Fried Rice",
    ingredientId: [9, 8, 14], // Shrimp, Rice, Vegetables, Soy Sauce
    imgSrc: "../public/shrimpfriedrice.jpg",
    preparationTime: "25 - 30 minutes",
    description: "Flavorful shrimp with fried rice.",
    price: 300,
  },
  {
    id: 9,
    name: "Chicken Caesar Salad",
    ingredientId: [3, 4, 1], // Chicken, Lettuce, Croutons (assuming Croutons is an ingredient we need to add), Caesar Dressing (assuming Caesar Dressing is an ingredient we need to add)
    imgSrc: "../public/chickencaesarsalad.jpg",
    preparationTime: "15 - 20 minutes",
    description: "Classic salad with grilled chicken.",
    price: 260,
  },
  {
    id: 10,
    name: "Spaghetti Carbonara",
    ingredientId: [7, 6, 5], // Spaghetti, Bacon, Eggs, Parmesan
    imgSrc: "../public/spaghetticarbonara.jpg",
    preparationTime: "20 - 25 minutes",
    description: "Rich and creamy spaghetti dish.",
    price: 300,
  },
  {
    id: 11,
    name: "Fish and Chips",
    ingredientId: [10, 11], // Fish, Potatoes, Tartare Sauce (assuming Tartare Sauce is an ingredient we need to add)
    imgSrc: "../public/fishandchips.jpg",
    preparationTime: "30 - 35 minutes",
    description: "Crispy fish with golden fries.",
    price: 400,
  },
  {
    id: 12,
    name: "Mushroom Risotto",
    ingredientId: [14, 8, 5], // Rice, Mushrooms (assuming Mushrooms is an ingredient we need to add), Broth (assuming Broth is an ingredient we need to add), Parmesan
    imgSrc: "../public/mushroomrisotto.jpg",
    preparationTime: "30 - 40 minutes",
    description: "Creamy risotto with mushrooms.",
    price: 350,
  },
  {
    id: 13,
    name: "Lamb Chops",
    ingredientId: [12, 14], // Lamb (assuming Lamb is an ingredient we need to add), Herbs, Garlic
    imgSrc: "../public/lambchops.jpg",
    preparationTime: "25 - 30 minutes",
    description: "Juicy lamb chops with herbs.",
    price: 500,
  },
  {
    id: 14,
    name: "Falafel Wrap",
    ingredientId: [14, 4, 1], // Falafel (assuming Falafel is an ingredient we need to add), Lettuce, Tomato, Sauce (assuming Sauce is an ingredient we need to add)
    imgSrc: "../public/falafelwrap.jpg",
    preparationTime: "15 - 20 minutes",
    description: "Healthy wrap with falafel.",
    price: 210,
  },
  {
    id: 15,
    name: "Quinoa Bowl",
    ingredientId: [14, 8], // Quinoa (assuming Quinoa is an ingredient we need to add), Vegetables, Dressing (assuming Dressing is an ingredient we need to add)
    imgSrc: "../public/quinoabowl.jpg",
    preparationTime: "20 - 25 minutes",
    description: "Nutritious quinoa bowl with veggies.",
    price: 250,
  },
  {
    id: 16,
    name: "Chocolate Cake",
    ingredientId: [15, 16, 17, 18], // Chocolate (assuming Chocolate is an ingredient we need to add), Flour, Sugar, Eggs
    imgSrc: "../public/chocolatecake.jpg",
    preparationTime: "45 minutes",
    description: "Rich and moist chocolate cake.",
    price: 180,
  },
  {
    id: 17,
    name: "Fruit Salad",
    ingredientId: [13], // Mixed Fruits, Honey (assuming Honey is an ingredient we need to add)
    imgSrc: "../public/fruitsalad.jpg",
    preparationTime: "10 minutes",
    description: "Fresh fruit salad with honey.",
    price: 150,
  },
  {
    id: 18,
    name: "Tiramisu",
    ingredientId: [19, 20, 21], // Coffee, Mascarpone (assuming Mascarpone is an ingredient we need to add), Ladyfingers (assuming Ladyfingers is an ingredient we need to add)
    imgSrc: "../public/tiramisu.jpg",
    preparationTime: "60 minutes",
    description: "Classic Italian dessert with coffee flavor.",
    price: 220,
  },
  {
    id: 19,
    name: "Dinich Wot",
    ingredientId: [11, 2, 22], // Potato, Onion, Berbere (assuming Berbere is an ingredient we need to add)
    imgSrc: "../public/dinichwot.png",
    preparationTime: "45 minutes",
    description: "Ethiopian potato stew with berbere spice.",
    price: 200,
  },
  {
    id: 20,
    name: "Doro Wot",
    ingredientId: [3, 2, 22, 23], // Chicken, Onion, Berbere, Spices
    imgSrc: "../public/dorowot.jpg",
    preparationTime: "60 minutes",
    description: "Spicy Ethiopian chicken stew.",
    price: 350,
  },
  {
    id: 21,
    name: "Siga Wot",
    ingredientId: [24, 2, 22, 23], // Meat, Onion, Berbere, Spices
    imgSrc: "../public/sigawot.jpg",
    preparationTime: "60 minutes",
    description: "Spicy Ethiopian beef stew.",
    price: 400,
  },
  {
    id: 22,
    name: "Kitfo",
    ingredientId: [24, 25, 23], // Meat, Butter, Spices
    imgSrc: "../public/kitfo.jpg",
    preparationTime: "30 minutes",
    description: "Ethiopian seasoned raw beef.",
    price: 300,
  },
  {
    id: 23,
    name: "Tibs",
    ingredientId: [24, 2, 23], // Meat, Onion, Spices
    imgSrc: "../public/tibs.jpg",
    preparationTime: "30 minutes",
    description: "Ethiopian sautéed meat with spices.",
    price: 280,
  },
];

export const ingredients = [
  {
    id: 1,
    name: "Tomatoes",
    price: 40,
    imgSrc: "../public/tomatoes.jpg",
  },
  {
    id: 2,
    name: "Onions",
    price: 30,
    imgSrc: "../public/onions.jpg",
  },
  {
    id: 3,
    name: "Chicken",
    price: 100,
    imgSrc: "../public/chicken.jpg",
  },
  {
    id: 4,
    name: "Lettuce",
    price: 20,
    imgSrc: "../public/lettuce.jpg",
  },
  {
    id: 5,
    name: "Cheese",
    price: 60,
    imgSrc: "../public/cheese.jpg",
  },
  {
    id: 6,
    name: "Bacon",
    price: 80,
    imgSrc: "../public/bacon.jpg",
  },
  {
    id: 7,
    name: "Pasta",
    price: 50,
    imgSrc: "../public/pasta.jpg",
  },
  {
    id: 8,
    name: "Rice",
    price: 40,
    imgSrc: "../public/rice.jpg",
  },
  {
    id: 9,
    name: "Shrimp",
    price: 120,
    imgSrc: "../public/shrimp.jpg",
  },
  {
    id: 10,
    name: "Fish",
    price: 90,
    imgSrc: "../public/fish.jpg",
  },
  {
    id: 11,
    name: "Potatoes",
    price: 30,
    imgSrc: "../public/potatoes.jpg",
  },
  {
    id: 12,
    name: "Garlic",
    price: 10,
    imgSrc: "../public/garlic.jpg",
  },
  {
    id: 13,
    name: "Fruits",
    price: 50,
    imgSrc: "../public/fruits.jpg",
  },
  {
    id: 14,
    name: "Herbs",
    price: 25,
    imgSrc: "../public/herbs.jpg",
  },
  {
    id: 15,
    name: "Chocolate",
    price: 50,
    imgSrc: "../public/chocolate.jpg",
  },
  {
    id: 16,
    name: "Flour",
    price: 20,
    imgSrc: "../public/flour.jpg",
  },
  {
    id: 17,
    name: "Sugar",
    price: 10,
    imgSrc: "../public/sugar.jpg",
  },
  {
    id: 18,
    name: "Eggs",
    price: 30,
    imgSrc: "../public/eggs.jpg",
  },
  {
    id: 19,
    name: "Coffee",
    price: 60,
    imgSrc: "../public/coffee.jpg",
  },
  {
    id: 20,
    name: "Mascarpone",
    price: 80,
    imgSrc: "../public/mascarpone.jpg",
  },
  {
    id: 21,
    name: "Ladyfingers",
    price: 40,
    imgSrc: "../public/ladyfingers.jpg",
  },
  {
    id: 22,
    name: "Berbere", 
    price: 50,
    imgSrc: "../public/berbere.jpg",
  },
  {
    id: 23,
    name: "Spices", 
    price: 30,
    imgSrc: "../public/spices.jpg",
  },
  {
    id: 24,
    name: "Meat", 
    price: 120,
    imgSrc: "../public/meat.jpg",
  },
  {
    id: 25,
    name: "Butter", 
    price: 40,
    imgSrc: "../public/butter.jpg",
  },
];

export { meals, ingredients };
