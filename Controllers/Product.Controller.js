const product = require("../Models/Product");
class ProductController{
    getProduct = (req,res) =>{
        product.find({}, function(err, data) {
            if(!err)
            {
                console.log(data);
                res.json({data});
            }
            else{
                res.status(400).json({error:'error'})
            }
        });
}
    
}
module.exports = new ProductController();