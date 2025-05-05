"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Trash2, Edit, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getCategoryIcon } from "@/lib/utils"

interface Person {
  id: string
  name: string
  bio: string
  category: string
  source: string
  sourceType: string
  lastUpdate: string
  avatar?: string
}

interface WatchedPeopleListProps {
  people: Person[]
  onPersonClick: (person: Person) => void
  onAddNewClick: () => void
}

export function WatchedPeopleList({ people, onPersonClick, onAddNewClick }: WatchedPeopleListProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Takip Listesi</CardTitle>
            <CardDescription>Takip ettiğiniz kişiler ve kaynaklar</CardDescription>
          </div>
          <Button onClick={onAddNewClick}>Yeni Ekle</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {people.map((person) => (
            <div
              key={person.id}
              className="flex items-center justify-between p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onPersonClick(person)}
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 flex items-center justify-center bg-primary/10 rounded-full">
                  <span className="text-2xl">{getCategoryIcon(person.category)}</span>
                </div>
                <div>
                  <h3 className="font-medium">{person.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{person.bio}</p>
                  <div className="flex items-center mt-1 space-x-2">
                    <Badge variant="outline">{person.category}</Badge>
                    <Badge variant="secondary">{person.sourceType}</Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-sm text-muted-foreground">Güncellendi: {person.lastUpdate}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Düzenle</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span>Kaynağı Görüntüle</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive" onClick={(e) => e.stopPropagation()}>
                      <Trash2 className="mr-2 h-4 w-4" />
                      <span>Kaldır</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
