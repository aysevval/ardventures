import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-primary">ARDVENTURE</h3>
            <p className="text-sm text-muted-foreground">© 2025 ARDVENTURE. Tüm hakları saklıdır.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">Platform</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/kampanyalar" className="text-sm text-muted-foreground hover:text-primary">
                  Kampanyalar
                </Link>
                <Link href="/nasil-calisir" className="text-sm text-muted-foreground hover:text-primary">
                  Nasıl Çalışır?
                </Link>
                <Link href="/sss" className="text-sm text-muted-foreground hover:text-primary">
                  SSS
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">Yasal</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/gizlilik-politikasi" className="text-sm text-muted-foreground hover:text-primary">
                  Gizlilik Politikası
                </Link>
                <Link href="/kullanim-sartlari" className="text-sm text-muted-foreground hover:text-primary">
                  Kullanım Şartları
                </Link>
                <Link href="/iletisim" className="text-sm text-muted-foreground hover:text-primary">
                  İletişim
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">Bağlantılar</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/giris" className="text-sm text-muted-foreground hover:text-primary">
                  Giriş Yap
                </Link>
                <Link href="/kayit" className="text-sm text-muted-foreground hover:text-primary">
                  Kayıt Ol
                </Link>
                <Link href="/kampanya-olustur" className="text-sm text-muted-foreground hover:text-primary">
                  Kampanya Oluştur
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

