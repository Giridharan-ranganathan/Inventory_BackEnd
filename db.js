const mongoose = require('mongoose');

const dbUri = `mongodb://localhost:27017/`

const connectDb = async () => {
    if (mongoose.connection.readyState === 1) return;
    await mongoose.connect(dbUri);
    console.log(mongoose.connection.readyState);
}

module.exports = { connectDb, mongoose };