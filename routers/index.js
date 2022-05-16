const productrouter = require('./Product.Router')

function route(app) {
    app.get('/product', productrouter);
    
}

module.exports = route;