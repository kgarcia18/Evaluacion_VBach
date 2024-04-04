import { lista_de_componentes } from "./Data.js";

function cargar_div(){
    console.log(lista_de_componentes);

    let div = document.querySelector("#root");

    lista_de_componentes.forEach((cada_tarea) => {


        let div_tarea = document.createElement("div");
        div_tarea.classList.add("div_tareas");
    
        div_tarea.innerHTML=`
            <div class="caja">
                <h1 class="titulo">${cada_tarea.nombre}</h1>
                <p class="texto texto">${cada_tarea.descripcion}</p>
                <button class="boton">Boton</button>
            </div>
        `
    
        div.appendChild(div_tarea);
    
    });
}
cargar_div();

