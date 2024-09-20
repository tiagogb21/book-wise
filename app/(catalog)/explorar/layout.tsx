import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Explorar',
    description: "Explorar livros",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-12 text-project-gray-100 flex flex-col gap-12">
            {children}
        </div>
    );
}
