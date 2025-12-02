import { ChatContainer } from '@/components/ChatContainer'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="chat-window">
        <ChatContainer />
      </div>
    </main>
  )
}

