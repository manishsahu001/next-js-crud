import { NextResponse } from "next/server";
import data from "../../../../../../data/db";

export async function GET(request, params){
    const getDataById =  data.filter((data)=> data.id === params.params.id)
    if(getDataById.length === 0){
        return new Response("No any data with this id")
    }
    return NextResponse.json(getDataById)
}