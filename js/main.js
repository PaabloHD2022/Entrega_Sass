//LISTADO DE PRODUCTOS DISPONIBLES
/* 

list_productos.push(new Productos(01,'AgendasTB', 'Tapa blanda full color', '100 unidades', 10000, 'Activado')) ;
list_productos.push(new Productos(02,'AgendasTD', 'Tapa dura ByN', '100 unidades', 7000, 'Activado')) ;
list_productos.push(new Productos(03,'AgendasTD2', 'Tapa dura full color', '100 unidades', 13000, 'Activado')) ;
list_productos.push(new Productos(04,'Almanaques', 'Con base full color', '1000 unidades', 15000, 'Activado')) ;
list_productos.push(new Productos(05,'Banners', 'Lona y rollup', '1 unidad', 5000, 'Activado')) ;
list_productos.push(new Productos(06,'Bolsas', 'Bolsas de tela con cierre', '500 unidades', 4000, 'Activado')) ;
list_productos.push(new Productos(07,'Cajas', 'Diseño personalizado', '500 unidades', 20000, 'Activado')) ;
list_productos.push(new Productos(08,'Cartelería', 'Colgante PVC espumado', '1 unidad', 3500, 'Activado')) ;
list_productos.push(new Productos(09,'CatálogosAc', 'Acaballado full color', '500 unidades', 11000, 'Activado')) ;
list_productos.push(new Productos(10,'CatálogosPre', 'Premiun lomo cuadrado full color', '500 unidades', 25000, 'Activado')) ;
list_productos.push(new Productos(11,'CuadernosTB', 'Tapa blanda full color', '100 unidades', 10000, 'Activado')) ;
list_productos.push(new Productos(12,'CuadernosTD', 'Tapa dura full color', '100 unidades', 23000, 'Activado')) ;
list_productos.push(new Productos(13,'LibrosTB', 'Tapa blanda full color', '100 unidades', 40000, 'Activado')) ;
list_productos.push(new Productos(14,'LibrosTD', 'Tapa dura full color', '100 unidades', 65000, 'Activado')) ;
list_productos.push(new Productos(15,'RevistasCLom', 'Con lomo full color', '1000 unidades', 150000, 'Activado')) ;
list_productos.push(new Productos(16,'RevistasAc', 'Acaballadas full color', '1000 unidades', 70000, 'Activado')) ; */


let productos = new Array();

let alerts = document.getElementById("alerts");
let prodCtn = document.getElementById("prodCtn");
let btn_crear_prod = document.getElementById("btn_crear_prod");

btn_crear_prod.addEventListener("click",()=>{

    if (validar_datos()){

        crearProducto();

    }   
});

function validar_datos(){

    alerts.innerHTML = "";

    let input_codProd = document.getElementById("codProd").value;
    let input_item = document.getElementById("item").value;
    let input_descripcion = document.getElementById("descripcion").value;
    let input_cantMin = document.getElementById("cantMin").value;
    let input_precio = document.getElementById("precio").value;
    let input_imgProd = document.getElementById("imgProd").value;

    let alerts_mensajes = new Array();    
        
    switch(validar_formulario){

        case "input_codProd":
            input_codProd < 0 || isNaN;
            alerts_mensajes.push("Ingrese un codigo de producto");
            break;
        
        case "input_item":
            input_item ="";
            alerts_mensajes.push("ingrese una item");
            break;

        case "input_descripcion":
            input_descripcion ="";
            alerts_mensajes.push("Inrese una descripcion del producto a ingresar");
            break;

        case "input_cantMin":
            input_cantMin < 0 || isNaN;
            alerts_mensajes.push("Ingrese cantidad de venta minima de este producto");
            break;

        case "input_precio":
            input_precio < 0 || isNaN;
            alerts_mensajes.push("Ingrese precio del producto");
            break;

        case "input_imgProd":
            input_imgProd ="";
            alerts_mensajes.push("Ingrese la foto del producto");
            break;
    }

    if (alerts_mensajes.length > 0){

    let lista_errores = document.createElement("ul");
    lista_errores.textContent = "Error en la carga de datos: ";

    alerts_mensajes.forEach(mensaje =>{
        lista_errores.appendChild(crear_li(mensaje));
    })

    alerts_mensajes.appendChild(lista_errores);{
    return false;
    }

    }else{

        return true;
    }
}

