"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, Edit } from "lucide-react"
import { getCategoryIcon } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Person {
  id: string
  name: string
  bio: string
  category: string
  source: string
  sourceType: string
  lastUpdate: string
}

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

interface PersonDetailModalProps {
  isOpen: boolean
  onClose: () => void
  person: Person | null
  news: NewsArticle[]
  onArticleClick: (article: NewsArticle) => void
}

export function PersonDetailModal({ isOpen, onClose, person, news, onArticleClick }: PersonDetailModalProps) {
  if (!person) return null

  const categoryIcon = getCategoryIcon(person.category)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full">
              <span className="text-2xl">{categoryIcon}</span>
            </div>
            <div>
              <DialogTitle className="text-2xl">{person.name}</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">{person.bio}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline">{person.category}</Badge>
          <Badge variant="secondary">{person.sourceType}</Badge>
          <Badge variant="outline" className="bg-primary/5">
            Kaynak: {person.source}
          </Badge>
        </div>

        <Tabs defaultValue="news" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="news">Haberler ({news.length})</TabsTrigger>
            <TabsTrigger value="stats">İstatistikler</TabsTrigger>
          </TabsList>
          <TabsContent value="news" className="mt-4">
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
                <p className="text-muted-foreground">Bu kişi için henüz haber oluşturulmamış.</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="stats">
            <div className="p-4 bg-white border rounded-lg">
              <h3 className="font-medium mb-4">Haber İstatistikleri</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Toplam Haber Sayısı:</span>
                  <span className="font-medium">{news.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Son Güncelleme:</span>
                  <span className="font-medium">{person.lastUpdate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ortalama Okuma Süresi:</span>
                  <span className="font-medium">4 dk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">En Popüler Konu:</span>
                  <span className="font-medium">{person.category}</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end mt-6">
          <Button variant="outline" size="sm" onClick={onClose}>
            Kapat
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
