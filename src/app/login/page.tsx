export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Вход в личный кабинет</h1>
      <div className="bg-white p-6 rounded-xl border shadow-sm flex flex-col gap-4">
        <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
        <input type="password" placeholder="Пароль" className="w-full px-3 py-2 border rounded-md" />
        <button className="w-full bg-[#117b66] text-white py-2 rounded-md font-medium mt-2 hover:bg-[#0e6352] transition-colors">Войти</button>
        
        <div className="relative my-4 flex items-center justify-center">
          <span className="absolute bg-white px-2 text-sm text-gray-500">или</span>
          <div className="w-full border-t border-gray-200"></div>
        </div>
        
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors">
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}
