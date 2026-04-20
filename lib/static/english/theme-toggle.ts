import { Laptop2Icon, LucideIcon, MoonIcon, SunIcon } from "lucide-react";

export type ThemeItem = {
    label: string;
    value: string;
    icon?: LucideIcon;
};

export const themeToggle: ThemeItem[] = [
    {label: "light", value: "light", icon: SunIcon},
    {label: "dark", value: "dark", icon: MoonIcon},
    {label: "system", value: "system", icon: Laptop2Icon},
]