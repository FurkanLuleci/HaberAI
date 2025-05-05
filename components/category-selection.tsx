"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Category {
  id: string
  name: string
  count: number
  icon: string
}

interface CategorySelectionProps {
  categories: Category[]
  onCategorySelect: (categoryId: string) => void
}

export function CategorySelection({ categories, onCategorySelect }: CategorySelectionProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Kategoriler</CardTitle>
            <CardDescription>Kaynak eklemek veya görüntülemek için bir kategori seçin</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onCategorySelect(category.id)}
            >
              <div className="flex-shrink-0 mr-4 bg-primary/10 p-2 rounded-md">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <div>
                <h3 className="font-medium">{category.name}</h3>
                <div className="flex items-center mt-1">
                  <Badge variant="secondary">{category.count} kaynak</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
