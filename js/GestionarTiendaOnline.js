class TiendaOnline {
    iniciar() {
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) => {
                console.log(resultado);
                const html = document.getElementById("productos");
                const fragSect = document.createDocumentFragment();
                resultado.forEach((item) => {
                    const container = document.createElement("div");
                    container.innerHTML = `<div>
                                                <h5>${item.Nombre}</h5>
                                                <p>${item.Descripcion}</p>
                                                <p>${item.ProduccionMinima}</p>                       
                                                <a href="./Contacto.html" class="btn btn-dark"></a>
                                            </div>`;
                    fragSect.appendChild(container);
                });
                html.appendChild(fragSect);
            });
    }

    cargarProductos(productos) {
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        productos.forEach((producto) => {
            let prod = document.createElement("div");
            prod.classList.add("row", "row-cols-1", "row-cols-md-3 g-4");
            prod.setAttribute("id", "row_" + producto.id);

            prod.innerHTML += `  <div>
                                    <img src="./Img/Tienda_Online/${producto.img}" alt="">
                                    <div>
                                        <h5>${producto.Nombre}</h5>
                                        <p>${producto.Descripcion}</p>
                                        <p>${producto.PoduccionMinima}</p>                       
                                        <a href="./Contacto.html" class="btn btn-dark"></a>
                                    </div>
                                </div>`;

            divProductos.appendChild(prod);
        });
    }
}