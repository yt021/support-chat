'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatContextType {
  messages: Message[]
  isTyping: boolean
  isLoading: boolean
  addMessage: (message: Message) => void
  setTyping: (typing: boolean) => void
  setLoading: (loading: boolean) => void
  clearMessages: () => void
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

const defaultAssistantMessage: Message = {
  id: '1',
  role: 'assistant',
  content: 'سلام! من دستیار پشتیبانی هستم. هر سؤالی درباره سفارش، ارسال یا حساب دارید بپرسید.',
  timestamp: new Date(),
}

const getInitialMessages = (): Message[] => {
  if (typeof window === 'undefined') {
    return [defaultAssistantMessage]
  }

  const saved = localStorage.getItem('chat-messages')
  if (saved) {
    try {
      const messages = JSON.parse(saved)
      return messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }))
    } catch (e) {
      console.error('Failed to parse saved messages:', e)
    }
  }

  return [defaultAssistantMessage]
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(getInitialMessages)
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chat-messages', JSON.stringify(messages))
    }
  }, [messages])

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message])
  }

  const clearMessages = () => {
    const newDefault: Message = {
      ...defaultAssistantMessage,
      id: Date.now().toString(),
      timestamp: new Date(),
    }
    setMessages([newDefault])
    if (typeof window !== 'undefined') {
      localStorage.removeItem('chat-messages')
    }
  }

  return (
    <ChatContext.Provider value={{
      messages,
      isTyping,
      isLoading,
      addMessage,
      setTyping: setIsTyping,
      setLoading: setIsLoading,
      clearMessages
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export function useChat() {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}
