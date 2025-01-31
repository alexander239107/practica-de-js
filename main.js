import { baseDeDatos, dividircards, appState } from "./datos.js";
import { palabra } from "./datos.js";

const cards = document.querySelector(".contenedor-cards");

const action = document.querySelector(".div");
// baseDeDatos.map((dato) => {
//   cards.innerHTML += `<div class="card">
//       <div class="img">
//       <img src=${dato.imagen} />
//       </div>
//       <div class="paras">
//         <div class="h5">
//           <h2>${dato.nombre}</h2>
//         </div>
//         <div class="pcuo">
//           <p>${dato.precio} </p>
//         </div>
//         <div class="pma">
//           <p>${dato.modelo} </p>
//         </div>
//       </div>
//       <div class="boton">agregar al carrito</div>
//     </div>`;
// });

const crearproductemple = (dato) => {
  const { imagen, nombre, precio, modelo } = dato;
  return `<div class="card">
  <div class="img">
  <img src=${imagen} />
  </div>
  <div class="paras">
    <div class="h5">
      <h2>${nombre}</h2>
    </div>
    <div class="pcuo">
      <p>${precio} </p>
    </div>
    <div class="pma">
      <p>${modelo} </p>
    </div>
  </div>
  <div class="boton">agregar al carrito</div>
</div>`;
};
// const renderproduc = (Datos) => {
//   cards.innerHTML = Datos.map((dato) => {
//     crearproductemple(dato);
//     console.log(dato);
//   });
// };
// renderproduc(baseDeDatos);
// cards.innerHTML = crearproductemple(baseDeDatos[3]);


const actioncard = ()=> {
  appState.
} 






const BaseDiv = dividircards(6);
console.log(BaseDiv);
const renderproduc = (bases) => {
  cards.innerHTML += bases.map(crearproductemple).join("");
};
renderproduc(appState.products[appState.productsindex]);
console.log(appState.productsinit);
