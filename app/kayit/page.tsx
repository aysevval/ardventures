"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/context/AuthContext"
import { toast } from "react-hot-toast"

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await register(email, password, name)
    if (success) {
      toast.success("Kayıt başarılı!")
      router.push("/dashboard")
    } else {
      toast.error("Kayıt başarısız. Lütfen tekrar deneyin.")
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen">
        <div className="flex flex-1 bg-primary">
          <div className="flex flex-col justify-center px-12 text-white">
            <h1 className="text-4xl font-bold">Kitle Fonlama Sistemine Hoş Geldiniz</h1>
            <p className="mt-4 text-lg">Girişimciler ve yatırımcılar arasında güvenli, hızlı ve modern bir köprü.</p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                  </svg>
                </div>
                <span>SPK düzenlemelerine tam uyumluluk</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                  </svg>
                </div>
                <span>KVKK ve GDPR standartlarında veri güvenliği</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                  </svg>
                </div>
                <span>Şeffaf ve verimli yatırım süreçleri</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="mx-auto w-full max-w-md space-y-6 p-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Hesap Oluştur</h2>
              <p className="text-muted-foreground">Hızlı ve güvenli bir şekilde kayıt olun</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Ad Soyad
                </label>
                <Input
                  id="name"
                  placeholder="Ad Soyad"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-posta
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Şifre
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="accountType" className="text-sm font-medium">
                  Hesap Türü
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bireysel Yatırımcı" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Bireysel Yatırımcı</SelectItem>
                    <SelectItem value="corporate">Kurumsal Yatırımcı</SelectItem>
                    <SelectItem value="entrepreneur">Girişimci</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  <span>KVKK ve </span>
                  <Link href="/gizlilik-politikasi" className="text-primary hover:underline">
                    Gizlilik Politikası
                  </Link>
                  <span>'nı okudum ve kabul ediyorum</span>
                </label>
              </div>

              <Button type="submit" className="w-full">
                Kayıt Ol
              </Button>
            </form>

            <div className="text-center text-sm">
              <span>Zaten hesabınız var mı? </span>
              <Link href="/giris" className="text-primary hover:underline">
                Giriş yapın
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

