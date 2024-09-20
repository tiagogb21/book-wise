import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ExtendedBook } from "./ListBooks";
import { timeElapsed } from "@/app/utils/timeEllapsed";
import bookMark from "@/app/assets/icons/Name=BookmarkSimple.svg";
import bookOpen from "@/app/assets/icons/Name=BookOpen.svg";
import user from "@/app/assets/icons/Name=User.svg";

interface BookDetailsProps {
    book: ExtendedBook;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
    const {data:session} = useSession();

    const [showReview, setShowReview] = useState<boolean>(false);

    const handleChangeShowReview = () => {
        if(!session) {
            alert('necessário login');

            return;
        }

        setShowReview(!showReview)
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10 bg-project-gray-700 py-6 px-8 rounded-lg">
                <div className="flex gap-8">
                    <Image
                        src={book.cover_url}
                        alt={book.name}
                        width={150}
                        height={200}
                    />
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-lg line-clamp-2">
                                {book.name}
                            </h2>
                            <h3 className="text-gray-600 mb-2">
                                Autor: {book.author}
                            </h3>
                        </div>
                        <div className="flex gap-2 text-2xl">
                            {"★".repeat(book.ratings[0]?.rate || 0)}{" "}
                            {/* Verifica se há rating */}
                            {"☆".repeat(5 - (book.ratings[0]?.rate || 0))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-14 pt-6 border-t border-solid border-project-gray-600 text-project-gray-300">
                    <div className="flex items-center gap-4">
                        <Image src={bookMark} alt="marcador de livro" />
                        <div className="flex flex-col">
                            <h2>Categoria</h2>
                            <p className="font-bold flex gap-2 text-project-gray-200">
                                {book.categories.map(
                                    ({ category: { name } }, id) => (
                                        <span key={id}>{name}</span>
                                    )
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={bookOpen} alt="livro aberto" />
                        <div className="flex flex-col">
                            <p>Páginas</p>
                            <p className="font-bold text-project-gray-300">
                                {book.total_pages}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
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

                {
                    showReview && (
                        <div
                            className="flex flex-col bg-project-gray-700 p-6 rounded-lg mb-6"
                        >
                            <form action="" className="flex flex-col gap-6">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-4">
                                        <Image src={user} alt={session?.user?.name!} width={40} height={40} className="border border-solid border-white rounded-full" />
                                        <h2>{session?.user?.name}</h2>
                                    </div>
                                </div>
                                <textarea name="" id="" className="border border-solid border-project-purple-100 w-full bg-project-gray-800 rounded-md">Escreva sua avaliação</textarea>
                                <div className="flex justify-end gap-2">
                                    <button type="reset" className="py-4 px-6 rounded-md bg-project-gray-600 border border-solid border-project-purple-100">a</button>
                                    <button type="button" className="py-4 px-6 rounded-md bg-project-gray-600 border border-solid border-project-purple-100">b</button>
                                </div>
                            </form>
                        </div>
                    )
                }
                {book.ratings.map((rating) => (
                    <div
                        key={rating.id}
                        className="flex flex-col gap-6 bg-project-gray-700 p-6 rounded-lg"
                    >
                        <div className="flex items-start gap-4">
                            <Image
                                src={rating.user.avatar_url!}
                                alt={rating.user.avatar_url!}
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
                                {"★".repeat(book.ratings[0]?.rate || 0)}{" "}
                                {/* Verifica se há rating */}
                                {"☆".repeat(5 - (book.ratings[0]?.rate || 0))}
                            </div>
                        </div>
                        <p>{rating.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
