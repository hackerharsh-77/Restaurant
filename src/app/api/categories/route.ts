import { PrismaClient } from "@prisma/client";
import { Purple_Purse } from "next/font/google";
import { NextResponse } from "next/server"

const prismaClient = new PrismaClient(); 

//fetch all categories 
export const GET = async() =>{
    try{    
        const categories = await prismaClient.category.findMany();
        return new NextResponse(JSON.stringify(categories), {status: 200});

    }catch(err){
        return new NextResponse(JSON.stringify(err), {status: 500});
    }
}

export const POST = () =>{
    return new NextResponse("Hello", {status: 200});
}