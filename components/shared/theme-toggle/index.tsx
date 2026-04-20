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
import { themeToggle } from '@/lib/static/english/theme-toggle';

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
        {themeToggle.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.value}
            checked={theme === item.value}
            onCheckedChange={() => setTheme(item.value)}
          >
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle