document.querySelector('#search').addEventListener('click', getFetch)


function clearField() {
        document.querySelector('#searchTerm').value = ""
}

async function getFetch(){
    try{
        const userChoice = document.querySelector('#searchTerm').value
        const url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userChoice}`)
        const cocktailItem = await fetch(url)
        const cocktailItemData = await cocktailItem.json()
        console.log(cocktailItemData)
        createCard(cocktailItemData)
        clearField() 
        
    }catch (err){
        console.log(err)

    }
 }


 function createCard(cocktailItemData){
    document.querySelector("#recipe0").innerHTML = `
        <div class="card">
    <div class="profile-sidebar">
        <img class="profile-image" src="${cocktailItemData.drinks[0].strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
    </div>
    <div class="profile-main">
        <h2 class="profile-name">${cocktailItemData.drinks[0].strDrink}</h2>
        <p class="profile-position">${cocktailItemData.drinks[0].strGlass}</p>
            <li class="card-text">${cocktailItemData.drinks[0].strIngredient1}</li>
            <li class="card-text">${cocktailItemData.drinks[0].strIngredient2}</li>
            <li class="card-text">${cocktailItemData.drinks[0].strIngredient3}</li>
            <a href="${cocktailItemData.drinks[0].strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
    </div>
    </div>`

    document.querySelector("#recipe1").innerHTML = `
    <div class="card">
<div class="profile-sidebar">
    <img class="profile-image" src="${cocktailItemData.drinks[1].strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
    <h2 class="profile-name">${cocktailItemData.drinks[1].strDrink}</h2>
    <p class="profile-position">${cocktailItemData.drinks[1].strGlass}</p>
        <li class="card-text">${cocktailItemData.drinks[1].strIngredient1}</li>
        <li class="card-text">${cocktailItemData.drinks[1].strIngredient2}</li>
        <li class="card-text">${cocktailItemData.drinks[1].strIngredient3}</li>
        <a href="${cocktailItemData.drinks[1].strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

document.querySelector("#recipe2").innerHTML = `
<div class="card">
<div class="profile-sidebar">
<img class="profile-image" src="${cocktailItemData.drinks[2].strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
<h2 class="profile-name">${cocktailItemData.drinks[2].strDrink}</h2>
<p class="profile-position">${cocktailItemData.drinks[2].strGlass}</p>
    <li class="card-text">${cocktailItemData.drinks[2].strIngredient1}</li>
    <li class="card-text">${cocktailItemData.drinks[2].strIngredient2}</li>
    <li class="card-text">${cocktailItemData.drinks[2].strIngredient3}</li>
    <a href="${cocktailItemData.drinks[2].strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

document.querySelector("#recipe3").innerHTML = `
<div class="card">
<div class="profile-sidebar">
<img class="profile-image" src="${cocktailItemData.drinks[3].strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
<h2 class="profile-name">${cocktailItemData.drinks[3].strDrink}</h2>
<p class="profile-position">${cocktailItemData.drinks[3].strGlass}</p>
<li class="card-text">${cocktailItemData.drinks[3].strIngredient1}</li>
<li class="card-text">${cocktailItemData.drinks[3].strIngredient2}</li>
<li class="card-text">${cocktailItemData.drinks[3].strIngredient3}</li>
<a href="${cocktailItemData.drinks[3].strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

document.querySelector("#recipe5").innerHTML = `
<div class="card">
<div class="profile-sidebar">
<img class="profile-image" src="${cocktailItemData.drinks[5].strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
<h2 class="profile-name">${cocktailItemData.drinks[5].strDrink}</h2>
<p class="profile-position">${cocktailItemData.drinks[5].strGlass}</p>
    <li class="card-text">${cocktailItemData.drinks[5].strIngredient1}</li>
    <li class="card-text">${cocktailItemData.drinks[5].strIngredient2}</li>
    <li class="card-text">${cocktailItemData.drinks[5].strIngredient3}</li>
    <a href="${cocktailItemData.drinks[5].strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`

document.querySelector("#recipe5").innerHTML = `
<div class="card">
<div class="profile-sidebar">
<img class="profile-image" src="${cocktailItemData.drinks[5].strDrinkThumb}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
</div>
<div class="profile-main">
<h2 class="profile-name">${cocktailItemData.drinks[5].strDrink}</h2>
<p class="profile-position">${cocktailItemData.drinks[5].strGlass}</p>
<li class="card-text">${cocktailItemData.drinks[5].strIngredient1}</li>
<li class="card-text">${cocktailItemData.drinks[5].strIngredient2}</li>
<li class="card-text">${cocktailItemData.drinks[5].strIngredient3}</li>
<a href="${cocktailItemData.drinks[5].strVideo}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
</div>
</div>`
 }
