const ERROR = {error: 'producto no encontrado'}

class Container {
    constructor(){
        this.productos = [];
    }

    getAll() {
        return this.productos
    }

    getByID(id) {
        const producto = this.productos.find(prod => prod.id === id)
        if(producto) {
            return producto
        } else {
            return ERROR
        }
    }

    create(producto) {
        const arrOfId = this.productos.map((producto) => producto.id);
        const maxMath = arrOfId.length === 0 ? 0 : Math.max(...arrOfId);
        const id = maxMath + 1;
        const newProducto = {id, ...producto};
        this.productos.push(newProducto);
        return newProducto
    }

    updateById(id, producto) {
        const searchProducto = this.productos.find(prod => prod.id === id)
        if(searchProducto) {
            const filterProducto = this.productos.filter((prod)=> prod.id !== id);
            const newProducto = {id, ...producto};
            this.productos = [...filterProducto, newProducto];
            return newProducto
        } else {
            return ERROR
        }
    }

    deleteByID(id) {
        const productoEliminado = this.productos.filter(productos => productos.id !== id)
        this.productos = productoEliminado
        return productoEliminado
    }
}

module.exports = Container