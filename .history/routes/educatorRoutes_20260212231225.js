import express from "express"
import { updateRoleToEducator } from "../controllers/educatorController.js"



const educatorRouter = express.Router()

educatorRouter.get('/update-role', (req, res) => {
    console.log("Route hit");
    res.send("Route works");
});


export default educatorRouter;