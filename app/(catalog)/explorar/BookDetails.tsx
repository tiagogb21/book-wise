import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ExtendedBook } from "./ListBooks";
import { timeElapsed } from "@/app/utils/timeEllapsed";
import userIcon from "@/app/assets/icons/Name=User.svg";
import StarRating from "./StarRating";
import { createRating } from "@/app/api/ratings/create";

interface BookDetailsProps {
    book: ExtendedBook;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
    const { data: session } = useSession();
    const [showReview, setShowReview] = useState<boolean>(false);
    const [rate, setRate] = useState<number>(0); // Guarda a nota
    const [description, setDescription] = useState<string>(""); // Guarda a descrição

    const handleChangeShowReview = () => {
        if (!session) {
            alert("necessário login");
            return;
        }
        setShowReview(!showReview);
    };

    const handleRatingSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!rate || !description) {
            alert("Avaliação e descrição são obrigatórias.");
            return;
        }

        const formData = {
            rate,
            description,
            bookId: book.id,
            userId: session?.user?.id ?? "4383f783-6ce1-4f92-b1dd-7a7a693c4aef",
        };

        await createRating(formData);
        setShowReview(false);
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col bg-project-gray-700 gap-10 py-6 px-8 rounded-lg">
                <div className="flex gap-8">
                    <Image
                        src={book.cover_url}
                        alt={book.name}
                        width={150}
                        height={200}
                    />
                    <div className="flex flex-col justify-between">
                        <h2 className="text-lg line-clamp-2">{book.name}</h2>
                        <h3 className="text-gray-600 mb-2">
                            Autor: {book.author}
                        </h3>
                        <div className="flex gap-2 text-2xl">
                            {"★".repeat(book.ratings[0]?.rate || 0)}{" "}
                            {"☆".repeat(5 - (book.ratings[0]?.rate || 0))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Avaliação */}
            <div className="flex justify-between mb-4">
                <h2>Avaliações</h2>
                <button
                    type="button"
                    onClick={handleChangeShowReview}
                    className="text-project-purple-100 font-bold"
                >
                    Avaliar
                </button>
            </div>

            {showReview && (
                <div className="flex flex-col bg-project-gray-700 p-6 rounded-lg mb-6">
                    <form
                        className="flex flex-col gap-6"
                        onSubmit={handleRatingSubmit}
                    >
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex items-center gap-4">
                                <Image
                                    src={userIcon}
                                    alt={session?.user?.name!}
                                    width={40}
                                    height={40}
                                />
                                <h2>{session?.user?.name}</h2>
                            </div>
                            <StarRating onRatingSubmit={setRate} />{" "}
                            {/* Captura a nota */}
                        </div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} // Captura a descrição
                            className="border border-solid border-project-purple-100 w-full bg-project-gray-800 rounded-md px-5 py-4"
                            placeholder="Escreva sua avaliação"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                type="reset"
                                className="py-4 px-6 rounded-md bg-project-gray-600 border"
                            >
                                🗙
                            </button>
                            <button
                                type="submit"
                                className="py-4 px-6 rounded-md bg-project-gray-600 border border-solid border-project-purple-100 hover:opacity-70"
                            >
                                ✔️
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {book.ratings.map((rating) => (
                <div
                    key={rating.id}
                    className="flex flex-col gap-6 bg-project-gray-700 p-6 rounded-lg"
                >
                    <div className="flex items-start gap-4">
                        <Image
                            src={rating.user.avatar_url!}
                            alt={rating.user.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="flex-1">
                            <h2 className="text-project-gray-100 font-bold">
                                {rating.user.name}
                            </h2>
                            <h3 className="text-project-gray-400">
                                {timeElapsed(rating.created_at)}
                            </h3>
                        </div>
                        <div className="flex gap-2 text-2xl">
                            {"★".repeat(rating.rate)}{" "}
                            {"☆".repeat(5 - rating.rate)}
                        </div>
                    </div>
                    <p>{rating.description}</p>
                </div>
            ))}
        </div>
    );
};
