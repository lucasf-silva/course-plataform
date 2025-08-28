import { api } from "@/lib/api";
import { SignInForm } from "@/lib/schemas/auth";

export const signIn = async (data: SignInForm) => {
    return api<APISignInResponse>({
        endpoint: 'teste',
        method: 'POST',
        data
    })
}