"use server";

import { prisma } from "@/app/lib/prisma";

export async function getCategories() {
    const topCategories = await prisma.category.findMany({
        include: {
            _count: {
                select: { books: true },
            },
        },
        orderBy: {
            books: {
                _count: "desc",
            },
        },
        take: 6, // Pegue os 6 primeiros resultados
    });

    return topCategories;
}
