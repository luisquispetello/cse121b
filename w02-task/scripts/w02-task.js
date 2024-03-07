/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Luis Enrique Quispe Tello";
const currentYear = new Date().getFullYear();
const profilePicture = "images/photo-id-v3.png";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = (`<strong>${fullName}</strong>`)
imageElement.setAttribute('src', profilePicture)
imageElement.setAttribute('alt', `Prifle image of ${fullName}`)


/* Step 5 - Array */

const favoriteFood = ['Tacos', 'Kebab', 'Ceviche', 'Arroz chaufa', 'Chuletón']
const singleFavoriteFood = 'Pollo a la brasa'
foodElement.innerHTML += `<br>${favoriteFood}`

favoriteFood.push(singleFavoriteFood)
foodElement.innerHTML += `<br>${favoriteFood}`

favoriteFood.shift()
foodElement.innerHTML += `<br>${favoriteFood}`

favoriteFood.pop()
foodElement.innerHTML += `<br>${favoriteFood}`

