import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyInvestmentsPage() {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">Yatırımlarım</h1>

        <Tabs defaultValue="active">
          <TabsList className="mb-6">
            <TabsTrigger value="active">Aktif Yatırımlar</TabsTrigger>
            <TabsTrigger value="completed">Tamamlanan Yatırımlar</TabsTrigger>
            <TabsTrigger value="favorites">Favoriler</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InvestmentCard
                id="techstart-solutions"
                title="TechStart Solutions"
                description="Yapay zeka destekli müşteri hizmetleri platformu"
                image="/placeholder.svg?height=300&width=400"
                investedAmount="₺5.000"
                investmentDate="15 Şubat 2025"
                status="Aktif"
                progress={80}
              />
              <InvestmentCard
                id="green-energy"
                title="GreenEnergy"
                description="Yenilenebilir enerji depolama çözümleri"
                image="/placeholder.svg?height=300&width=400"
                investedAmount="₺10.000"
                investmentDate="3 Mart 2025"
                status="Aktif"
                progress={65}
              />
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InvestmentCard
                id="smart-retail"
                title="Smart Retail"
                description="Perakende sektörü için akıllı çözümler"
                image="/placeholder.svg?height=300&width=400"
                investedAmount="₺3.000"
                investmentDate="10 Ocak 2025"
                status="Tamamlandı"
                progress={100}
                returnAmount="₺3.450"
              />
            </div>
          </TabsContent>

          <TabsContent value="favorites">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <InvestmentCard
                id="bio-health"
                title="BioHealth"
                description="Yeni nesil biyoteknoloji çözümleri"
                image="/placeholder.svg?height=300&width=400"
                status="Favori"
                progress={60}
                isFavorite={true}
              />
              <InvestmentCard
                id="edu-tech"
                title="EduTech Platform"
                description="Yeni nesil eğitim teknolojileri platformu"
                image="/placeholder.svg?height=300&width=400"
                status="Favori"
                progress={45}
                isFavorite={true}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">Yatırım Fırsatları</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <OpportunityCard
              id="fintech-solutions"
              title="FinTech Solutions"
              description="Yeni nesil finansal teknoloji çözümleri"
              image="/placeholder.svg?height=300&width=400"
              target="₺2.500.000"
              current="₺1.100.000"
              daysLeft={40}
              match={92}
            />
            <OpportunityCard
              id="smart-agriculture"
              title="Smart Agriculture"
              description="Akıllı tarım teknolojileri ve sürdürülebilir çözümler"
              image="/placeholder.svg?height=300&width=400"
              target="₺1.800.000"
              current="₺900.000"
              daysLeft={35}
              match={85}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/kampanyalar">Tüm Kampanyaları Gör</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

interface InvestmentCardProps {
  id: string
  title: string
  description: string
  image: string
  investedAmount?: string
  investmentDate?: string
  status: "Aktif" | "Tamamlandı" | "Favori"
  progress: number
  returnAmount?: string
  isFavorite?: boolean
}

function InvestmentCard({
  id,
  title,
  description,
  image,
  investedAmount,
  investmentDate,
  status,
  progress,
  returnAmount,
  isFavorite,
}: InvestmentCardProps) {
  const statusColors = {
    Aktif: "bg-green-100 text-green-800",
    Tamamlandı: "bg-blue-100 text-blue-800",
    Favori: "bg-amber-100 text-amber-800",
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className={`absolute right-2 top-2 rounded-full px-2 py-1 text-xs font-medium ${statusColors[status]}`}>
          {status}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        {investedAmount && (
          <div className="mt-4 flex justify-between text-sm">
            <span className="font-medium">Yatırım Tutarı:</span>
            <span>{investedAmount}</span>
          </div>
        )}

        {investmentDate && (
          <div className="mt-2 flex justify-between text-sm">
            <span className="font-medium">Yatırım Tarihi:</span>
            <span>{investmentDate}</span>
          </div>
        )}

        {returnAmount && (
          <div className="mt-2 flex justify-between text-sm">
            <span className="font-medium">Getiri:</span>
            <span className="text-green-600">{returnAmount}</span>
          </div>
        )}

        <div className="mt-4">
          <div className="mb-1 flex justify-between text-xs">
            <span>İlerleme</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/kampanyalar/${id}`}>Detaylar</Link>
          </Button>
          {isFavorite ? (
            <Button variant="outline" className="aspect-square p-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}

interface OpportunityCardProps {
  id: string
  title: string
  description: string
  image: string
  target: string
  current: string
  daysLeft: number
  match: number
}

function OpportunityCard({ id, title, description, image, target, current, daysLeft, match }: OpportunityCardProps) {
  // Calculate progress percentage
  const progressValue = Number.parseInt(current.replace(/[^\d]/g, ""))
  const targetValue = Number.parseInt(target.replace(/[^\d]/g, ""))
  const progress = Math.min(Math.round((progressValue / targetValue) * 100), 100)

  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-white">
          %{match} Eşleşme
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <div className="mt-4">
          <div className="mb-1 flex justify-between text-sm">
            <span>Hedef:</span>
            <span className="font-medium">{target}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <span>Kalan: {daysLeft} gün</span>
          <span>{current} toplandı</span>
        </div>

        <div className="mt-4 flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/kampanyalar/${id}`}>Yatırım Yap</Link>
          </Button>
          <Button variant="outline" className="aspect-square p-0">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

