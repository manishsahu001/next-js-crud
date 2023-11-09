import { NextResponse } from "next/server"
import data from "../../../../data/db"

// Get
export const GET = async(req, res)=>{
    try {
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}

// Post
export const POST = async (req, res)=>{
    const {name, age, role} = await req.json();
    
    try {
        const newData = {name, age, role}
        newData.id = data.length + 1;
        data.push(newData);
        return NextResponse.json({data});
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}
