export const formatPrice = (value: number | string): string => {
    try {
        const price = typeof value === "number" ? value : parseFloat(value);

        if (isNaN(price)) return "R$ 0,00";
        return price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    } catch (error) {
        return "R$ 0,00";
    }
}

export const formatMinutes = (value: number | string): string => {
    const num = typeof value === "number" ? value : parseInt(value, 10);

    if (isNaN(num) || num < 0) return "0m";

    const hours = Math.floor(num / 60);
    const minutes = num % 60;

    if (hours > 0 && minutes > 0) {
        return `${hours}h ${minutes}m`;
    }

    if (hours > 0) {
        return `${hours}h`;
    }

    return `${minutes}m`;
}