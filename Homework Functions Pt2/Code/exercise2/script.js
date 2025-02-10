// Exercise 2
// There is a JSON with recipes. Make a call and get the following data from it:
// All Desserts
// Get the names of recipes with more than 30 reviews
// All recipes that use Cinnamon as an ingredient
// Recipes that are served as both Lunch and Dinner
// The ingredients needed for "Mango Salsa Chicken" dish
// Calculate the average number of calories for all American cusine recipes
// The average cooking time of all pasta recipes
// Find the recipe with the lowest number of reviews Link: https://dummyjson.com/recipes

const fetchRecipes = async () => {
  const response = await fetch("https://dummyjson.com/recipes");
  return response.json();
};

// All Desserts
const allDesserts = async () => {
  const data = await fetchRecipes();
  const dessertRecipes = data.recipes.filter((recipe) =>
    recipe.mealType.includes("Dessert")
  );
  return dessertRecipes;
};
(async () => {
  console.log("All Desserts:", await allDesserts());
})();

// Get the names of recipes with more than 30 reviews

const namesOfRecipes = async () => {
  const data = await fetchRecipes();
  return data.recipes.filter((recipe) => recipe.reviewCount > 30);
};
(async () => {
  console.log(
    "Names of recipes with more than 30 reviews:",
    await namesOfRecipes()
  );
})();
// All recipes that use Cinnamon as an ingredient
const recipesWithCinnamon = async () => {
  const data = await fetchRecipes();
  return data.recipes.filter((recipe) =>
    recipe.ingredients.includes("Cinnamon")
  );
};
(async () => {
  console.log(
    "All recipes that use Cinnamon as an ingredient:",
    await recipesWithCinnamon()
  );
})();

// Recipes that are served as both Lunch and Dinner
const lunchAndDinnerRecipes = async () => {
  const data = await fetchRecipes();
  return data.recipes.filter(
    (recipe) =>
      recipe.mealType.includes("Lunch") && recipe.mealType.includes("Dinner")
  );
};
(async () => {
  console.log(
    "Recipes that are served as both Lunch and Dinner:",
    await lunchAndDinnerRecipes()
  );
})();
// The ingredients needed for "Mango Salsa Chicken" dish
const mangoSalsaChicken = async () => {
  const data = await fetchRecipes();
  return data.recipes
    .filter((recipe) => recipe.name === "Mango Salsa Chicken")
    .map((recipe) => recipe.ingredients);
};
(async () => {
  console.log(
    "The ingredients needed for Mango Salsa dish:",
    await mangoSalsaChicken()
  );
})();
// Calculate the average number of calories for all American cusine recipes
const averageCalories = async () => {
  const data = await fetchRecipes();
  const cuisineRecipes = data.recipes.filter(
    (recipe) => recipe.cuisine === "American" // moze i samo vaka zosto e edno
  );
  const acerageNumberOfCalories = cuisineRecipes.reduce(
    (acc, recipe) => acc + recipe.caloriesPerServing,
    0
  );
  return acerageNumberOfCalories / cuisineRecipes.length;
};
(async () => {
  console.log(
    "The average number of calories for all American cusine recipes:",
    await averageCalories()
  );
})();
// The average cooking time of all pasta recipes
const pastaRecipes = async () => {
  const data = await fetchRecipes();
  const pasta = data.recipes.filter((recipe) => recipe.tags.includes("Pasta"));
  const averageCookingTime = pasta.reduce(
    (acc, recipe) => acc + recipe.cookTimeMinutes,
    0
  );
  const result = averageCookingTime / pasta.length;
  return result;
};
(async () => {
  console.log(
    "The average cooking time of all pasta recipes:",
    await pastaRecipes()
  );
})();
// Find the recipe with the lowest number of reviews
const recipeWithLowestReviews = async () => {
  const data = await fetchRecipes();
  const lowestReviews = data.recipes.reduce((lowestNumber, recipe) =>
    recipe.reviewCount < lowestNumber.reviewCount ? recipe : lowestNumber
  );
  return lowestReviews;
};
(async () => {
  console.log(
    "Recipe with the lowest number of reviews:",
    await recipeWithLowestReviews()
  );
})();
