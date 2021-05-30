const getRecipeBtn = document.getElementById("getRecipe").addEventListener("click", getRecipe)

function clearField() {
  document.querySelector("#searchTerm").value = ""
}

async function getRecipe() {
    document.querySelector("#recipe1").innerHTML = ""
  try {
    const userChoice = document.querySelector("#searchTerm").value
    const url = `https://api.edamam.com/search?q=${userChoice}&app_id=%efe3aba1%`
    const foodItem = await fetch(url)
    const foodItemData = await foodItem.json()

    for(let j = 0; j < foodItemData.hits.length; j++){
      createIngredients(foodItemData.hits[j])
    }
    
    clearField()
  } catch (err) {
    console.log(err)
  }
}

const createIngredients = (meal) => {
  const ingredients = []
  for (let i = 0; i <= 20; i++) {
    if (meal.recipe.ingredientLines[`${i}`]) {
      ingredients.push(meal.recipe.ingredientLines[`${i}`])
      console.log(ingredients)
    } else {
         break
      }
  }
  

  document.querySelector("#recipe1").insertAdjacentHTML("beforeend",`
   <div class="entireContainer">
    <div class="card">
    <div class="leftContainer">
        <div class="profile-main">
            <h2 class="profile-name">${meal.recipe.label}</h2>
            
            <p class="profile-position">Cuisine:${meal.recipe.cuisineType}</p>
            <p class="profile-position">Type of Dish: ${meal.recipe.dishType}</p>
                <h3 class="ingredientsHeader">Ingredients:</h3>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
             <a href="${meal.recipe.url}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
        </div>
    </div>
        <div class="rightContainer">
        <div class="profile-sidebar">
            <img class="profile-image" src="${meal.recipe.image}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
            <ul class="recipe-card__nav">
                <h3 class="instructionsHeader">Total Calories:</h3>
                <p class="profile-position">Source:${meal.recipe.source}</p>
                <p>${meal.recipe.calories.toFixed(2)}</p>
            </ul>
            
        </div>
        </div>
          
        </div>
    </div>`

 )
}
   