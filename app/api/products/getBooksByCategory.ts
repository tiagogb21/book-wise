'use server';

import { prisma } from "@/app/lib/prisma";

export async function getBooksByCategory(categoryId: string | null, searchTerm: string | null) {
    const searchConditions = searchTerm
        ? {
              OR: [
                  {
                      name: {
                          contains: searchTerm.toLowerCase(),
                      },
                  },
                  {
                      author: {
                          contains: searchTerm.toLowerCase(),
                      },
                  },
              ],
          }
        : {};

    if (!categoryId) {
        return await prisma.book.findMany({
            where: {
                ...searchConditions,
            },
            include: {
                categories: {
                    select: {
                        category: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
                ratings: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                avatar_url: true,
                            },
                        },
                    },
                },
            },
        });
    }

    return await prisma.book.findMany({
        where: {
            categories: {
                some: {
                    categoryId: categoryId,
                },
            },
            ...searchConditions,
        },
        include: {
            categories: {
                select: {
                    category: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
            ratings: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            },
        },
    });
}
