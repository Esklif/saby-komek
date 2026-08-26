import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

// In a real app this would be fetched from the DB
export default function CampaignsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Все проекты и актуальные сборы</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mock Campaign 1 */}
        <Link href="/campaigns/test-id">
          <Card className="hover:shadow-md transition-shadow cursor-pointer overflow-hidden group h-full">
            <div className="h-64 bg-gray-200 relative overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  [ Фото Алимжана ]
               </div>
            </div>
            <CardContent className="p-5 flex flex-col">
              <div className="flex gap-2 mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-rose-100 text-rose-700 rounded-md">Онкология</span>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-[#117b66] transition-colors">Алимжан С.</h3>
              <p className="text-sm text-gray-500 mb-4">6 лет, г. Алматы</p>
              
              <div className="space-y-2 mb-4 mt-auto">
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
        
        {/* Mock Campaign 2 */}
        <Card className="hover:shadow-md transition-shadow overflow-hidden group h-full opacity-70">
            <div className="h-64 bg-gray-100 relative overflow-hidden flex items-center justify-center text-gray-400">
               Нет активных сборов
            </div>
            <CardContent className="p-5">
              <h3 className="text-xl font-bold mb-2">Ожидается сбор...</h3>
              <p className="text-sm text-gray-500">Скоро здесь появятся новые заявки, которым требуется помощь.</p>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
