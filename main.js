import { baseDeDatos } from "./datos.js";
import { palabra } from "./datos.js";

const cards = document.querySelector(".contenedor-cards");

baseDeDatos.map((dato) => {
  cards.innerHTML += `<div class="card">
      <div class="img">
      <img src=${dato.imagen} />
      </div>
      <div class="paras">
        <div class="h5">
          <h2>${dato.nombre}</h2>
        </div>
        <div class="pcuo">
          <p>${dato.precio} </p>
        </div>
        <div class="pma">
          <p>${dato.modelo} </p>
        </div>
      </div>
      <div class="boton">agregar al carrito</div>
    </div>`;
});
