"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { getUserByName } from "@/app/api/user/getUser";
import { User } from "@prisma/client";
import bookOpen from '@/app/assets/icons/Name=BookOpen.svg';
import books from '@/app/assets/icons/Name=Books.svg';
import userList from '@/app/assets/icons/Name=User List.svg';
import bookMark from '@/app/assets/icons/Name=BookmarkSimple.svg';

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
                    <p className="flex gap-2 items-center">
                        <Image src={bookOpen} alt="" width={32} height={32} />
                        Páginas lidas
                    </p>
                    <p className="flex gap-2 items-center">
                        <Image src={books} alt="" width={32} height={32} />
                        Livros avaliados
                    </p>
                    <p className="flex gap-2 items-center">
                        <Image src={userList} alt="" width={32} height={32} />
                        Autores lidos
                    </p>
                    <p className="flex gap-2 items-center">
                        <Image src={bookMark} alt="" width={32} height={32} />
                        Categorias mais lidas
                    </p>
                </div>
            </div>
        </div>
    );
};
