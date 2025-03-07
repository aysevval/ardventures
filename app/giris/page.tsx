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
import { useAuth } from "@/context/AuthContext"
import { toast } from "react-hot-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const success = await login(email, password)
    if (success) {
      toast.success("Giriş başarılı!")
      router.push("/dashboard")
    } else {
      toast.error("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.")
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
              <h2 className="text-3xl font-bold">Hoş Geldiniz</h2>
              <p className="text-muted-foreground">Hesabınıza giriş yapın</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Beni hatırla
                  </label>
                </div>
                <Link href="/sifremi-unuttum" className="text-sm text-primary hover:underline">
                  Şifremi unuttum
                </Link>
              </div>

              <Button type="submit" className="w-full">
                Giriş Yap
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Veya şununla devam et</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                Facebook
              </Button>
            </div>

            <div className="text-center text-sm">
              <span>Hesabınız yok mu? </span>
              <Link href="/kayit" className="text-primary hover:underline">
                Kayıt ol
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

