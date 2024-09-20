'use server';

import { prisma } from "@/app/lib/prisma";

interface RatingData {
  rate: number;
  description: string;
  bookId: string;
  userId: string;
}

export async function createRating(data: RatingData) {
  const newRating = await prisma.rating.create({
    data: {
      rate: data.rate,
      description: data.description,
      book_id: data.bookId,
      user_id: data.userId,
    },
  });

  return newRating;
}
