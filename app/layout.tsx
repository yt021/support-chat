import type { Metadata } from 'next'
import './globals.css'
import { ChatProvider } from '@/contexts/ChatContext'

export const metadata: Metadata = {
  title: 'Support Chatbot',
  description: 'AI-powered support chatbot built with Next.js and React',
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

