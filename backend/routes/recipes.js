import express from "express";
import cors from "cors";
import axios from "axios";
import * as fs from 'fs';

const recipeRouter = express.Router();
// function for reading data in recipes.json
function readFile ()  {
  const recipesData = fs.readFileSync('./backend/recipes.json');
  return JSON.parse(recipesData);
};



/*get request for recipeList (short version)*/
recipeRouter.get('/', (_req, res) => {
  let recipesData = readFile();
  recipesData = recipesData.map((recipe) => {
    return {
      name: recipe.name,
      ingredients: recipe.ingredients,
      steps: recipe.steps,
      imageURL: recipe. imageURL,
      originalURL: recipe.originalURL
    };
  });
  res.status(200).send(recipesData);
});

export default recipeRouter;

/*module.exports = recipeRouter;*/


