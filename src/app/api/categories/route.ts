import {prisma} from '../../utils/connect';
import { NextRequest, NextResponse } from "next/server"

//fetch all categories 
export const GET = async (req: NextRequest) => {
    try {
      const categories = await prisma.category.findMany();
      return new NextResponse(JSON.stringify(categories), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  };
