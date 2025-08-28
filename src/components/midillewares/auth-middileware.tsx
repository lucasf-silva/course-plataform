import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type Props = {
    children: React.ReactNode;
}

export const AuthMiddileware = async ({ children }: Props) => {
    const session = await auth();

    if(session?.user?.access_token){
        redirect('/dashboard');
    }

    return children;
}