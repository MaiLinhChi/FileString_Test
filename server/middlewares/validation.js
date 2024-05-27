const createHttpError = require('http-errors')

module.exports = function(validator) {
    return async function(req, res, next) {
        try {
            const validated = await validator.validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            if(err.isJoi) {
                return res.status(422).json(err.message);
            }
            return res.createHttpError(500)
        }
    }
}