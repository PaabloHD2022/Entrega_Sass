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
                    container.innerHTML = ` <div class="contenedor">
                                                <div class="Cards">
                                                    <img src="${item.Img}" class="imgCard">                                                
                                                    <div class="infoCard">
                                                        <h3 class="cardTitle">${item.Nombre}</h3>
                                                        <p class="descripcion">${item.Descripcion}</p>
                                                        <h5 class="cantidad">${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                                        <a href="./Contacto.html" class="boton">Consulta</a>
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

            prod.innerHTML += ` <div class="contenedor">
                                    <div class="Cards">
                                        <img src="${item.Img}" class="imgCard">
                                    </div>
                                    <div class="infoCard">
                                        <h3>${item.Nombre}</h3>
                                        <p>${item.Descripcion}</p>
                                        <h5>${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                        <a href="./Contacto.html" class="boton">Consulta</a>
                                    </div>
                                </div>`;
            divProductos.appendChild(prod);
        });
    }
}