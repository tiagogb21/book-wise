"use client";

import Link from "next/link";
import { ListMostPopular } from "./ListMostPopular";
import { ListRatings } from "./ListRatings";

export default function Home() {
    return (
        <div className="flex flex-col p-12">
            <h1 className="font-bold mb-10 text-2xl text-project-gray-100">Início</h1>
            <div className="flex text-project-gray-100 gap-4">
                <div className="flex flex-col">
                    <h2 className="mb-4">Avaliações mais recentes</h2>
                    <ListRatings />
                </div>
                <div>
                    <div className="flex justify-between">
                        <h2 className="mb-4">Livros populares</h2>
                        <Link href="/explorar" className="text-project-purple-100">{`Ver todos >`}</Link>
                    </div>
                    <ListMostPopular />
                </div>
            </div>
        </div>
    );
}
