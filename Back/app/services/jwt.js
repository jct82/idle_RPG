const JWT = require('jsonwebtoken');

module.exports = {
    makeToken: userId => {
        try {
            return JWT.sign(
                {
                    data: userId
                },
                process.env.JWT_SECRET,
                {
                    algorithm: 'HS256',
                    expiresIn: 4*60*60
                }
            )
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    validateToken: token => {
        try {
            return JWT.verify(
                token,
                process.env.JWT_SECRET,
                {
                    algorithms: ['HS256']
                }
            )
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}