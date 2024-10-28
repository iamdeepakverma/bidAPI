import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const url=process.env.DATABASE;

if(!url){
    console.log("Database Not Found");
    process.exit(1);
}
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Ensures TLS is enforced
  });

mongoose.connect(url);
console.log("Successfully connected to mongodb database...");
