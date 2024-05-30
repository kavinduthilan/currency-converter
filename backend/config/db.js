import mongoose from 'mongoose';

export const connectDB = async () => { 
    try {
        const conn = await mongoose.connect('mongodb+srv://kavinduthilan2000:kavindu123@cluster0.kxyjvbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
        //useUnifiedTopology: true,
        //useNewUrlParser: true,
        //useCreateIndex: true,
        });
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

//mongodb+srv://kavinduthilan2000:<password>@cluster0.kxyjvbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0