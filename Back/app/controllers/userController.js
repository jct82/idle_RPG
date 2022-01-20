const User = require('../models/user');
const jwt = require('../services/jwt');

module.exports = {
    subscribe: async (request, response) => {
        try {
            const user = await new User(request.body).save();
            const token = jwt.makeToken(user.id);
            response.setHeader('Authorization', token);
            response.status(201).json(user);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message)
        }
    },

    login: async (request, response) => {
        try {
            const user = await new User(request.body).doLogin();
            const token = jwt.makeToken(user.id);
            response.setHeader('Authorization', token);
            response.status(200).json(user);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message)
        }
    },

    getInfos: (request, response) => {
        try {
            const infos = {
                message: 'ceci est un message obtenu de qui a fait la requête'
            };
            response.setHeader('Authorization', jwt.makeToken(request.userId))
            response.status(200).json(infos);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message)
        }
    }
}