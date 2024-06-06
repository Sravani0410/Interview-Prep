import { NextResponse } from "next/server";
import { sessionToken } from "./app/util/session";
// 1st time of method to restrict the route --> Private Route
const middleware=(req)=>{
    console.log("ffffffffffffffffff",req)
    if(sessionToken && req.url.includes('/about-us'))
    return (
        NextResponse.redirect('http://localhost:3000/')
    )
}

export default middleware