const comment = require("../Models/Comment");
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject} = require('../util/mongoose');
class CommentController{
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
    getCommentbySlug = (req,res)=>{
        comment.find({slug: req.params.slug}, function(err, data) {
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
    createNewComment =(req,res)=> {
        const newComment = comment(req.body)
        newComment.save()
    }
    
}
module.exports = new CommentController();