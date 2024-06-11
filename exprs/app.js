const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello jWorld");
})

app.listen(4000,()=>{
    console.log("Heard On Port 4000");
})
