import { getBooksByCategory } from "@/app/api/products/getBooksByCategory";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BookDetails } from "./BookDetails";
import close from "@/app/assets/icons/Name=X.svg";
import { Book, Category, Rating, User } from "@prisma/client";

interface ExtendedRating extends Rating {
    user: User;
}

export interface ExtendedBook extends Book {
    ratings: ExtendedRating[];
    categories: { category: Pick<Category, "name"> }[];
}

interface ListBooksProps {
    selectedCategory: string | null;
    search: string | null;
}

export const ListBooks = ({ selectedCategory, search }: ListBooksProps) => {
    const [books, setBooks] = useState<ExtendedBook[]>([]); // Use ExtendedBook
    const [selectedBook, setSelectedBook] = useState<ExtendedBook | null>(null);

    useEffect(() => {
        async function getBooks() {
            const fetchBooks: ExtendedBook[] = await getBooksByCategory(
                selectedCategory,
                search
            );
            if (fetchBooks.length === 0) return;
            setBooks(fetchBooks);
        }
        getBooks();
    }, [selectedCategory, search]);

    const handleBookClick = (book: ExtendedBook) => {
        setSelectedBook(book);
    };

    const handleClose = () => {
        setSelectedBook(null);
    };

    return (
        <div className="relative">
            {selectedBook && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10"
                    onClick={handleClose}
                ></div>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 z-0">
                {books.length > 0
                    ? books.map((book) => (
                          <div
                              key={book.id}
                              className="flex py-5 px-4 rounded-md gap-5 bg-project-gray-700 cursor-pointer"
                              onClick={() => handleBookClick(book)}
                          >
                              <Image
                                  src={book.cover_url}
                                  alt={book.name}
                                  width={108}
                                  height={152}
                              />
                              <div className="flex flex-col justify-between">
                                  <div>
                                      <h2 className="line-clamp-2">
                                          {book.name}
                                      </h2>
                                      <h3 className="text-project-gray-400 text-sm">
                                          {book.author}
                                      </h3>
                                  </div>
                                  <div className="flex gap-2 text-2xl">
                                      {"★".repeat(book.ratings[0]?.rate || 0)}{" "}
                                      {/* Verifica se há rating */}
                                      {"☆".repeat(
                                          5 - (book.ratings[0]?.rate || 0)
                                      )}
                                  </div>
                              </div>
                          </div>
                      ))
                    : Array.from({ length: 10 }).map((_, id) => (
                          <div
                              key={id}
                              className="skeleton-loading h-[12rem] flex py-5 px-4 rounded-md gap-5 bg-project-gray-700"
                          ></div>
                      ))}
            </div>

            {selectedBook && (
                <div className="w-[35rem] h-screen fixed z-20 right-0 top-0 bg-project-gray-800 shadow-lg px-12 py-4 overflow-y-scroll">
                    <div className="w-full flex justify-end mb-5">
                        <button onClick={handleClose}>
                            <Image
                                src={close}
                                width={24}
                                height={24}
                                alt="fechar"
                            />
                        </button>
                    </div>
                    <BookDetails book={selectedBook} />
                </div>
            )}
        </div>
    );
};
