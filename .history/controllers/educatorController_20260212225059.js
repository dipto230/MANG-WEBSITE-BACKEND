import { clerkClient } from "@clerk/express"


export const updateRoleToEducator = async () => {
    try {
        const userId = req.auth.userId
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role:'educator',
            }
        })
        res.json({success:})
    } catch (error) {
        
    }
}