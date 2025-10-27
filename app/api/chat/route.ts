import { NextRequest, NextResponse } from 'next/server'
import knowledgeBase from '@/data/knowledgeBase.json'

// Simple response generation from JSON
function generateResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  
  // Check each entry in the knowledge base
  for (const entry of knowledgeBase) {
    // Check if any keyword matches
    const hasMatch = entry.keywords.some(keyword => 
      lowerMessage.includes(keyword)
    )
    
    if (hasMatch) {
      return entry.response
    }
  }

  // Default response if no match found
  return 'Thanks for your message! I understand you\'re asking about: "' + message + '". Could you provide a bit more detail, or try asking about shipping, returns, account, contact, or orders?'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userMessage = lastMessage?.content || ''

    // Simulate a delay to make it feel more realistic
    await new Promise(resolve => setTimeout(resolve, 800))

    // Generate response
    const response = generateResponse(userMessage)

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

