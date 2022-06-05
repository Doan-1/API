const cart = require("../Models/Cart");
const cartinfo = require("../Models/CartInfo");
const order = require("../Models/Order");
const product = require("../Models/Product");
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject} = require('../util/mongoose');
class CartController{
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
    getCartbyIDUser = (req,res)=>{
        cart.find({id_user: req.params.id}, function(err, data) {
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
    createNewCart = async (req,res)=> {
        let cartFind ;
        try {
            cartFind = await cart.find({id_user: req.body.id_user})
        }
        catch(err) {
            console.log(err)
            res.status(500).json({msg: err})
            return;
        }
        let a= [];
        a=cartFind;
        let countid = 0;
        countid = a.length+1; 
        const newcart = cart({id_cart: countid, id_user: req.body.id_user, total: req.body.total, address: req.body.address, phone: req.body.phone, status:"da nhan don hang"}); 
        newcart.save();
        let orderFind = await order.findOne({id_user: req.body.id_user});

        //console.log(orderFind.orders)
        const newcartinfo = cartinfo({id_cart: countid, orders: orderFind.orders});
        //console.log(newcartinfo)
        try {
            newcartinfo.save();
            let b = [];
            b = orderFind.orders;
            b.map(async (item,index)=> {
                let findpro = await product.findOne({id_product: item.id_product});
                let newsoldquantity = Number(findpro.sold_quantity) + Number(item.quantity);
                //console.log(newsoldquantity.toString())
                await  product.updateOne({id_product: item.id_product},{$set: {sold_quantity: newsoldquantity}}
                );
            })
            await order.deleteMany({id_user: req.body.id_user});
        }
        catch(err) {
            console.log(err)
            res.status(500).json({msg: err})
            return;
        }       
    }
    
}
module.exports = new CartController();