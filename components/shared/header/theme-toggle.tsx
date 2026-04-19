"use client";
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import { DropdownMenu, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuCheckboxItem, 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, Laptop2Icon } from 'lucide-react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) return null;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          {theme === "system" ? <Laptop2Icon /> : theme === "dark" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-40'>
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={theme === "light"} onSelect={() => setTheme("light")}>
          <SunIcon className='me-2' /> Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme === "dark"} onSelect={() => setTheme("dark")}>
          <MoonIcon className='me-2' /> Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={theme === "system"} onSelect={() => setTheme("system")}>
          <Laptop2Icon className='me-2' /> System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle