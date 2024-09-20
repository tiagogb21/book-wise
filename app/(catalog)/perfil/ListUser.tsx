"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { getUserByName } from "@/app/api/user/getUser";
import { User } from "@prisma/client";

export const ListUser = () => {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        async function getUserInfo() {
            const fetchCategories = await getUserByName("Lindsey Philips");
            setUser(fetchCategories);
        }
        getUserInfo();
    }, [setUser]);

    return (
        <div className="w-80 flex items-start gap-16">
            <div className="flex flex-col gap-14">
                <div className="text-project-gray-100 flex flex-col items-center">
                    <Image
                        src={user?.avatar_url!}
                        alt={user?.name!}
                        width={72}
                        height={72}
                        className="rounded-full mb-5"
                    />
                    <h2 className="text-xl">{user?.name}</h2>
                    <p className="text-sm text-project-gray-400">
                        Membro desde de{" "}
                        {new Date(user?.created_at!).getFullYear()}
                    </p>
                </div>
                <div className="flex flex-col gap-10 text-project-gray-400">
                    <p>Páginas lidas</p>
                    <p>Livros avaliados</p>
                    <p>Autores lidos</p>
                    <p>Categorias mais lidas</p>
                </div>
            </div>
        </div>
    );
};
