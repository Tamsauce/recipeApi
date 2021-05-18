document.querySelector('#search').addEventListener('click', getFetch)


function clearField() {
        document.querySelector('#searchTerm').value = ""
}

async function getFetch(){
    try{
        const userChoice = document.querySelector('#searchTerm').value
        const url = `https://api.edamam.com/search?q=${userChoice}&app_id=%efe3aba1%`
        const foodItem = await fetch(url)
        const foodItemData = await foodItem.json()
        console.log(foodItemData)
        createCard(foodItemData)
        clearField() 
        
    }catch (err){
        console.log(err)
 }
}

function createCard(foodItemData){
    document.querySelector("#recipe0").innerHTML = `
        <div class="card">
    <div class="profile-sidebar">
        <img class="profile-image" src="${foodItemData.hits[0].recipe.image}"  onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
    </div>
    <div class="profile-main">
        <h2 class="profile-name">${foodItemData.hits[0].recipe.label}</h2>
        <p class="profile-position">${foodItemData.hits[0].recipe.source}</p>
        <li class="card-text">${foodItemData.hits[0].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[0].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[0].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[0].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
    </div>
    </div>`

        document.querySelector("#recipe1").innerHTML = `
        <div class="card">
    <div class="profile-sidebar">
        <img class="profile-image" src="${foodItemData.hits[1].recipe.image}" onerror="this.onerror=null;this.src='../images/plate.jpg';" width=70% alt="recipe image">
    </div>
    <div class="profile-main">
        <h2 class="profile-name">${foodItemData.hits[1].recipe.label}</h2>
        <p class="profile-position">${foodItemData.hits[1].recipe.source}</p>
        <li class="card-text">${foodItemData.hits[1].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[1].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[1].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[1].recipe.url}" class="btn btn-primary getRecipe">Click for full recipe</a>
    </div>
    </div>`

        document.querySelector("#recipe2").innerHTML = `
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

        document.querySelector("#recipe3").innerHTML = `
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

        document.querySelector("#recipe4").innerHTML = `
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

        document.querySelector("#recipe5").innerHTML = `
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

        document.querySelector("#recipe6").innerHTML = `
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

        document.querySelector("#recipe7").innerHTML = `
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





