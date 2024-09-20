'use server';

import { ExtendedRating } from "@/app/(catalog)/home/ListRatings";
import { prisma } from "@/app/lib/prisma";

export async function getBookByUserName(userName: string): Promise<ExtendedRating[]> {
    const userRatings = await prisma.rating.findMany({
        where: {
            user: {
                name: userName,
            },
        },
        include: {
            book: true,
        },
        orderBy: {
            rate: "desc",
        },
    });

    return userRatings as ExtendedRating[];
}
