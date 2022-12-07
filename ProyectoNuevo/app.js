'use strict';
import { forkiSearch } from "./forkiFecht.js";
//import {cardRecipe} from "./cardRecipe";

async function mostrarReceta() {
    const recetas = document.getElementById('recetario-cards');
    const busqueda = document.getElementById('busqueda').value
    const recipes = await callRecipes(busqueda);
    recipes.data.recipes.map(receta => {
    console.log(receta.title);

    const recipesName = document.createElement('p');
    recipesName.style.fontWeight = "bold";
    recipesName.style.fontSize = "1.5rem";
    recipesName.textContent = receta.title;

	const dataContainer = document.createElement('div')
	dataContainer.className = "dataContainer";

    const imgRecipes = document.createElement('img');
    imgRecipes.src = receta.image_url;
    imgRecipes.alt = receta.name;
    imgRecipes.className = "imgRecipes";

    const publisher = document.createElement('p');
    publisher.style= "font-size: 1.2rem; text-align:left";
    publisher.textContent = "Publisher: "+receta.publisher;

    const id = document.createElement('p');
    id.style.fontSize = "1.2rem";
    id.textContent = "Id: "+receta.id;

	dataContainer.append(imgRecipes)

    const divInfo = document.createElement("div");
    divInfo.appendChild(recipesName);
    divInfo.appendChild(publisher);
    divInfo.appendChild(id);

    divInfo.className = "divInfo";
	dataContainer.append(divInfo);

    recetas.style.border = "0.5rem solid #ffbf69";
    recetas.style.borderRadius = "1.2rem";

	recetas.append(dataContainer);
})
};

function limpiarCampo(){
    buscar.value = "";
    document.getElementById("recetario-cards").innerHTML = "";
    document.getElementById("recetario-cards").style.border = "none";
}

async function callRecipes(data) {
    return await forkiSearch(data.toLowerCase());
}

const buscador = document.getElementById('buscador');

const form = document.createElement('div');
form.className = "form";
const buscar = document.createElement('input');
buscar.id = "busqueda";
buscar.style = "width: 100%; height: 3rem; border-radius: 1rem; padding: 1rem; font-weight: 400; border: solid #ee974bc2";
buscar.placeholder = "example: Onion...";

const boton = document.createElement('button');
boton.textContent = "Buscar Recetas";
boton.onclick = mostrarReceta;
boton.style = "font-size: 1.2rem; width: 40%; height: 2.5rem; margin: 1rem; border: none; border-radius: 1.2rem; background-color:#ee974bc2; font-weight: bolder;";

const limpiar = document.createElement('button');
limpiar.textContent = "Limpiar";
limpiar.id = "Limpiar";
limpiar.onclick = limpiarCampo;
limpiar.style = "font-size: 1.2rem; width: 40%; height: 2.5rem; margin: 1rem; border: none; border-radius: 1.2rem; background-color:#ee974bc2; font-weight: bolder;";

form.append(buscar);
form.append(boton);
form.append(limpiar);

buscador.append(form)
