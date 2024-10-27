import express from 'express';
const router = express.Router();

import * as productController from '../controller/product.controller.js';

router.post("/save",productController.save);

router.get("/fetch",productController.fetch);

router.delete("/delete",productController.deleteCategory);

router.patch("/update",productController.updateCategory);

export default router;



