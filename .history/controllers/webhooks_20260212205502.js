import { Webhook } from "svix";
import User from "../models/User.js";


export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        await whook.verify(JSON.stringify(req, body), {
            "svix-id":req.hea
        })
    } catch (error) {
        
    }
}