import { NextResponse } from "next/server";
import data from "../../../../../data/db";

export async function GET(){
    // return NextResponse.json({"name": "Manish", "Role": "Software Engineer"}, {status: 200})
    // return new Response('Hello')
    return NextResponse.json(data)
}