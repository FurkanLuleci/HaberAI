"use client"

import type React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Category {
  id: string
  name: string
  count: number
  icon: string
}

interface AddToWatchlistModalProps {
  isOpen: boolean
  onClose: () => void
  onAddPerson: (person: any) => void
  categories: Category[]
}

export function AddToWatchlistModal({ isOpen, onClose, onAddPerson, categories }: AddToWatchlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    category: "",
    sourceType: "",
    sourceUrl: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Find the category name from the id
    const categoryObj = categories.find((cat) => cat.id === formData.category)
    const categoryName = categoryObj ? categoryObj.name : formData.category

    onAddPerson({
      name: formData.name,
      bio: formData.bio,
      category: categoryName,
      source: formData.sourceUrl,
      sourceType: formData.sourceType,
    })

    // Reset form after submission
    setFormData({
      name: "",
      bio: "",
      category: "",
      sourceType: "",
      sourceUrl: "",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Takip Listesine Ekle</DialogTitle>
          <DialogDescription>
            Yapay zeka tarafından haber oluşturulması için bir kişi veya kaynak ekleyin
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">İsim</Label>
              <Input
                id="name"
                placeholder="Kişi veya kaynak adını girin"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biyografi</Label>
              <Textarea
                id="bio"
                placeholder="Kısa bir açıklama girin"
                value={formData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sourceType">Kaynak Türü</Label>
                <Select value={formData.sourceType} onValueChange={(value) => handleChange("sourceType", value)}>
                  <SelectTrigger id="sourceType">
                    <SelectValue placeholder="Kaynak türü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="Instagram">Instagram</SelectItem>
                    <SelectItem value="Facebook">Facebook</SelectItem>
                    <SelectItem value="Web Sitesi">Web Sitesi</SelectItem>
                    <SelectItem value="RSS">RSS Beslemesi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sourceUrl">Kaynak URL</Label>
              <Input
                id="sourceUrl"
                placeholder="Kaynağın URL'sini girin (örn. Twitter profili, web sitesi)"
                value={formData.sourceUrl}
                onChange={(e) => handleChange("sourceUrl", e.target.value)}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" type="button" onClick={onClose}>
              İptal
            </Button>
            <Button type="submit">Takip Listesine Ekle</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
