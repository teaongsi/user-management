import express from 'express';
import { getAllUsers, getUserById, addUser, updateUser, delUser } from '../controller/userController.js';

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getUserById);
userRouter.route("/").post(addUser);
userRouter.route("/:id").put(updateUser);
userRouter.route("/:id").delete(delUser);

export default userRouter;