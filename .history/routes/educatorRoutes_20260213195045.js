import express from "express"
import { updateRoleToEducator } from "../controllers/educatorController.js"
import { protectEducator } from "../middlewares/authMiddleWare.js";



const educatorRouter = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), protectEducator()


export default educatorRouter;