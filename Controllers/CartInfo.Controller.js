const CartInfo = require("../Models/CartInfo");
const cartinfo = require("../Models/CartInfo");
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject} = require('../util/mongoose');
class CartInfoController{
    // getComment = (req,res) =>   {
    //     user.find({}, function(err, data) {
    //         if(!err)
    //         {
    //             console.log(data);
    //             res.json({data: mutipleMongooseToObject(data)});
    //         }
    //         else{
    //             res.status(400).json({error:'error'})
    //         }
    //     })
    // }
    getCartInfobyIDCart = (req,res)=>{
        comment.find({id_cart: req.params.id}, function(err, data) {
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
    createNewCartInfo =(req,res)=> {
        const newCartInfo = CartInfo({id_cart:req.body.id_cart, orders: req.body.orders})
        newCartInfo.save()
    }
    
}
module.exports = new CartInfoController();