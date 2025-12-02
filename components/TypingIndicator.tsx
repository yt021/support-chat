'use client'

import React from 'react'
import { Bot } from 'lucide-react'

export function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--surface-soft)] text-[var(--accent-blue)] border border-[var(--border-soft)] shadow-sm flex items-center justify-center">
        <Bot size={18} />
      </div>
      <div className="flex flex-col">
        <div className="chat-bubble chat-bubble-assistant">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-[var(--accent-blue)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
            <span className="w-2 h-2 bg-[var(--accent-teal)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
          </div>
        </div>
      </div>
    </div>
  )
}

