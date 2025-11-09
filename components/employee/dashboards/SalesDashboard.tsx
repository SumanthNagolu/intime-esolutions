'use client';

import { DollarSign, TrendingUp, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';

interface SalesDashboardProps {
  user: any;
  profile: any;
}

export default function SalesDashboard({ user, profile }: SalesDashboardProps) {
  const metrics = {
    pipelineValue: 2400000,
    openOpportunities: 18,
    closingThisMonth: 4,
    activeClients: 12,
    newLeads: 6,
  };

  const statCards = [
    {
      label: 'Pipeline Value',
      value: `$${(metrics.pipelineValue / 1000000).toFixed(1)}M`,
      icon: DollarSign,
      color: 'bg-success-green-100 text-success-green-600',
      href: '/employee/opportunities',
    },
    {
      label: 'Open Opportunities',
      value: metrics.openOpportunities,
      icon: Target,
      color: 'bg-trust-blue-100 text-trust-blue-600',
      href: '/employee/opportunities',
    },
    {
      label: 'Closing This Month',
      value: metrics.closingThisMonth,
      icon: TrendingUp,
      color: 'bg-innovation-orange-100 text-innovation-orange-600',
      href: '/employee/opportunities?filter=closing',
    },
    {
      label: 'Active Clients',
      value: metrics.activeClients,
      icon: Users,
      color: 'bg-sky-blue-100 text-sky-blue-600',
      href: '/employee/clients',
    },
    {
      label: 'New Leads',
      value: metrics.newLeads,
      icon: Award,
      color: 'bg-purple-100 text-purple-600',
      href: '/employee/leads',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-trust-blue-900">
                Welcome back, {profile.full_name}!
              </h1>
              <p className="text-wisdom-gray-600 mt-1">
                Here's your sales dashboard for today
              </p>
            </div>
            <Link href="/employee/opportunities/new" className="btn-primary">
              + New Opportunity
            </Link>
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

        {/* Pipeline & Today's Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Pipeline */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-heading font-semibold text-trust-blue-900 mb-4">
              Sales Pipeline
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                <div>
                  <div className="font-medium text-trust-blue-900">Lead</div>
                  <div className="text-sm text-wisdom-gray-600">6 opportunities</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-trust-blue-900">$200K</div>
                  <div className="text-xs text-wisdom-gray-500">weighted</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-trust-blue-50">
                <div>
                  <div className="font-medium text-trust-blue-900">Qualified</div>
                  <div className="text-sm text-wisdom-gray-600">5 opportunities</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-trust-blue-900">$350K</div>
                  <div className="text-xs text-wisdom-gray-500">weighted</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-innovation-orange-50">
                <div>
                  <div className="font-medium text-trust-blue-900">Proposal</div>
                  <div className="text-sm text-wisdom-gray-600">4 opportunities</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-trust-blue-900">$600K</div>
                  <div className="text-xs text-wisdom-gray-500">weighted</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-success-green-50">
                <div>
                  <div className="font-medium text-trust-blue-900">Negotiation</div>
                  <div className="text-sm text-wisdom-gray-600">3 opportunities</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-success-green-600">$1.2M</div>
                  <div className="text-xs text-wisdom-gray-500">weighted</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/employee/pipeline" className="text-trust-blue hover:text-trust-blue-700 text-sm font-medium">
                View Full Pipeline →
              </Link>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-heading font-semibold text-trust-blue-900 mb-4">
              Today's Priorities
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">Follow up: BigCorp deal</div>
                  <div className="text-sm text-wisdom-gray-600">Pending MSA signature ($1.97M)</div>
                  <div className="text-xs text-red-600 mt-1">Due Today</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 border border-orange-200">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">Discovery call: TechStart</div>
                  <div className="text-sm text-wisdom-gray-600">10 AM - Discuss 5 developer needs</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-sky-blue-50 border border-sky-blue-200">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">Send proposal: HealthFirst</div>
                  <div className="text-sm text-wisdom-gray-600">6 roles, $400K opportunity</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                <input type="checkbox" className="mt-1" />
                <div className="flex-1">
                  <div className="font-medium text-trust-blue-900">Quarterly review: Progressive</div>
                  <div className="text-sm text-wisdom-gray-600">Prepare Q4 metrics deck</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

