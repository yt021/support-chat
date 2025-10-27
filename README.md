# Support Chatbot - React + Next.js

A modern, AI-powered support chatbot built with React and Next.js, incorporating essential features from your learning roadmap.

## 🚀 Features Implemented

### From Your Learning List:
✅ **Basics + First Project (01-05)** - Core React fundamentals
✅ **Styling React Components (06)** - Modern UI with Tailwind CSS
✅ **useEffect & Side Effects (11)** - Managing component lifecycle and auto-scroll
✅ **Context API (10)** - State management for chat history with useState
✅ **Sending HTTP Requests (14)** - API integration using fetch
✅ **Custom Hooks (15)** - Reusable hooks for chat logic
✅ **Next.js Deep Dive (26)** - Server components and App Router
✅ **Server Actions & Components (27)** - API routes for backend integration

### ✨ Bonus Features:
- **localStorage persistence** - Chat messages are saved automatically
- **Error handling** - Graceful error messages for failed requests
- **Responsive design** - Works on all device sizes

## 📁 Project Structure

```
support-chat/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API endpoint for chatbot
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles
├── components/
│   ├── ChatContainer.tsx         # Main chat container
│   ├── ChatMessage.tsx           # Individual message component
│   ├── ChatInput.tsx             # Message input component
│   ├── TypingIndicator.tsx       # Loading animation
│   └── QueryProvider.tsx         # React Query provider
├── contexts/
│   └── ChatContext.tsx           # Chat state management
├── data/
│   └── knowledgeBase.json        # Q&A data for chatbot
├── hooks/
│   ├── useChatBot.ts             # Chat logic custom hook
│   └── useScrollToBottom.ts      # Auto-scroll hook
└── package.json
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Context API + useState** - Simple client state management
- **localStorage** - Client-side persistence
- **Lucide React** - Icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Key Concepts Demonstrated

### 1. Context API & useState
The `ChatContext` manages all chat state using useState for simple, predictable state updates.

### 2. Custom Hooks
- `useChatBot` - Handles message sending and API calls
- `useScrollToBottom` - Automatically scrolls chat to latest message

### 3. useEffect for Side Effects
Used for:
- Auto-scrolling when new messages arrive
- Managing textarea height dynamically
- Persisting messages to localStorage

### 4. API Routes (Next.js App Router)
The `/api/chat` route reads from `knowledgeBase.json` to provide intelligent responses.

### 5. localStorage Integration
Chat messages are automatically saved and restored on page reload - no server needed!

### 6. Server Components & Client Components
Strategic use of 'use client' directive where needed for interactivity.

## 🧪 Try It Out

The chatbot uses a simple JSON file (`data/knowledgeBase.json`) to store responses. You can easily add or modify responses by editing that file!

The chatbot can respond to queries about:
- Shipping information
- Returns and refunds
- Account management
- Contact information
- Order tracking
- Login issues
- Payment methods
- Product availability
- General greetings and questions

Example messages:
- "How long does shipping take?"
- "What's your return policy?"
- "How do I contact support?"
- "I need help with my order"

**To add more responses:** Simply edit `data/knowledgeBase.json` with new keyword arrays and responses!

## 🚢 Deployment

This app is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any Node.js hosting platform

Simply run `npm run build` and deploy the output.

## 📝 Notes

- **Simplified architecture**: No React Query or useReducer - just clean, simple useState and Context API
- The chatbot reads responses from `data/knowledgeBase.json` - easily customizable!
- Responses are matched by keywords in user messages
- Chat messages are automatically saved to localStorage and restored on reload
- To integrate with a real AI API (like OpenAI), modify the `/app/api/chat/route.ts` file
- All styling is done with Tailwind CSS for easy customization
- The app is fully responsive and works on all device sizes

## 🎓 Learning Outcomes

This project demonstrates:
- Building modern React applications with Next.js
- State management with Context API and useReducer
- Creating reusable custom hooks
- Handling API requests and responses
- Managing side effects with useEffect
- Styling with Tailwind CSS
- TypeScript for type safety
- Server-side API routes in Next.js

---

Built with ❤️ using React, Next.js, and modern web technologies

