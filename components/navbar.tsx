"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface NavbarProps {
  isLoggedIn?: boolean
}

export function Navbar({ isLoggedIn = false }: NavbarProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

 
  const isAuthPage = pathname === "/giris" || pathname === "/kayit"

 
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

 
  if (isAuthPage) {
    return (
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center text-xl font-bold text-primary">
            ArdVenture
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link href="/kampanyalar" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Kampanyalar
            </Link>
            <Link href="/nasil-calisir" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Nasıl Çalışır?
            </Link>
            <Link href="/sss" className="text-sm font-medium text-muted-foreground hover:text-primary">
              SSS
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {pathname === "/giris" ? (
              <Button asChild variant="default">
                <Link href="/kayit">Üye Ol</Link>
              </Button>
            ) : (
              <Button asChild variant="default">
                <Link href="/giris">Giriş Yap</Link>
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href="/" className="flex items-center text-xl font-bold text-primary">
                ArdVenture
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="container flex flex-col gap-4 px-4 py-8">
              <Link href="/kampanyalar" className="text-lg font-medium" onClick={toggleMenu}>
                Kampanyalar
              </Link>
              <Link href="/nasil-calisir" className="text-lg font-medium" onClick={toggleMenu}>
                Nasıl Çalışır?
              </Link>
              <Link href="/sss" className="text-lg font-medium" onClick={toggleMenu}>
                SSS
              </Link>
              {pathname === "/giris" ? (
                <Button asChild className="mt-4 w-full">
                  <Link href="/kayit">Üye Ol</Link>
                </Button>
              ) : (
                <Button asChild className="mt-4 w-full">
                  <Link href="/giris">Giriş Yap</Link>
                </Button>
              )}
            </nav>
          </div>
        )}
      </header>
    )
  }


  if (isLoggedIn) {
    return (
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
          <Link href="/dashboard" className="flex items-center text-xl font-bold text-primary">
            ARDVENTURE KFS
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/kampanyalar">Kampanyalar</NavLink>
            <NavLink href="/projeler">Projelerim</NavLink>
            <NavLink href="/yatirimlarim">Yatırımlarım</NavLink>
            <NavLink href="/raporlar">Raporlar</NavLink>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" aria-label="Bildirimler">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="relative">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Profil" />
                <AvatarFallback>KU</AvatarFallback>
              </Avatar>
              {/* Dropdown menu could be added here */}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="container flex h-16 items-center justify-between px-4">
              <Link href="/dashboard" className="flex items-center text-xl font-bold text-primary">
                ARDVENTURE KFS
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="container flex flex-col gap-4 px-4 py-8">
              <Link href="/dashboard" className="text-lg font-medium" onClick={toggleMenu}>
                Dashboard
              </Link>
              <Link href="/kampanyalar" className="text-lg font-medium" onClick={toggleMenu}>
                Kampanyalar
              </Link>
              <Link href="/projeler" className="text-lg font-medium" onClick={toggleMenu}>
                Projelerim
              </Link>
              <Link href="/yatirimlarim" className="text-lg font-medium" onClick={toggleMenu}>
                Yatırımlarım
              </Link>
              <Link href="/raporlar" className="text-lg font-medium" onClick={toggleMenu}>
                Raporlar
              </Link>
              <div className="mt-4 border-t pt-4">
                <Link href="/profil" className="text-lg font-medium" onClick={toggleMenu}>
                  Profil
                </Link>
                <Link href="/ayarlar" className="mt-4 block text-lg font-medium" onClick={toggleMenu}>
                  Ayarlar
                </Link>
                <Button variant="outline" className="mt-4 w-full">
                  Çıkış Yap
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    )
  }

  
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center text-xl font-bold text-primary">
          ArdVenture
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <NavLink href="/kampanyalar">Kampanyalar</NavLink>
          <NavLink href="/nasil-calisir">Nasıl Çalışır?</NavLink>
          <NavLink href="/girisimciler">Girişimciler</NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link href="/giris">Giriş Yap</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/kayit">Üye Ol</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center text-xl font-bold text-primary">
              ArdVenture
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="container flex flex-col gap-4 px-4 py-8">
            <Link href="/kampanyalar" className="text-lg font-medium" onClick={toggleMenu}>
              Kampanyalar
            </Link>
            <Link href="/nasil-calisir" className="text-lg font-medium" onClick={toggleMenu}>
              Nasıl Çalışır?
            </Link>
            <Link href="/girisimciler" className="text-lg font-medium" onClick={toggleMenu}>
              Girişimciler
            </Link>
            <div className="mt-4 flex flex-col gap-4">
              <Button asChild variant="outline" className="w-full">
                <Link href="/giris" onClick={toggleMenu}>
                  Giriş Yap
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/kayit" onClick={toggleMenu}>
                  Üye Ol
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  )
}

