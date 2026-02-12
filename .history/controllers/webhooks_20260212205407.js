import { Webhook } from "svix";
import User from "../models/User.js";


export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await whook.verify(payload, headers_)
    } catch (error) {
        
    }
}