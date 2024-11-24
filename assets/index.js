const precio = 400000;
let cantidad = 0;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector (".valor-total");
const buttonplus = document.querySelector (".button-plus");
const buttonminus = document.querySelector (".button-minus");

precioSpan.innerHTML = precio;

buttonplus.addEventListener("click", () => {
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
    valorTotalSpan.innerHTML = precio * cantidad;
});

buttonminus.addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad = cantidad - 1;
        cantidadSpan.innerHTML = cantidad;
        valorTotalSpan.innerHTML = precio * cantidad;
    }
});