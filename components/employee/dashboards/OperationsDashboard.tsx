'use client';

import { Users, Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface OperationsDashboardProps {
  user: any;
  profile: any;
}

export default function OperationsDashboard({ user, profile }: OperationsDashboardProps) {
  const metrics = {
    activePlacements: 45,
    pendingTimesheets: 7,
    timesheetsToApprove: 12,
    expiringContracts: 5,
    endingIn30Days: 3,
  };

  const statCards = [
    {
      label: 'Active Placements',
      value: metrics.activePlacements,
      icon: Users,
      color: 'bg-trust-blue-100 text-trust-blue-600',
      href: '/employee/placements',
    },
    {
      label: 'Ending in 30 Days',
      value: metrics.endingIn30Days,
      icon: AlertCircle,
      color: 'bg-innovation-orange-100 text-innovation-orange-600',
      href: '/employee/placements?filter=ending',
    },
    {
      label: 'Timesheets to Approve',
      value: metrics.timesheetsToApprove,
      icon: CheckCircle,
      color: 'bg-success-green-100 text-success-green-600',
      href: '/employee/timesheets?status=submitted',
    },
    {
      label: 'Pending Timesheets',
      value: metrics.pendingTimesheets,
      icon: Clock,
      color: 'bg-sky-blue-100 text-sky-blue-600',
      href: '/employee/timesheets?status=pending',
    },
    {
      label: 'Expiring Contracts',
      value: metrics.expiringContracts,
      icon: FileText,
      color: 'bg-red-100 text-red-600',
      href: '/employee/contracts?filter=expiring',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div>
            <h1 className="text-3xl font-heading font-bold text-trust-blue-900">
              Welcome back, {profile.full_name}!
            </h1>
            <p className="text-wisdom-gray-600 mt-1">
              Operations dashboard - {profile.role === 'account_manager' ? 'Account Management' : 'Operations'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {statCards.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="text-3xl font-heading font-bold text-trust-blue-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-wisdom-gray-600">{stat.label}</div>
            </Link>
          ))}
        </div>

        {/* Action Items & Weekly Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Action Items */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-heading font-semibold text-trust-blue-900 mb-4">
              Priority Action Items
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">BigCorp MSA expires in 18 days</div>
                  <div className="text-sm text-wisdom-gray-600">10 placements at risk ($1.2M/year)</div>
                  <Link href="/employee/contracts" className="text-xs text-trust-blue hover:underline mt-1 inline-block">
                    Review contract →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 border border-orange-200">
                <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">7 missing timesheets</div>
                  <div className="text-sm text-wisdom-gray-600">Send reminders (Friday EOD)</div>
                  <Link href="/employee/timesheets?status=missing" className="text-xs text-trust-blue hover:underline mt-1 inline-block">
                    View all →
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-sky-blue-50 border border-sky-blue-200">
                <FileText className="w-5 h-5 text-sky-blue-500 mt-0.5" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">2 onboardings this week</div>
                  <div className="text-sm text-wisdom-gray-600">Sarah Johnson (Mon), David Martinez (Wed)</div>
                  <Link href="/employee/onboarding" className="text-xs text-trust-blue hover:underline mt-1 inline-block">
                    View checklist →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-heading font-semibold text-trust-blue-900 mb-4">
              This Week's Summary
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-success-green-50">
                <div>
                  <div className="text-sm text-wisdom-gray-600">Timesheets Approved</div>
                  <div className="text-2xl font-heading font-bold text-success-green-600">23</div>
                </div>
                <CheckCircle className="w-8 h-8 text-success-green-500" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-trust-blue-50">
                <div>
                  <div className="text-sm text-wisdom-gray-600">Weekly Billing</div>
                  <div className="text-2xl font-heading font-bold text-trust-blue-900">$93K</div>
                </div>
                <DollarSign className="w-8 h-8 text-trust-blue-500" />
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-innovation-orange-50">
                <div>
                  <div className="text-sm text-wisdom-gray-600">Contract Renewals</div>
                  <div className="text-2xl font-heading font-bold text-innovation-orange-600">3</div>
                </div>
                <FileText className="w-8 h-8 text-innovation-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DollarSign({ className }: { className: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

