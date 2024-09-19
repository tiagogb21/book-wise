import type { Metadata } from "next";
import { Aside } from "./Aside";

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
        <main className="min-h-screen flex lg:flex-row m-5">
            <Aside />
            {children}
        </main>
    );
}
