document.querySelector('#search').addEventListener('click', getCocktail)



function clearField() {
        document.querySelector('#searchTerm').value = ""
}

async function getCocktail(){ 
    document.querySelector("#recipe1").innerHTML = "" 
    try{
        const userChoice = document.querySelector('#searchTerm').value
        const url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userChoice}`)
        const cocktailItem = await fetch(url)
        const cocktailItemData = await cocktailItem.json()
        console.log(cocktailItemData)
        for(let j = 0; j < cocktailItemData.drinks.length; j++){
          console.log(cocktailItemData.drinks[j])
          createCocktail(cocktailItemData.drinks[j])
        }
        clearField() 
        
    }catch (err){
        console.log(err)

    }
 }

  const createCocktail = (cocktail) => {
    const ingredients = []
    for(let i=1; i<=20; i++) {
      if(cocktail[`strIngredient${i}`]) {
        ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`)
       
      } else {
        break
      }
 
    }

 document.querySelector("#recipe1").insertAdjacentHTML("beforeend",`
   <div class="entireContainer">
    <div class="card">
    <div class="leftContainer">
        <div class="profile-main">
            <h2 class="profile-name">${cocktail.strDrink}</h2>
            <p class="profile-position">${cocktail.strGlass}</p>
            <p class="profile-position">Classification: ${cocktail.strAlcoholic}</p>
                <h3 class="ingredientsHeader">Ingredients:</h3>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
             <a href="${cocktail.strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
        </div>
    </div>
        <div class="rightContainer">
        <div class="profile-sidebar">
            <img class="profile-image" src="${cocktail.strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/cup.jpg';" width=70% alt="recipe image">
            <ul class="recipe-card__nav">
                <h3 class="instructionsHeader">Instructions:</h3>
                <p>${cocktail.strInstructions}</p>
            </ul>
            
        </div>
        </div>

        </div>
    </div>`

 )
}

      // const ingredientsToggle = document.querySelectorAll(".ingredientsActive")
      // ingredientsToggle.forEach(x => x.addEventListener("click", showIngredients))

      // const instructionsToggle = document.querySelectorAll(".instructionsActive")
      // instructionsToggle.forEach(x => x.addEventListener("click", showInstructions))

   


  // function showIngredients() {
  //     document.querySelector(".recipe-card__instructions").classList.add("hidden-element")
  //     document.querySelector(".recipe-card__ingredients").classList.remove("hidden-element")
  //     console.log("You clicked me")
  // }
  
  // function showInstructions() {
  //     document.querySelector(".recipe-card__ingredients").classList.add("hidden-element")
  //     document.querySelector(".recipe-card__instructions").classList.remove("hidden-element")
  //     console.log("You clicked me too")
  // }