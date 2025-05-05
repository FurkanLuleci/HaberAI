"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Mic, FileText, Play, Pause, RotateCw, Download } from "lucide-react"

export function VideoAudioAnalyzer() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Video & Ses Analizi</CardTitle>
          <CardDescription>Video ve ses dosyalarını yazıya dönüştürün ve analiz edin</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Dosya Yükle</TabsTrigger>
              <TabsTrigger value="record">Kayıt</TabsTrigger>
              <TabsTrigger value="url">URL</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="space-y-4 mt-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="font-medium text-lg">Dosya Yükle</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Video veya ses dosyasını sürükleyip bırakın veya tıklayarak seçin
                  </p>
                  <Input id="file-upload" type="file" className="hidden" accept="audio/*,video/*" />
                  <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                    Dosya Seç
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    MP3, MP4, WAV, AVI formatları desteklenir (max. 500MB)
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="record" className="space-y-4 mt-4">
              <div className="border rounded-lg p-8 text-center">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <Mic className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-medium text-lg">Ses Kaydı</h3>
                  <p className="text-sm text-muted-foreground mb-6">Doğrudan tarayıcınızdan ses kaydı yapın</p>

                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" disabled>
                      <Pause className="h-6 w-6" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" disabled>
                      <RotateCw className="h-6 w-6" />
                    </Button>
                  </div>

                  <div className="w-full max-w-md h-12 bg-muted/20 rounded-full mt-6 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">00:00 / 05:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="url" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="media-url">Video veya Ses URL'si</Label>
                <Input id="media-url" placeholder="https://example.com/video.mp4" />
                <p className="text-xs text-muted-foreground">
                  YouTube, Vimeo, SoundCloud veya doğrudan medya bağlantıları desteklenir
                </p>
              </div>

              <Button className="mt-2">
                <FileText className="mr-2 h-4 w-4" />
                URL'den Analiz Et
              </Button>
            </TabsContent>
          </Tabs>

          <div className="border-t mt-6 pt-6">
            <h3 className="font-medium mb-4">Analiz Seçenekleri</h3>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Dil</Label>
                  <Select defaultValue="tr">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Dil seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tr">Türkçe</SelectItem>
                      <SelectItem value="en">İngilizce</SelectItem>
                      <SelectItem value="de">Almanca</SelectItem>
                      <SelectItem value="fr">Fransızca</SelectItem>
                      <SelectItem value="es">İspanyolca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="output-format">Çıktı Formatı</Label>
                  <Select defaultValue="text">
                    <SelectTrigger id="output-format">
                      <SelectValue placeholder="Format seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Düz Metin</SelectItem>
                      <SelectItem value="srt">SRT Altyazı</SelectItem>
                      <SelectItem value="vtt">VTT Altyazı</SelectItem>
                      <SelectItem value="json">JSON</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="speaker-detection" className="h-4 w-4" />
                <Label htmlFor="speaker-detection" className="font-normal">
                  Konuşmacı Tespiti
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="auto-summary" className="h-4 w-4" />
                <Label htmlFor="auto-summary" className="font-normal">
                  Otomatik Özet Oluştur
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="auto-news" className="h-4 w-4" />
                <Label htmlFor="auto-news" className="font-normal">
                  Haber Makalesine Dönüştür
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-4">
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Analiz Et
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analiz Sonuçları</CardTitle>
          <CardDescription>Analiz sonuçlarınız burada görüntülenecek</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md p-4 bg-muted/20 min-h-[200px] flex items-center justify-center">
            <p className="text-muted-foreground">Henüz analiz edilmiş bir medya yok</p>
          </div>

          <div className="mt-6 space-y-4 hidden">
            <div className="space-y-2">
              <h3 className="font-medium">Transkripsiyon</h3>
              <Textarea className="min-h-[200px]" placeholder="Transkripsiyon metni burada görüntülenecek" readOnly />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Özet</h3>
              <Textarea className="min-h-[100px]" placeholder="Özet metni burada görüntülenecek" readOnly />
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                İndir
              </Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Haber Oluştur
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
