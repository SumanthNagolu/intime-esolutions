import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { Plus, Search, Filter, Eye, Edit2, Trash2, Calendar } from 'lucide-react';

export default async function AdminBlogPage() {
  // Mock data - replace with actual database queries
  const posts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      slug: 'building-scalable-react-applications',
      tags: ['React', 'Architecture', '+1'],
      views: 1234,
      publishedAt: '10/02/2024',
      status: 'Published',
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      slug: 'the-future-of-web-development',
      tags: ['Web Development', 'Trends', '+1'],
      views: 892,
      publishedAt: '05/02/2024',
      status: 'Published',
    },
    {
      id: 3,
      title: 'Mastering TypeScript in 2024',
      slug: 'mastering-typescript-2024',
      tags: ['TypeScript', 'Programming', '+1'],
      views: 567,
      publishedAt: '20/02/2024',
      status: 'Draft',
    },
    {
      id: 4,
      title: 'Design Systems Best Practices',
      slug: 'design-systems-best-practices',
      tags: ['Design Systems', 'UI/UX', '+1'],
      views: 1045,
      publishedAt: '25/01/2024',
      status: 'Published',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Blog Management
          </h1>
          <p className="text-gray-500 mt-1">
            Create and manage blog posts
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
        >
          <Plus className="w-5 h-5" />
          Create Post
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts by title or tags..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option>All Posts</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {post.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-full border border-pink-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views.toLocaleString()} views
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.publishedAt}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <button className="p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Edit2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

