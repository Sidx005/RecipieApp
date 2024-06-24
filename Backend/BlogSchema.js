const mongoose=require('mongoose')
const Schema = require('./Schema')
const  blogSchema=new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true},
    about:{type:String,required:true},
    file:{type:String,required:true}
})
const StoryModel=mongoose.model("Blogs",blogSchema)
module.exports=StoryModel