document.addEventListener('DOMContentLoaded', function () {
  const btnAgregarLibro = document.getElementById('btnAgregar');
  const tituloInput = document.getElementById('titulo');
  const precioInput = document.getElementById('precio');
  const listaProductos = document.getElementById('lista-productos');

  const listaCarrito = document.getElementById('lista-carrito');
  const totalSpan = document.getElementById('total');
  let total = 0;

  // Agregar nuevo libro a la tienda
  btnAgregarLibro.addEventListener('click', function () {
    const titulo = tituloInput.value.trim();
    const precio = parseFloat(precioInput.value);

    if (titulo === '' || isNaN(precio) || precio <= 0) {
      alert('Por favor ingresá un título y un precio válido.');
      return;
    }

    // Crear contenedor de libro
    const divLibro = document.createElement('div');
    divLibro.classList.add('libro');
    divLibro.setAttribute('data-nombre', titulo);
    divLibro.setAttribute('data-precio', precio);

    // Crear contenido
    const p = document.createElement('p');
    p.innerHTML = `<strong>${titulo}</strong> - Precio: $${precio}`;

    const btn = document.createElement('button');
    btn.classList.add('agregar-carrito');
    btn.textContent = 'Agregar al carrito';

    // Evento para agregar al carrito
    btn.addEventListener('click', function () {
      const nombre = divLibro.getAttribute('data-nombre');
      const precioLibro = parseFloat(divLibro.getAttribute('data-precio'));

      const li = document.createElement('li');
        li.textContent = `${nombre} - $${precioLibro} `;

        // Crear botón eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.style.marginLeft = '10px';

        // Evento para eliminar
        btnEliminar.addEventListener('click', function () {
        listaCarrito.removeChild(li);
        total -= precioLibro;
        totalSpan.textContent = total;
        });

        // Agregar el botón al item
        li.appendChild(btnEliminar);

      listaCarrito.appendChild(li);

      total += precioLibro;
      totalSpan.textContent = total;
    });

    // Armar el libro y agregarlo a la lista de productos
    divLibro.appendChild(p);
    divLibro.appendChild(btn);
    listaProductos.appendChild(divLibro);

    // Limpiar campos
    tituloInput.value = '';
    precioInput.value = '';
  });
});
