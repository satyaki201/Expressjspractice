const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.all('/contact',(req,res,next)=>{
    res.send("contact page");
    next();
});

app.all('/allpath',(req,res,next)=>{
    console.log("This is all");
    next();
});

// Post request is to post something to 
// the server like a form not take pages from the server
app.post('/postreq',(req,res)=>{
    res.send("This is from Post request");
});

const logRequest = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
};

const authenticate = (req, res, next) => {
    // Dummy authentication
    if (req.query.token === '12345') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};

const finalHandler = (req, res) => {
    res.send('Hello, worldcfvbnm,!');
};

// Using app.all with multiple middleware functions
app.all('/example', [logRequest, authenticate], finalHandler);


app.listen(4000,()=>{
    console.log("Heard On Port 4000");
})
