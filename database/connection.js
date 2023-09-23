const mongoose=require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser: true

}).then(()=>{
    console.log("______Mongoose connected_______");
}).catch((error)=>{
    console.log("not connected",error);
})