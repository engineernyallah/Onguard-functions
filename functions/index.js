 const {BFast} = require('bfastnode');
//
exports.SampleOfGuardFunction= BFast.functions().onGuard('/sample' , (Request , Response , next)=>{
    if(Request.query.role==='/login'){
        next();
    }else
    Response.send("Enter the correct details")
})