const getRecipeBtn = document.getElementById("search").addEventListener("click", getRecipe)
// const recipeContainer = document.getElementById("meal")

function clearField() {
  document.querySelector("#searchTerm").value = ""
}

async function getRecipe() {
  try {
    const userChoice = document.querySelector("#searchTerm").value
    const url = `https://api.edamam.com/search?q=${userChoice}&app_id=%efe3aba1%`
    const foodItem = await fetch(url)
    const foodItemData = await foodItem.json()
    console.log(foodItemData)
    createIngredients(foodItemData)
    clearField()
  } catch (err) {
    console.log(err)
  }
}

// const createIngredients = (foodItemData) => {
//   const ingredients = []
//   for (let i = 0; i <= foodItemData.hits.length; i++) {
//     const ingredientLines = foodItemData.hits[i].recipe.ingredientLines
//     ingredients.push(ingredientLines)
//   }
//   console.log(ingredients)
// }

const createIngredients = ({ hits }) => {
  const ingredients = []
  for (const { recipe } of hits) {
    const { ingredientLines } = recipe
    ingredients.push(ingredientLines)
  }
    

  document.querySelector("#recipe0").innerHTML =  `
    <div class="recipe-card">
          <div style="background: no-repeat url(${
            hits[0].recipe.image
          }), url('../images/plate.jpg');  background-size: contain;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[0].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[0].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[0].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`



        
        document.querySelector("#recipe1").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[1].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[1].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[1].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[1].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`

        
        document.querySelector("#recipe2").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[2].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[2].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[2].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[2].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`



        document.querySelector("#recipe3").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[3].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[3].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[3].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[3].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`

        
        document.querySelector("#recipe4").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[4].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[4].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[4].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[4].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`
        

        document.querySelector("#recipe5").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[5].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[5].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[5].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[5].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`

        document.querySelector("#recipe6").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[6].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[6].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[6].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[6].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`

        document.querySelector("#recipe7").innerHTML =  `
    <div class="recipe-card">
          <div style="background: url(${
            hits[7].recipe.image
          }), url('../images/plate.jpg') no-repeat 50% 50%;background-size: cover;
          height: 200px;
        "></div>
          <div class="recipe-card__body">
            <h1 class="recipe-card__heading">${
              hits[7].recipe.label
            }</h1>
            <ul class="recipe-card__nav">
              <li>
                <h3 id="ingredientsActive">Ingredients</h3>
              </li>
              <li>
                <h3 id="instructionsActive">Instructions</h3>
              </li>
            </ul>
            <ul class="recipe-card__ingredients active" >
                ${ingredients[7].map((ingredient) => `<li>${ingredient}</li>`).join("")}

            </ul>
            <ul class="recipe-card__instructions hidden-element">

            </ul>
            <a href="${hits[7].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
          </div>
        </div>`

    //   recipeContainer.innerHTML = newInnerHTML



    document.querySelector("#recipe8").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${hits[1].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${hits[1].recipe.label}</h2>
    <p class="profile-position">${hits[1].recipe.source}</p>
    <li class="card-text">${hits[1].recipe.ingredientLines[0]}</li>
        <li class="card-text">${hits[1].recipe.ingredientLines[1]}</li>
        <li class="card-text">${hits[1].recipe.ingredientLines[2]}</li>
        <a href="${hits[1].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

    document.querySelector("#recipe9").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${foodItemData.hits[2].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${foodItemData.hits[2].recipe.label}</h2>
    <p class="profile-position">${foodItemData.hits[2].recipe.source}</p>
    <li class="card-text">${foodItemData.hits[2].recipe.ingredientLines[0]}</li>
        <li class="card-text">${foodItemData.hits[2].recipe.ingredientLines[1]}</li>
        <li class="card-text">${foodItemData.hits[2].recipe.ingredientLines[2]}</li>
        <a href="${foodItemData.hits[2].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

    document.querySelector("#recipe10").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${foodItemData.hits[3].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${foodItemData.hits[3].recipe.label}</h2>
    <p class="profile-position">${foodItemData.hits[3].recipe.source}</p>
    <li class="card-text">${foodItemData.hits[3].recipe.ingredientLines[0]}</li>
        <li class="card-text">${foodItemData.hits[3].recipe.ingredientLines[1]}</li>
        <li class="card-text">${foodItemData.hits[3].recipe.ingredientLines[2]}</li>
        <a href="${foodItemData.hits[3].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

    document.querySelector("#recipe11").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${foodItemData.hits[4].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${foodItemData.hits[4].recipe.label}</h2>
    <p class="profile-position">${foodItemData.hits[4].recipe.source}</p>
    <li class="card-text">${foodItemData.hits[4].recipe.ingredientLines[0]}</li>
        <li class="card-text">${foodItemData.hits[4].recipe.ingredientLines[1]}</li>
        <li class="card-text">${foodItemData.hits[4].recipe.ingredientLines[2]}</li>
        <a href="${foodItemData.hits[4].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

    document.querySelector("#recipe12").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${foodItemData.hits[5].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${foodItemData.hits[5].recipe.label}</h2>
    <p class="profile-position">${foodItemData.hits[5].recipe.source}</p>
    <li class="card-text">${foodItemData.hits[5].recipe.ingredientLines[0]}</li>
        <li class="card-text">${foodItemData.hits[5].recipe.ingredientLines[1]}</li>
        <li class="card-text">${foodItemData.hits[5].recipe.ingredientLines[2]}</li>
        <a href="${foodItemData.hits[5].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

    document.querySelector("#recipe13").innerHTML = `
   <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${foodItemData.hits[6].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${foodItemData.hits[6].recipe.label}</h2>
    <p class="profile-position">${foodItemData.hits[6].recipe.source}</p>
    <li class="card-text">${foodItemData.hits[6].recipe.ingredientLines[0]}</li>
        <li class="card-text">${foodItemData.hits[6].recipe.ingredientLines[1]}</li>
        <li class="card-text">${foodItemData.hits[6].recipe.ingredientLines[2]}</li>
        <a href="${foodItemData.hits[6].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

    document.querySelector("#recipe14").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${foodItemData.hits[7].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${foodItemData.hits[7].recipe.label}</h2>
    <p class="profile-position">${foodItemData.hits[7].recipe.source}</p>
    <li class="card-text">${foodItemData.hits[7].recipe.ingredientLines[0]}</li>
        <li class="card-text">${foodItemData.hits[7].recipe.ingredientLines[1]}</li>
        <li class="card-text">${foodItemData.hits[7].recipe.ingredientLines[2]}</li>
        <a href="${foodItemData.hits[7].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

}