const { response , request } = require('express');

const Usuario = require('../models/usuario');

const partnerPost = async ( req = request, res=response)=>{
   
    const body = req.body;
   
    // const usuario = new Usuario(body);
    // console.log(usuario)
    // await usuario.save()

    res.json({
        msg: 'este es un mensaje del post del form',
        // usuario,
        body
        
    })

}

module.exports = {
    partnerPost
}

