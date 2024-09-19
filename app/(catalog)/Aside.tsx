"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import bookHeart from '../assets/icons/mdi_book-heart-outline.svg';
import Image from "next/image";

const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/explorar", label: "Explorar" },
];

export const Aside = () => {
    const pathname = usePathname();
    return (
        <aside className="hidden lg:flex flex-col py-10 px-14 bg-project-gray-700 rounded-lg">
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
                                } pl-4`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};
