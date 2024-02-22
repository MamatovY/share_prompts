import mongoose from 'mongoose'

let isConnect = false //отслеживание соединения 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnect) {
        console.log('MongoDB уже подключен');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnect = true

        console.log('MongoDB подключен');
    } catch (error) {
        console.log(error);
    }
}