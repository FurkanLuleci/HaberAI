import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Building2, Mail, Phone } from "lucide-react"

export function ContactModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="font-medium">
          İletişim
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>İletişim Bilgileri</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Map */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.4630402962456!2d30.5386172!3d38.7565229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf17b7dfa77f7f%3A0x193526b11638f431!2sBeyaz%20Belgelendirme!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600">
              <Building2 className="h-5 w-5" />
              <div>
                <p className="font-medium">Beyaz Belgelendirme</p>
                <p className="text-sm">Beyaz Belge, Dumlupınar mah. ordu bulvarı caddesi </p>
                <p className="text-sm">no:6 bozcalar işhanı kat:3, 03000 Afyonkarahisar Merkez</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="h-5 w-5" />
              <p>+905324404599</p>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Mail className="h-5 w-5" />
              <p>info@beyazbelgelendirme.com.tr</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 