'use client';

import Image from "next/image";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import signOutImg from '@/app/assets/icons/Name=SignOut.svg';
import { nextAuthOptions } from "../lib/configs/auth/authOptions/authOptions";

export const ButtonLogout = async () => {
    const session = await getServerSession(nextAuthOptions);

    return (
        <button
            onClick={() => signOut()}
            className="flex items-center justify-center gap-5 text-white"
        >
            {session?.user?.name}
            <Image src={signOutImg} alt="sair" width={30} height={30} />
        </button>
    );
};
