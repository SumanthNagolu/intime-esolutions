import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Guidewire Training</h1>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-24">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Master Guidewire.
              <br />
              <span className="text-indigo-600">Land Your Dream Job.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-powered training platform with sequential learning, Socratic mentorship, 
              and hands-on practice to get you job-ready in ClaimCenter, PolicyCenter, and BillingCenter.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-6">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sequential Learning</h3>
              <p className="text-gray-600 text-sm">
                Structured curriculum that builds on prerequisites. Master fundamentals before advancing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Mentor</h3>
              <p className="text-gray-600 text-sm">
                Socratic teaching method that guides you to discover answers, not just provides them.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Trophy className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Job-Ready Skills</h3>
              <p className="text-gray-600 text-sm">
                Real-world scenarios and best practices from trainers with 10+ years of experience.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">250+</div>
              <div className="text-sm text-gray-600">Topics</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">3</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Guidewire Training Platform. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

