const product = require("../Models/Product");
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject} = require('../util/mongoose');
class ProductController{
    getProduct = (req,res) =>   {
        product.find({}, function(err, data) {
            if(!err)
            {
                //console.log(data);
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

    cretenewProduct = (req,res)=>{
        // console.log('hehe')
        // console.log(req.body)
        console.log('o day')
        product.findOne({slug: req.params.slug}, function(err, data) {
            if(!err)
            {
                if(data === null)
                {
                    console.log('o day')
                    const product1 = new product(req.body);
                    console.log(product1)
                    product1.save()
                }
            }
            else{
                res.status(400).json({error:'error'})
            }
        })
    }
    
}
module.exports = new ProductController();