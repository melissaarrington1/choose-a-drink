const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const cocktailSection = document.querySelector(".cocktail-section");

const cocktailButton = document.querySelector(".button");

//we need a function to be able to display a cocktail on the screen in the format below.

// <div class="columns">
//             <div class="column">
//                 <div class="card">
//                     <div class="card-image">
//                       <figure class="image is-4by3">
//                         <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
//                       </figure>
//                     </div>
//                   </div>
//             </div>

//           </div>

async function getListOfCocktails() {
  cocktailSection.innerHTML = "";
  let result = await fetch(API_URL);
  const json = await result.json();
  console.log(json.drinks[0].strDrinkThumb);
  //   const cocktailImage = json.drinks[0].strDrinkThumb;

  json.drinks.forEach(cocktailImage => {
    const columnElement = document.createElement("div");
    columnElement.classList.add("column");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    columnElement.appendChild(cardElement);

    const cardImageElement = document.createElement("div");
    cardImageElement.classList.add("card-image");
    columnElement.appendChild(cardImageElement);

    const figureElement = document.createElement("div");
    figureElement.classList.add("image");
    cardImageElement.appendChild(figureElement);

    const imageElement = document.createElement("img");
    imageElement.src = cocktailImage.strDrinkThumb;
    figureElement.appendChild(imageElement);

    cocktailSection.appendChild(columnElement);
  });
}
cocktailButton.addEventListener("click", getListOfCocktails);
