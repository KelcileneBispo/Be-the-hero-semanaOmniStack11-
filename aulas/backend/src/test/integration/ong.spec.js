const request = require ('supertest');
const app = require ('../../app');

describe('ONGS', ()=>{
    it('should be able to create a new ONG', async () =>{
        const response =  await request (app)
        .post('/ongs')
        .send({
            name:"APAD2",
	        email:"cont@co.com",
	        whatsapp:"4700000",
	        city: "Rio do sul",
	        uf: SC
        })
    });
});