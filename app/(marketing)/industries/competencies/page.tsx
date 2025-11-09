import { ArrowRight, Cog, Globe, Database, Shield, Cloud, BarChart3, HardDrive, Smartphone, Code, Brain, CloudCog, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Competencies | InTime eSolutions',
  description: 'Comprehensive technology competencies across DevOps, Cloud, AI/ML, Data Engineering, Cybersecurity, and more.',
  keywords: 'technology competencies, DevOps services, cloud computing, AI ML expertise, cybersecurity, data engineering',
};

export default function CompetenciesPage() {
  const competencies = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: 'DevOps',
      description: 'DevOps accelerates the path from commit to customer. Faster releases, rapid incident resolution, and 20-30% IT cost savings.',
      features: ['Maturity assessment', 'CI/CD workflows', 'Automated deployment', 'Support and maintenance'],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Technologies',
      description: 'Custom web applications built with modern frameworks that reflect your unique workflows.',
      features: ['Microsoft .NET Platform', 'J2EE / PHP Technologies', 'IBM WebSphere / WebLogic', 'Microsoft-certified professionals'],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Warehousing / BI',
      description: 'Enterprise data warehousing and BI solutions using Cognos, Informatica, Business Objects, and more.',
      features: ['Cognos, Informatica', 'Business Objects, DataStage', 'ETL tool evaluation', 'OLAP tooling guidance'],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Comprehensive QA services across the SDLC—feature verification, automation, performance, and security testing.',
      features: ['Performance Testing', 'Regression Testing', 'Test Automation', 'API & Integration Testing'],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Computing',
      description: 'Cloud consulting and support for AWS, Azure, Rackspace, DigitalOcean, and Salesforce.',
      features: ['AWS, Azure, Rackspace', 'Cloud adoption services', 'Cloud governance', 'Migration & optimization'],
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'Analytics',
      description: 'Collate unstructured data, correlate with KPIs, and enable self-service analytics.',
      features: ['Data visualization', 'Predictive analytics', 'Self-service dashboards', 'Cross-silo insights'],
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: 'Databases',
      description: 'Data modeling, design, development, and performance tuning across Oracle, SQL Server, DB2, and more.',
      features: ['Oracle, SQL Server', 'Data modeling & design', 'Performance tuning', 'Production support'],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Enterprise Mobility',
      description: 'iOS and Android mobile solutions with MapKit, Push Notifications, social integration, and more.',
      features: ['iOS (Swift, Cocoa Touch)', 'Android (Java, Kotlin)', 'Cross-platform frameworks', 'Dedicated UX teams'],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web & Native App Development',
      description: 'Signature apps built for scalability, performance, security, and portability.',
      features: ['Native (iOS, Android)', 'Web (HTML5, React, Angular)', 'Hybrid (Xamarin, Flutter)', 'Agile delivery'],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data Engineering & Analytics',
      description: 'Enterprise Data Lake, Master Data Management, Data Virtualization, and Data Governance.',
      features: ['Data Lake for AI analytics', 'Master Data Management', 'Data Virtualization', 'Data Governance'],
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Integrate AI into systems and products: NLP, Deep Learning, Computer Vision, and Chatbots.',
      features: ['Natural Language Processing', 'Deep Learning', 'Computer Vision', 'MLOps & Production AI'],
    },
    {
      icon: <CloudCog className="h-8 w-8" />,
      title: 'Native Cloud Development',
      description: 'Cloud-native architectures and hybrid environment management for resiliency and economics.',
      features: ['Multi-cloud management', 'Cloud backup services', 'Cloud readiness assessment', 'Hybrid solutions'],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Native App Development',
      description: 'Production-ready mobile solutions using Agile for iOS and Android platforms.',
      features: ['Architecture consulting', 'Software development', 'Performance engineering', 'QA and testing'],
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: '24/7 security monitoring, firewall protection, vulnerability assessments, and compliance.',
      features: ['24/7 Security monitoring', 'Firewall protection', 'Vulnerability assessments', 'Compliance & policy'],
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
              Our Technology Competencies
            </h1>
            <p className="text-xl mb-8 text-sky-blue-500 leading-relaxed">
              Comprehensive expertise across the full technology landscape—from infrastructure to applications, data to security. We deliver solutions that drive ROI and accelerate your business.
            </p>
            <Link href="/contact" className="btn-secondary inline-flex items-center">
              Discuss Your Technology Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading mb-4 text-trust-blue">
              14 Core Technology Competencies
            </h2>
            <p className="text-lg text-wisdom-gray-600 max-w-3xl mx-auto">
              From DevOps to AI, Cloud to Cybersecurity—we bring deep expertise and proven delivery across every layer of your technology stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {competencies.map((competency, index) => (
              <div
                key={index}
                className="bg-wisdom-gray-50 p-8 rounded-2xl border-2 border-transparent hover:border-trust-blue transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-16 w-16 bg-trust-blue-50 rounded-xl flex items-center justify-center mb-6 text-trust-blue">
                  {competency.icon}
                </div>
                <h3 className="text-h4 font-heading mb-3 text-trust-blue">
                  {competency.title}
                </h3>
                <p className="text-wisdom-gray-600 mb-6 leading-relaxed">
                  {competency.description}
                </p>
                <div className="space-y-2">
                  {competency.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-wisdom-gray-700">
                      <div className="h-1.5 w-1.5 bg-success-green rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose InTime Section */}
      <section className="py-16 bg-trust-blue-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-8 text-trust-blue text-center">
              Why Choose InTime eSolutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Deep Expertise', 
                  desc: 'Years of experience and certified professionals across all major platforms and technologies.' 
                },
                { 
                  title: 'Proven Delivery', 
                  desc: 'Track record of successful projects with measurable ROI and business impact.' 
                },
                { 
                  title: 'Strategic Partnership', 
                  desc: 'We align technology investments to your business goals and operating model.' 
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
            Ready to Leverage Our Expertise?
          </h2>
          <p className="text-xl mb-8 text-sky-blue-500 max-w-2xl mx-auto">
            Let's discuss your technology challenges and craft a solution that delivers measurable results.
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

