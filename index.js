import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';

const app=express();

//import api routers
import userRouter from './routes/user.router.js';
import categoryRouter from './routes/category.router.js';
import subcategoryRouter from './routes/SubCategoryRouter.js'
import productRouter from './routes/product.router.js';
import bidRouter from './routes/bid.router.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

// to handle request file content
app.use(fileUpload());

//route level middleware to load api router
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.use("/subcategory" ,subcategoryRouter);
app.use("/product",productRouter);
app.use("/bid",bidRouter);
    
const PORT = process.env.PORT || 9090

app.listen(PORT);
console.log(`server invoked at link ${PORT}`);
