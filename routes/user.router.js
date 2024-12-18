import express from 'express';
const router = express.Router();

import * as userController from '../controller/user.controller.js';

router.post("/save",userController.save);

router.get("/fetch",userController.fetch);

router.delete("/delete",userController.deleteUser);

router.patch("/update",userController.updateUser);

router.post("/login",userController.login);

router.get("/verify-email",userController.verifyEmail);

export default router;



