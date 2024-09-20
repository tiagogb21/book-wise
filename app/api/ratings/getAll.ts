'use server';

import { ExtendedRating } from "@/app/(catalog)/home/ListRatings";
import { prisma } from "@/app/lib/prisma";
import { Book } from "@prisma/client";

export async function getRatings(): Promise<ExtendedRating[]> {
    const topRatings = await prisma.rating.findMany({
        include: {
            user: true,
            book: true,
        },
        orderBy: {
            created_at: "desc",
        },
    });

    return topRatings as ExtendedRating[];
}

export async function mostPopular(): Promise<Book[]> {
    const topBooks = await prisma.rating.groupBy({
        by: ['book_id'],
        _count: {
            book_id: true,
        },
        orderBy: {
            _count: {
                book_id: 'desc',
            },
        },
        take: 4,
    });

    const bookIds = topBooks.map(book => book.book_id);

    const popularBooks = await prisma.book.findMany({
        where: {
            id: {
                in: bookIds,
            },
        },
        include: {
            ratings: true,
        },
    });

    return popularBooks as Book[];
}
