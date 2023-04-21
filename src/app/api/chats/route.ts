import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();


export async function GET(request: NextRequest, res: NextResponse) {
    const chat = await prisma.chat.findMany()
    return NextResponse.json(chat, {status:200})

}

export async function POST(request: Request, response: NextResponse) {
    const { mensagem } = await request.json();

    if (mensagem === "") {
        return  NextResponse.json({"error": "Parâmetro mensagem não recebido"}, {status:400})
    }
    const chatCreate = await prisma.chat.create({
        data:{
            mensagem: mensagem
        },
    });

    return NextResponse.json(chatCreate, {status:200})

}
  
