'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
  onHeightChange?: (height: number) => void
}

export function ChatInput({ onSendMessage, isLoading, onHeightChange }: ChatInputProps) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const containerRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!containerRef.current || !onHeightChange) return
    const el = containerRef.current
    const update = () => onHeightChange(el.getBoundingClientRect().height)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [onHeightChange])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form
      ref={containerRef}
      onSubmit={handleSubmit}
      className="glass-overlay border-t border-[var(--border-soft)] p-4 absolute left-0 right-0 bottom-0 z-20 backdrop-blur-[16px]"
    >
      <div className="flex gap-2 items-center max-w-3xl mx-auto">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="پیام خود را بنویسید..."
          rows={2}
          className="flex-1 h-16 overflow-y-auto resize-none border border-[var(--border-soft)] bg-white/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-0 focus:border-[var(--border-soft)] backdrop-blur-[2px]"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Send size={20} className="transform -scale-x-100" />
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        برای ارسال Enter بزنید، برای خط جدید Shift+Enter
      </p>
    </form>
  )
}
