import React, { useState, useEffect } from 'react';
import './app.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching recipes (replace with actual API call)
    const fetchRecipes = () => {
      // Simulated recipe data
      const fakeRecipes = [
        {
          id: 1,
          title: 'Spaghetti Bolognese',
          ingredients: ['Pasta', 'Tomato Sauce', 'Ground Beef', 'Onion', 'Garlic'],
          instructions: 'Cook pasta. Brown beef, add onion and garlic, stir in tomato sauce. Mix with pasta.',
          nutritionalInfo: 'Calories: 500, Protein: 20g, Fat: 10g',
        },
         { id: 2,
          title: 'Brownes',
          ingredients: ['Sugar', 'Flour', 'Cocoa powder', 'Vanilla', 'Walnuts', 'Salt','Baking powder'],
          instructions: 'Make a better of all ingredients Bake Brownes for 20 mins',
        },
        // Add more simulated recipes here
      ];

      setRecipes(fakeRecipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
    <input type="text"
    placeholder='Search for recipes...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='search-input'
     />

     <div className="recipe-container">
      {recipes
      .filter(
        (recipe) => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .map((recipe) => (
      <div
        key={recipe.id}
        className="recipe-card"
        onClick={() => setSelectedRecipe(recipe)}
      >
        <h3>{recipe.title}</h3>
        <p>{recipe.ingredients.join(', ')}</p>
      </div>
    ))}
</div>
{selectedRecipe && (
  <div className="selected-recipe">
    <h2>{selectedRecipe.title}</h2>
    <p>{selectedRecipe.instructions}</p>
    <p>{selectedRecipe.nutritionalInfo}</p>
  </div>
)}
</div>
);
};

export default App;