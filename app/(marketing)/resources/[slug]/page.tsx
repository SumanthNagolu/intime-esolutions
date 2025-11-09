import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

// Mock blog data - in production, this would come from CMS or database
const blogPosts: Record<string, any> = {
  'guidewire-talent-shortage-2025': {
    title: 'The Guidewire Talent Shortage: Why 2025 is Different',
    excerpt: 'The insurance tech landscape is evolving rapidly, and the demand for Guidewire professionals has never been higher.',
    category: 'Industry Insights',
    author: 'Sumanth Nagolu',
    date: '2025-01-15',
    readTime: '8 min read',
    content: `
      <h2>The Perfect Storm</h2>
      <p>The Guidewire talent market in 2025 is facing unprecedented challenges. With insurance companies accelerating digital transformation post-pandemic, the demand for skilled Guidewire professionals has skyrocketed by 300% since 2020.</p>
      
      <p>But here's the problem: supply hasn't kept pace. Universities aren't churning out Guidewire-trained graduates, and the learning curve is steep—typically 6-12 months before a developer becomes productive.</p>
      
      <h2>Why Traditional Recruitment is Failing</h2>
      <p>Most companies are still using 2015 recruitment playbooks:</p>
      <ul>
        <li>Posting on job boards and waiting 90 days</li>
        <li>Relying on referrals that rarely materialize</li>
        <li>Competing with Fortune 500s for the same 20 candidates</li>
      </ul>
      
      <p>The result? Critical projects delayed, budgets blown on contractors, and executive frustration at all-time highs.</p>
      
      <h2>What's Working in 2025</h2>
      <p>Forward-thinking companies are taking a different approach:</p>
      
      <h3>1. Build + Borrow Strategy</h3>
      <p>Instead of only hiring experienced Guidewire developers, they're training strong Java developers. A 12-week bootcamp can create production-ready Guidewire talent.</p>
      
      <h3>2. Global Talent Pools</h3>
      <p>The best Guidewire talent isn't in your city—it's worldwide. Remote-first companies are winning by casting wider nets.</p>
      
      <h3>3. Talent Partners with Skin in the Game</h3>
      <p>Generic recruiters don't cut it anymore. You need partners with deep Guidewire networks, technical screening capabilities, and speed.</p>
      
      <h2>The InTime Approach</h2>
      <p>At InTime, we've cracked the code on Guidewire hiring by combining three elements:</p>
      
      <ol>
        <li><strong>Pre-vetted Talent Network:</strong> We maintain relationships with 500+ Guidewire professionals actively looking or open to opportunities.</li>
        <li><strong>AI-Powered Matching:</strong> Our system screens 1,000+ profiles per hour to find the needle in the haystack.</li>
        <li><strong>Training Pipeline:</strong> Can't find the exact skillset? We'll train someone in 90 days and place them with you.</li>
      </ol>
      
      <p>The result: Most clients get 3-5 qualified candidates within 48 hours, compared to the industry average of 60+ days.</p>
      
      <h2>Looking Ahead</h2>
      <p>The Guidewire talent shortage isn't going away. If anything, it's getting worse as more insurers commit to cloud migrations. Companies that adapt their recruitment strategies now will have a significant competitive advantage.</p>
      
      <p>Those that don't? They'll be stuck paying premium rates for contractors while their competitors race ahead with fully-staffed teams.</p>
      
      <h2>What You Can Do Today</h2>
      <p>If you're struggling to fill Guidewire roles:</p>
      <ul>
        <li>Audit your current recruitment process—how long is it really taking?</li>
        <li>Calculate the cost of delays (hint: it's probably 10x what you think)</li>
        <li>Explore build-or-borrow strategies (training programs, contractors, global talent)</li>
        <li>Partner with specialists who live and breathe Guidewire hiring</li>
      </ul>
      
      <p>The talent is out there. You just need the right strategy—and the right partner—to find them.</p>
    `
  },
  'h1b-to-canada-complete-guide': {
    title: 'H1B to Canada: The Complete 2025 Migration Guide',
    excerpt: 'Thinking about moving from H1B to Canada? This comprehensive guide covers everything from Express Entry to job hunting.',
    category: 'Immigration',
    author: 'Sumanth Nagolu',
    date: '2025-01-12',
    readTime: '12 min read',
    content: `
      <h2>Why the H1B to Canada Movement is Accelerating</h2>
      <p>Over 10,000 H1B professionals moved to Canada in 2024—a 400% increase from 2020. The reasons are clear:</p>
      <ul>
        <li>Visa uncertainty and lottery stress in the US</li>
        <li>Canada's Express Entry system offers a clear path to permanent residency</li>
        <li>Growing tech hubs in Toronto, Vancouver, and Montreal</li>
        <li>Quality of life, healthcare, and education advantages</li>
      </ul>
      
      <h2>Understanding Your Options</h2>
      <p>There are three main pathways from H1B to Canada:</p>
      
      <h3>Option 1: Express Entry (Most Popular)</h3>
      <p>The Express Entry system is Canada's primary immigration pathway for skilled workers. You're scored on factors like age, education, work experience, and language skills.</p>
      
      <p><strong>Typical Timeline:</strong> 6-12 months from application to landing</p>
      <p><strong>Success Rate:</strong> 80%+ for tech professionals with 3+ years experience</p>
      <p><strong>Advantage:</strong> You can apply from the US while on H1B</p>
      
      <h3>Option 2: Provincial Nominee Program (PNP)</h3>
      <p>Individual provinces have their own immigration programs. Ontario and British Columbia have tech-focused streams.</p>
      
      <p><strong>Typical Timeline:</strong> 8-14 months</p>
      <p><strong>Advantage:</strong> Additional 600 CRS points, virtually guaranteeing selection</p>
      
      <h3>Option 3: Intra-Company Transfer</h3>
      <p>If your current US employer has a Canadian office, this can be the fastest route.</p>
      
      <p><strong>Typical Timeline:</strong> 2-4 months for work permit</p>
      <p><strong>Advantage:</strong> Immediate work authorization, easier PR application later</p>
      
      <h2>The Money Question: Salaries & Cost of Living</h2>
      <p>Let's be honest: Canadian tech salaries are typically 20-30% lower than US equivalents. But the cost of living is also lower, and you gain:</p>
      <ul>
        <li>Free healthcare (no $20K deductibles)</li>
        <li>Subsidized childcare</li>
        <li>Lower education costs</li>
        <li>Path to citizenship in 3 years</li>
      </ul>
      
      <p><strong>Example Comparison (Software Engineer):</strong></p>
      <table class="w-full my-6 border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="p-3 text-left">Location</th>
            <th class="p-3 text-left">Salary</th>
            <th class="p-3 text-left">Take-Home (After Tax & Healthcare)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t">
            <td class="p-3">Bay Area, US</td>
            <td class="p-3">$150,000</td>
            <td class="p-3">~$90,000</td>
          </tr>
          <tr class="border-t">
            <td class="p-3">Toronto, Canada</td>
            <td class="p-3">CAD $120,000</td>
            <td class="p-3">~CAD $82,000 (~USD $60,000)</td>
          </tr>
        </tbody>
      </table>
      
      <p>Yes, it's less—but with PR security, healthcare, and better work-life balance, many find it worthwhile.</p>
      
      <h2>The Job Hunt: Before or After Moving?</h2>
      <p>Here's the controversial advice: <strong>Start job hunting from the US.</strong></p>
      
      <p>Many H1B holders make the mistake of moving first, thinking jobs will come. But Canadian employers prefer candidates who are already work-authorized or close to it.</p>
      
      <p><strong>The Winning Strategy:</strong></p>
      <ol>
        <li>Apply for Express Entry (can be done while on H1B)</li>
        <li>Once you receive ITA (Invitation to Apply), start aggressively job hunting</li>
        <li>Use your "PR in progress" status as a selling point</li>
        <li>Many employers will wait 2-3 months for the right candidate</li>
      </ol>
      
      <h2>How InTime Helps</h2>
      <p>We specialize in H1B to Canada transitions. Our services include:</p>
      <ul>
        <li><strong>Job Placement:</strong> We have 200+ Canadian clients actively hiring</li>
        <li><strong>Immigration Support:</strong> Partner referrals to immigration lawyers</li>
        <li><strong>Soft Landing:</strong> Connect you with relocation resources, housing, schools</li>
        <li><strong>Dual Market Access:</strong> Keep you in the US job market while exploring Canada</li>
      </ul>
      
      <h2>Common Mistakes to Avoid</h2>
      <ol>
        <li><strong>Waiting too long:</strong> Express Entry scores fluctuate. Apply when you're eligible.</li>
        <li><strong>Burning bridges:</strong> Keep your US employer relationship strong—you might need a reference letter.</li>
        <li><strong>Underestimating timelines:</strong> Factor in 12+ months for the full process.</li>
        <li><strong>Ignoring French:</strong> Even basic French significantly boosts your Express Entry score.</li>
      </ol>
      
      <h2>The Bottom Line</h2>
      <p>Moving from H1B to Canada isn't for everyone. You'll likely take a pay cut initially. But if visa uncertainty, long-term stability, and quality of life matter to you, it's worth serious consideration.</p>
      
      <p>And 2025 is an excellent time—Canada is actively recruiting tech talent, Express Entry scores are reasonable, and the job market is strong.</p>
      
      <p><strong>Ready to explore?</strong> <a href="/contact" class="text-trust-blue-600 underline">Book a free consultation</a> and we'll assess your profile, timeline, and job prospects.</p>
    `
  },
  // More blog posts with full content can be added here
  'ai-recruitment-transformation': {
    title: 'How AI is Transforming Tech Recruitment in 2025',
    excerpt: 'From resume screening to candidate matching, AI is revolutionizing how we find and place talent.',
    category: 'Technology',
    author: 'Sumanth Nagolu',
    date: '2025-01-10',
    readTime: '6 min read',
    content: `
      <h2>The AI Revolution in Recruitment</h2>
      <p>Artificial Intelligence has moved from buzzword to business-critical in tech recruitment. Here's how it's changing the game in 2025.</p>
      
      <h2>1. Resume Screening at Scale</h2>
      <p>Traditional recruiters can review 50-100 resumes per day. AI systems? Thousands per hour—with higher accuracy.</p>
      
      <p>At InTime, our AI screens candidates based on:</p>
      <ul>
        <li>Technical skills match (not just keywords, but semantic understanding)</li>
        <li>Career trajectory patterns</li>
        <li>Project complexity indicators</li>
        <li>Cultural fit signals from writing style</li>
      </ul>
      
      <h2>2. Predictive Candidate Matching</h2>
      <p>The real magic isn't finding candidates—it's predicting who will succeed. Our AI analyzes:</p>
      <ul>
        <li>Past placement data (200,000+ hires)</li>
        <li>Interview performance patterns</li>
        <li>Tenure predictions</li>
        <li>Team compatibility scores</li>
      </ul>
      
      <p>Result: 85% of our placements stay 2+ years, vs. industry average of 45%.</p>
      
      <h2>3. The Human Touch Still Matters</h2>
      <p>AI handles the heavy lifting, but humans close the deal. Our process:</p>
      <ol>
        <li><strong>AI:</strong> Screens 10,000 profiles → 100 matches</li>
        <li><strong>Human:</strong> Interviews 100 → 20 top candidates</li>
        <li><strong>AI:</strong> Ranks by fit → Top 5</li>
        <li><strong>Human:</strong> Relationship building, negotiation, onboarding</li>
      </ol>
      
      <h2>The 48-Hour Promise</h2>
      <p>How can we deliver candidates in 48 hours when others take 60 days? AI makes it possible.</p>
      
      <p>We're not faster because we cut corners. We're faster because we're better prepared.</p>
      
      <h2>What This Means for You</h2>
      <p><strong>For Employers:</strong> Faster fills, better matches, lower turnover.</p>
      <p><strong>For Candidates:</strong> Jobs that actually fit, less interview fatigue, faster offers.</p>
      
      <p>The future of recruitment is here. And it's powered by AI + human expertise.</p>
    `
  }
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="section-container py-6">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-trust-blue-600 hover:text-trust-blue-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Resources
        </Link>
      </div>

      {/* Article Header */}
      <article className="section-container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 bg-trust-blue-100 text-trust-blue-700 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-12">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-trust-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-trust-blue-500 prose-blockquote:pl-6 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-trust-blue-600 to-innovation-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how InTime can help you find the right talent in 48 hours, not 60 days.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-trust-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Book Free Consultation
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Link
                  key={key}
                  href={`/resources/${key}`}
                  className="group p-6 border border-gray-200 rounded-xl hover:border-trust-blue-300 hover:shadow-lg transition-all"
                >
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mt-4 mb-3 group-hover:text-trust-blue-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-trust-blue-600 font-medium text-sm">
                    Read More
                    <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

