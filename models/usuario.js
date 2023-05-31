 

 const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    productType:{
        type: String,
        required:false,
    },
    userID:{
        type: String,
        required:[true, 'You have to write a user'],
        unique: true,
    },
    password:{
        type: String,
        required:[true, 'You have to choose a password'],
    },
    email:{
        type: String,
        required:[true, 'You have to write a email'],
        unique: true,
    },
    firstName:{
        type: String,
        required:[true, 'You have to write your firstName'],
    },
    middleName:{
        type: String,
       
    },
    lastName:{
        type: String,
        required:[true, 'You have to write your lastName'],
    },
    productCategory:{
        type: String,
        
    },
    brandName:{
        type: String,
        required:[true, 'You have to write your brandName'],
    },
    billValue:{
        type: String,
        required:[true, 'You have to write your billValue'],
    },
    purchaseDate:{
        type: String,
        required:[true, 'You have to write your purchaseDate'],
    },
    invoiceUpload:{
        type: String,
       
    },
    serialNumber:{
        type: String,
        required:[true, 'You have to write your serialNumber'],
        unique:true,
    },
    contact:{
        type: Number,
        required:[true, 'You have to write your contact'],
    },
    country:{
        type: String,
     
    },
    state:{
        type: String,
        
    },
    zipCode:{
        type: Number,
       
    },
    referralCode:{
        type: String,
        
    },
    coverValue:{
        type: String,
        
    },
    






})



module.exports = model('Usuarios', UsuarioSchema)