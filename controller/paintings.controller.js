const testRoute=(req,res)=>{
    res.send("Hello World form controller")
}

const generatePaint=async(req, res)=>{
    const {body}=req||{}
    const {prompt}=body||{}
}

module.exports={testRoute}