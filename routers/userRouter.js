import express from 'express'
import { authentication } from '../middlewares/userAuth.js';
import {createUser, getMessages, getUser, loginUser, savePrompt, sendVerificationEmail, verifyUser} from '../controllers/userController.js';

const UserRouter = express.Router();

// define routes for the user.

// login route
UserRouter.post("/login",loginUser)
// signup route
UserRouter.post("/register",createUser)
// verification route
UserRouter.get("/verify/:token",verifyUser)
// resend mail route
UserRouter.post("/resendmail",sendVerificationEmail)
// get details of the user (requires auth)
UserRouter.use(authentication)
UserRouter.get("/",getUser)
UserRouter.post("/prompt/save",savePrompt)
UserRouter.get("/prompt/get",getMessages)

export default UserRouter