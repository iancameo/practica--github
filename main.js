const productos = [
  {
    id: 1,
    nombre: "Acevichado",
    precio: 20
  },
  {
    id: 2,
    nombre: "Furai",
    precio: 20
  },
  {
    id: 3,
    nombre: "California",
    precio: 20
  },
  {
    id: 4,
    nombre: "Tropical",
    precio: 25
  },
  {
    id: 5,
    nombre: "Chicken Furai",
    precio: 25
  },
  {
    id: 6,
    nombre: "Vegetariano",
    precio: 20
  }
];

let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];

let productsContainer = document.getElementById("products-container");

function renderProductos(productsArray) {
  productsArray.forEach(producto => {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: S/${producto.precio}</p>
      <button class="productoAgregar" id="${producto.id}">Agregar</button>`;
    productsContainer.appendChild(card);
  });
  addToCartbuttons();
}

function addToCartbuttons() {
  const addButton = document.querySelectorAll(".productoAgregar");
  addButton.forEach(button => {
    button.onclick = (e) => {
      const productoId = e.currentTarget.id;
      const selectedProduct = productos.find(p => p.id == productoId);
      const existe = cartProducts.find(p => p.id == selectedProduct.id);

      if (existe) {
        existe.unidades++;
      } else {
        selectedProduct.unidades = 1;
        cartProducts.push(selectedProduct);
      }

      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    };
  });
}

renderProductos(productos);