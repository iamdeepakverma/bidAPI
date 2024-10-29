import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const url = process.env.DATABASE;

if (!url) {
    console.log("Database Not Found");
    process.exit(1);
}

// Set strictQuery option explicitly to avoid future warnings
mongoose.set('strictQuery', true); // Set this to false if you prefer the future default behavior

// Connect to MongoDB
// console.log("SOmething error")
mongoose.connect(url, {
    useNewUrlParser: true,
    // useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Ensures TLS is enforced if your MongoDB setup requires it
})
.then(() => console.log("Successfully connected to MongoDB"))
.catch((error) => console.log("Database connection error:", error));
