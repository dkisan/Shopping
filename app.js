const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const errorController = require('./controllers/error');

const sequelize = require('./util/database');

const Product = require('./models/product')
const Shopuser = require('./models/shopUser')
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')

const app = express();

app.use(cors())
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bookinguserRoutes = require('./routes/user');
const expenseRoutes = require('./routes/exp');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ force: true }));
app.use(express.static(path.join(__dirname, 'public')));

Product.belongsTo(Shopuser)
Shopuser.hasMany(Product)

Shopuser.hasOne(Cart)
Cart.belongsTo(Shopuser)

Cart.belongsToMany(Product,{through:CartItem})
Product.belongsToMany(Cart,{through:CartItem})

app.use((req, res, next) => {
    Shopuser.findByPk(1)
        .then((user) => {
            req.user = user
            next()
        })
        .catch(err => console.log(err))
})

app.use('/admin', adminRoutes);
app.use('/booking', bookinguserRoutes);
app.use('/exp', expenseRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
    //   .sync({ force: true })
    .sync()
    .then(result => {
        return Shopuser.findByPk(1);
        // console.log(result);
    })
    .then(user => {
        if (!user) {
            return Shopuser.create({ name: 'Max', email: 'test@test.com' });
        }
        return user;
    })
    .then(user => {
        user.createCart()
        // console.log(user);
    })
    .then(cart => {
        // console.log(user);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
