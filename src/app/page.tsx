import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, FileText, CheckCircle, Heart, Building, GraduationCap, Users, Accessibility, Stethoscope, Baby } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Hero Section */}
      <section className="bg-[#eaf5f3] pt-12 pb-16 px-4 md:px-6 relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Каждый ребёнок <br /> заслуживает шанс <br /> на здоровое будущее
            </h1>
            <p className="text-lg text-gray-700 max-w-md">
              Адресная помощь детям и семьям в сложной жизненной ситуации
            </p>
            <div className="flex items-center gap-3 bg-white/80 p-4 rounded-xl max-w-sm backdrop-blur-sm shadow-sm">
              <Shield className="w-8 h-8 text-[#117b66]" />
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900 block">100% средств идут на помощь</strong>
                Мы не используем пожертвования на административные расходы
              </p>
            </div>
          </div>
          {/* We would place a hero image here. Since we don't have the exact image, we use a placeholder */}
          <div className="hidden md:flex justify-end relative h-[400px]">
            {/* 
               In a real app we would use: 
               <Image src="/hero.jpg" alt="Hero" fill className="object-cover rounded-2xl" />
            */}
            <div className="absolute inset-0 bg-[#d1e9e4] rounded-[2rem] flex items-center justify-center text-[#117b66] opacity-50">
              [ Изображение ребенка (сердечко руками) ]
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Категории помощи</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <CategoryCard icon={<Baby className="w-8 h-8" />} label="Дети" color="bg-emerald-100 text-emerald-700" />
          <CategoryCard icon={<Stethoscope className="w-8 h-8" />} label="Здоровье" color="bg-rose-100 text-rose-700" />
          <CategoryCard icon={<GraduationCap className="w-8 h-8" />} label="Образование" color="bg-amber-100 text-amber-700" />
          <CategoryCard icon={<Users className="w-8 h-8" />} label="Люди в трудной ситуации" color="bg-purple-100 text-purple-700" />
          <CategoryCard icon={<Accessibility className="w-8 h-8" />} label="Особые потребности" color="bg-blue-100 text-blue-700" />
          <CategoryCard icon={<Building className="w-8 h-8" />} label="Помощь соц учреждениям" color="bg-indigo-100 text-indigo-700" />
        </div>
      </section>

      {/* Campaign List (Catalog placeholder) */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Актуальные сборы</h2>
          <Link href="/campaigns" className="text-[#117b66] font-medium hover:underline">
            Все сборы →
          </Link>
        </div>
        
        {/* For MVP we just show a static card resembling Alimzhan. The real app will fetch this from DB */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/campaigns/test-id">
            <Card className="hover:shadow-md transition-shadow cursor-pointer overflow-hidden group">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                 {/* Image Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [ Фото Алимжана ]
                 </div>
              </div>
              <CardContent className="p-5">
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-rose-100 text-rose-700 rounded-md">Онкология</span>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-[#117b66] transition-colors">Алимжан С.</h3>
                <p className="text-sm text-gray-500 mb-4">6 лет, г. Алматы</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Собрано</span>
                    <span className="font-semibold">7 875 000 ₸</span>
                  </div>
                  <Progress value={63} />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Из 12 500 000 ₸</span>
                    <span>Осталось 4 625 000 ₸</span>
                  </div>
                </div>
                <Button className="w-full">Помочь</Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Action Blocks */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f8faf9] p-8 rounded-2xl border border-[#e6f4f1] flex flex-col items-start gap-4">
            <h3 className="text-2xl font-bold">Вам нужна помощь?</h3>
            <p className="text-gray-600">
              Фонд рассматривает обращения по шести направлениям. Вы можете подать заявку на сайте, и наши специалисты свяжутся с вами.
            </p>
            <Link href="/apply">
              <Button variant="outline" className="border-[#117b66] text-[#117b66] mt-2">
                Подать заявку <FileText className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="bg-[#117b66] text-white p-8 rounded-2xl flex flex-col items-start gap-4">
            <h3 className="text-2xl font-bold">Для бизнеса</h3>
            <p className="text-white/80">
              Помочь можно не только деньгами. Помогайте тем, что умеете и чем располагаете. Каталог потребностей для бизнеса.
            </p>
            <Link href="/business">
              <Button variant="secondary" className="mt-2 text-[#117b66]">
                Кому нужна помощь бизнеса <Building className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ icon, label, color }: { icon: React.ReactNode, label: string, color: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4 cursor-pointer text-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color}`}>
        {icon}
      </div>
      <span className="font-semibold text-sm">{label}</span>
    </div>
  )
}
