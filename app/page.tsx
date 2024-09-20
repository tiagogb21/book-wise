import Link from "next/link";
import Image from "next/image";
import { ButtonLogin } from "./components/ButtonLogin";
import rocketLaunch from '@/app/assets/icons/RocketLaunch.svg';
import google from '@/app/assets/icons/logos_google-icon.svg';
import github from '@/app/assets/icons/akar-icons_github-fill.svg';
import authBackground from '@/app/assets/images/auth-background-image.png';

export default async function Home() {
    return (
        <main className="flex min-h-screen items-center justify-between text-white">
            <div className="hidden lg:flex">
                <Image src={authBackground} alt="Rocket Launch" width={400} height={700} />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center">
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
