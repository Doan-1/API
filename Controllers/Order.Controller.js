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
            order.find({id_product: req.params.id}, function(err, data) {
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
        // order.find({id_user: req.params.id}, function(err, data) {
        //     if(!err)
        //     {
        //         // if( data.map === null )
        //         // {
        //         //     console.log('null');
        //         // }
        //         // res.json({data: mutipleMongooseToObject(data)});
        //         if(data === '[]')
        //         {
        //             console.log('hrere')
        //         }
        //         console.log(data)
        //     }
        //     else{
        //         res.status(400).json({error:'error'})
        //     }
        // })
        
    }
    createNewOrder = async (req,res)=> {
        let result
        try {
            result = await order.findOne({id_user: req.body.id_user, id_product: req.body.id_product});
        }
        catch(err) {
            console.log(err)
            res.status(500).json({msg: err})
            return;
        }
        if(result === null){
            const newOrder = order(req.body)
            newOrder.save()
        }
        //res.status(200).json(result)
        // const newOrder = order(req.body)
        // newOrder.save()
    }
    deleteByIDUser(req, res, next) {
        order.deleteMany({ id_user: req.params.id },function(err, data) {
            if(!err)
            {
                console.log('Xoa thanh cong');
            }
            else{
                res.status(400).json({error:'error'})
            }
        })
    }
    
}
module.exports = new OrderController();