import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategoryIcon(category: string): string {
  const categoryMap: Record<string, string> = {
    Politika: "🏛️",
    Teknoloji: "💻",
    "İş Dünyası": "📈",
    Eğlence: "🎬",
    Spor: "⚽",
    Bilim: "🔬",
    Sağlık: "🏥",
    Eğitim: "🎓",
    Politics: "🏛️",
    Technology: "💻",
    Business: "📈",
    Entertainment: "🎬",
    Sports: "⚽",
    Science: "🔬",
    Health: "🏥",
    Education: "🎓",
    News: "📰",
  }

  return categoryMap[category] || "📄"
}

export function getCategoryName(categoryId: string): string {
  const categoryMap: Record<string, string> = {
    politics: "Politika",
    technology: "Teknoloji",
    business: "İş Dünyası",
    entertainment: "Eğlence",
    sports: "Spor",
    science: "Bilim",
    health: "Sağlık",
    education: "Eğitim",
  }

  return categoryMap[categoryId] || categoryId
}
