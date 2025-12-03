import type { Metadata } from 'next'
import './globals.css'
import { ChatProvider } from '@/contexts/ChatContext'

export const metadata: Metadata = {
  title: 'چت پشتیبانی',
  description: 'دستیار پشتیبانی فارسی با Next.js و React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ChatProvider>
          {children}
        </ChatProvider>
      </body>
    </html>
  )
}

