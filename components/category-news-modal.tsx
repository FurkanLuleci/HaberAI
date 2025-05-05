"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock } from "lucide-react"
import { getCategoryIcon, getCategoryName } from "@/lib/utils"

interface NewsArticle {
  id: string
  title: string
  summary: string
  source: {
    name: string
    avatar?: string
  }
  category: string
  publishDate: string
  readTime: string
}

interface CategoryNewsModalProps {
  isOpen: boolean
  onClose: () => void
  category: string | null
  news: NewsArticle[]
  onArticleClick: (article: NewsArticle) => void
}

export function CategoryNewsModal({ isOpen, onClose, category, news, onArticleClick }: CategoryNewsModalProps) {
  if (!category) return null

  const categoryName = getCategoryName(category)
  const categoryIcon = getCategoryIcon(categoryName)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center space-x-3 pb-2">
          <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-full">
            <span className="text-2xl">{categoryIcon}</span>
          </div>
          <DialogTitle className="text-2xl">{categoryName} Haberleri</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {news.length > 0 ? (
            <div className="grid gap-4">
              {news.map((article) => (
                <div
                  key={article.id}
                  className="p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    onArticleClick(article)
                    onClose()
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg">{getCategoryIcon(article.category)}</span>
                      </div>
                      <span className="font-medium">{article.source.name}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground line-clamp-2 mb-3">{article.summary}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="flex items-center mr-4">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime} okuma</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Bu kategoride haber bulunamadı.</p>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-6">
          <Button variant="outline" size="sm" onClick={onClose}>
            Kapat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
