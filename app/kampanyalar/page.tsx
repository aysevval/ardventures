"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"


interface Campaign {
  id: string
  title: string
  description: string
  image: string
  target: string
  current: string
  daysLeft: number
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])

  useEffect(() => {
  
    const storedCampaigns = localStorage.getItem("campaigns")
    if (storedCampaigns) {
      setCampaigns(JSON.parse(storedCampaigns))
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Aktif Kampanyalar</h1>
          <p className="mt-2 text-muted-foreground">Yenilikçi projelere yatırım yaparak geleceğin bir parçası olun</p>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Kampanya Ara..." className="pl-10" />
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
          <Button variant="outline" className="w-full sm:w-auto">
            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filtrele
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

function CampaignCard({ id, title, description, image, target, current, daysLeft }: Campaign) {
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

