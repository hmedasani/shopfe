import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const cn = (...classes: ClassValue[]) => {
    return twMerge(clsx(...classes));
}