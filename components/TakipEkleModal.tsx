"use client"

import { useState } from 'react'
import { PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface TakipEkleModalProps {
  collapsed?: boolean
}

export function TakipEkleModal({ collapsed = false }: TakipEkleModalProps) {
  const [formData, setFormData] = useState({
    paket: '',
    kategori: '',
    takipTuru: '',
    dil: '',
    minChar: '50',
    minHaber: '80',
    olusturmaTipi: '',
    kimin: '',
    vurgulama: '',
    url: '',
    filtre: '',
    resim: null as File | null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // API call will be added here
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`flex items-center space-x-2 w-full p-2 rounded-md transition-colors hover:bg-gray-100`}
        >
          <span className="flex-shrink-0">
            <PlusCircle className="h-5 w-5" />
          </span>
          {!collapsed && <span>Takip Ekle</span>}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Yeni Takip Formu</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Paket Seçimi */}
            <div className="space-y-2">
              <Label>Paket</Label>
              <Select
                value={formData.paket}
                onValueChange={(value) => setFormData({ ...formData, paket: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Paket Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Kategori */}
            <div className="space-y-2">
              <Label>Kategori</Label>
              <Select
                value={formData.kategori}
                onValueChange={(value) => setFormData({ ...formData, kategori: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ekonomi">Ekonomi</SelectItem>
                  <SelectItem value="spor">Spor</SelectItem>
                  <SelectItem value="teknoloji">Teknoloji</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Takip Türü */}
            <div className="space-y-2">
              <Label>Takip Türü</Label>
              <Select
                value={formData.takipTuru}
                onValueChange={(value) => setFormData({ ...formData, takipTuru: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Dil */}
            <div className="space-y-2">
              <Label>Dil (Oluşturulacak Dil)</Label>
              <Select
                value={formData.dil}
                onValueChange={(value) => setFormData({ ...formData, dil: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tr">Türkçe</SelectItem>
                  <SelectItem value="en">İngilizce</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Min-Char */}
            <div className="space-y-2">
              <Label>Min-Char (Kaynak Karakter Sayısı)</Label>
              <Input
                type="number"
                value={formData.minChar}
                onChange={(e) => setFormData({ ...formData, minChar: e.target.value })}
              />
            </div>

            {/* Min-Haber */}
            <div className="space-y-2">
              <Label>Min-Haber (Haber Karakter Sayısı)</Label>
              <Input
                type="number"
                value={formData.minHaber}
                onChange={(e) => setFormData({ ...formData, minHaber: e.target.value })}
              />
            </div>

            {/* Oluşturma Tipi */}
            <div className="space-y-2 col-span-2">
              <Label>Oluşturma Tipi</Label>
              <Select
                value={formData.olusturmaTipi}
                onValueChange={(value) => setFormData({ ...formData, olusturmaTipi: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seçiniz" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="haber">Haber</SelectItem>
                  <SelectItem value="makale">Makale</SelectItem>
                  <SelectItem value="blog">Blog</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Kimin Haberi */}
            <div className="space-y-2 col-span-2">
              <Label>Kimin Haberi Oluşturulacak?</Label>
              <Input
                placeholder="Tam Adını Giriniz (Ankara Ticaret Odası Başkanı Adı Soyadı)"
                value={formData.kimin}
                onChange={(e) => setFormData({ ...formData, kimin: e.target.value })}
              />
            </div>

            {/* Nasıl Vurgulanacak */}
            <div className="space-y-2 col-span-2">
              <Label>Nasıl Vurgulanacak? (Opsiyonel)</Label>
              <Input
                placeholder="Oluşturulacak İçerik İçin Yönlendirme Yapabilirsiniz"
                value={formData.vurgulama}
                onChange={(e) => setFormData({ ...formData, vurgulama: e.target.value })}
              />
            </div>

            {/* URL */}
            <div className="space-y-2 col-span-2">
              <Label>URL</Label>
              <Input
                placeholder="Sosyal Medya Tam URLsi"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              />
            </div>

            {/* Filtre */}
            <div className="space-y-2 col-span-2">
              <Label>Filtre Uygula (Virgül Kullanın)</Label>
              <Input
                placeholder="İçerikte Var İse Engelle (kelime, kelime, kelime..)"
                value={formData.filtre}
                onChange={(e) => setFormData({ ...formData, filtre: e.target.value })}
              />
            </div>

            {/* Resim */}
            <div className="space-y-2 col-span-2">
              <Label>Resim bulunamazsa?</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, resim: e.target.files?.[0] || null })}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="submit">Kaydet</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 