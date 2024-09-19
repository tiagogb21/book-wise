import type { Metadata } from "next";
import authBackgroundImage from '../assets/images/auth-background-image.png';
import Image from "next/image";

export const metadata: Metadata = {
    title: `Sign In`,
    description: "This is a project to book wise",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen flex flex-col lg:flex-row">
            <Image src={authBackgroundImage} className="h-screen w-auto" alt="imagem de fundo da autenticação" priority />
            {children}
        </main>
    );
}
