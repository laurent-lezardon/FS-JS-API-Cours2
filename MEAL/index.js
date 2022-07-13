// recupération des données

let meals = [];
const reciepes = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");

console.log(input);

// récupération des recettes
const searchReciepe = async(ingredient) => {
    await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient
        )
        .then((resp) => resp.json())
        .then((data) => (meals = data.meals))
        .catch((err) => console.log(err));
    console.log(meals);
};

input.addEventListener('input', () => {
    console.log(input.value);
    console.log("Input is changing !");
    searchReciepe(input.value);
})

// Affichage des recettes

const reciepesDisplay = async() => {
    // await searchReciepe("tomato");
    if (meals.length === 0) alert('Aucun resultat pour votre recherche')
    else {
        reciepes.innerHTML = meals.map((reciepe) => {

                // console.log(reciepe.strMeal);
                let ingredientArray = [];
                for (i = 1; i < 21; i++) {

                    if (reciepe[`strIngredient${i}`]) {
                        let ingredient = reciepe[`strIngredient${i}`];
                        let measure = reciepe[`strMeasure${i}`];
                        ingredientArray.push(`<li>${ingredient} - ${measure}</li>`)
                    }
                }
                console.log(ingredientArray);
                return `
                        <li class="card">
                            <h2>${reciepe.strMeal}</h2>
                            <p>${reciepe.strArea}
                            <img src=${reciepe.strMealThumb} alt="Photo de ${reciepe.strMeal}" />
                            <ul>${ingredientArray.join("")}</ul>
                        </li>
                        `
            })
            .join("");
    }
};
// reciepesDisplay();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click!");
    reciepesDisplay();

});