import Image from "next/image";

import { useEffect, useState } from "react";
import { Book, Rating } from "@prisma/client";
import { getBookByUserName } from "@/app/api/ratings/getBookByUserName";
import { timeElapsed } from "@/app/utils/timeEllapsed";
import { useSession } from "next-auth/react";

interface BooksRating extends Rating {
    book: Book;
}

export const ListBooksRating = () => {
    const [booksRating, setBooksRating] = useState<BooksRating[] | null>();

    const {data:session} = useSession();

    if(!session) {
        return (
            <div>Nenhum dado encontrado</div>
        )
    }

    useEffect(() => {
        async function getBooksRating() {
            const fetchBooksRating: BooksRating[] = await getBookByUserName(
                session?.user?.name!
            );
            setBooksRating(fetchBooksRating);
        }
        getBooksRating();
    }, [setBooksRating]);

    return (
        <div className="flex flex-col gap-6">
            {booksRating?.map((bookRating) => (
                <div key={bookRating.id} className="flex flex-col gap-2">
                    <span className="text-project-gray-300 text-sm">
                        {timeElapsed(bookRating.created_at)}
                    </span>
                    <div className="bg-project-gray-700 flex flex-col p-6 rounded-lg gap-6">
                        <div className="flex gap-6">
                            <Image
                                src={bookRating.book.cover_url}
                                alt={bookRating.book.name}
                                width={98}
                                height={134}
                            />
                            <div>
                                <h2 className="text-project-gray-100 font-bold">{bookRating.book.name}</h2>
                                <h3 className="text-project-gray-300 text-sm">{bookRating.book.author}</h3>
                            </div>
                        </div>
                        <p className="text-project-gray-300 text-sm">{bookRating.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
