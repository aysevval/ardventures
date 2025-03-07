import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function ProjectsPage() {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <main className="container px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Aktif Projeler</h1>
          <Button asChild>
            <Link href="/kampanya-olustur">+ Yeni Proje</Link>
          </Button>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Proje Ara..." className="pl-10" />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Tüm Kategoriler" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Kategoriler</SelectItem>
              <SelectItem value="tech">Teknoloji</SelectItem>
              <SelectItem value="health">Sağlık</SelectItem>
              <SelectItem value="energy">Enerji</SelectItem>
              <SelectItem value="finance">Finans</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Tüm Durumlar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm Durumlar</SelectItem>
              <SelectItem value="active">Aktif</SelectItem>
              <SelectItem value="review">İncelemede</SelectItem>
              <SelectItem value="new">Yeni</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Tech Innovators Hub"
            description="Yapay zeka destekli inovasyon merkezi"
            image="/placeholder.svg?height=300&width=400"
            status="Aktif"
            statusColor="green"
            raised="₺2.5M"
            target="₺5M"
            progress={50}
            investors={125}
            daysLeft={30}
          />
          <ProjectCard
            title="BioTech Solutions"
            description="Yenilikçi biyoteknoloji çözümleri"
            image="/placeholder.svg?height=300&width=400"
            status="İncelemede"
            statusColor="amber"
            raised="₺1.8M"
            target="₺3M"
            progress={60}
            investors={85}
            daysLeft={45}
          />
          <ProjectCard
            title="EcoEnergy Project"
            description="Yenilenebilir enerji çözümleri"
            image="/placeholder.svg?height=300&width=400"
            status="Yeni"
            statusColor="blue"
            raised="₺800K"
            target="₺4M"
            progress={20}
            investors={45}
            daysLeft={60}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  status: string
  statusColor: "green" | "amber" | "blue"
  raised: string
  target: string
  progress: number
  investors: number
  daysLeft: number
}

function ProjectCard({
  title,
  description,
  image,
  status,
  statusColor,
  raised,
  target,
  progress,
  investors,
  daysLeft,
}: ProjectCardProps) {
  const statusClasses = {
    green: "bg-green-100 text-green-800",
    amber: "bg-amber-100 text-amber-800",
    blue: "bg-blue-100 text-blue-800",
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div
          className={`absolute right-2 top-2 rounded-full px-2 py-1 text-xs font-medium ${statusClasses[statusColor]}`}
        >
          {status}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>

        <div className="mt-4">
          <div className="mb-1 flex justify-between text-sm">
            <span>{raised}</span>
            <span>Hedef: {target}</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <span>{investors} Yatırımcı</span>
          <span>{daysLeft} Gün Kaldı</span>
        </div>
      </CardContent>
    </Card>
  )
}

