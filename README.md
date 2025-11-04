# Guidewire Training Platform

> AI-powered training that scales proven 1:1 methodology to get students job-ready.

## Overview

This platform transforms Guidewire certification training through:
- **250 Sequential Topics** across ClaimCenter, PolicyCenter, and BillingCenter
- **AI Mentoring** using GPT-4o-mini with Socratic method
- **Progress Tracking** with prerequisite-based unlocking
- **Video-Based Learning** with hands-on demos
- **Job-Ready Focus** - not just certificates, actual employment

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: Vercel AI SDK + GPT-4o-mini
- **State**: Zustand
- **Validation**: Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd guidewire-training-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your keys:
- Supabase URL and keys
- OpenAI API key
- (Optional) Anthropic API key

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
/app                    # Next.js App Router pages
  /(auth)              # Authentication pages
  /(dashboard)         # Protected dashboard pages
  /api                 # API routes
/modules               # Business logic (separated from UI)
  /auth                # Authentication logic
  /topics              # Topic management
  /progress            # Progress tracking
  /ai-mentor           # AI mentoring system
/lib                   # Utilities and helpers
  /supabase           # Supabase clients
  /ai-providers       # AI provider abstractions
/components            # React components
  /ui                 # shadcn/ui components
  /features           # Feature-specific components
/providers            # React context providers
/database             # Database schema & migrations
/project-docs         # Project documentation
```

## Key Features

### Sequential Learning
- 250 topics organized in progressive order
- Prerequisite checking before unlocking
- Progress tracking per topic

### AI Mentoring
- GPT-4o-mini for cost-effective Q&A
- Socratic method (guides, doesn't give answers)
- Streaming responses for instant feel
- Conversation history and context

### Progress Dashboard
- Real-time progress updates
- Completion percentage by product (CC/PC/BC)
- Time spent tracking
- Next recommended topic

## Development

### Code Standards

- TypeScript strict mode
- Functional components with hooks
- Early returns for error handling
- Functions under 20 lines
- Comprehensive error boundaries

### API Response Pattern

All API routes return this consistent shape:
```typescript
{
  success: boolean;
  data?: any;
  error?: string;
}
```

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
npm run start
```

## Documentation

- **[instructions.md](./instructions.md)** - Comprehensive technical guide
- **[project-docs/](./project-docs/)** - Project planning and progress
- **[.cursorrules](./.cursorrules)** - Code standards and patterns

## Deployment

The application is designed to deploy on:
- **Frontend**: Vercel (automatic from GitHub)
- **Backend**: Supabase (managed PostgreSQL + Edge Functions)
- **Storage**: Supabase Storage (videos, PDFs, user uploads)

## Budget & Cost Projections

- **Month 1-2**: $0 (free tiers)
- **Month 3**: ~$35 (Supabase Pro + minimal AI usage)
- **Month 6**: ~$100-150 (scaling to 500 users)
- **Target**: Under $600 for first 6 months

## Contributing

This is a private training platform. For questions or support, contact the development team.

## License

Proprietary - All rights reserved.

---

**Vision**: Help students get JOBS, not just certificates.

Built with ❤️ for Guidewire professionals worldwide.

