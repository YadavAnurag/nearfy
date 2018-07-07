var mongoose = require('mongoose');
var readLine = require('readline');


//dburi-- mongodb://root:Anurag@123@ds247678.mlab.com:47678/nearfi
// protocol-- mongodb
// username-- root
// password-- Anurag@123
// server address-- ds247678.mlab.com
// port-- 47678
// database-- nearfi


var gracefulShutdown;
var dbURI = 'mongodb://localhost/nearfi';
if(process.env.NODE_ENV == 'production'){
    dbURI = 'mongodb://root:Anurag@123@ds247678.mlab.com:47678/nearfi';
}
mongoose.connect(dbURI);




mongoose.connection.on('connected', ()=>{
    console.log(`mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err)=>{
    console.log('Mongoose connection error' +err);
});

mongoose.connection.on('disconnected', ()=>{
    console.log(`Mongoose disconnected`);
});



process.once('SIGUSR2', ()=>{
    gracefulShutdown('nodemon restart', ()=>{
        process.kill(process.pid, 'SIGUSR2');
    })
});

//app termination

process.on('SIGINT', ()=>{
    gracefulShutdown('app termination', ()=>{
        process.exit(0);
    });
});

//heroku app termination

process.on('SIGTERM', ()=>{
    gracefulShutdown('Heroku app shutdown', ()=>{
        process.exit(0);
    });
});

var gracefulShutdown = (msg, callback)=>{
    mongoose.connection.close(()=>{
        console.log('Mongoose disconnected through '+msg);
        callback();
    });
}
if(process.platform = 'win32'){
    var rl = readLine.createInterface({
        input : process.stdin,
        output : process.stdout
    });

    rl.on('SIGINT', ()=>{
        process.emit("SIGINT");
    })
}



require('./locations');