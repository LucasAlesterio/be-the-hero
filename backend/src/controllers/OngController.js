const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
    async index(request,response){
        const ongs = await connection('ongs').select('*');
        //where('id','597a2cf6');
        return response.json(ongs);
    },

    async create(request,response){
        const { name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({id});
    }
}