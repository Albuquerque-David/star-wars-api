const mongoose = require ("mongoose");

const HOST = process.env.HOST || '127.0.0.1';
const DATABASE = process.env.DATABASE || 'starwars';
const PORT = process.env.PORT || 27017;
const USER = process.env.USER || '';
const PASSWORD = process.env.PASSWORD || '';

const uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
`mongodb://localhost:${PORT}/${DATABASE}`;

module.exports = {
    async connect() {
        try
        {
            await mongoose.connect(uristring, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log("Successfully connected to MongoDB.")
        }
        catch(error)
        {
            console.log(error)
        }
    },

    /* */

    async getDatabasePort() {
        return PORT;
    },
    
    async getDatabaseHost() {
        return HOST;
    },

    async getDatabase() {
        return DATABASE;
    },

    async getDatabaseUser() {
        return USER;
    },
    
    async getDatabasePassword() {
        return PASSWORD;
    }
}