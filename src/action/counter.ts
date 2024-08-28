"use server"

import prisma from "@/lib/prisma";

export const initializeCountdown = async () => {
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

    return existingCountdown
};