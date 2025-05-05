"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock } from "lucide-react"
import { getCategoryIcon } from "@/lib/utils"

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

interface GeneratedNewsListProps {
  news: NewsArticle[]
  onArticleClick: (article: NewsArticle) => void
}

export function GeneratedNewsList({ news, onArticleClick }: GeneratedNewsListProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Oluşturulan Haberler</CardTitle>
            <CardDescription>Kaynaklarınızdan yapay zeka tarafından oluşturulan makaleler</CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Son 24 Saat
            </Button>
            <Button variant="outline" size="sm">
              Son 7 Gün
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {news.map((article) => (
            <div
              key={article.id}
              className="p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onArticleClick(article)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 flex items-center justify-center bg-primary/10 rounded-full">
                    <span className="text-lg">{getCategoryIcon(article.category)}</span>
                  </div>
                  <span className="font-medium">{article.source.name}</span>
                </div>
                <Badge>{article.category}</Badge>
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
      </CardContent>
    </Card>
  )
}
