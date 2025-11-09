'use client';

import { Calendar, FileText, User, Bell } from 'lucide-react';
import Link from 'next/link';

interface EmployeeDashboardProps {
  user: any;
  profile: any;
}

export default function EmployeeDashboard({ user, profile }: EmployeeDashboardProps) {
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
              Your employee dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link
            href="/employee/profile"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-trust-blue-100 text-trust-blue-600">
                <User className="w-6 h-6" />
              </div>
            </div>
            <div className="font-heading font-semibold text-trust-blue-900 mb-1">
              My Profile
            </div>
            <div className="text-sm text-wisdom-gray-600">View and update your information</div>
          </Link>

          <Link
            href="/employee/calendar"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-sky-blue-100 text-sky-blue-600">
                <Calendar className="w-6 h-6" />
              </div>
            </div>
            <div className="font-heading font-semibold text-trust-blue-900 mb-1">
              Calendar
            </div>
            <div className="text-sm text-wisdom-gray-600">View your schedule and meetings</div>
          </Link>

          <Link
            href="/employee/documents"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-success-green-100 text-success-green-600">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <div className="font-heading font-semibold text-trust-blue-900 mb-1">
              Documents
            </div>
            <div className="text-sm text-wisdom-gray-600">Access your HR documents</div>
          </Link>

          <Link
            href="/employee/notifications"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-innovation-orange-100 text-innovation-orange-600">
                <Bell className="w-6 h-6" />
              </div>
            </div>
            <div className="font-heading font-semibold text-trust-blue-900 mb-1">
              Notifications
            </div>
            <div className="text-sm text-wisdom-gray-600">View your updates and alerts</div>
          </Link>
        </div>

        {/* Announcements & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Announcements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-heading font-semibold text-trust-blue-900 mb-4">
              Company Announcements
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-trust-blue-50 border border-trust-blue-200">
                <div className="font-medium text-trust-blue-900 mb-1">Q4 All-Hands Meeting</div>
                <div className="text-sm text-wisdom-gray-600">Thursday, Dec 12 at 2 PM - Virtual</div>
              </div>
              <div className="p-4 rounded-lg bg-success-green-50 border border-success-green-200">
                <div className="font-medium text-trust-blue-900 mb-1">New Benefits Enrollment Open</div>
                <div className="text-sm text-wisdom-gray-600">Deadline: November 30th</div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-heading font-semibold text-trust-blue-900 mb-4">
              Quick Resources
            </h2>
            <div className="space-y-3">
              <Link
                href="/employee/handbook"
                className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                <div className="font-medium text-trust-blue">Employee Handbook</div>
                <div className="text-sm text-wisdom-gray-600">Company policies and guidelines</div>
              </Link>
              <Link
                href="/employee/benefits"
                className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                <div className="font-medium text-trust-blue">Benefits Portal</div>
                <div className="text-sm text-wisdom-gray-600">Health insurance, 401k, and more</div>
              </Link>
              <Link
                href="/employee/it-support"
                className="block p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors"
              >
                <div className="font-medium text-trust-blue">IT Support</div>
                <div className="text-sm text-wisdom-gray-600">Submit a ticket or request help</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

