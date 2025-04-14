const saboresMakys = ["acevichado", "furai", "tropical", "california", "teriyaki"]

function saborValido(sabor) {
  return saboresMakys.includes(sabor.toLowerCase());
}

let pedidos = []
function agregarPedido(sabor) {
  pedidos.push(sabor.toLowerCase());
}

let seguirPidiendo = true;

while (seguirPidiendo) {
    const saborElegido = prompt("¿Qué maky deseas pedir?\n" )

    if (saborValido(saborElegido)) {
        agregarPedido(saborElegido);
        alert("¡Maky agregado al pedido!");
    } else {
        alert("Ese sabor no está en el menú. Intenta con otro.");
    }

    seguirPidiendo = confirm("¿Deseas pedir otro maky?");
}

function mostrarResumenPedido() {
  console.log(" Resumen de tu pedido:");
  for (let i = 0; i < pedidos.length; i++) {
      console.log(`${i + 1}. ${pedidos[i]}`);
  }
}

mostrarResumenPedido();

