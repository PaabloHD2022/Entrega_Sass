//LISTADO DE PRODUCTOS DISPONIBLES

class Productos{    

    constructor (id, item, descripcion, cantidad_min, precio){

        this.id = id ;
        this.item = item;
        this.descripcion = descripcion;
        this.cantidad_min = cantidad_min;
        this.precio = precio;
    }    

    descripcion_completa_productos(){

        return this.id+" - "+this.item+" - "+this.descripcion+" - "+this.cantidad_min+" - "+" $"+ +this.precio ; 
    }
}

let list_productos = new Array() ;
list_productos.push(new Productos(1,'AgendasTB', 'Tapa blanda full color', '100 unidades', 10000)) ;
list_productos.push(new Productos(2,'AgendasTD', 'Tapa dura ByN', '100 unidades', 7000)) ;
list_productos.push(new Productos(3,'AgendasTD2', 'Tapa dura full color', '100 unidades', 13000)) ;
list_productos.push(new Productos(4,'Almanaques', 'Con base full color', '1000 unidades', 15000)) ;
list_productos.push(new Productos(5,'Banners', 'Lona y rollup', '1 unidad', 5000)) ;
list_productos.push(new Productos(6,'Bolsas', 'Bolsas de tela con cierre', '500 unidades', 4000)) ;
list_productos.push(new Productos(7,'Cajas', 'Diseño personalizado', '500 unidades', 20000)) ;
list_productos.push(new Productos(8,'Cartelería', 'Colgante PVC espumado', '1 unidad', 3500)) ;
list_productos.push(new Productos(9,'CatálogosAc', 'Acaballado full color', '500 unidades', 11000)) ;
list_productos.push(new Productos(10,'CatálogosPre', 'Premiun lomo cuadrado full color', '500 unidades', 25000)) ;
list_productos.push(new Productos(11,'CuadernosTB', 'Tapa blanda full color', '100 unidades', 10000)) ;
list_productos.push(new Productos(12,'CuadernosTD', 'Tapa dura full color', '100 unidades', 23000)) ;
list_productos.push(new Productos(13,'LibrosTB', 'Tapa blanda full color', '100 unidades', 40000)) ;
list_productos.push(new Productos(14,'LibrosTD', 'Tapa dura full color', '100 unidades', 65000)) ;
list_productos.push(new Productos(15,'RevistasCLom', 'Con lomo full color', '1000 unidades', 150000)) ;
list_productos.push(new Productos(16,'RevistasAc', 'Acaballadas full color', '1000 unidades', 70000)) ;

let adm_prod = prompt("Elija una opción: \n A) Ver listado de productos \n B) Actualizar precio de producto \n C) Eliminar producto \n D) Actualizar descripcion de un producto") ;

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
}