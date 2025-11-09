import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import RecruiterDashboard from '@/components/employee/dashboards/RecruiterDashboard';
import SalesDashboard from '@/components/employee/dashboards/SalesDashboard';
import OperationsDashboard from '@/components/employee/dashboards/OperationsDashboard';
import EmployeeDashboard from '@/components/employee/dashboards/EmployeeDashboard';

export default async function EmployeeDashboardPage() {
  const supabase = await createClient();

  // Check authentication
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/employee/login');
  }

  // Get user profile with role
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role, full_name, email, department, avatar_url')
    .eq('id', user.id)
    .single();

  if (!profile) {
    redirect('/employee/login');
  }

  // Check if user is an employee (not a student)
  const employeeRoles = ['admin', 'recruiter', 'sales', 'account_manager', 'operations', 'employee'];
  
  if (!employeeRoles.includes(profile.role)) {
    // Student trying to access employee portal
    redirect('/dashboard'); // Redirect to student dashboard
  }

  // Admin users should go to admin portal
  if (profile.role === 'admin') {
    redirect('/admin');
  }

  // Render role-specific dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {profile.role === 'recruiter' && <RecruiterDashboard user={user} profile={profile} />}
      {profile.role === 'sales' && <SalesDashboard user={user} profile={profile} />}
      {(profile.role === 'account_manager' || profile.role === 'operations') && (
        <OperationsDashboard user={user} profile={profile} />
      )}
      {profile.role === 'employee' && <EmployeeDashboard user={user} profile={profile} />}
    </div>
  );
}

