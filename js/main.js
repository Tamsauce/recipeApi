document.querySelector('button').addEventListener('click', getFetch)

async function getFetch(){
    try{
        const userChoice = document.querySelector('input').value
        const url = `https://api.edamam.com/search?q=${userChoice}&app_id=%efe3aba1%`
        const foodItem = await fetch(url)
        const foodItemData = await foodItem.json()
        console.log(foodItemData)
        createCard(foodItemData)
    }catch (err){
        console.log(err)
 }
}



let myArray =[]
for (let hits of Object.values(foodItemData.hits)){
    myArray.push(hits.recipe.label)
    for (let recipe of Object.values(hits.recipe)){

 function createCard(foodItemData){
    document.querySelector("#content").innerHTML = `
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
 }

}
}
 

// let myArray =[]
// for (let hits of Object.values(foodItemData.hits)){
//     myArray.push(hits.recipe.label)
//     for (let recipe of Object.values(hits.recipe)){
// }
// document.querySelector("h2").innerText = myArray
    // document.querySelector('h2').innerText = `
    //     <div class="card" style="width: 18rem;">
    //     <img src="..." class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>































// document.querySelector('button').addEventListener('click', getFetch)

// async function getFetch() {
//     try{
//         const choice = document.querySelector('input').value
//         const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e59d488df20c488695363cdefe9f1079&query=${choice}`
        
//         //url 1 is working 
//         const recipe = await fetch(url)
//         const recipeData = await recipe.json()
//         document.querySelector('h2').innerText = recipeData.results[6].title
//         document.querySelector('img').src = recipeData.results[6].image
//         document.querySelector('h3').innerText = recipeData.results[6].id
//         console.log(recipeData.results[6].id)
//         console.log(recipeData)
//         const recipeId = await recipeData.results[6].id

//         const url2 = `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=e59d488df20c488695363cdefe9f1079`

//         const instructions = await fetch(url2)
//         const instructionsData = await instructions.json()
        
//         console.log(recipeId)
//         console.log(instructionsData)
      


//     } catch(err) {
//         console.log(`error ${err}`) 
//     }
// }




// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=e59d488df20c488695363cdefe9f1079&query=${choice}`
//   const url2 = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=e59d488df20c488695363cdefe9f1079`

//   fetch(url)
//       .then(res => res.json()) 
//       .then(data => {
//         console.log(data)
// //         console.log(data.results[0].id)
//         const id = document.querySelector('h2').innerText = data.results[0].id
//         document.querySelector('img').src = data.results[0].image
        // document.querySelector('#foodItem').src = results[0].image
    
       
    //   })
    //   .catch(err => {
    //       console.log(`error ${err}`)
    //   })

    // }








 


