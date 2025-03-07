"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "@/components/file-upload"
import { toast } from "react-hot-toast"

interface CampaignForm {
  name: string
  targetAmount: string
  description: string
  spkForm: string
  kvkkDocument: string
}

export default function CreateCampaignPage() {
  const router = useRouter()
  const [form, setForm] = useState<CampaignForm>({
    name: "",
    targetAmount: "",
    description: "",
    spkForm: "",
    kvkkDocument: "",
  })

  useEffect(() => {
    const savedForm = localStorage.getItem("campaignForm")
    if (savedForm) {
      setForm(JSON.parse(savedForm))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prevForm) => {
      const newForm = { ...prevForm, [name]: value }
      localStorage.setItem("campaignForm", JSON.stringify(newForm))
      return newForm
    })
  }

  const handleFileUpload = (name: string, file: File) => {
    setForm((prevForm) => {
      const newForm = { ...prevForm, [name]: file.name }
      localStorage.setItem("campaignForm", JSON.stringify(newForm))
      return newForm
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Burada form verilerini API'ye gönderme işlemi yapılacak
    console.log("Form submitted:", form)
    toast.success("Kampanya başarıyla oluşturuldu!")
    localStorage.removeItem("campaignForm") // Form gönderildikten sonra localStorage'dan silinir
    router.push("/dashboard") // Kullanıcıyı dashboard'a yönlendir
  }

  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container max-w-4xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Yeni Kampanya Oluştur</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold">Temel Bilgiler</h2>
            <div className="space-y-4 rounded-lg border p-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Kampanya Adı
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Kampanya adını giriniz"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="targetAmount" className="text-sm font-medium">
                  Hedef Fon Miktarı
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">₺</span>
                  <Input
                    id="targetAmount"
                    name="targetAmount"
                    value={form.targetAmount}
                    onChange={handleInputChange}
                    className="pl-8"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  Kampanya Açıklaması
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleInputChange}
                  placeholder="Kampanyanızı detaylı olarak anlatın"
                  className="min-h-[150px]"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold">Yasal Belgeler</h2>
            <div className="space-y-4 rounded-lg border p-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">SPK Bilgi Formu</label>
                <FileUpload
                  id="spkForm"
                  accept=".pdf,.doc,.docx"
                  description="SPK bilgi formunu yükleyin (PDF, DOC veya DOCX)"
                  onFileSelected={(file) => handleFileUpload("spkForm", file)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">KVKK Belgesi</label>
                <FileUpload
                  id="kvkkDocument"
                  accept=".pdf,.doc,.docx"
                  description="KVKK belgesini yükleyin (PDF, DOC veya DOCX)"
                  onFileSelected={(file) => handleFileUpload("kvkkDocument", file)}
                />
              </div>
            </div>
          </section>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              İptal
            </Button>
            <Button type="submit">Kampanyayı Oluştur</Button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}

