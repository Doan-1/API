const res = require("express/lib/response");
const product = require("../Models/Product");
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject} = require('../util/mongoose');
class ProductController{
    getProduct = (req,res) =>   {
        product.find({}, function(err, data) {
            if(!err)
            {
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

    getProductbyCategory = (req,res)=>{
        //console.log(req.params.categories);
        product.find({categories: req.params.categories}, function(err, data) {
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
    getProductbyPriceGreaterthan = (req,res)=>{
        //console.log(req.params.categories);
        product.find({product_price: {$gt: req.params.id}}, function(err, data) {
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
    getProductbyPriceSmallerthan = (req,res)=>{
        //console.log(req.params.categories);
        product.find({product_price: {$lt: req.params.id}}, function(err, data) {
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
    getProductbyPriceBetween = (req,res)=>{
        //console.log(req.params.categories);
        product.find({product_price: {$gt: req.params.gt, $lt: req.params.lt}}, function(err, data) {
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

    updateProductStatus = async (req,res) =>{
        try {
            await product.updateOne({id_product: req.body.id_product},{$set: {status: req.body.status}})
        }
        catch(err) {
            console.log(err)
            res.status(500).json({msg: err})
            return;
        }
    }
    
}
module.exports = new ProductController();