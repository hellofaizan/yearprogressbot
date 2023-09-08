const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.dbLink

const client = new MongoClient(url)

async function connectToMongo() {
    try {
        await client.connect()
        console.log("🎉 Connected to Mongo DB Successfully")
    } catch (error) {
        console.log("Error connecting: ", error)
    }
}

module.exports = {
    connectToMongo,
    clientdb: client
}