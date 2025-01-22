function handleString(recipe){
    const name=recipe.name.toUpperCase();
    const cuisine=recipe.cuisine.toLowerCase();
    return `
    <h2 class="product-title">${name}</h2>
    <p class="product-description">cusisne Type : ${cuisine}</p>
    `
}
function handleNumbers(recipe){
    const rating =recipe.rating*2;
    const cookTime =recipe.cookTimeMinutes/60;
    return `<p class="product-description"> Rating is : ${rating}</p>
    <p class="product-description"> Cook time is :${cookTime.toFixed(1)}</p>`
}
function handleArrays(recipe){
    const ingredients = recipe.ingredients;
    const ingredientList = ingredients.map((ingredient)=>`<li>${ingredient}</li>`).join('');
    return `<div class="prduct-description">
    <h3>Ingredients :</h3>
    <ul>${ingredientList}</ul>
    </div>`
}
function handleimage(recipe){
    const image = recipe.image;
    return`<img  class="product-image" src=${image}>`
}
function displayRecipe(recipe){
    const productContainer =document.getElementById(`product-container`);

    const content = `
    ${handleimage(recipe)}
    ${handleString(recipe)}
    ${handleNumbers(recipe)}
    ${handleArrays(recipe)}
    <div class="product-hardness">Difficulty: ${recipe.defficulty}</div>
    `
    productContainer.innerHTML=content;
}
fetch('https://dummyjson.com/recipes/3')
.then(res => res.json())
.then(recipe=>{
    displayRecipe(recipe)
})
.catch(error=>{
    console.error(`fetch err`,error);
})