"use client"

import React from 'react'

interface Category {
  id: string
  name: string
  count: number
  icon: string
}

interface CategorySelectionProps {
  categories: Category[]
  onCategorySelect: (category: string) => void
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Kategoriler</h2>
        <button className="text-sm text-primary hover:underline">
          Tümünü Gör
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-sm transition-all"
            onClick={() => onCategorySelect(category.id)}
          >
            <span className="text-2xl mb-2">{category.icon}</span>
            <span className="font-medium text-sm">{category.name}</span>
            <span className="text-xs text-gray-500">{category.count} haber</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategorySelection 