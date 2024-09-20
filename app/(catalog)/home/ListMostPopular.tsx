import { useEffect, useState } from "react";
import { Book } from "@prisma/client";
import { mostPopular } from "@/app/api/ratings/getAll";
import Image from "next/image";

export const ListMostPopular = () => {
    const [books, setBooks] = useState<Book[] | null>();

    useEffect(() => {
        const fetchRating = async () => {
            const fetchRating: Book[] = await mostPopular();
            setBooks(fetchRating);
        };
        fetchRating();
    }, []);

    return (
        <div className="flex flex-col gap-3 lg:w-80">
            {books?.map((book) => (
                <div
                    key={book.id}
                    className="bg-project-gray-700 p-5 rounded-lg flex gap-5"
                >
                    <Image
                        src={book.cover_url}
                        width={64}
                        height={94}
                        alt={book.name}
                    />
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2>{book.name}</h2>
                            <h3 className="text-project-gray-400 text-sm">
                                {book.author}
                            </h3>
                        </div>
                        <div className="flex gap-2 text-xl">
                            {"★".repeat(book.ratings[0]?.rate || 0)}{" "}
                            {/* Verifica se há rating */}
                            {"☆".repeat(5 - (book.ratings[0]?.rate || 0))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
