let cartContainer = document.getElementById("cart-section");

let cartStorage = localStorage.getItem("cartProducts");
cartStorage = cartStorage ? JSON.parse(cartStorage) : [];

cartStorage.forEach(p => {
  if (!p.unidades) p.unidades = 1;
});

function actualizarStorage() {
  localStorage.setItem("cartProducts", JSON.stringify(cartStorage));
}

function calcularTotal() {
  return cartStorage.reduce((acc, producto) => acc + producto.precio * producto.unidades, 0);
}

function renderCarrito(cartItems) {
  cartContainer.innerHTML = "";

  cartItems.forEach((producto, index) => {
    const cart = document.createElement("div");
    cart.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio unitario: S/${producto.precio}</p>
      <p>Unidades: ${producto.unidades}</p>
      <button class="btn-mas" data-index="${index}">+</button>
      <button class="btn-menos" data-index="${index}">-</button>
      <button class="btn-borrar" data-index="${index}">Eliminar</button>
      <hr>
    `;
    cartContainer.appendChild(cart);
  });

  const total = document.createElement("h2");
  total.textContent = `Total: S/${calcularTotal()}`;
  cartContainer.appendChild(total);

  document.querySelectorAll(".btn-mas").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.dataset.index;
      cartStorage[i].unidades++;
      actualizarStorage();
      renderCarrito(cartStorage);
    });
  });

  document.querySelectorAll(".btn-menos").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.dataset.index;
      if (cartStorage[i].unidades > 1) {
        cartStorage[i].unidades--;
        actualizarStorage();
        renderCarrito(cartStorage);
      }
    });
  });

  document.querySelectorAll(".btn-borrar").forEach(btn => {
    btn.addEventListener("click", e => {
      const i = e.target.dataset.index;
      cartStorage.splice(i, 1);
      actualizarStorage();
      renderCarrito(cartStorage);
    });
  });
}

renderCarrito(cartStorage);