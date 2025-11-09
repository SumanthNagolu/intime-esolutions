import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { 
  Briefcase, 
  Users, 
  FileText, 
  TrendingUp,
  ArrowUpRight,
  MapPin,
  Clock,
  Eye,
  Plus
} from 'lucide-react';

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Fetch stats (mock data for now - replace with actual queries)
  const stats = {
    openJobs: { value: 4, total: 5, trend: '+2 this week' },
    totalApplications: { value: 97, desc: 'Across all positions', trend: '+12 this week' },
    publishedPosts: { value: 3, total: 4, trend: '+1 this week' },
    engagement: { value: '24%', desc: 'Last 30 days', trend: '+5% from last month' },
  };

  // Mock data - replace with actual queries
  const recentJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      status: 'open',
      candidates: 24,
      postedAt: '2 days ago',
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      status: 'open',
      candidates: 18,
      postedAt: '5 days ago',
    },
    {
      id: 3,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      status: 'closed',
      candidates: 35,
      postedAt: '1 week ago',
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      views: 1234,
      publishedAt: '10/02/2024',
      status: 'Published',
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      views: 892,
      publishedAt: '05/02/2024',
      status: 'Published',
    },
    {
      id: 3,
      title: 'Mastering TypeScript in 2024',
      views: 567,
      publishedAt: '20/02/2024',
      status: 'Draft',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Business Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening with your platform.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Open Jobs */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Briefcase className="w-8 h-8" />
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              {stats.openJobs.total} total jobs
            </span>
          </div>
          <h3 className="text-sm font-medium opacity-90 mb-1">OPEN JOBS</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold">{stats.openJobs.value}</span>
          </div>
          <p className="text-xs opacity-75">{stats.openJobs.trend}</p>
        </div>

        {/* Total Applications */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-sm font-medium opacity-90 mb-1">TOTAL APPLICATIONS</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold">{stats.totalApplications.value}</span>
          </div>
          <p className="text-xs opacity-75">{stats.totalApplications.desc}</p>
          <p className="text-xs opacity-75">{stats.totalApplications.trend}</p>
        </div>

        {/* Published Posts */}
        <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <FileText className="w-8 h-8" />
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
              {stats.publishedPosts.total} total posts
            </span>
          </div>
          <h3 className="text-sm font-medium opacity-90 mb-1">PUBLISHED POSTS</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold">{stats.publishedPosts.value}</span>
          </div>
          <p className="text-xs opacity-75">{stats.publishedPosts.trend}</p>
        </div>

        {/* Engagement */}
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h3 className="text-sm font-medium opacity-90 mb-1">ENGAGEMENT</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold">{stats.engagement.value}</span>
          </div>
          <p className="text-xs opacity-75">{stats.engagement.desc}</p>
          <p className="text-xs opacity-75">{stats.engagement.trend}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-800">Recent Jobs</h2>
            </div>
            <Link
              href="/admin/jobs"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-6 space-y-4">
            {recentJobs.map((job) => (
              <div
                key={job.id}
                className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{job.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{job.department}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.status === 'open'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {job.candidates} candidates
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {job.postedAt}
                  </span>
                </div>
              </div>
            ))}
            <Link
              href="/admin/jobs/new"
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-purple-300 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors font-medium"
            >
              <Plus className="w-5 h-5" />
              Post New Job
            </Link>
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-pink-600" />
              <h2 className="text-xl font-bold text-gray-800">Recent Blog Posts</h2>
            </div>
            <Link
              href="/admin/blog"
              className="text-sm text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1"
            >
              View All
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-6 space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800">{post.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
                      post.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {post.views.toLocaleString()} views
                  </span>
                  <span>{post.publishedAt}</span>
                </div>
              </div>
            ))}
            <Link
              href="/admin/blog/new"
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-pink-300 rounded-lg text-pink-600 hover:bg-pink-50 transition-colors font-medium"
            >
              <Plus className="w-5 h-5" />
              Create New Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

