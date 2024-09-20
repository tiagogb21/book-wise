'use client';

import { signIn } from "next-auth/react";

interface ButtonLoginProp {
    type: "github" | "google";
}

export const ButtonLogin = ({ type }: ButtonLoginProp) => {
    return (
        <button
            className="btn btn-outline w-full"
            onClick={() => signIn(type, { callbackUrl: "/home" })}
        >
            Acesse sua conta com {type}
        </button>
    );
};
