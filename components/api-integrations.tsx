import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Link2, Check, X, Copy, RefreshCw } from "lucide-react"

export function ApiIntegrations() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API Entegrasyonları</CardTitle>
          <CardDescription>Sisteminizi HaberAI ile entegre edin</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="keys" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="keys">API Anahtarları</TabsTrigger>
              <TabsTrigger value="webhooks">Webhook'lar</TabsTrigger>
              <TabsTrigger value="services">Servis Bağlantıları</TabsTrigger>
            </TabsList>

            <TabsContent value="keys" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">API Anahtarı</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistemlerinizi HaberAI ile entegre etmek için API anahtarınızı kullanın
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Yenile
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Input value="sk_haberai_9f8g7h6j5k4l3m2n1p0" readOnly className="font-mono" />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <div className="border rounded-md p-4 bg-muted/20 mt-4">
                <h4 className="font-medium mb-2">Örnek Kullanım</h4>
                <pre className="text-xs bg-black text-white p-2 rounded-md overflow-x-auto">
                  {`curl -X POST https://api.haberai.com/v1/generate \\
  -H "Authorization: Bearer sk_haberai_9f8g7h6j5k4l3m2n1p0" \\
  -H "Content-Type: application/json" \\
  -d '{"source": "https://twitter.com/elonmusk/status/1234567890", "type": "news"}'`}
                </pre>
              </div>

              <div className="space-y-4 mt-6">
                <h4 className="font-medium">API İzinleri</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="read-permission" className="flex items-center space-x-2">
                      <span>Okuma İzni</span>
                      <Badge variant="outline">GET</Badge>
                    </Label>
                    <Switch id="read-permission" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="write-permission" className="flex items-center space-x-2">
                      <span>Yazma İzni</span>
                      <Badge variant="outline">POST, PUT</Badge>
                    </Label>
                    <Switch id="write-permission" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="delete-permission" className="flex items-center space-x-2">
                      <span>Silme İzni</span>
                      <Badge variant="outline">DELETE</Badge>
                    </Label>
                    <Switch id="delete-permission" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="webhooks" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Webhook Yapılandırması</h3>
                  <p className="text-sm text-muted-foreground">
                    Yeni içerik oluşturulduğunda bildirim almak için webhook'ları yapılandırın
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Link2 className="mr-2 h-4 w-4" />
                  Yeni Webhook
                </Button>
              </div>

              <div className="border rounded-md divide-y">
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">Yeni İçerik Bildirimi</h4>
                      <Badge variant="outline" className="bg-green-50">
                        Aktif
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">https://example.com/webhooks/haberai</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      Düzenle
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Sil
                    </Button>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">Kaynak Güncellemesi</h4>
                      <Badge variant="outline" className="bg-red-50">
                        Devre Dışı
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">https://example.com/webhooks/sources</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      Düzenle
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Sil
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label htmlFor="webhook-secret">Webhook Gizli Anahtarı</Label>
                <div className="flex items-center space-x-2">
                  <Input id="webhook-secret" value="whsec_1a2b3c4d5e6f7g8h9i0j" readOnly className="font-mono" />
                  <Button variant="outline" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Bu gizli anahtarı webhook isteklerinin gerçekten HaberAI'dan geldiğini doğrulamak için kullanın.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Servis Bağlantıları</h3>
                  <p className="text-sm text-muted-foreground">Üçüncü taraf servislerle entegrasyonları yönetin</p>
                </div>
              </div>

              <div className="border rounded-md divide-y">
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-xl">𝕏</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Twitter API</h4>
                      <p className="text-sm text-muted-foreground">Twitter içeriklerini almak için bağlantı</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                      <Check className="mr-1 h-3 w-3" /> Bağlı
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Yapılandır
                    </Button>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 text-xl">📷</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Instagram API</h4>
                      <p className="text-sm text-muted-foreground">Instagram içeriklerini almak için bağlantı</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      <X className="mr-1 h-3 w-3" /> Bağlı Değil
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Bağlan
                    </Button>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xl">📰</span>
                    </div>
                    <div>
                      <h4 className="font-medium">RSS Beslemeleri</h4>
                      <p className="text-sm text-muted-foreground">RSS beslemelerinden içerik almak için bağlantı</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-50 text-green-700 hover:bg-green-50">
                      <Check className="mr-1 h-3 w-3" /> Bağlı
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Yapılandır
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
