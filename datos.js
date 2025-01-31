export const palabra = "HOLA";
export const baseDeDatos = [
  {
    imagen: "https://mla-s1-p.mlstatic.com/699020-MLA47009899411_082021-F.jpg",
    nombre: "Guitarra Eléctrica",
    modelo: "Fender Stratocaster",
    precio: 1200,
  },
  {
    imagen:
      "https://media1.101db.com.ar/12971-Productos/guitarra-electrica-fender-squier-mini-stratocaster-black.jpg",
    nombre: "Bajo Eléctrico",
    modelo: "Gibson Thunderbird",
    precio: 1500,
  },
  {
    imagen:
      "https://tiendafeedback.com.ar/62110-large_default/bateria-acustica-yamaha-stage-raven-black-de-5-cuerpos-con-bombo-22-sbp2f5rb.jpg",
    nombre: "Batería",
    modelo: "Yamaha Stage Custom",
    precio: 800,
  },
  {
    imagen:
      "https://artemusical.com.ar/wp-content/uploads/2024/08/D_NQ_NP_2X_756765-MLA75594144829_042024-F.webp",
    nombre: "Piano Digital",
    modelo: "Roland FP-30X",
    precio: 600,
  },
  {
    imagen: "https://http2.mlstatic.com/D_975425-MLU74367714634_022024-C.jpg",
    nombre: "Saxofón",
    modelo: "Yamaha YAS-280",
    precio: 850,
  },
  {
    imagen:
      "https://m.media-amazon.com/images/I/61s6oM9bUCL._AC_UF894,1000_QL80_.jpg",
    nombre: "Violin",
    modelo: "Stentor 1500",
    precio: 400,
  },
  {
    imagen:
      "https://www.gonzalezvientos.com.ar/gvstore/wp-content/uploads/2017/08/1.jpg",
    nombre: "Trombón",
    modelo: "Bach TB200",
    precio: 1100,
  },
  {
    imagen: "https://mla-s1-p.mlstatic.com/949270-MLA75069559176_032024-F.jpg",
    nombre: "Flauta",
    modelo: "Gemeinhardt 2SP",
    precio: 300,
  },
  {
    imagen: "https://example.com/img9.jpg",
    nombre: "Clarinete",
    modelo: "Buffet Crampon E11",
    precio: 600,
  },
  {
    imagen: "https://example.com/img10.jpg",
    nombre: "Arpa",
    modelo: "Salvi Diana",
    precio: 2000,
  },
  {
    imagen: "https://example.com/img11.jpg",
    nombre: "Guitarra Acústica",
    modelo: "Yamaha F310",
    precio: 150,
  },
  {
    imagen: "https://example.com/img12.jpg",
    nombre: "Mandolina",
    modelo: "The Loar LM-520",
    precio: 450,
  },
  {
    imagen: "https://example.com/img13.jpg",
    nombre: "Ukulele",
    modelo: "Kala KA-15S",
    precio: 70,
  },
  {
    imagen: "https://example.com/img14.jpg",
    nombre: "Acordeón",
    modelo: "Hohner Bravo III",
    precio: 700,
  },
];

export const dividircards = (size) => {
  let productslist = [];
  for (let i = 0; i < baseDeDatos.length; i += size) {
    productslist.push(baseDeDatos.slice(i, i + size));
  }
  console.log(productslist);
  return productslist;
};

export const appState = {
  products: dividircards(4),
  productsinit: dividircards(4).length,
  productsindex: 0,
};
