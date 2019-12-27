function startServer(){
    const express=require('express');
    const multer=require('multer');
    const download=require('download');
    const socket=require('socket.io');
    const os=require('os');
    const fs=require('fs');
    const { exec }=require('child_process');

    const app=express();
    app.use(express.static(__dirname+'/upload'))
    const upload=multer({ dest:__dirname+'/upload/' });

    app.get('/', function(request, response){
        response.send({ message:"HITTED" });
    })

    app.post('/upload',upload.single('file'), function(request, response){
        const filename=request.file.originalname;
        const oldpath=request.file.path;
        const newpath=__dirname+'/upload/'+filename;
        fs.rename(oldpath, newpath, function(err){
            if(err){
                console.log(err);
            }
        })
        console.log(request.file);
    })
    
    app.listen(2000, function(){
        console.log('SERVER is on');
    })
}


module.exports={
    startServer
}