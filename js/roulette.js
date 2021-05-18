const getRecipeBtn = document.getElementById('getRecipe').addEventListener('click', getRecipe)
const recipeContainer = document.getElementById('meal')

async function getRecipe() {
	try {
	const url = ('https://www.themealdb.com/api/json/v1/1/random.php')
	const recipeItem = await fetch(url)
	const recipeItemData = await recipeItem.json()
		console.log(recipeItemData)
		createMeal(recipeItemData.meals[0])
	}catch (error) {
		console.log(error)
	}
}


const createMeal = (meal) => {
	const ingredients = []
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			break
		}
	}


	const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${meal.strYoutube ? `
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`
	
	recipeContainer.innerHTML = newInnerHTML;
}







