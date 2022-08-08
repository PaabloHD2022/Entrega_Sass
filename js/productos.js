
class Productos{    

    constructor (codProd, item, descripcion, cantMin, precio, imgProd){

        this.id = codProd ;
        this.item = item;
        this.descripcion = descripcion;
        this.cantMin = cantMin;
        this.precio = precio;
        this.imgProd = imgProd;
        this.productoAct = "Activado";
    }    


    /**
     * @returns
     */

    getEstadoProd(){

        return this.productoAct;
    }

    /**
     * @param nuevo_estado
     */

    setEstadoProd(nuevo_estado){
        
        this.estado = nuevo_estado;
    }
}