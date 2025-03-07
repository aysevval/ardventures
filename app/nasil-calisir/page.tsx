import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-primary py-16 text-white md:py-24">
          <div className="container px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Nasıl Çalışır?</h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl">
              ArdVenture KFS ile yatırım yapmak ve proje başlatmak çok kolay. İşte adım adım süreç.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold">Yatırımcılar İçin</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  ArdVenture KFS ile yenilikçi projelere kolayca yatırım yapabilir, geleceğin girişimlerine ortak
                  olabilirsiniz.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Hesap Oluşturun</h3>
                      <p className="mt-2 text-muted-foreground">
                        Hızlı ve güvenli bir şekilde hesabınızı oluşturun ve kimlik doğrulama sürecini tamamlayın.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Projeleri İnceleyin</h3>
                      <p className="mt-2 text-muted-foreground">
                        Aktif kampanyaları inceleyin, detaylı bilgilere ulaşın ve yatırım yapmak istediğiniz projeyi
                        seçin.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Yatırım Yapın</h3>
                      <p className="mt-2 text-muted-foreground">
                        Güvenli ödeme altyapısı ile yatırımınızı gerçekleştirin ve projenin bir parçası olun.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Gelişmeleri Takip Edin</h3>
                      <p className="mt-2 text-muted-foreground">
                        Yatırım yaptığınız projelerin gelişmelerini takip edin ve güncellemelerden haberdar olun.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/kayit">Yatırımcı Olarak Başlayın</Link>
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold">Girişimciler İçin</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Projeniz için finansman sağlamak ve yatırımcılarla buluşmak artık çok daha kolay.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Hesap Oluşturun</h3>
                      <p className="mt-2 text-muted-foreground">
                        Girişimci hesabınızı oluşturun ve kimlik doğrulama sürecini tamamlayın.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Projenizi Oluşturun</h3>
                      <p className="mt-2 text-muted-foreground">
                        Projenizin detaylarını girin, gerekli belgeleri yükleyin ve kampanyanızı oluşturun.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Onay Süreci</h3>
                      <p className="mt-2 text-muted-foreground">
                        Kampanyanız incelenir ve SPK düzenlemelerine uygunluğu kontrol edilir.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Fonlama Süreci</h3>
                      <p className="mt-2 text-muted-foreground">
                        Onaylanan kampanyanız yayınlanır ve yatırımcılar projenize yatırım yapmaya başlar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="/kayit">Girişimci Olarak Başlayın</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="container px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Avantajlarımız</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                ArdVenture KFS ile kitle fonlama süreçlerinizi güvenli ve verimli bir şekilde yönetin.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">SPK Uyumluluğu</h3>
                  <p className="mt-2 text-muted-foreground">
                    Tüm süreçlerimiz SPK düzenlemelerine tam uyumlu olarak tasarlanmıştır.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Veri Güvenliği</h3>
                  <p className="mt-2 text-muted-foreground">KVKK ve GDPR standartlarında veri güvenliği sağlıyoruz.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Şeffaf Süreçler</h3>
                  <p className="mt-2 text-muted-foreground">
                    Tüm yatırım süreçleri şeffaf ve izlenebilir şekilde yönetilir.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Kolay Kullanım</h3>
                  <p className="mt-2 text-muted-foreground">
                    Kullanıcı dostu arayüzümüz ile tüm işlemlerinizi kolayca gerçekleştirebilirsiniz.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Hızlı Süreçler</h3>
                  <p className="mt-2 text-muted-foreground">
                    Otomatik süreçler sayesinde işlemlerinizi hızlı bir şekilde tamamlayabilirsiniz.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold">Teknik Destek</h3>
                  <p className="mt-2 text-muted-foreground">
                    Uzman ekibimiz tüm sorularınızı yanıtlamak için her zaman hazır.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold">Hemen Başlayın</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              ArdVenture KFS ile yatırım yapmaya veya projeniz için finansman sağlamaya hemen başlayın.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/kayit">Hesap Oluştur</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kampanyalar">Kampanyaları İncele</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

