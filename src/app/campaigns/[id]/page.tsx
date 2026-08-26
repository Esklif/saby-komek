import Link from "next/link"
import { ArrowLeft, Heart, Calendar, MapPin, User, FileText, Share2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CampaignPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-[#117b66] mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" /> Все сборы
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Col: Info */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [ Фото Алимжана ]
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 gap-2">
                <Share2 className="w-4 h-4" /> Поделиться историей
              </Button>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Алимжан С.</h1>
              <p className="text-gray-500 mb-6">6 лет, г. Алматы</p>
              
              <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-sm font-semibold rounded-md mb-4">
                Онкология
              </span>
              
              <h2 className="text-lg font-bold mb-2">Диагноз: Острый лимфобластный лейкоз (ОЛЛ)</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                Алимжану 6 лет. Активный, любознательный мальчик, который любит конструкторы и мечтает стать инженером. В феврале 2024 года ему поставили диагноз - острый лимфобластный лейкоз. Сейчас Алимжан проходит лечение, которое даёт шанс на полное выздоровление. Но для продолжения терапии необходимо дорогостоящее лекарство, не входящее в список бесплатного обеспечения.
              </p>
              
              <div className="grid grid-cols-3 gap-4 border-t pt-4 text-sm">
                <div>
                  <p className="text-gray-500 text-xs">Сбор открыт</p>
                  <p className="font-semibold">12.05.2024</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">ID сбора</p>
                  <p className="font-semibold">#240512</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Куратор сбора</p>
                  <p className="font-semibold">Фонд «Саби»</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="border-b">
            <div className="flex gap-8 text-sm font-medium">
              <button className="text-[#117b66] border-b-2 border-[#117b66] pb-4">О ребёнке</button>
              <button className="text-gray-500 hover:text-gray-900 pb-4">Документы</button>
              <button className="text-gray-500 hover:text-gray-900 pb-4">На что пойдут средства</button>
              <button className="text-gray-500 hover:text-gray-900 pb-4">Отчёты</button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Дата рождения</p>
                  <p className="font-medium">14.03.2018</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Город</p>
                  <p className="font-medium">Алматы</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Диагноз</p>
                  <p className="font-medium">Острый лимфобластный лейкоз (ОЛЛ)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-xs">Лечащий врач</p>
                  <p className="font-medium">Детская городская клиническая больница №2, г. Алматы</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-3">История ребёнка</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Алимжан рос здоровым и жизнерадостным ребёнком. Всё изменилось в начале 2024 года, когда у него появилась слабость, бледность и частые простуды. После обследований врачи поставили диагноз - острый лимфобластный лейкоз.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Сейчас Алимжан проходит интенсивную химиотерапию. Лечение даёт положительную динамику, но для закрепления результата необходим курс таргетной терапии препаратом Блинцито, стоимость которого семья не может оплатить самостоятельно.
              </p>
              <button className="text-[#117b66] font-medium hover:underline">Читать далее ⌄</button>
            </div>
          </div>
        </div>
        
        {/* Right Col: Donate */}
        <div className="flex flex-col gap-6">
          <Card className="border-[#117b66]/20 shadow-lg shadow-[#117b66]/5">
            <CardContent className="p-6">
              <p className="text-sm font-medium text-gray-600 mb-2">Необходимо собрать</p>
              <h2 className="text-3xl font-bold mb-6">12 500 000 ₸</h2>
              
              <div className="space-y-2 mb-6">
                <Progress value={63} className="h-2" />
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-gray-500 text-xs block">Собрано</span>
                    <span className="font-semibold">7 875 000 ₸</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-xs block">Осталось собрать</span>
                    <span className="font-semibold">4 625 000 ₸</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full text-lg h-14 mb-4 gap-2">
                <Heart className="w-5 h-5" /> Пожертвовать
              </Button>
              <p className="text-center text-sm text-gray-500 mb-6">Вы можете помочь любой суммой</p>
              
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <div className="bg-[#117b66]/10 text-[#117b66] p-2 rounded-full">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">1 235 человек уже помогли</p>
                  <p className="text-xs text-gray-500">Последнее пожертвование 5 минут назад</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold mb-4">Как ещё можно помочь</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 text-gray-400"><FileText className="w-5 h-5"/></div>
                  <div>
                    <p className="font-semibold text-sm">Регулярная помощь</p>
                    <p className="text-xs text-gray-500">Оформите ежемесячное пожертвование</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-gray-400"><Share2 className="w-5 h-5"/></div>
                  <div>
                    <p className="font-semibold text-sm">Рассказать друзьям</p>
                    <p className="text-xs text-gray-500">Поделитесь историей в соцсетях</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-gray-400"><AlertCircle className="w-5 h-5"/></div>
                  <div>
                    <p className="font-semibold text-sm">Предложить помощь</p>
                    <p className="text-xs text-gray-500">Если вы можете помочь делом или ресурсами</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  )
}
