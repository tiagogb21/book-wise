import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Provider } from "./providers/Provider";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: `%s | ${process.env.APP_NAME}`,
        default: `${process.env.APP_NAME}`,
    },
    description: "This is a project to book wise",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={`${process.env.APP_LANG ?? "en"}`}>
            <Provider>
                <body
                    className={`${nunito} antialiased bg-project-gray-800`}
                >
                    {children}
                </body>
            </Provider>
        </html>
    );
}
