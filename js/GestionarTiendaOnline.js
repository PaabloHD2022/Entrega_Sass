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
                    container.innerHTML = ` <div class="row row-cols-1 row-cols-md-3 g-4">
                                                <div class="col">
                                                    <div class="card h-100">
                                                        <div class="card-body">
                                                            <img src="${item.Img}" class="card-img-top">
                                                            <h3 class="card-title">${item.Nombre}</h3>
                                                            <p class="card-text">${item.Descripcion}</p>
                                                            <h5 class="titulo2">${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                                            <a href="./Contacto.html" class="btn btn-dark">Consulta</a>
                                                        </div>
                                                    </div>
                                                </div>
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

            prod.innerHTML += ` <div class="row row-cols-1 row-cols-md-3 g-4">
                                    <div class="col">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <img src="${item.Img}" class="card-img-top">
                                                <h3 class="card-title">${item.Nombre}</h3>
                                                <p class="card-text">${item.Descripcion}</p>
                                                <h5>${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                                <a href="./Contacto.html" class="btn btn-dark">Consulta</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
            divProductos.appendChild(prod);
        });
    }
}