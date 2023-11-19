const User = require("../models/user");

exports.getUser = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
}

exports.getAUser = (req, res, next) => {
    const elemId = +req.params.elemId
    User.findByPk(elemId)
        .then(user => {
            res.json(user)
        })
        .catch(err => console.log(err))
}

exports.postAddUser = (req, res, next) => {
    User.create({
        name: req.body.Name,
        email: req.body.Email,
        phoneno: req.body.Phone
    })
        .then(user => {
            res.json(user)
        })
        .catch(err => console.log(err))
}

exports.updateUser = (req, res, next) => {
    const elemId = +req.params.elemId
    User.findByPk(elemId)
        .then(user => {
            user.name = req.body.Name
            user.email = req.body.Email
            user.phoneno = req.body.Phone
            return user.save()
        })
        .then(ress => {
            res.json(ress)
        })
        .catch(err => console.log(err))
}

exports.getUser = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => console.log(err))
}


exports.deleteUser = (req, res, next) => {
    console.log('hi', req.params)
    const elemId = +req.params.elemId
    User.findByPk(elemId)
        .then(user => {
            return user.destroy()
        })
        .then(result => {
            res.json({ msg: 'Deleted' })
        })
        .catch(err => console.log(err))
}