"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null;
  return (
    <button
    className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100
    duration-200 text-yellow-600 dark:text-green-600`}
    onClick={() => setTheme( theme === "dark" ? "light": "dark")}
    >
        { theme === "light" ? <Sun /> : <Moon />}
    </button>
  )
}
