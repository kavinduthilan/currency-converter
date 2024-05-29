import mongoose from 'mongoose';

export const connectDB = async () => { 
    try {
        const conn = await mongoose.connect('mongodb+srv://kavindu98:kavindu98@cluster0.0czmjij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
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

// mongodb+srv://kavindu98:<password>@cluster0.0czmjij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0