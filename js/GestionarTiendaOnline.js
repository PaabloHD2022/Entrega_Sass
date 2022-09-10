class TiendaOnline {
    iniciar() {
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((resultado) =>{
                console.log(resultado);
                let productosEstado = resultado.filter(prod => prod.Estado == 1);
                const html = document.getElementById("productos");               
                const fragSect = document.createDocumentFragment(); 
                productosEstado.forEach((item) => {
                    const container = document.createElement("div");
                    container.innerHTML = ` <div class="contenedor">
                                                <div class="Cards">
                                                    <div class="imgCont">
                                                        <img src="${item.Img}" class="imgCard">
                                                    </div>                                               
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

            let productosPromo = resultado.filter(prod => prod.Estado == 2);
                const html2 = document.getElementById("productos");               
                const fragSect2 = document.createDocumentFragment(); 
                productosPromo.forEach((item) => {
                    const container = document.createElement("div");
                    container.innerHTML = ` <div class="contenedor">
                                                <div class="Cards">
                                                    <div class="imgCont">
                                                        <img src="${item.Img}" class="imgCard">
                                                    </div>                                               
                                                    <div class="infoCard">
                                                        <h2 class="promocion">PRODUCTO EN PROMOCION...</h2>
                                                        <h3 class="cardTitle">${item.Nombre}</h3>
                                                        <p class="descripcion">${item.Descripcion}</p>
                                                        <h5 class="cantidad">${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                                        <a href="./Contacto.html" class="boton">Consulta</a>
                                                    </div>
                                                </div>
                                            </div>`;
                    fragSect2.appendChild(container);
                });
                
            html2.appendChild(fragSect2);
            
        });

        
    }

        cargarProductos(productos) {
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        productosEstado.forEach((producto) => {
            let product = document.createElement("div");
            product.classList.add("row", "row-cols-1", "row-cols-md-3 g-4");
            product.setAttribute("id", "row_" + producto.id);

            product.innerHTML += ` <div class="contenedor">
                                    <div class="Cards">
                                        <div class="imgCont">
                                            <img src="${item.Img}" class="imgCard">
                                        </div>                                               
                                        <div class="infoCard">
                                            <h3 class="cardTitle">${item.Nombre}</h3>
                                            <p class="descripcion">${item.Descripcion}</p>
                                            <h5 class="cantidad">${"Producción mínima" + " " + item.ProduccionMinima}</h5>                       
                                            <a href="./Contacto.html" class="boton">Consulta</a>
                                        </div>
                                    </div>
                                </div>`;
            divProductos.appendChild(product);
        });
    }
}