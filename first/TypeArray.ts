// Array<T> - T[]

export function multiArgs(...args: number[]):number {
    return args.reduce((ac, valor) => ac * valor,1);
}

export function concatString(...args: string[]): string{
    return args.reduce((ac,valor) => ac + valor)
}

export function toUpperCase(...args: string[]): string[]{
    return args.map((valor) => valor.toUpperCase());
}


