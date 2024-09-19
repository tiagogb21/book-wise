import Image from "next/image";
import { ExtendedBook } from "./ListBooks";
import bookMark from "@/app/assets/icons/Name=BookmarkSimple.svg";
import bookOpen from "@/app/assets/icons/Name=BookOpen.svg";
import { timeElapsed } from "@/app/utils/timeEllapsed";

interface BookDetailsProps {
    book: ExtendedBook;
}

export const BookDetails = ({ book }: BookDetailsProps) => {
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
                    <button type="button" className="text-project-purple-100 font-bold">Avaliar</button>
                </div>
                {book.ratings.map((rating) => (
                    <div key={rating.id} className="flex flex-col gap-6 bg-project-gray-700 p-6 rounded-lg">
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
