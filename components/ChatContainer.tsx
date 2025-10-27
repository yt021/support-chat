'use client'

import React from 'react'
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

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Support Chat</h1>
            <p className="text-sm text-gray-500">How can we help you today?</p>
          </div>
          <button
            onClick={clearMessages}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Clear chat"
          >
            <Trash2 size={18} className="text-gray-600" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  )
}
