const mongoose = require("mongoose");

const dbconnect = () =>
{
    const connectionParams = {useNewUrlPraser : true};
    mongoose.connect(process.env.DB,connectionParams);

    mongoose.connection.on("connected",()=>{
       console.log("connected sucessfully")
    });
    mongoose.connection.on("error" ,(err) =>{
     console.log("error in connecting to database:"+err);
    });
};

module.exports = dbconnect;