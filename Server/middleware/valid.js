import zod from "zod"
const emailSchema=zod.string().email()
const passwordSchema=zod.string().min(6).max(30)
export const validate=async(req,res,next)=>{
    try{
        const email=req.body.email
        const password=req.body.password
        const emailparser=emailSchema.safeParse(email)
        const passwordparser=passwordSchema.safeParse(password)
        if(!emailparser.success)
        {
           res.status(401).json({
            msg:"Invalid email entered",
           })
        }
        if(!passwordparser.success)
        {
            res.status(401).json({
                msg:"password must be of 6 to 30 characters long",
               })
        }
        next()
    }catch (error) {
        res.status(401).json({ error: error.message });
    }
}