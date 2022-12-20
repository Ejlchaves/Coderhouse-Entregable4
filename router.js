const express = require('express');
const Container = require('./Container');
const router = express.Router();
const container = new Container()

/* router.get('/', (req, res) => {
    res.render("index")
}) */

router.get('/', (req, res) => {
    const productos = container.getAll();
    /* res.send(productos) */
    res.render("index", {listado:productos, listExists:true})
    if(productos.length === 0) {
        const error = new Error('No hay productos listados')
        return res.render("index", {error});
    }
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const producto = container.getByID(parseInt(id))
    res.send(producto)
})

router.post('/', (req, res) => {
    const producto = req.body;
    const newproducto = container.create(producto)
    return res.render('index', newproducto)
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const producto = req.body;
    const updateProducto = container.updateById(parseInt(id), producto);
    res.send(updateProducto)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const deletedProducto = container.deleteByID(parseInt(id))
    res.send(deletedProducto)
})

module.exports = router;