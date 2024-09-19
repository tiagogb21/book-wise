import Link from "next/link";

export default function SignUp() {
    return (
        <div className="flex-1 flex items-center justify-center text-project-gray-100">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold">Boas vindas!</h1>
                    <h2>Faça seu login ou acesse como visitante.</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <button type="button" className="text-start bg-project-gray-600 px-6 py-5 rounded-lg">Entrar com Google</button>
                    <button type="button" className="text-start bg-project-gray-600 px-6 py-5 rounded-lg">Entrar com Github</button>
                    <Link href="/login" className="bg-project-gray-600 px-6 py-5 rounded-lg">Acessar como visitante</Link>
                </div>
            </div>
        </div>
    );
}
