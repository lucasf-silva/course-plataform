type API<TData> = {
    sucess: boolean;
    detail?: string | null;
    code?: string;
    data: TData | null;
}

type APIError = {
    sucess: false;
    detail: string;
    code?: string;
}