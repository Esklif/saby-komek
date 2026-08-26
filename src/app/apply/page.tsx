"use client"

import { useState } from "react"
import { Shield, FileText, CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const CATEGORIES = [
  "Помощь детям",
  "Люди в трудной ситуации",
  "Особые потребности",
  "Социальные учреждения",
  "Образование"
]

export default function ApplyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Вам нужна помощь?</h1>
        <p className="text-gray-600">
          Фонд рассматривает обращения по шести направлениям. Заполните форму заявки, и мы свяжемся с вами.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">1. Выберите категорию помощи</h2>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      selectedCategory === cat
                        ? "bg-[#117b66] border-[#117b66] text-white"
                        : "bg-white border-gray-200 text-gray-700 hover:border-[#117b66] hover:text-[#117b66]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedCategory && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold mb-4">2. Данные заявителя</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ФИО заявителя</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#117b66]/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#117b66]/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Опишите ситуацию</label>
                    <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#117b66]/50"></textarea>
                  </div>
                  <Button className="w-full">Отправить заявку</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="bg-[#f8faf9] border-[#e6f4f1]">
            <CardContent className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#117b66]" />
                Какие документы понадобятся
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                В зависимости от категории список может меняться, но стандартный набор включает:
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#117b66] shrink-0 mt-0.5" />
                  Документ, удостоверяющий личность
                </li>
                {selectedCategory === "Помощь детям" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#117b66] shrink-0 mt-0.5" />
                      Свидетельство о рождении ребенка
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#117b66] shrink-0 mt-0.5" />
                      Медицинские выписки (если применимо)
                    </li>
                  </>
                )}
                {selectedCategory === "Социальные учреждения" && (
                  <>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#117b66] shrink-0 mt-0.5" />
                      Уставные документы организации
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#117b66] shrink-0 mt-0.5" />
                      Сметы и коммерческие предложения
                    </li>
                  </>
                )}
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#117b66] shrink-0 mt-0.5" />
                  Документы по запросу фонда
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
