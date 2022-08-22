class GestionarProductos {

    iniciar() {

        productos = [

            {
                "id": 1,
                "nombre": "Libros B&N Tapa Dura",
                "descripcion": "15X21 cms cerr. / 30x21 cms ab. x 100 un",
                "precio": 140000,
                "img": "Libros_ByN_Tapa_Dura.png",
                "entrega":"NO INCLUYE DISEÑO - Consultar por otros productos y/o variantes.",
                "destacado": 1
            },

            {
                "id": 2,
                "nombre": "Libros Color Tapa Dura",
                "descripcion": "23X30 cms cerr. / 46x30 cms ab. x 100 un",
                "precio": 190000,
                "img": "Libros_Color_Tapa_Dura.png",
                "entrega":"NO INCLUYE DISEÑO - Consultar por otros productos y/o variantes.",
                "destacado": 1
            },

            {
                "id": 3,
                "nombre": "Agendas Tapa Dura B&N",
                "descripcion": "14X21 cms. cerr / 28x21 cms. abierto x 300 un",
                "precio": 150000,
                "img": "Agenda_B&N_Tapa_Dura.png",
                "entrega":"NO INCLUYE DISEÑO - Consultar por otros productos y/o variantes.",
                "destacado": 1
            },

            {
                "id": 4,
                "nombre": "Agendas Tapa Dura Color",
                "descripcion": "14X21 cms. cerr / 28x21 cms. abierto x 300 un",
                "precio": 275000,
                "img": "Agenda_Color_Tapa_Dura.png",
                "entrega":"NO INCLUYE DISEÑO - Consultar por otros productos y/o variantes.",
                "destacado": 1
            },

            {
                "id": 5,
                "nombre": "Calendarios con Base",
                "descripcion": "17x15 cms cerr / Apaisado x 200 un",
                "precio": 75000,
                "img": "Almanaques.png",
                "entrega":"NO INCLUYE DISEÑO - Consultar por otros productos y/o variantes.",
                "destacado": 1
            },

            {
                "id": 6,
                "nombre": "Banner Roll-Up",
                "descripcion": "14X21 cms. cerr / 28x21 cms. abierto x 1 un",
                "precio": 14000,
                "img": "Banner-RollUp.png",
                "entrega":"NO INCLUYE DISEÑO - Consultar por otros productos y/o variantes.",
                "destacado": 1
            },
        ]


        let productosDestacados = productos.filter (prod => prod.destacado == 1) ;

        this.cargarProductos (productosDestacados) ;

    }

    cargarProductos (productos){

        const divProductos = document.querySelector ("#productos");
        divProductos.innerHTML = "" ;
        
        if (productos.length === 0){

        }else {

            productos.forEach( (producto)=> {

                const{id, img, nombre, descripcion, entrega} = producto

                let prod = document.createElement ("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.setAttribute("id","row_"+id);                

                prod.innerHTML = `
                
                    <div class="w-20">
                        <img src="./Img/Tienda_Online/${img}" alt="" width="150" height="150" >
                    </div>

                    <div class="p-3 d-flex flex-column w-60 h-150">
                        <h3>${nombre}</h3>                                            
                        <p>${descripcion.substring(0,120)}</p>
                        <p>${entrega}</p>

                    </div>

                    <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                        <p class="precio">$${producto.precio}</p>
                        <a href="javascript:addCarrito(${producto.id})" class="btn btn-primary">Agregar al carrito</a>
                    </div>`;

                divProductos.appendChild(prod);
                
            });
        }
    }

    addCart (infoProducto){

        const existe = carrito.some (producto => producto.id === infoProducto.id ) ;

        if (existe){

        }else{

            carrito.push (infoProducto);
            alert ("Se agrego el producto exitosamente");

        }

        this.mostrarCarrito();

    }

    mostrarCarrito() {

        let detalleCarrito = document.querySelector("#idCarrito");
        detalleCarrito.innerHTML = "";

        carrito.forEach ((producto)=>{

            const{id, img, nombre, descripcion, precio, entrega, cantidad} = producto

            const row = document.createElement("div");
            row.classList.add("row");

            row.innerHTML = `

                <div class="col-3 d-flex align-items-center p-2 border-bottom">
                    <img src="./Img/Tienda_Online/${img}" width="80"/>
                </div>

                <div class="col-3 d-flex align-items-center p-2 border-bottom">
                    ${nombre}
                </div>

                <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                    $ ${precio}
                </div>

                <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                    ${cantidad}
                </div>
            `;

            detalleCarrito.appendChild(row) ;
        })
    }
}