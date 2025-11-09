import { Plus, Search, Filter, Award, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default async function AdminTalentPage() {
  // Mock data - replace with actual database queries
  const talent = [
    {
      id: 1,
      name: 'Rajesh K.',
      title: 'Senior Guidewire Developer',
      location: 'Jersey City, NJ',
      availability: 'Immediate',
      rate: '$95 - $110/hour',
      skills: ['ClaimCenter', 'PolicyCenter', 'GOSU', 'Integration Hub'],
      status: 'Available',
      yearsExp: 8,
    },
    {
      id: 2,
      name: 'Maria S.',
      title: 'Full Stack Developer',
      location: 'Austin, TX',
      availability: '2 weeks',
      rate: '$80 - $95/hour',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      status: 'Available',
      yearsExp: 6,
    },
    {
      id: 3,
      name: 'David L.',
      title: 'DevOps Engineer',
      location: 'Remote',
      availability: 'Immediate',
      rate: '$85 - $100/hour',
      skills: ['Kubernetes', 'Terraform', 'AWS', 'Docker'],
      status: 'Placed',
      yearsExp: 7,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Talent Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your consultant bench and talent pool
          </p>
        </div>
        <Link
          href="/admin/talent/new"
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all font-medium"
        >
          <Plus className="w-5 h-5" />
          Add Talent
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, title, or skills..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>All Status</option>
            <option>Available</option>
            <option>Placed</option>
            <option>On Hold</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>
      </div>

      {/* Talent Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {talent.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xl font-bold">
                {person.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{person.name}</h3>
                <p className="text-sm text-indigo-600 font-medium">{person.title}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <Briefcase className="w-3 h-3" />
                  {person.yearsExp} years
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                {person.location}
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-gray-600">{person.availability}</span>
                </div>
                <span className="font-semibold text-indigo-600">{person.rate}</span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Core Skills</p>
              <div className="flex flex-wrap gap-1">
                {person.skills.slice(0, 3).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded border border-indigo-200"
                  >
                    {skill}
                  </span>
                ))}
                {person.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{person.skills.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Status & Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  person.status === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {person.status}
              </span>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                View Profile →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

