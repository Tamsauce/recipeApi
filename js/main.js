document.querySelector('#search').addEventListener('click', getFetch)

async function getFetch(){
    try{
        const userChoice = document.querySelector('#searchTerm').value
        const url = `https://api.edamam.com/search?q=${userChoice}&app_id=%efe3aba1%`
        const foodItem = await fetch(url)
        const foodItemData = await foodItem.json()
        console.log(foodItemData)
        createCard(foodItemData)
        
    }catch (err){
        console.log(err)
 }
}

function createCard(foodItemData){
    document.querySelector("#recipe1").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[0].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[0].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[0].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[0].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[0].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[0].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe2").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[1].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[1].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[1].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[1].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[1].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[1].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe3").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[2].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[2].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[2].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[2].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[2].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[2].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe4").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[3].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[3].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[3].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[3].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[3].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[3].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe5").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[4].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[4].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[4].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[4].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[4].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[4].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe6").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[5].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[5].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[5].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[5].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[5].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[5].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe7").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[6].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[6].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[6].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[6].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[6].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[6].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        document.querySelector("#recipe8").innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${foodItemData.hits[7].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItemData.hits[7].recipe.label}</h5>
            <li class="card-text">${foodItemData.hits[7].recipe.ingredientLines[0]}</li>
            <li class="card-text">${foodItemData.hits[7].recipe.ingredientLines[1]}</li>
            <li class="card-text">${foodItemData.hits[7].recipe.ingredientLines[2]}</li>
            <a href="${foodItemData.hits[7].recipe.url}" class="btn btn-primary">Click for full recipe</a>
        </div>
        </div>`

        
 }



















