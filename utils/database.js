import mongoose from 'mongoose'

let isConnect = false //отслеживание соединения 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnect) {
        console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB is connected');
        isConnect = true
    } catch (error) {
        console.log(error);
    }
}