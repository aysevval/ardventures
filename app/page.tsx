import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-slate-50 py-12 md:py-24">
          <div className="container px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Geleceğin Girişimlerine Yatırım Yapın
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Güvenilir ve şeffaf kitle fonlama platformu ile yenilikçi projelere ortak olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/kampanyalar">Yatırım Yap</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/kampanya-olustur">Proje Başlat</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Aktif Kampanyalar</h2>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                Yenilikçi ve gelecek vadeden projelere yatırım yaparak hem kazanç sağlayın hem de girişimcilere destek
                olun.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <CampaignCard
                id="techstart-solutions"
                title="TechStart Solutions"
                description="Yapay zeka destekli müşteri hizmetleri platformu"
                image="/placeholder.svg?height=300&width=400"
                target="₺1.500.000"
                current="₺1.200.000"
                daysLeft={18}
              />
              <CampaignCard
                id="green-energy"
                title="GreenEnergy"
                description="Yenilenebilir enerji depolama çözümleri"
                image="/placeholder.svg?height=300&width=400"
                target="₺2.000.000"
                current="₺1.400.000"
                daysLeft={25}
              />
              <CampaignCard
                id="eco-packaging"
                title="EcoPackaging"
                description="Sürdürülebilir ve biyobozunur ambalaj çözümleri"
                image="/placeholder.svg?height=300&width=400"
                target="₺1.000.000"
                current="₺750.000"
                daysLeft={30}
              />
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/kampanyalar">Tüm Kampanyaları Gör</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-24">
          <div className="container px-4">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nasıl Çalışır?</h2>
              <p className="max-w-[700px] text-lg text-muted-foreground">
                ArdVenture KFS ile yatırım yapmak ve proje başlatmak çok kolay.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Hesap Oluşturun</h3>
                  <p className="text-center text-muted-foreground">
                    Hızlı ve güvenli bir şekilde hesabınızı oluşturun ve kimlik doğrulama sürecini tamamlayın.
                  </p>
                  <Button asChild variant="outline" className="mt-2">
                    <Link href="/kayit">Hesap Oluştur</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Projeleri İnceleyin</h3>
                  <p className="text-center text-muted-foreground">
                    Aktif kampanyaları inceleyin, detaylı bilgilere ulaşın ve yatırım yapmak istediğiniz projeyi seçin.
                  </p>
                  <Button asChild variant="outline" className="mt-2">
                    <Link href="/kampanyalar">Projeleri İncele</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Yatırım Yapın</h3>
                  <p className="text-center text-muted-foreground">
                    Güvenli ödeme altyapısı ile yatırımınızı gerçekleştirin ve projenin bir parçası olun.
                  </p>
                  <Button asChild variant="outline" className="mt-2">
                    <Link href="/giris">Yatırım Yap</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

interface CampaignCardProps {
  id: string
  title: string
  description: string
  image: string
  target: string
  current: string
  daysLeft: number
}

function CampaignCard({ id, title, description, image, target, current, daysLeft }: CampaignCardProps) {
  const progressValue = Number.parseInt(current.replace(/[^\d]/g, ""))
  const targetValue = Number.parseInt(target.replace(/[^\d]/g, ""))
  const progress = Math.min(Math.round((progressValue / targetValue) * 100), 100)

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute right-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
          Aktif
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>

        <div className="mt-4">
          <div className="mb-1 flex justify-between text-sm">
            <span>Hedef:</span>
            <span className="font-medium">{target}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-4 flex justify-between">
          <span className="text-sm text-muted-foreground">Kalan Süre: {daysLeft} gün</span>
        </div>

        <Button asChild className="mt-4 w-full">
          <Link href={`/kampanyalar/${id}`}>Detayları İncele</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

