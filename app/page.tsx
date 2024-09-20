import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { nextAuthOptions } from "./lib/configs/auth/authOptions/authOptions";
import { ButtonLogin } from "./components/ButtonLogin";
import rocketLaunch from '@/app/assets/icons/RocketLaunch.svg';
import google from '@/app/assets/icons/logos_google-icon.svg';
import github from '@/app/assets/icons/akar-icons_github-fill.svg';

export default async function Home() {
    // const session = await getServerSession(nextAuthOptions);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 text-white">
            <div className="flex flex-col">
                <div className="flex flex-col mb-10">
                <h1 className="text-2xl">Boas vindas!</h1>
                <p className="text-project-gray-200">Faça seu login ou acesse como visitante.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <ButtonLogin type="github" img={github} />
                    <ButtonLogin type="google" img={google} />
                    <Link className="flex flex-start gap-5 items-center px-6 py-5 bg-project-gray-600 rounded-lg" href="/home">
                        <Image src={rocketLaunch} alt="foguete" width={32} height={32} />
                        Entrar como visitante
                    </Link>
                </div>
            </div>
        </main>
    );
}
