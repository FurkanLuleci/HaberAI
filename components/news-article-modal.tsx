"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, Share2, BookmarkPlus } from "lucide-react"
import { getCategoryIcon } from "@/lib/utils"

interface NewsArticle {
  id: string
  title: string
  summary: string
  content?: string
  source: {
    name: string
    avatar?: string
  }
  category: string
  publishDate: string
  readTime: string
}

interface NewsArticleModalProps {
  isOpen: boolean
  onClose: () => void
  article: NewsArticle | null
}

export function NewsArticleModal({ isOpen, onClose, article }: NewsArticleModalProps) {
  if (!article) return null

  // Mock content if not provided
  const content =
    article.content ||
    `
    <p>Bu, ${article.source.name} tarafından paylaşılan içeriğe dayalı olarak yapay zeka tarafından oluşturulmuş bir makaledir.</p>
    <p>Orijinal içerik analiz edildi ve temel noktaları korurken ek bağlam ve yapı sağlayan kapsamlı bir haber makalesi formatına dönüştürüldü.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.</p>
    <p>Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.</p>
    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.</p>
  `

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 flex items-center justify-center bg-primary/10 rounded-full">
                <span className="text-lg">{getCategoryIcon(article.category)}</span>
              </div>
              <span className="font-medium">{article.source.name}</span>
            </div>
            <Badge>{article.category}</Badge>
          </div>
          <DialogTitle className="text-2xl">{article.title}</DialogTitle>
          <DialogDescription className="flex items-center text-sm pt-2">
            <div className="flex items-center mr-4">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime} okuma</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" size="sm" onClick={onClose}>
            Kapat
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <BookmarkPlus className="h-4 w-4 mr-2" />
              Kaydet
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Paylaş
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
