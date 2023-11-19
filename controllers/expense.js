const Expense = require("../models/exp");

exports.getExpense = (req, res, next) => {
    Expense.findAll()
        .then(expenses => {
            res.json(expenses)
        })
        .catch(err => console.log(err))
}

exports.getAExpense = (req, res, next) => {
    const elemId = +req.params.elemId
    Expense.findByPk(elemId)
        .then(expense => {
            res.json(expense)
        })
        .catch(err => console.log(err))
}

exports.postAddExpense = (req, res, next) => {
    Expense.create({
        amount: req.body.amount,
        description: req.body.description,
        category: req.body.category
    })
        .then(expense => {
            res.json(expense)
        })
        .catch(err => console.log(err))
}

exports.updateExpense = (req, res, next) => {
    const elemId = +req.params.elemId
    Expense.findByPk(elemId)
        .then(expense => {
            expense.amount = req.body.amount
            expense.description = req.body.description
            expense.category = req.body.category
            return expense.save()
        })
        .then(ress => {
            res.json(ress)
        })
        .catch(err => console.log(err))
}



exports.deleteexpense = (req, res, next) => {
    const elemId = +req.params.elemId
    Expense.findByPk(elemId)
        .then(expense => {
            return expense.destroy()
        })
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err))
}