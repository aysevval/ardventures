import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, TrendingUp, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Aktif Kampanyalar</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">Son 30 günde %15 artış</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Toplam Yatırım</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₺4.2M</div>
              <p className="text-xs text-muted-foreground">Bu ay 820K TL artış</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Onay Bekleyen</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">6 kampanya incelemede</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Kampanya Yönetimi</h2>
            <Button asChild>
              <Link href="/kampanya-olustur">+ Yeni Kampanya</Link>
            </Button>
          </div>

          <div className="mt-4 overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-3 text-left text-sm font-medium">Kampanya Adı</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Durum</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Hedef</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">İlerleme</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded bg-muted"></div>
                      <span>Tech Innovators 2025</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                      Aktif
                    </span>
                  </td>
                  <td className="px-4 py-3">₺1,500,000</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-full rounded-full bg-slate-200">
                        <div className="h-full w-[65%] rounded-full bg-primary"></div>
                      </div>
                      <span className="text-xs">65%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Button variant="ghost" size="sm">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

