'use client';

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import signOutImg from '@/app/assets/icons/Name=SignOut.svg';

export const ButtonLogout = () => {
    const {data:session} = useSession();

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
