import { NextResponse } from "next/server";
import data from "../../../../../data/db";

export const GET = async (req, res)=>{
    try {
        const id = req.url.split("third/")[1];
        console.log(id)


        const singleData = data.filter((data)=> data.id.toString() === id);
        console.log(singleData)
        if(singleData.length === 0){
            return NextResponse.json({message: "Not Found!"});
        }
        return NextResponse.json({singleData});
    } catch (error) {
        return NextResponse.json({error}, {status: 404})
    }
}

// Delete Operation 
export const DELETE = async (req, res)=>{
    try {
        const id = req.url.split("t8hird/")[1];
        console.log(id)

        const userIndex = data.findIndex((data)=> data.id === id);
        if(userIndex === -1){
            return NextResponse.json({msg: "User Not Found"})
        }
        
        // Logic to remove data from the database
        data.splice(userIndex, 1) // 1 because we have to splice 1 time only
        console.log(data);
        return NextResponse.json({message: "User Deleted Successfully"})
    } catch (error) {
        return NextResponse.json({error: error})
    }
}

// Update (PUT)

export const PUT = async (req, res)=>{
    try {
        const id = req.url.split("third/")[1];
        
        const {name, age, role} = await req.json();

        // Find the user and update
        const user = data.find((data)=> data.id.toString() === id);
        if(!user){
            return NextResponse.json({msg: "User Not found"})
        }

        if(name){
            user.name = name;
        }
        if(age){
            user.age = age;
        }
        if(role){
            user.role = role;
        }

        console.log(data)
        return NextResponse.json({data, msg: "Edited Successfully"});

    } catch (error) {
        return NextResponse.json({msg: "Some error occcured"})
    }
}