"use client";

import Image from "next/image";

import magnifyingGlass from "@/app/assets/icons/MagnifyingGlass.png";
import { ChangeEvent, useState } from "react";
import { ListUser } from "./ListUser";
import { ListBooksRating } from "./ListBooksRating";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Perfil() {
    const {data:session} = useSession();

    if(!session) {
        redirect('/');
    }

    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="flex flex-col p-12">
            <h1 className="font-bold mb-10 text-2xl text-project-gray-100">
                Perfil
            </h1>
            <div className="flex flex-col lg:flex-row items-start gap-16">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center border border-solid border-project-gray-500 rounded-md px-5 py-4">
                        <input
                            type="text"
                            name="search"
                            id="search-by-book-or-author"
                            placeholder="Buscar livro avaliado"
                            value={search}
                            onChange={handleChange}
                            className="w-full"
                        />
                        <Image src={magnifyingGlass} alt="lupa - pesquisar" />
                    </div>
                    <ListBooksRating />
                </div>
                <ListUser />
            </div>
        </div>
    );
}
