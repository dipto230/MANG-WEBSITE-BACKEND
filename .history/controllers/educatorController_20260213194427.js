import { clerkClient } from "@clerk/express"
import Course from './../models/Course';


export const updateRoleToEducator = async (req,res) => {
    try {
        const userId = req.auth.userId
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role:'educator',
            }
        })
        res.json({success:true, message:"You Can Publish a Course Now"})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}


export const addCourse = async(req,res)=>{
    try{
        const { courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if (!imageFile) {
            return res.json({success:false, message:"Thumbnail not attached"})
        }
        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(in)
    }catch(error){

    }
}

