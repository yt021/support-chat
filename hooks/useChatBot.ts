import { useState, useCallback } from 'react'
import { useChat } from '@/contexts/ChatContext'

interface UseChatBotReturn {
  sendMessage: (content: string) => Promise<void>
  isLoading: boolean
}

export function useChatBot(): UseChatBotReturn {
  const { addMessage, setTyping, messages } = useChat()
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: content.trim(),
      timestamp: new Date(),
    }

    addMessage(userMessage)
    setIsLoading(true)
    setTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const data = await response.json()

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: data.response,
        timestamp: new Date(),
      }

      addMessage(assistantMessage)
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: 'متأسفم، خطایی رخ داد. لطفاً دوباره تلاش کنید.',
        timestamp: new Date(),
      }
      addMessage(errorMessage)
    } finally {
      setIsLoading(false)
      setTyping(false)
    }
  }, [messages, addMessage, setTyping, isLoading])

  return { sendMessage, isLoading }
}
