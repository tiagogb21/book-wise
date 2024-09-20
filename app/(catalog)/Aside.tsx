"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import bookHeart from '../assets/icons/mdi_book-heart-outline.svg';
import Image from "next/image";
import { ButtonLogout } from "../components/ButtonLogout";
import { useSession } from "next-auth/react";
import signOutImg from '@/app/assets/icons/Name=SignOut.svg';

const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/explorar", label: "Explorar" },
    { href: "/perfil", label: "Perfil" },
];

export const Aside = () => {
    const {data:session} = useSession();
    const pathname = usePathname();
    return (
        <aside className="h-screen hidden lg:flex flex-col justify-between py-10 px-14 bg-project-gray-700 rounded-lg">
            <div className="w-40 flex flex-col gap-16">
                <div className="bg-gradient-to-r from-project-gradient-start to-project-gradient-end bg-clip-text text-transparent flex gap-2 text-2xl">
                    <Image src={bookHeart} alt="logo" />
                    <Link href="/home">Book Wise</Link>
                </div>
                <div className="flex flex-col gap-4">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname.startsWith(href);
                        return (
                            <Link
                                href={href}
                                key={label}
                                className={`${
                                    isActive
                                        ? "border-l-4 border-solid border-blue-400 text-project-gray-100"
                                        : "border-l-4 border-solid border-transparent text-project-gray-400"
                                } pl-4 hover:text-white`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
            {
                session ? (
                    <ButtonLogout />
                ) : (
                    <Link href="/" className="flex items-center justify-center gap-5 text-white">
                        Fazer login
                        <Image src={signOutImg} alt="sair" width={30} height={30} />
                    </Link>
                )
            }
        </aside>
    );
};
