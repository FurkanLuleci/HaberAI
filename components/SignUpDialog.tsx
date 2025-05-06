"use client"

import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "sonner"

const signUpSchema = z.object({
  organization: z.string().min(1, "Kuruluş Adı / İsim Soyad gereklidir"),
  taxId: z.string().min(1, "Vergi No / T.C. KimlikNo gereklidir"),
  taxOffice: z.string().min(1, "Vergi Dairesi gereklidir"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  phone: z.string().min(1, "Cep Telefonu gereklidir"),
  address: z.string().min(1, "Adres gereklidir"),
  password: z.string().min(1, "Parola gereklidir"),
  terms: z.boolean().refine((val) => val === true, {
    message: "Abonelik Sözleşmesini onaylamanız gerekiyor",
  })
})

type SignUpForm = z.infer<typeof signUpSchema>

interface SignUpDialogProps {
  children: React.ReactNode
}

export function SignUpDialog({ children }: SignUpDialogProps) {
  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      organization: "",
      taxId: "",
      taxOffice: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      terms: false,
    },
  })

  const onSubmit = async (data: SignUpForm) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Kayıt başarısız")

      toast.success("Başvurunuz alınmıştır")
      form.reset()
    } catch (error) {
      toast.error("Başvuru gönderilirken bir hata oluştu")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-full max-w-md rounded-lg border bg-white p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Abonelik Başvuru Formu</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kuruluş Adı / İsim Soyad</FormLabel>
                  <FormControl>
                    <Input placeholder="Kuruluş/ İsim Bilgilerinizi Giriniz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vergi No / T.C. KimlikNo</FormLabel>
                  <FormControl>
                    <Input placeholder="Tc Kimlikno veya Vergi No Belirtiniz." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="taxOffice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vergi Dairesi</FormLabel>
                  <FormControl>
                    <Input placeholder="Vergi Dairenizi Belirtiniz." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Eposta Adresiniz</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cep Telefonunuz</FormLabel>
                  <FormControl>
                    <Input placeholder="Giriş Sırasında Güvenlik Kodu Gelecektir" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adres</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Fatura Adresinizi Belirtiniz." rows={3} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parolanız</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Abonelik Sözleşmesini Onaylıyorum
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2 pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Pencereyi Kapat
                </Button>
              </DialogClose>
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Abone Başvurusunu Tamamla
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
} 