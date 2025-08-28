type User = {
    id: number;
    name: string;
    email: string;
}

type APISignInResponse = {
    user: User;
    acessToken: string;
}

type APISignUpResponse = {
    user: User;
    acessToken: string;
}