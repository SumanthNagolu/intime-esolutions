import { createClient } from '@/lib/supabase/server';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*, products(name, code)')
    .eq('id', user.id)
    .single();

  // Get products
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('code');

  // Get user's completions count
  const { count: completedCount } = await supabase
    .from('topic_completions')
    .select('*', { count: 'only', head: true })
    .eq('user_id', user.id)
    .not('completed_at', 'is', null);

  // Get total published topics
  const { count: totalTopics } = await supabase
    .from('topics')
    .select('*', { count: 'only', head: true })
    .eq('published', true);

  const overallProgress = totalTopics
    ? Math.round((completedCount || 0) / totalTopics * 100)
    : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {profile?.first_name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Continue your journey to becoming job-ready in Guidewire
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Topics Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCount || 0}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalTopics || 0} total topics
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress}%</div>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Experience Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge variant="secondary">{profile?.assumed_persona || 'Not set'}</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Your target level</p>
          </CardContent>
        </Card>
      </div>

      {/* Products Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Learning Path</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {products?.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {product.name}
                  {profile?.preferred_product_id === product.id && (
                    <Badge>Primary</Badge>
                  )}
                </CardTitle>
                <CardDescription>{product.code}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{product.description}</p>
                <Link href={`/topics?product=${product.code}`}>
                  <Button className="w-full">
                    View Topics
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to continue your learning</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Link href="/topics">
            <Button variant="outline" className="w-full justify-start">
              📚 Browse All Topics
            </Button>
          </Link>
          <Link href="/progress">
            <Button variant="outline" className="w-full justify-start">
              📊 View Detailed Progress
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

