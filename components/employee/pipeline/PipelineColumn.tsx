'use client';

import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import ApplicationCard from './ApplicationCard';

interface Application {
  id: string;
  stage: string;
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

interface PipelineColumnProps {
  id: string;
  label: string;
  color: string;
  applications: Application[];
  loading: boolean;
}

export default function PipelineColumn({ id, label, color, applications, loading }: PipelineColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div className="flex-shrink-0 w-80">
      <div
        className={`rounded-lg border-2 ${
          isOver ? 'border-trust-blue bg-trust-blue-50' : 'border-gray-200 bg-white'
        } transition-colors`}
      >
        {/* Column Header */}
        <div className={`px-4 py-3 ${color} border-b border-gray-200 rounded-t-lg`}>
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-semibold text-trust-blue-900">
              {label}
            </h3>
            <span className="px-2 py-1 bg-white text-trust-blue-900 text-xs font-semibold rounded-full">
              {applications.length}
            </span>
          </div>
        </div>

        {/* Column Content */}
        <div
          ref={setNodeRef}
          className="p-3 space-y-3 min-h-[500px] max-h-[calc(100vh-280px)] overflow-y-auto"
        >
          <SortableContext
            items={applications.map(app => app.id)}
            strategy={verticalListSortingStrategy}
          >
            {applications.length === 0 ? (
              <div className="flex items-center justify-center h-32 text-wisdom-gray-400 text-sm">
                Drop applications here
              </div>
            ) : (
              applications.map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))
            )}
          </SortableContext>
        </div>
      </div>
    </div>
  );
}

