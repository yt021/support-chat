# Next.js Explained - For React Developers

## 🤔 What is Next.js?

**Next.js is a framework built on top of React.** Think of it like this:

- **React** = The JavaScript library for building UI components
- **Next.js** = A framework that adds powerful features to React to make building full websites easier

## 🆚 React vs Next.js

### Plain React (Create React App)
```
You need to:
- Set up routing yourself (React Router)
- Set up build tools yourself
- Create API endpoints separately
- Handle deployment configuration
- All code runs in the browser (client-side)
```

### Next.js
```
It gives you:
- Built-in routing (just create files!)
- Built-in API routes
- Automatic optimizations
- Easy deployment
- Can run code on the server or client
```

## 🎯 Key Features of Next.js We're Using

### 1. **File-Based Routing** (The Biggest Difference!)

In plain React, you'd need this:
```jsx
// With React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

**With Next.js:**
```
Just create files in the app/ folder:
- app/page.tsx     → Shows at route "/"
- app/about/page.tsx → Shows at route "/about"
```

That's it! Next.js automatically creates the routes for you.

### 2. **API Routes** (Backend in the Same Project!)

In plain React, you'd need a separate backend:
```
Frontend (React) → Fetches from → Backend (Node.js on different server)
```

**With Next.js:**
```
app/
├── page.tsx          → Your React component
├── api/
    └── chat/
        └── route.ts  → Your backend API!

It's all in one project!
```

This is what we're doing in this chatbot:
- `app/page.tsx` = The chat UI (frontend)
- `app/api/chat/route.ts` = The chatbot logic (backend)

### 3. **Server Components vs Client Components**

In Next.js, components can run on the server or in the browser:

```tsx
// Default: Server Component (runs on server, no JavaScript sent to browser)
export default function Page() {
  return <div>This runs on the server!</div>
}

// Client Component: Runs in browser (use for interactivity)
'use client'
export function Button() {
  return <button onClick={() => alert('hi')}>Click me</button>
}
```

## 🏗️ Our Project Structure

```
support-chat/
├── app/
│   ├── layout.tsx          ← Wraps all pages (like <html>, <body>)
│   ├── page.tsx            ← Shows when you visit "/"
│   ├── globals.css         ← Global styles
│   └── api/
│       └── chat/
│           └── route.ts    ← API endpoint at "/api/chat"
├── components/             ← React components (like you know)
├── contexts/               ← React Context (like you know)
└── hooks/                  ← Custom hooks (like you know)
```

## 🔄 How Our Chatbot Uses Next.js

### The Flow:

1. **User visits http://localhost:3000**
   - Next.js serves `app/page.tsx`

2. **User types a message and clicks send**
   - The `ChatInput` component (regular React) calls `sendMessage`

3. **`sendMessage` makes HTTP request**
   - Fetches to `/api/chat`
   - Next.js runs `app/api/chat/route.ts` (the backend!)

4. **API route processes the request**
   - Reads `knowledgeBase.json`
   - Finds matching response
   - Returns JSON

5. **Frontend receives response**
   - Updates the chat with the bot's message

## 🎨 Why Next.js vs Plain React?

### If we used plain React:
```bash
# You'd need:
create-react-app frontend
  → React components
  → React Router for routing

# Separate backend:
node backend/server.js
  → Express.js API
  → Different port, CORS issues, etc.
```

### With Next.js:
```bash
# Everything in one place:
npm run dev
  → Frontend + Backend together
  → No CORS issues
  → Easier deployment
```

## 📚 Key Next.js Concepts You Should Know

### 1. **The `app` Folder**
```
app/
├── page.tsx       # The page component
├── layout.tsx     # Wraps pages (shared layout)
└── api/           # API routes
```

### 2. **Server vs Client Components**
- `'use client'` = Needs browser JavaScript (onClick, useState, etc.)
- No directive = Runs on server (faster!)

### 3. **API Routes**
```ts
// app/api/example/route.ts
export async function GET(request) {
  return Response.json({ message: 'Hello' })
}

export async function POST(request) {
  const data = await request.json()
  return Response.json({ success: true })
}
```

### 4. **File-Based Routing**
```
app/about/page.tsx     → /about
app/blog/post/page.tsx → /blog/post
app/api/users/route.ts → /api/users
```

## 🎯 What You Already Know (Pure React)

These parts are just React, no Next.js magic:
- ✅ `useState`, `useEffect`, `useContext` (hooks)
- ✅ Components (ChatMessage, ChatInput, etc.)
- ✅ Custom hooks (useChatBot, useScrollToBottom)
- ✅ Context API (ChatContext)
- ✅ Props, state, events

**The only Next.js-specific parts:**
- The file structure (`app/` folder)
- The API route (`app/api/chat/route.ts`)
- The routing (automatic from file names)

## 🚀 Quick Start with Next.js

```bash
# Create new Next.js app
npx create-next-app@latest

# Run it
npm run dev

# Visit http://localhost:3000
```

Key differences from `create-react-app`:
- No `src/` folder needed
- `app/` is special folder
- Automatic routing
- Built-in API support

## 🎓 Learning Path

1. ✅ You know React basics → Good!
2. Learn Next.js file structure
3. Learn API routes (just special files)
4. Learn Server vs Client components
5. Everything else is just React!

---

**TL;DR:** Next.js = React + built-in routing + API routes + optimizations. It's still React, just with superpowers!

