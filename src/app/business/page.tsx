"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Settings, Hammer, Truck, BookOpen, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const FILTERS = ["Все потребности", "Деньги", "Товары", "Услуги", "Оборудование", "Строительство", "Обучение", "Транспорт"]

export default function BusinessPage() {
  const [activeFilter, setActiveFilter] = useState("Все потребности")

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Кому нужна помощь бизнеса</h1>
          <p className="text-gray-600 max-w-2xl">
            Помочь можно не только деньгами. Помогайте тем, что умеете и чем располагаете. Здесь собраны конкретные задачи, которые можно закрыть своими ресурсами.
          </p>
        </div>
        <Link href="/campaigns">
          <Button size="lg">Я хочу помочь</Button>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter 
                ? 'bg-[#117b66] text-white' 
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NeedCard 
          title="Компьютерный класс" 
          beneficiary="Детский дом №1, г. Алматы"
          type="Оборудование"
          description="Социальному учреждению необходимо 20 компьютеров для проведения уроков информатики."
          icon={<Monitor className="w-5 h-5" />}
        />
        <NeedCard 
          title="Ремонт спортивного зала" 
          beneficiary="Средняя школа №14, г. Астана"
          type="Строительство"
          description="Требуется капитальный ремонт покрытия и стен в школьном спортивном зале."
          icon={<Hammer className="w-5 h-5" />}
        />
        <NeedCard 
          title="Специализированный аппарат" 
          beneficiary="Ребенок, 8 лет"
          type="Медицина"
          description="Ребенку необходим ортопедический аппарат стоимостью 800 000 ₸."
          icon={<Settings className="w-5 h-5" />}
        />
      </div>
    </div>
  )
}

function NeedCard({ title, beneficiary, type, description, icon }: { title: string, beneficiary: string, type: string, description: string, icon: React.ReactNode }) {
  const [offered, setOffered] = useState(false)
  
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gray-100 p-2 rounded-md text-gray-600">{icon}</div>
          <span className="text-sm font-semibold text-gray-500">{type}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm font-medium text-[#117b66] mb-3">{beneficiary}</p>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>
        <Button 
          variant={offered ? "secondary" : "outline"} 
          className={`w-full ${offered ? "bg-emerald-50 text-emerald-700 border-emerald-200" : ""}`}
          onClick={() => setOffered(true)}
        >
          {offered ? "Заявка отправлена" : "Предложить помощь"}
        </Button>
      </CardContent>
    </Card>
  )
}
