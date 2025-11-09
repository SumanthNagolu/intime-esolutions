import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Plus, Search, Filter, MapPin, Users, Edit2, Trash2 } from 'lucide-react';

export default async function AdminJobsPage() {
  // Mock data - replace with actual database queries
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      status: 'open',
      candidates: 24,
      postedAt: '2024-11-01',
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      status: 'open',
      candidates: 18,
      postedAt: '2024-11-04',
    },
    {
      id: 3,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      status: 'closed',
      candidates: 35,
      postedAt: '2024-10-25',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Contract',
      status: 'open',
      candidates: 12,
      postedAt: '2024-11-07',
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      status: 'open',
      candidates: 8,
      postedAt: '2024-11-08',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Jobs Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage job postings and view applications
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
        >
          <Plus className="w-5 h-5" />
          Post New Job
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search jobs by title, location, or department..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>All Status</option>
            <option>Open</option>
            <option>Closed</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Job Title</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Department</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Location</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Applications</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                <th className="text-right py-4 px-6 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-semibold text-gray-800">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.type}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{job.department}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-gray-700">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1 text-purple-600 font-semibold">
                      <Users className="w-4 h-4" />
                      {job.candidates} candidates
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === 'open'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

