const Inventory = require("../models/inventory");

exports.getInventory = (req, res, next) => {
    Inventory.findAll()
        .then(inventorys => {
            res.json(inventorys)
        })
        .catch(err => console.log(err))
}


exports.postAddInventory = (req, res, next) => {
    Inventory.create({
        itemname: req.body.itemname,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity
    })
        .then(Inventory => {
            res.json(Inventory)
        })
        .catch(err => console.log(err))
}

exports.updateInventory = (req, res, next) => {
    const prodId = +req.body.prodId

    Inventory.findByPk(prodId)
        .then(product => {
            product.quantity = product.quantity - req.body.val
            return product.save()
        })
        .then(ress => {
            res.json(ress)
        })
        .catch(err => console.log(err))
}



