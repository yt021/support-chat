'use client'

import React from 'react'
import { Message } from '@/contexts/ChatContext'
import { User, Bot } from 'lucide-react'

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div
      dir="ltr"
      className={`flex gap-3 mb-4 ${
        isUser ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border ${
          isUser
            ? 'bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-[#fdfefe] border-transparent shadow-[var(--shadow-accent)]'
            : 'bg-[var(--surface-soft)] text-[var(--accent-blue)] border-[var(--border-soft)] shadow-sm'
        }`}
      >
        {isUser ? (
          <User size={18} />
        ) : (
          <Bot size={18} />
        )}
      </div>

      {/* Message Bubble */}
      <div className={`flex flex-col flex-1 min-w-0 ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          dir="rtl"
          className={`chat-bubble ${
            isUser ? 'chat-bubble-user' : 'chat-bubble-assistant'
          }`}
        >
          {message.content}
        </div>
        <span className="text-xs text-[var(--muted)] mt-1" dir="ltr">
          {message.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </div>
    </div>
  )
}

