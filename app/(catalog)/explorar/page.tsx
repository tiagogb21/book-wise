'use client';

import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import Image from "next/image";
import { Category } from "@prisma/client";
import { ListBooks } from "./ListBooks";
import { ListCategories } from "./ListCategories";
import binoculars from '@/app/assets/icons/binoculars.svg';
import magnifyingGlass from '@/app/assets/icons/MagnifyingGlass.png';

export default function Explore() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');
    const [debouncedSearch, setDebouncedSearch] = useState<string>(search);

    // Função para aplicar o debounce
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500); // 500ms de atraso

        return () => {
            clearTimeout(handler); // Limpa o timeout se o search mudar antes dos 500ms
        };
    }, [search]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <Image src={binoculars} alt="binoculos - visualizar" />
                    <h1 className="text-2xl">Explorar</h1>
                </div>
                <div className="flex items-center border border-solid border-project-gray-500 rounded-md px-5 py-4">
                    <input
                        type="text"
                        name="search"
                        id="search-by-book-or-author"
                        placeholder="Buscar livro ou autor"
                        value={search}
                        onChange={handleChange}
                    />
                    <Image src={magnifyingGlass} alt="lupa - pesquisar" />
                </div>
            </div>
            <ListCategories
                categories={categories}
                setCategories={setCategories}
                setSelectedCategory={setSelectedCategory}
            />
            <ListBooks selectedCategory={selectedCategory} search={debouncedSearch} />
        </>
    );
}
