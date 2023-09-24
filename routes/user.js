const express=require('express')
const app = express();
const { getUser1Route } = require('../userRoutes');
// router.get("/user1",(req,res)=>{
//     res.send("User route is displaying data")
// })
app.get('/user1', getUser1Route);
module.exports=app;