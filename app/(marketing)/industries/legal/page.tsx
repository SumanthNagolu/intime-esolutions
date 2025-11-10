import { ArrowRight, CheckCircle2, Scale } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Legal Staffing & Recruitment | InTime eSolutions',
  description: 'Legal talent for law firms, corporate legal departments, and government agencies. From paralegals to attorneys—eDiscovery, litigation support, contract review.',
  keywords: 'legal staffing, attorney recruitment, paralegal jobs, contract attorney, ediscovery specialist, legal recruiting, litigation support',
};

export default function LegalPage() {
  const roles = [
    'Attorney / Lawyer',
    'Paralegal',
    'Legal Assistant',
    'Contract Attorney',
    'eDiscovery Specialist',
    'Document Review Attorney',
    'Litigation Support Specialist',
    'Legal Secretary',
    'In-House Counsel',
    'General Counsel',
    'Associate Attorney',
    'Partner-Track Attorney',
    'Legal Operations Manager',
    'Compliance Attorney',
    'Intellectual Property Attorney',
    'Corporate Attorney',
    'Trial Attorney',
    'Appellate Attorney',
    'Legal Researcher',
    'Law Clerk',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue-600 via-trust-blue to-trust-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">Legal Staffing & Recruitment</span>
            </div>
            <h1 className="text-h1 font-heading mb-6">
              Legal Talent That Wins Cases & Closes Deals
            </h1>
            <p className="text-xl mb-8 text-sky-blue-500 leading-relaxed">
              From BigLaw partner tracks to document review marathons—InTime delivers legal professionals who understand billable hours, court deadlines, and client demands. 73% of law firms report critical talent shortages. We solve that.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-secondary">
                Find Legal Talent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/company/about" className="btn-outline">
                Our Legal Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-8 text-trust-blue text-center">
              Precision in Legal Staffing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: '24-48 Hour Turnaround', desc: 'Emergency doc review? Trial next week? We staff overnight.' },
                { title: 'Bar-Certified Vetted', desc: 'Every attorney verified: bar license, malpractice insurance, ethics.' },
                { title: 'BigLaw to Boutique', desc: 'Am Law 100 veterans to solo practitioners—we cover all tiers.' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-success-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-success-green" />
                  </div>
                  <h3 className="font-heading font-semibold text-wisdom-gray-700 mb-2">{item.title}</h3>
                  <p className="text-wisdom-gray">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <p className="text-lg text-wisdom-gray leading-relaxed mb-4">
                <strong className="text-trust-blue">The Legal Talent Crisis:</strong> 73% of law firms report difficulty finding qualified litigation support. Class actions demand 50+ doc review attorneys in 48 hours. M&A deals need corporate counsel immediately.
              </p>
              <p className="text-lg text-wisdom-gray leading-relaxed">
                InTime maintains a national network of bar-certified attorneys, paralegals, and legal support staff ready to deploy—whether you need one contract attorney or an entire eDiscovery team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="py-16 bg-wisdom-gray-50">
        <div className="section-container">
          <h2 className="text-h2 font-heading mb-4 text-trust-blue text-center">
            Legal Roles We Staff
          </h2>
          <p className="text-center text-wisdom-gray-600 mb-12 max-w-3xl mx-auto">
            From entry-level paralegals to equity partners—litigation, corporate, IP, compliance, and more.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white rounded-lg px-4 py-3 text-center text-sm text-wisdom-gray-700 hover:shadow-md transition-shadow"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Law Firms Choose InTime */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-12 text-trust-blue text-center">
              Why Law Firms Choose InTime
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-success-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-success-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-wisdom-gray-700 mb-2">
                    Emergency Response (24-48hrs)
                  </h3>
                  <p className="text-wisdom-gray">
                    Class action filed Friday? We staff 20 doc review attorneys by Monday 9am.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-success-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-success-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-wisdom-gray-700 mb-2">
                    Bar-Certified & Insured
                  </h3>
                  <p className="text-wisdom-gray">
                    Every attorney vetted: active bar license, malpractice coverage, ethics clearance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-success-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-success-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-wisdom-gray-700 mb-2">
                    eDiscovery Expertise
                  </h3>
                  <p className="text-wisdom-gray">
                    Relativity, Nuix, Brainspace—our specialists know the platforms and case law.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-success-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-success-green" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-wisdom-gray-700 mb-2">
                    Flexible Engagement Models
                  </h3>
                  <p className="text-wisdom-gray">
                    Hourly, project-based, temp-to-perm—whatever the case demands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gradient-to-br from-trust-blue-50 to-success-green-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 font-heading mb-12 text-trust-blue">
              Legal Staffing By The Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-trust-blue mb-2">24hrs</div>
                <div className="text-wisdom-gray-600">Average response time for urgent requests</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-success-green mb-2">98%</div>
                <div className="text-wisdom-gray-600">Attorney placement success rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-innovation-orange mb-2">$350B</div>
                <div className="text-wisdom-gray-600">US legal services market we serve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trust-blue to-success-green text-white">
        <div className="section-container text-center">
          <h2 className="text-h2 font-heading mb-6">
            Need Legal Talent? We Deliver.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Whether you need one paralegal or 50 contract attorneys—we staff fast, vetted, and ready to bill.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Request Legal Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/careers/open-positions" className="btn-outline">
              View Legal Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

