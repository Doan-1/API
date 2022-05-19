const product = require("../Models/Product");
const { mutipleMongooseToObject } = require('../util/mongoose');
class ProductController{
    getProduct = (req,res) =>   {
        product.find({}, function(err, data) {
            if(!err)
            {
                console.log(data);
                res.json({data: mutipleMongooseToObject(data)});
            }
            else{
                res.status(400).json({error:'error'})
            }
        })
    }
    getProductbyID = (req,res)=>{
        product.findOne({slug: req.params.slug}, function(err, data) {
            if(!err)
            {
                console.log(data);
                res.json({data: mongooseToObject(data)});
            }
            else{
                res.status(400).json({error:'error'})
            }
        })
        
    }
    
}
module.exports = new ProductController();