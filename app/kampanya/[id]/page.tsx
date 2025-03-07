import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, FileText, TrendingUp } from "lucide-react"

export default function CampaignStatusPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Kampanya Durumu</h1>
          <div className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
            Taslak Aşaması
          </div>
        </div>

        <div className="mb-8">
          <div className="relative">
            <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gray-200"></div>
            <div className="absolute left-0 top-1/2 h-1 w-1/4 -translate-y-1/2 bg-primary"></div>
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="mt-2 text-sm font-medium">Taslak</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <span className="text-xs font-medium">2</span>
                </div>
                <span className="mt-2 text-sm text-gray-500">Ön İnceleme</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <span className="text-xs font-medium">3</span>
                </div>
                <span className="mt-2 text-sm text-gray-500">Onay</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                  <span className="text-xs font-medium">4</span>
                </div>
                <span className="mt-2 text-sm text-gray-500">Fonlama</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Belge Durumu</h3>
                <p className="text-sm text-muted-foreground">3/5 Tamamlandı</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Kalan Süre</h3>
                <p className="text-sm text-muted-foreground">5 gün</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Hedef</h3>
                <p className="text-sm text-muted-foreground">1.000.000 ₺</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Yapılması Gerekenler</h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <div className="flex-1">
                  <h3 className="font-medium text-red-900">Finansal tablolar eksik</h3>
                  <p className="text-sm text-red-700">Lütfen gerekli finansal tabloları yükleyin.</p>
                </div>
                <Button variant="destructive" size="sm">
                  Yükle
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <div className="flex-1">
                  <h3 className="font-medium text-amber-900">SPK bilgi formu doldurulmalı</h3>
                  <p className="text-sm text-amber-700">SPK bilgi formunu eksiksiz doldurun.</p>
                </div>
                <Button variant="default" size="sm" className="bg-amber-600 hover:bg-amber-700">
                  Doldur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

