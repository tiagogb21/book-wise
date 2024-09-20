'use client';

import { signIn } from "next-auth/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ButtonLoginProp {
    type: "github" | "google";
    img: string | StaticImport;
}

export const ButtonLogin = ({ type, img }: ButtonLoginProp) => {
    return (
        <button
            className="flex flex-start gap-5 items-center px-6 py-5 bg-project-gray-600 rounded-lg"
            onClick={() => signIn(type, { callbackUrl: "/home" })}
        >
            <Image src={img} alt="foguete" width={32} height={32} />
            Acesse sua conta com {type}
        </button>
    );
};
