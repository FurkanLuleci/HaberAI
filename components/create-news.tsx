import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { FileText, Wand2 } from "lucide-react"

export function CreateNews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Haber Oluştur</CardTitle>
        <CardDescription>Yapay zeka ile özel haber içeriği oluşturun</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="manual" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="manual">Manuel Giriş</TabsTrigger>
            <TabsTrigger value="source">Kaynak Tabanlı</TabsTrigger>
          </TabsList>
          <TabsContent value="manual" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="title">Başlık</Label>
              <Input id="title" placeholder="Haber başlığını girin" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Kategori</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Kategori seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="politics">Politika</SelectItem>
                    <SelectItem value="technology">Teknoloji</SelectItem>
                    <SelectItem value="business">İş Dünyası</SelectItem>
                    <SelectItem value="entertainment">Eğlence</SelectItem>
                    <SelectItem value="sports">Spor</SelectItem>
                    <SelectItem value="science">Bilim</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tone">Ton</Label>
                <Select>
                  <SelectTrigger id="tone">
                    <SelectValue placeholder="Ton seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neutral">Tarafsız</SelectItem>
                    <SelectItem value="formal">Resmi</SelectItem>
                    <SelectItem value="casual">Gündelik</SelectItem>
                    <SelectItem value="enthusiastic">Heyecanlı</SelectItem>
                    <SelectItem value="critical">Eleştirel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Anahtar Kelimeler</Label>
              <Input id="keywords" placeholder="Virgülle ayrılmış anahtar kelimeler" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">İçerik Taslağı</Label>
              <Textarea id="content" placeholder="Haber içeriğinin taslağını girin" className="min-h-[200px]" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="length">İçerik Uzunluğu</Label>
                <span className="text-sm text-muted-foreground">Orta</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline">Önizleme</Button>
              <Button>
                <Wand2 className="mr-2 h-4 w-4" />
                Haber Oluştur
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="source" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="source">Kaynak Seçin</Label>
              <Select>
                <SelectTrigger id="source">
                  <SelectValue placeholder="Kaynak seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="donald-trump">Donald Trump</SelectItem>
                  <SelectItem value="elon-musk">Elon Musk</SelectItem>
                  <SelectItem value="nasa">NASA</SelectItem>
                  <SelectItem value="nytimes">The New York Times</SelectItem>
                  <SelectItem value="bill-gates">Bill Gates</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="source-content">Kaynak İçeriği</Label>
              <div className="border rounded-md p-4 bg-muted/20">
                <p className="text-sm text-muted-foreground">Seçilen kaynaktan en son içerik burada görüntülenecek.</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>İçerik Türü</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="news" name="content-type" className="h-4 w-4" defaultChecked />
                  <Label htmlFor="news" className="font-normal">
                    Haber Makalesi
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="analysis" name="content-type" className="h-4 w-4" />
                  <Label htmlFor="analysis" className="font-normal">
                    Analiz
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="summary" name="content-type" className="h-4 w-4" />
                  <Label htmlFor="summary" className="font-normal">
                    Özet
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="detail-level">Detay Seviyesi</Label>
                <span className="text-sm text-muted-foreground">Orta</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                İçeriği Getir
              </Button>
              <Button>
                <Wand2 className="mr-2 h-4 w-4" />
                Haber Oluştur
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
