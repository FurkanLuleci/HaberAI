'use client'

import { useEffect } from 'react'

export default function ThemeProvider() {
  useEffect(() => {
    const theme = localStorage.getItem("theme") ?? "light";
    document.documentElement.classList.add(theme);
    document.documentElement.style.colorScheme = theme;
  }, []);

  return null
} 