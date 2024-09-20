import { getRatings } from "@/app/api/ratings/getAll";
import { timeElapsed } from "@/app/utils/timeEllapsed";
import { Book, Rating, User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface ExtendedRating extends Rating {
    book: Book;
    user: User;
}

export const ListRatings = () => {
    const [ratings, setRatings] = useState<ExtendedRating[] | null>()

    useEffect(() => {
        const fetchRating = async () => {
            const fetchRating: ExtendedRating[] = await getRatings();
            setRatings(fetchRating)
        }
        fetchRating()
    }, [])

    return (
        <div className="flex flex-col gap-3">
            {ratings?.map(({ id, description, created_at, book, user }) => (
                <div key={id} className="flex flex-col bg-project-gray-700 p-6 rounded-lg gap-8">
                    <div className="flex gap-4">
                        <Image
                            src={user.avatar_url!}
                            width={40}
                            height={40}
                            alt={user.name}
                            className="rounded-full"
                        />
                        <div>
                                <h2>{user.name}</h2>
                                <p>{timeElapsed(created_at)}</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Image
                            src={book.cover_url!}
                            width={108}
                            height={152}
                            alt={user.name}
                        />
                        <div>
                            <div className="flex flex-col mb-5">
                                <h2 className="font-bold">{book.name}</h2>
                                <h3 className="text-project-gray-400">{book.author}</h3>
                            </div>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
