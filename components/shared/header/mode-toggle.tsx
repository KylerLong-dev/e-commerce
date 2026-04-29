"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { 
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuLabel, 
    DropdownMenuSeparator,
    DropdownMenuContent,
 } from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    return(<DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost">
                {theme === "system" ? (
                    <SunMoon />
                ) : theme === "dark" ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
    );
}
 
export default ModeToggle ;