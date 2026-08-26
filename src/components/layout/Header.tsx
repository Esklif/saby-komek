import Link from "next/link"
import { Heart, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-xl font-bold text-[#117b66] flex items-center">
            Saby Komek <Heart className="w-5 h-5 ml-1 fill-current" />
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-widest hidden sm:inline-block ml-2 border-l pl-2">
            Благотворительный фонд
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-[#117b66]">О фонде</Link>
          <Link href="/campaigns" className="hover:text-[#117b66]">Проекты</Link>
          <Link href="/business" className="hover:text-[#117b66]">Для бизнеса</Link>
          <Link href="/reports" className="hover:text-[#117b66]">Отчёты</Link>
          <Link href="/contacts" className="hover:text-[#117b66]">Контакты</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/apply">
            <Button variant="outline" className="hidden sm:flex text-[#117b66] border-[#117b66] hover:bg-[#e6f4f1] gap-2">
              Подать заявку <FileText className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/campaigns">
            <Button className="hidden sm:flex gap-2">
              Хочу помочь <Heart className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" className="gap-2 text-gray-600">
              <User className="w-4 h-4" /> Войти
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
