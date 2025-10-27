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

const getInitialMessages = (): Message[] => {
  if (typeof window === 'undefined') {
    // Server-side: return default message
    return [{
      id: '1',
      role: 'assistant' as const,
      content: 'Hello! I\'m your support assistant. How can I help you today?',
      timestamp: new Date(),
    }]
  }

  // Client-side: try to load from localStorage
  const saved = localStorage.getItem('chat-messages')
  if (saved) {
    try {
      const messages = JSON.parse(saved)
      // Convert timestamp strings back to Date objects
      return messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }))
    } catch (e) {
      console.error('Failed to parse saved messages:', e)
    }
  }

  return [{
    id: '1',
    role: 'assistant' as const,
    content: 'Hello! I\'m your support assistant. How can I help you today?',
    timestamp: new Date(),
  }]
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(getInitialMessages)
  const [isTyping, setIsTyping] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Save to localStorage whenever messages change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chat-messages', JSON.stringify(messages))
    }
  }, [messages])

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message])
  }

  const setTyping = (typing: boolean) => {
    setIsTyping(typing)
  }

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
  }

  const clearMessages = () => {
    const defaultMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: 'Hello! I\'m your support assistant. How can I help you today?',
      timestamp: new Date(),
    }
    setMessages([defaultMessage])
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
      setTyping, 
      setLoading, 
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
