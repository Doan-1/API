
const order = require("../Models/Order");
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject} = require('../util/mongoose');
class OrderController{
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
    getOrderbyIDUser = async (req,res)=>{
        let result
        try {
            result = await order.findOne({id_user: req.params.id});
        }
        catch(err) {
            console.log(err)
            res.status(500).json({msg: err})
            return;
        }
        if(result === null){
            res.status(404).json({msg: "not found"})
            return;
        }
        //res.status(200).json(result)
        else
        {
            order.find({id_user: req.params.id}, function(err, data) {
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
        
    }
    createNewOrder = async (req,res)=> {
        let result
        try {
            result = await order.findOne({id_user: req.body.id_user});
        }
        catch(err) {
            console.log(err)
            res.status(500).json({msg: err})
            return;
        }
        if(result === null){
            // const newOrder = order(req.body)
            // newOrder.save()
            console.log("chua ton tai")
        }
        else
        {
            // console.log(result.orders)
            // console.log("ton tai r ")
            // console.log(req.body.id_product);
            
            let a = []
            
            a= result.orders;
            //console.log(a)
            let index = a.findIndex(
                element => element.id_product === req.body.id_product
            )
            if(index === -1)
            {
                console.log('product chua co')
            }
            else
            {
                console.log('ton tai r')
                a.map((item,index)=>{
                    if(item.id_product === req.body.id_product)
                    {
                        console.log(item.quantity)
                        item.quantity = req.body.quantity;
                        console.log(item.quantity)
                    }
                })
                try {
                    await  order.updateOne({id_user: req.body.id_user},{$set: {orders: a}}
                    );
                  } catch (err) {
                    res.status(550).json({ msg: err });
                    return;
                }
            }
        }
        //res.status(200).json(result)
        // const newOrder = order(req.body)
        // newOrder.save()
    }
    deleteByIDUser(req, res, next) {
        order.deleteMany({ id_user: req.params.id },function(err, data) {
            if(!err)
            {
                //console.log('Xoa thanh cong');
            }
            else{
                res.status(400).json({error:'error'})
            }
        })
    }
    
}
module.exports = new OrderController();