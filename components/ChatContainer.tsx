'use client'

import React, { useState } from 'react'
import { useChat } from '@/contexts/ChatContext'
import { useChatBot } from '@/hooks/useChatBot'
import { useScrollToBottom } from '@/hooks/useScrollToBottom'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { TypingIndicator } from './TypingIndicator'
import { Trash2 } from 'lucide-react'

export function ChatContainer() {
  const { messages, isTyping, clearMessages } = useChat()
  const { sendMessage, isLoading } = useChatBot()
  const bottomRef = useScrollToBottom([messages])
  const [inputHeight, setInputHeight] = useState(120)

  return (
    <div className="chat-shell text-[var(--text)] h-full min-h-0 relative">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">گفت‌وگوی پشتیبانی</h1>
            <p className="text-sm text-gray-500">چطور می‌توانیم امروز کمکتان کنیم؟</p>
          </div>
          <button
            onClick={clearMessages}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="پاک کردن گفتگو"
          >
            <Trash2 size={18} className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="relative flex-1 min-h-0">
        <div
          className="absolute inset-x-0 top-0 overflow-y-auto px-4 pt-6 pb-2"
          style={{ bottom: `${inputHeight}px` }}
        >
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <ChatInput
        onSendMessage={sendMessage}
        isLoading={isLoading}
        onHeightChange={setInputHeight}
      />
    </div>
  )
}
