import express from 'express';
const router = express.Router();

import * as subcategoryController from '../controller/Subcategory.Controller.js'

router.post("/save",subcategoryController.save);

router.get("/fetch",subcategoryController.fetch);

router.delete("/delete",subcategoryController.deleteCategory);

router.patch("/update",subcategoryController.updateCategory);

export default router;



