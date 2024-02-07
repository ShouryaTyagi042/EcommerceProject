import zod from "zod"
const emailSchema=zod.string().email()
const passwordSchema=zod.string().min(6).max(30)
export const validate=async(req,res,next)=>{
    try{
        const email=req.body.email
        const password=req.body.password
        const emailparser=emailSchema.safeParse(email)
        const passwordparser=passwordSchema.safeParse(password)

        // Bug : Even when the password was less than 6 digits, new user was being created
        // Fix : returning the status incase of fails, to avoid calling next()
        if(!emailparser.success)
        {
           return res.status(401).json({
            msg:"Invalid email entered",
           })
        }
        if(!passwordparser.success)
        {
            return res.status(401).json({
                msg:"password must be of 6 to 30 characters long",
               })
        }
        next();
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
}