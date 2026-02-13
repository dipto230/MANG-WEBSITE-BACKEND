import { v2 as cloudinary } from 'cloudinary'


const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name:process
    })
}