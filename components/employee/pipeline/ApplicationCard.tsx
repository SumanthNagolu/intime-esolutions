'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import { Mail, Phone, MapPin, Briefcase, Building2, GripVertical } from 'lucide-react';

interface Application {
  id: string;
  candidate: {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    skills: string[];
    current_title: string | null;
    location: string | null;
  };
  job: {
    id: string;
    title: string;
    clients?: { name: string } | null;
  };
  status: string;
  applied_date: string;
  notes: string | null;
}

interface ApplicationCardProps {
  application: Application;
}

export default function ApplicationCard({ application }: ApplicationCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: application.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${
        isDragging ? 'ring-2 ring-trust-blue' : ''
      }`}
    >
      <div className="p-4">
        {/* Drag Handle */}
        <div className="flex items-start gap-3">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing text-wisdom-gray-400 hover:text-trust-blue pt-1"
          >
            <GripVertical className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Candidate Info */}
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-trust-blue-100 flex items-center justify-center">
                <span className="text-trust-blue-600 font-medium text-sm">
                  {application.candidate.first_name[0]}{application.candidate.last_name[0]}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/employee/candidates/${application.candidate.id}`}
                  className="font-medium text-trust-blue-900 hover:text-trust-blue-700 text-sm block truncate"
                >
                  {application.candidate.first_name} {application.candidate.last_name}
                </Link>
                {application.candidate.current_title && (
                  <p className="text-xs text-wisdom-gray-500 flex items-center gap-1 mt-0.5">
                    <Briefcase className="w-3 h-3" />
                    {application.candidate.current_title}
                  </p>
                )}
              </div>
            </div>

            {/* Job Info */}
            <div className="mb-3 p-2 bg-sky-blue-50 rounded border border-sky-blue-100">
              <Link
                href={`/employee/jobs/${application.job.id}`}
                className="text-xs font-medium text-sky-blue-900 hover:underline block truncate"
              >
                {application.job.title}
              </Link>
              {application.job.clients?.name && (
                <p className="text-xs text-sky-blue-700 flex items-center gap-1 mt-1">
                  <Building2 className="w-3 h-3" />
                  {application.job.clients.name}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-1 mb-3">
              <a
                href={`mailto:${application.candidate.email}`}
                className="text-xs text-wisdom-gray-600 hover:text-trust-blue flex items-center gap-1 truncate"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{application.candidate.email}</span>
              </a>
              {application.candidate.phone && (
                <a
                  href={`tel:${application.candidate.phone}`}
                  className="text-xs text-wisdom-gray-600 hover:text-trust-blue flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone className="w-3 h-3" />
                  {application.candidate.phone}
                </a>
              )}
              {application.candidate.location && (
                <p className="text-xs text-wisdom-gray-600 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {application.candidate.location}
                </p>
              )}
            </div>

            {/* Skills */}
            {application.candidate.skills && application.candidate.skills.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {application.candidate.skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 bg-wisdom-gray-100 text-wisdom-gray-700 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
                {application.candidate.skills.length > 3 && (
                  <span className="px-2 py-0.5 bg-wisdom-gray-50 text-wisdom-gray-600 text-xs rounded">
                    +{application.candidate.skills.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* Applied Date */}
            <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-wisdom-gray-400">
              Applied: {new Date(application.applied_date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

