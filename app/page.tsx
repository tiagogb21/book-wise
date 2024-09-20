import { getServerSession } from "next-auth";
import { nextAuthOptions } from "./lib/configs/auth/authOptions/authOptions";
import { ButtonLogin } from "./components/ButtonLogin";

export default async function Home() {
    // const session = await getServerSession(nextAuthOptions);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white">
            <div className="w-3/12">
                <ButtonLogin type="github" />

                <ButtonLogin type="google" />
            </div>
        </main>
    );
}
