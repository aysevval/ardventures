import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FileText, Users, BarChart, Calendar, ChevronRight } from "lucide-react"

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the campaign data based on the ID
  const campaignData = {
    id: params.id,
    title: getCampaignTitle(params.id),
    description: getCampaignDescription(params.id),
    image: "/placeholder.svg?height=600&width=1200",
    target: getCampaignTarget(params.id),
    current: getCampaignCurrent(params.id),
    daysLeft: getCampaignDaysLeft(params.id),
    investors: 125,
    category: getCampaignCategory(params.id),
    founder: "Ahmet Yılmaz",
    location: "İstanbul",
    foundedYear: 2023,
    team: [
      { name: "Ahmet Yılmaz", role: "CEO" },
      { name: "Ayşe Demir", role: "CTO" },
      { name: "Mehmet Kaya", role: "CFO" },
    ],
    longDescription: getCampaignLongDescription(params.id),
  }

  // Calculate progress percentage
  const progressValue = Number.parseInt(campaignData.current.replace(/[^\d]/g, ""))
  const targetValue = Number.parseInt(campaignData.target.replace(/[^\d]/g, ""))
  const progress = Math.min(Math.round((progressValue / targetValue) * 100), 100)

  return (
    <>
      <Navbar />
      <main className="container px-4 py-8">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Ana Sayfa
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/kampanyalar" className="hover:text-primary">
            Kampanyalar
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{campaignData.title}</span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative mb-6 h-[300px] overflow-hidden rounded-lg sm:h-[400px]">
              <Image
                src={campaignData.image || "/placeholder.svg"}
                alt={campaignData.title}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="mb-4 text-3xl font-bold">{campaignData.title}</h1>
            <p className="mb-6 text-muted-foreground">{campaignData.description}</p>

            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
                <TabsTrigger value="team">Ekip</TabsTrigger>
                <TabsTrigger value="financials">Finansal Bilgiler</TabsTrigger>
                <TabsTrigger value="updates">Güncellemeler</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-semibold">Proje Hakkında</h3>
                  <p className="whitespace-pre-line">{campaignData.longDescription}</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 text-lg font-semibold">Neden Yatırım Yapmalısınız?</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>Hızla büyüyen yapay zeka ve müşteri hizmetleri pazarında öncü konumda</li>
                    <li>Deneyimli ve başarılı bir ekip tarafından yönetiliyor</li>
                    <li>Halihazırda test edilmiş ve kanıtlanmış bir iş modeli</li>
                    <li>Yüksek büyüme potansiyeli ve ölçeklenebilir teknoloji</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="team">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Kurucu Ekip</h3>
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {campaignData.team.map((member, index) => (
                      <div key={index} className="flex flex-col items-center rounded-lg border p-4 text-center">
                        <div className="mb-3 h-24 w-24 overflow-hidden rounded-full bg-muted">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt={member.name}
                            width={100}
                            height={100}
                          />
                        </div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="financials">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Finansal Projeksiyonlar</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="p-2 text-left">Yıl</th>
                          <th className="p-2 text-left">Gelir</th>
                          <th className="p-2 text-left">Gider</th>
                          <th className="p-2 text-left">Net Kar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">2024</td>
                          <td className="p-2">₺500.000</td>
                          <td className="p-2">₺400.000</td>
                          <td className="p-2">₺100.000</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">2025</td>
                          <td className="p-2">₺1.200.000</td>
                          <td className="p-2">₺800.000</td>
                          <td className="p-2">₺400.000</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">2026</td>
                          <td className="p-2">₺2.500.000</td>
                          <td className="p-2">₺1.500.000</td>
                          <td className="p-2">₺1.000.000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="updates">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Proje Güncellemeleri</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold">Yeni Özellik: Çok Dilli Destek</h4>
                        <span className="text-sm text-muted-foreground">15 Mart 2025</span>
                      </div>
                      <p>
                        Platformumuza İngilizce, Almanca ve Fransızca dil desteği ekledik. Bu sayede müşterilerimiz
                        uluslararası pazarlarda da hizmet verebilecek.
                      </p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold">İlk Müşteri Anlaşması</h4>
                        <span className="text-sm text-muted-foreground">1 Mart 2025</span>
                      </div>
                      <p>
                        İlk kurumsal müşteri anlaşmamızı imzaladık. Bu anlaşma ile platformumuz 500+ çalışanı olan bir
                        şirket tarafından kullanılmaya başlanacak.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Kampanya Bilgileri</h3>

                <div className="mb-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Toplanan:</span>
                    <span className="font-medium">{campaignData.current}</span>
                  </div>
                  <div className="mb-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{progress}% tamamlandı</span>
                    <span>Hedef: {campaignData.target}</span>
                  </div>
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Kalan Süre</p>
                      <p className="text-sm text-muted-foreground">{campaignData.daysLeft} gün</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Yatırımcı Sayısı</p>
                      <p className="text-sm text-muted-foreground">{campaignData.investors} kişi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Minimum Yatırım</p>
                      <p className="text-sm text-muted-foreground">₺1.000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Kategori</p>
                      <p className="text-sm text-muted-foreground">{campaignData.category}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <Input type="number" placeholder="Yatırım Miktarı" className="pl-8" />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₺</span>
                  </div>
                  <Button className="w-full">Yatırım Yap</Button>
                  <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Favorilere Ekle
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Girişimci</h3>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt={campaignData.founder}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{campaignData.founder}</p>
                    <p className="text-sm text-muted-foreground">{campaignData.location}</p>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Profili Görüntüle
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold">Belge ve Dokümanlar</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>İş Planı</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>Finansal Projeksiyonlar</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                      <FileText className="h-4 w-4" />
                      <span>SPK Bilgi Formu</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function getCampaignTitle(id: string): string {
  switch (id) {
    case "techstart-solutions":
      return "TechStart Solutions"
    case "green-energy":
      return "GreenEnergy"
    case "eco-packaging":
      return "EcoPackaging"
    case "urban-farming":
      return "Urban Farming Solutions"
    case "smart-water":
      return "Smart Water Management"
    case "eco-fashion":
      return "EcoFashion Marketplace"
    default:
      return "Kampanya"
  }
}

function getCampaignDescription(id: string): string {
  switch (id) {
    case "techstart-solutions":
      return "Yapay zeka destekli müşteri hizmetleri platformu"
    case "green-energy":
      return "Yenilenebilir enerji depolama çözümleri"
    case "eco-packaging":
      return "Sürdürülebilir ve biyobozunur ambalaj çözümleri"
    case "urban-farming":
      return "Şehir içi dikey tarım ve akıllı sera sistemleri"
    case "smart-water":
      return "IoT tabanlı akıllı su yönetimi ve tasarruf çözümleri"
    case "eco-fashion":
      return "Sürdürülebilir moda için dijital pazar yeri"
    default:
      return "Kampanya açıklaması"
  }
}

function getCampaignTarget(id: string): string {
  switch (id) {
    case "techstart-solutions":
      return "₺1.500.000"
    case "green-energy":
      return "₺2.000.000"
    case "eco-packaging":
      return "₺1.000.000"
    case "urban-farming":
      return "₺2.500.000"
    case "smart-water":
      return "₺1.800.000"
    case "eco-fashion":
      return "₺1.200.000"
    default:
      return "₺1.000.000"
  }
}

function getCampaignCurrent(id: string): string {
  switch (id) {
    case "techstart-solutions":
      return "₺1.200.000"
    case "green-energy":
      return "₺1.400.000"
    case "eco-packaging":
      return "₺750.000"
    case "urban-farming":
      return "₺1.800.000"
    case "smart-water":
      return "₺900.000"
    case "eco-fashion":
      return "₺600.000"
    default:
      return "₺500.000"
  }
}

function getCampaignDaysLeft(id: string): number {
  switch (id) {
    case "techstart-solutions":
      return 18
    case "green-energy":
      return 25
    case "eco-packaging":
      return 30
    case "urban-farming":
      return 40
    case "smart-water":
      return 35
    case "eco-fashion":
      return 22
    default:
      return 30
  }
}

function getCampaignCategory(id: string): string {
  switch (id) {
    case "techstart-solutions":
      return "Teknoloji"
    case "green-energy":
      return "Enerji"
    case "eco-packaging":
      return "Sürdürülebilirlik"
    case "urban-farming":
      return "Tarım"
    case "smart-water":
      return "Çevre"
    case "eco-fashion":
      return "Moda"
    default:
      return "Genel"
  }
}

function getCampaignLongDescription(id: string): string {
  switch (id) {
    case "techstart-solutions":
      return `
        TechStart Solutions, yapay zeka destekli müşteri hizmetleri platformu ile işletmelerin müşteri deneyimini iyileştirmelerine ve operasyonel verimliliği artırmalarına yardımcı olur.

        Doğal dil işleme ve makine öğrenimi teknolojilerini kullanarak, müşteri sorularını anlar ve doğru yanıtları sağlar. Platform, müşteri hizmetleri ekiplerinin iş yükünü azaltırken, müşteri memnuniyetini artırır.

        Yatırımınız, platformun geliştirilmesine, yeni özellikler eklenmesine ve pazarlama faaliyetlerine katkıda bulunacaktır. Hedefimiz, önümüzdeki 2 yıl içinde Türkiye'nin önde gelen yapay zeka destekli müşteri hizmetleri platformu olmaktır.
      `
    case "green-energy":
      return `
        GreenEnergy, yenilenebilir enerji kaynaklarından elde edilen elektriğin depolanması için yenilikçi çözümler sunar. Lityum-iyon bataryalar ve akıllı şebeke teknolojileri kullanarak, enerji depolama sistemlerimiz güneş ve rüzgar enerjisinin daha verimli kullanılmasını sağlar.

        Projemiz, enerji sektöründe sürdürülebilirliği artırırken, enerji maliyetlerini düşürmeyi hedefliyor. Yatırımınız, Ar-Ge çalışmalarımızı hızlandırmak, üretim kapasitemizi artırmak ve yeni pazarlara açılmak için kullanılacak.
      `
    case "eco-packaging":
      return `
        EcoPackaging, gıda ve perakende sektörü için yenilikçi, sürdürülebilir ve tamamen biyobozunur ambalaj çözümleri geliştiriyor. Mısır nişastası, bambu ve diğer doğal malzemelerden üretilen ambalajlarımız, plastik kirliliğiyle mücadelede önemli bir rol oynuyor.

        Projemiz, çevre dostu tüketicilerin ve sürdürülebilirlik odaklı şirketlerin artan talebini karşılamayı hedefliyor. Yatırımınız, üretim tesisimizin genişletilmesi, yeni ürün geliştirme ve uluslararası pazarlara açılma planlarımızı destekleyecek.
      `
    case "urban-farming":
      return `
        Urban Farming Solutions, şehir içi dikey tarım ve akıllı sera sistemleri geliştirerek, kentsel alanlarda sürdürülebilir gıda üretimini mümkün kılıyor. Hidroponik ve aeroponik teknolojiler kullanarak, minimum su ve enerji tüketimiyle maksimum verim elde ediyoruz.

        Projemiz, gıda güvenliği, yerel üretim ve karbon ayak izinin azaltılması konularında çözümler sunuyor. Yatırımınız, Ar-Ge çalışmalarımızı hızlandırmak, pilot projeleri yaygınlaştırmak ve büyük şehirlerde uygulama alanlarını genişletmek için kullanılacak.
      `
    case "smart-water":
      return `
        Smart Water Management, IoT (Nesnelerin İnterneti) teknolojisini kullanarak su tüketimini optimize eden ve su kayıplarını minimize eden akıllı çözümler sunuyor. Sensörler, veri analizi ve mobil uygulamalar aracılığıyla su yönetimini daha verimli hale getiriyoruz.

        Projemiz, su kaynaklarının korunması, enerji tasarrufu ve maliyet optimizasyonu konularında önemli katkılar sağlıyor. Yatırımınız, teknolojimizin geliştirilmesi, yeni pazarlara giriş ve kamu kurumlarıyla işbirliklerinin artırılması için kullanılacak.
      `
    case "eco-fashion":
      return `
        EcoFashion Marketplace, sürdürülebilir ve etik moda ürünleri için dijital bir pazar yeri platformudur. Çevre dostu malzemeler kullanan, adil ticaret prensiplerini benimseyen ve döngüsel ekonomiyi destekleyen markaları tüketicilerle buluşturuyoruz.

        Projemiz, moda endüstrisinin çevresel etkilerini azaltmayı ve tüketicilerin bilinçli alışveriş yapmasını teşvik etmeyi amaçlıyor. Yatırımınız, platformun teknolojik altyapısının güçlendirilmesi, marka ağının genişletilmesi ve uluslararası pazarlara açılma planlarını destekleyecek.
      `
    default:
      return "Kampanya hakkında detaylı bilgi"
  }
}

