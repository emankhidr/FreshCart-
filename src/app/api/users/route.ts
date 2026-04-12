
// req methods : GET POST PUT PATCH DELETE

// route handler
//api/auth/nextauth
import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){
    const users = [
        {name : 'ahmed',id : 1},
        {name : 'ali',id : 2},

    ]
    return NextResponse.json({
        users,status:200

    })
}