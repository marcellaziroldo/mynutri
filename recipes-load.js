async function getRecipes() {
    try {
      const response = await axios.get('http://localhost:8080/')
    /*  document.getElementById('recipes').textContent = JSON.stringify(response.data)*/
    const recipes = response.data
    const container = document.getElementById('recipes');
  container.innerHTML = '';
  recipes.forEach(recipe => {
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipesCard');
    const ingredientsHTML = recipe.ingredients.map(ingredient => {
      return `<li>${ingredient.quantity} ${ingredient.name} (${ingredient.type})</li>`;
    }).join('');
    recipeDiv.innerHTML = `
      <h2>${recipe.name}</h2>
      <h4>Ingredients:</h4>
      <ul> ${ingredientsHTML}</ul>
      <h4>Steps:</h4>
      <ol>
        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    `;
    container.appendChild(recipeDiv);
    })
    } catch (error){
      console.log ("Error geting data from server", error)
      document.getElementById('#recipes').textContent = "Something went wrong" 
    }
    }
  getRecipes()