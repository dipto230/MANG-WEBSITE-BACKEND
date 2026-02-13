import express from "express"
import { addCourse, getEducatorCourses, updateRoleToEducator } from "../controllers/educatorController.js"

import upload from "../configs/multer.js";




const educatorRouter = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse)
educatorRouter.get('/courses', protectEducator(req, res, next), getEducatorCourses)


export default educatorRouter;