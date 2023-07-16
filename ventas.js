function guardarProducto() {
    var imagen = document.querySelector("input[name=imagen]").value;
    var nombre = document.querySelector("input[name=nombre]").value;
    var descripcion = document.querySelector("input[name=descripcion]").value;
    var precio = document.querySelector("input[name=precio]").value;
  
    // Guardar los datos en localStorage
    localStorage.setItem("imagen", imagen);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("descripcion", descripcion);
    localStorage.setItem("precio", precio);
  
    // Mostrar un mensaje de confirmación
    alert("Producto cargado correctamente");
  }
  
  function cargarProductos() {
    // Obtener los productos registrados
    var productos = localStorage.getItem("productos");
  
    // Si no hay productos, no hacer nada
    if (!productos) {
      return;
    }
  
    // Mostrar los productos en la lista
    var listaProductos = document.getElementById("lista-productos");
    listaProductos.innerHTML = "";
  
    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
  
      // Crear un elemento <li> para cada producto
      var li = document.createElement("li");
      li.textContent = producto.nombre + " " + producto.precio;
  
      // Agregar el elemento <li> a la lista
      listaProductos.appendChild(li);
    }
  }
  
  // Escuchar el evento click del botón "Cargar Producto"
  document.getElementById("btn-cargar").addEventListener("click", cargarProductos);
  