import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {


    const existingCountdown = await prisma.countdown.findUnique({
        where: { id: 'counter1' },
    });

    if (!existingCountdown) {
        const endDate = new Date();
        endDate.setHours(endDate.getHours() + 24);

        await prisma.countdown.create({
            data: {
                id: 'counter1',
                endDate,
            },
        });
    }




    return new Response(JSON.stringify(existingCountdown?.endDate), { status: 200 });


}