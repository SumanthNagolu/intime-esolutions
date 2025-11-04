import { createClient } from '@/lib/supabase/server';
import { getTopicsByProduct } from '@/modules/topics/queries';
import TopicsList from '@/components/features/topics/TopicsList';
import ProductFilter from '@/components/features/topics/ProductFilter';
import { Badge } from '@/components/ui/badge';

export default async function TopicsPage({
  searchParams,
}: {
  searchParams: { product?: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get products
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('code');

  // Get topics filtered by product
  const topics = await getTopicsByProduct(searchParams.product, user.id);

  const selectedProduct = products?.find((p) => p.code === searchParams.product);
  
  // Calculate stats
  const totalTopics = topics.length;
  const completedTopics = topics.filter(
    (t) => t.completion?.completed_at
  ).length;
  const inProgressTopics = topics.filter(
    (t) => t.completion && !t.completion.completed_at
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {selectedProduct ? selectedProduct.name : 'All Topics'}
          </h1>
          <p className="text-gray-600 mt-2">
            Browse and progress through {totalTopics} sequential topics
          </p>
        </div>

        {/* Product Filter - Now a client component */}
        <ProductFilter 
          products={products || []} 
          currentProduct={searchParams.product}
        />
      </div>

      {/* Stats */}
      <div className="flex gap-4 flex-wrap">
        <Badge variant="outline" className="px-4 py-2">
          📚 {totalTopics} Total Topics
        </Badge>
        <Badge variant="default" className="px-4 py-2 bg-green-600">
          ✓ {completedTopics} Completed
        </Badge>
        <Badge variant="secondary" className="px-4 py-2">
          🔄 {inProgressTopics} In Progress
        </Badge>
        <Badge variant="outline" className="px-4 py-2">
          🔒 {totalTopics - completedTopics - inProgressTopics} Locked
        </Badge>
      </div>

      {/* Topics List */}
      <TopicsList topics={topics} />
    </div>
  );
}
