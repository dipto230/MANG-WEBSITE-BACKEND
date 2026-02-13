import express from "express"
import { updateRoleToEducator } from "../controllers/educatorController.js"



const educatorRouter = express.Router()

educatorRouter.get('/update-role', updateRoleToEducator);
educatorRouter.post('/add-course', upload.single)


export default educatorRouter;