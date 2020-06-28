const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://hseleiro1234:hseleiro1234@cluster0-oadeo.mongodb.net/storiebooks?retryWrites=true&w=majority', {
            userNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
};

module.exports = connectDB;
