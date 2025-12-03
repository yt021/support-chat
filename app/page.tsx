import { ChatContainer } from '@/components/ChatContainer'

export default function Home() {
  const demoKeywords = [
    'سلام',
    'ارسال سفارش',
    'بازگشت کالا',
    'حساب کاربری',
    'پشتیبانی',
    'وضعیت سفارش',
    'ورود و رمز عبور',
    'پرداخت و کارت',
    'موجودی محصول',
    'متشکرم',
    'React state/props',
    'useEffect dependency',
    'بهینه‌سازی lazy/Suspense',
    'فرم و validation',
    'دسترس‌پذیری (a11y)',
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-4">
      <div className="chat-window">
        <ChatContainer />
      </div>
      <div className="text-[12px] text-gray-700 bg-white/80 rounded-xl border border-[var(--border-soft)] px-4 py-3 shadow-sm">
        <div className="font-semibold text-gray-800 mb-2 text-center">کلمات نمونه برای تست</div>
        <div className="flex flex-wrap justify-center gap-2">
          {demoKeywords.map((word) => (
            <span
              key={word}
              className="px-2 py-1 rounded-full border border-[var(--border-soft)] bg-white/70 text-gray-800"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
