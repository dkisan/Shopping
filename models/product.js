const products = []
const fs = require('fs')

function readFile() {
    return fs.readFileSync('product.txt', err => {
        if (err) throw err
    }).toString()
}

module.exports = class Product {
    constructor(t) {
        this.title = t
    }
    save() {
        // products.push(this)
        const a =readFile()
            fs.writeFile('product.txt', a + '-' + this.title, err => {
                if (err) throw err
            })
    }
    static fetchAll() {
        const a = readFile().toString().split('-').slice(1)
        products.length = 0
        a.map(e => {
            return products.push({ title: e })
        })
        return products
    }
}