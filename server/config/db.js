import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('mongodb connected successfully'))

    await mongoose.connect(`${process.env.MONGO_URL}/job-portal`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}

export default connectDB
