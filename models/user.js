const { Schema, model } = require('mongoose')

new userSchema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        urls: {type: String, required: true}
    },
    
    {timestamps: true}
)

module.exports = model('User', userSchema)