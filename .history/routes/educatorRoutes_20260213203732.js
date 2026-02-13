import express from "express"
import { addCourse, getEducatorCourses, updateRoleToEducator } from "../controllers/educatorController.js"
import { protectEducator } from "../middlewares/authMiddleWare.js";
import upload from "../configs/multer.js";



const educatorRouter = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse)
educatorRouter.get('/courses', protectEducator, getEducatorCourses)


export default educatorRouter;