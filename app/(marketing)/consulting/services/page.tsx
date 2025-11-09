import { ArrowRight, Code2, Network, CheckCircle2, UserPlus, UserSearch, Users, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | InTime eSolutions',
  description: 'Comprehensive IT consulting services from custom software development to staff augmentation, system integration, and more.',
  keywords: 'IT services, software development, staff augmentation, RPO, HR outsourcing, system integration, IT consulting',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Custom Software Development',
      slug: 'custom-software-development',
      description: 'Tailored software solutions from modern UIs to complex platforms, aligned to your budget and timeline.',
      features: ['Technology selection', 'Prototypes & demos', 'End-to-end delivery', 'Global offshore services'],
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'System Integration',
      slug: 'system-integration',
      description: 'Build secure applications and integrate them seamlessly with your existing systems.',
      features: ['Legacy migration', 'API integration', 'Real-time data flows', 'Comprehensive QA'],
    },
    {
      icon: <CheckCircle2 className="h-8 w-8" />,
      title: 'Quality Assurance',
      slug: 'quality-assurance',
      description: 'Ship with confidence: Functional, Regression, Performance, Automation, and Environment Management.',
      features: ['Test automation', 'Performance testing', 'Executive reporting', 'Dedicated QA teams'],
    },
    {
      icon: <UserPlus className="h-8 w-8" />,
      title: 'Staff Augmentation',
      slug: 'staff-augmentation',
      description: 'Certified professionals who integrate on day one, supported by our knowledge base and delivery center.',
      features: ['Dedicated developers', 'Flexible scaling', 'Competitive pricing', 'Global talent pool'],
    },
    {
      icon: <UserSearch className="h-8 w-8" />,
      title: 'Recruitment Process Outsourcing (RPO)',
      slug: 'rpo',
      description: 'Disciplined sourcing with values‑aligned selection across portals, search engines, and networks.',
      features: ['Campus recruiting', 'Executive search', 'Compliance-focused', 'Diverse talent slates'],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'HR Outsourcing',
      slug: 'hr-outsourcing',
      description: 'Reduce overhead and focus on core operations with comprehensive HR outsourcing services.',
      features: ['Payroll processing', 'Benefits administration', 'OSHA compliance', 'Onboarding support'],
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'IT Consulting',
      slug: 'consulting',
      description: 'Turn IT savings into business advantage with pragmatic modernization and outcome-driven engineering.',
      features: ['App modernization', 'Cost reduction (20-50%)', 'Cloud transformation', 'IT strategy'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue-600 via-trust-blue to-trust-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-h1 font-heading mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-8 text-sky-blue-500 leading-relaxed">
              Pragmatic modernization, outcome-driven engineering, and flexible talent models that deliver ROI faster. From custom development to strategic consulting, we build solutions your teams can run today—and still love a year from now.
            </p>
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading mb-4 text-trust-blue">
              7 Core Services
            </h2>
            <p className="text-lg text-wisdom-gray-600 max-w-3xl mx-auto">
              Quality you can measure, speed you can feel, and transparency you can trust. Mature processes and broad skills yield maximum performance and faster business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/consulting/services/${service.slug}`}
                className="bg-wisdom-gray-50 p-8 rounded-2xl border-2 border-transparent hover:border-trust-blue transition-all duration-300 hover:shadow-xl group"
              >
                <div className="h-16 w-16 bg-trust-blue-50 rounded-xl flex items-center justify-center mb-6 text-trust-blue group-hover:bg-trust-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-h4 font-heading mb-3 text-trust-blue group-hover:text-trust-blue-700">
                  {service.title}
                </h3>
                <p className="text-wisdom-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-wisdom-gray-700">
                      <div className="h-1.5 w-1.5 bg-success-green rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-trust-blue font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-trust-blue-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-8 text-trust-blue text-center">
              Why Choose InTime eSolutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Proven Delivery', 
                  desc: 'Track record of successful projects with measurable ROI and business impact.' 
                },
                { 
                  title: 'End-to-End Accountability', 
                  desc: 'We own outcomes, not just tasks. Your success is our success.' 
                },
                { 
                  title: 'Global + Local', 
                  desc: 'Offshore efficiency with onshore quality and communication.' 
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-h5 font-heading text-trust-blue mb-3">{item.title}</h3>
                  <p className="text-wisdom-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-trust-blue to-trust-blue-600 text-white">
        <div className="section-container text-center">
          <h2 className="text-h2 font-heading mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-sky-blue-500 max-w-2xl mx-auto">
            Let's discuss your goals and craft a solution that delivers measurable results.
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