function crear_li(mensaje){

    let li = document.createElement("li");
    li.textContent = mensaje;
    return li;
}

function crearProducto(){

    let codProd = document.getElementById("codProd").value;
    let item = document.getElementById("item").value;
    let descripcion = document.getElementById("descripcion").value;
    let cantMin = document.getElementById("cantMin").value;
    let precio = document.getElementById("precio").value;
    let imgProd = document.getElementById("imgProd").value;

    let productos = new productos(codProd, item, descripcion, cantMin, precio, imgProd);

    productos.push(productos);

    generar_producto_cargado(productos);

}

function generar_producto_cargado(productos){

    let new_div = document.createElement("div")
    let new_h2 = document.createElement("h2");
    new_div.id ="div"+ productos.nombre + productos.foto; 
    new_h2.textContent = productos.nombre;

    let new_img = document.createElement("img");
    new_img.src = productos.foto;

    new_div.appendChild(new_h2);
    new_div.appendChild(new_img);

    let estado = document.createElement("h4");
    estado.textContent = productos.estado;
    new_div.appendChild(estado);

    let contenedor = document.getElementById("prodCtn");

    contenedor.appendChild(new_div);

    resetear_form();

}

function resetear_form(){

    document.getElementById("codProd").value = "";
    document.getElementById("item").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("cantMin").value = "";    
    document.getElementById("precio").value = "";
    document.getElementById("imgProd").value = "";
}











/* let adm_prod = prompt("Elija una opción: \n A) Ver listado de productos \n B) Actualizar precio de producto \n C) Eliminar producto \n D) Actualizar descripcion de un producto") ;

while(adm_prod !="ESC"){
    switch(adm_prod){
        
        case "A":
            alert("Productos disponibles: " +prod_disp()) ;
            break;

        case "B":
            let item = prompt("Ingrese el producto a actualizar precio") ;
            let indice = buscarProducto(item) ;

            indice >=0 ;
            
            let precio_nuevo = parseInt(prompt("Ingrese nuevo importe")) ;
            list_productos[indice].precio = precio_nuevo ;
            alert("Listado de productos actualizado: " +prod_disp()) ;
            break;

        case "C":
            let idAEliminar = parseInt(prompt("Ingrese el Id del producto que desea eliminar")) ;
            let indiceId = buscar_id_Producto(idAEliminar) ;
            console.log(indiceId) ;

            indiceId >=0 ;
            list_productos = list_productos.filter(list_productos => list_productos.id !== idAEliminar) ;
            alert("Acaba de eliminar el producto: " +idAEliminar) ;
            alert("Listado de productos actualizado: " +prod_disp()) ;
            break;               
            
        
        case "D":
            let descripcion = prompt("Ingrese producto a actualizar") ;
            let indiceDesc = buscarProducto(descripcion) ;

            indiceDesc >=0;
            let nueva_descripcion = prompt("Actualice descripcion de producto seleccionado") ;
            list_productos[indiceDesc].descripcion = nueva_descripcion ;
            alert("Listado de productos actualizado: " +prod_disp()) ;
            break;
    }

    adm_prod = prompt("Ingrese: A, B, C o D  para realizar cambios, ESC para salir.") ;
}



function buscarProducto(item){
    
    for(let i = 0; i < list_productos.length; i++ ){

        if (list_productos[i].item == item) {
            return i ;
        }
    }

    return -1 ;
}



function prod_disp(){

    let p_disp = "";
    for (let i = 0 ; i < list_productos.length ; i++){

        p_disp += "\n" +list_productos[i].descripcion_completa_productos();
    }

    return p_disp ;
}



function buscar_id_Producto(id){
    
    for( let i = 0; i<list_productos.length; i++){
    
        if (list_productos[i].id == id) {
            return i ;
        }
    }

    return -1 ;
}*/