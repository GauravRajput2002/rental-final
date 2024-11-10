const hostname = '127.0.0.1';
server=require("express")();
server.listen( 36212,hostname,()=>{
    console.log("Server is started");
})



server.get('/status400',(req,res)=>{
    res.status(400);
    })

server.get('/items',(req,res)=>{

        list=[{'id':5,'name':'Ujjwal'},{'id':5,'name':'Pranav'},{'id':15,'name':'John'},{'id':36,'name':'Nik'},{'id':98,'name':'Hazel'}];

        res.send(list).status(200);
})

server.post('/postDemo',(req,res)=>{
    print(req);
});
    

