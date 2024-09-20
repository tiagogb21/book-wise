'use server';

import { prisma } from "@/app/lib/prisma";

export async function getUserByName(name: string) {
    if(!name) return;

    const user = await prisma.user.findFirst({
        where: {
            name,
        }
    })

    return user;
}
