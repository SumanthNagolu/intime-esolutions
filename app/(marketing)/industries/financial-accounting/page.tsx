import { ArrowRight, CheckCircle2, DollarSign } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Financial Services & Accounting Staffing | InTime eSolutions',
  description: 'FinTech, RegTech, and traditional finance staffing. From Wall Street to Main Street—compliance, risk, trading, and audit talent.',
  keywords: 'financial services staffing, accounting recruitment, fintech jobs, compliance staffing, risk management jobs, CPA recruitment',
};

export default function FinancialAccountingPage() {
  const roles = [
    'Financial Analyst',
    'Accountant',
    'CPA / Certified Public Accountant',
    'Compliance Officer',
    'Risk Manager',
    'Quant Developer / Quantitative Analyst',
    'Trader / Investment Analyst',
    'Auditor (Internal / External)',
    'Tax Specialist',
    'Financial Controller',
    'Treasury Analyst',
    'Credit Analyst',
    'Portfolio Manager',
    'Investment Banker',
    'Actuarial Analyst',
    'RegTech Specialist',
    'FinTech Developer',
    'Blockchain / Crypto Analyst',
    'Anti-Money Laundering (AML) Specialist',
    'KYC Analyst',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue-600 via-trust-blue to-trust-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm font-medium">Financial Services & Accounting Staffing</span>
            </div>
            <h1 className="text-h1 font-heading mb-6">
              Finance & Accounting Talent That Moves Markets
            </h1>
            <p className="text-xl mb-8 text-sky-blue-500 leading-relaxed">
              From Wall Street trading floors to Main Street CPA firms—InTime delivers finance professionals who understand compliance, risk, and the bottom line. RegTech, FinTech, audit, tax, treasury: we speak your language.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-secondary">
                Find Finance Talent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/company/about" className="btn-outline">
                Our Financial Expertise
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
              Precision in Financial Staffing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Compliance First', desc: 'SEC, FINRA, SOX, GDPR—we vet for regulatory fluency' },
                { title: 'Speed Without Risk', desc: 'Pre-screened talent ready for audit season or M&A crunch' },
                { title: 'FinTech to Traditional', desc: 'Blockchain devs to seasoned CPAs—we cover it all' },
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
                Whether you need a forensic accountant for a fraud investigation, a quant developer for algorithmic trading, or 20 CPAs for tax season—InTime delivers talent that understands financial integrity and regulatory scrutiny.
              </p>
              <p className="text-lg text-wisdom-gray leading-relaxed">
                Our candidates are screened for Series 7/63 certifications, CPA licenses, CFA credentials, and hands-on experience with Bloomberg Terminal, SAP, Oracle Financials, and FinTech platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="py-16 bg-wisdom-gray-50">
        <div className="section-container">
          <h2 className="text-h2 font-heading mb-4 text-trust-blue text-center">
            Financial & Accounting Roles We Staff
          </h2>
          <p className="text-center text-wisdom-gray-600 mb-12 max-w-3xl mx-auto">
            From investment banking to tax prep, risk management to FinTech innovation—we place finance professionals who drive ROI and manage risk.
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

      {/* Why InTime for Finance */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-12 text-trust-blue text-center">
              Why Finance Leaders Choose InTime
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
                    Regulatory Expertise
                  </h3>
                  <p className="text-wisdom-gray">
                    Every candidate is screened for compliance knowledge—FINRA, SEC, SOX, GDPR, AML/KYC requirements.
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
                    Audit & Tax Season Ready
                  </h3>
                  <p className="text-wisdom-gray">
                    Need 10 CPAs next week for Q4 close? We maintain a bench of pre-vetted accounting professionals.
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
                    FinTech & Traditional Finance
                  </h3>
                  <p className="text-wisdom-gray">
                    We place blockchain developers, robo-advisory engineers, AND seasoned Wall Street analysts.
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
                    White-Glove Service
                  </h3>
                  <p className="text-wisdom-gray">
                    Dedicated recruiters who understand financial modeling, derivatives, and the difference between GAAP and IFRS.
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
              Financial Staffing By The Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-trust-blue mb-2">48hrs</div>
                <div className="text-wisdom-gray-600">Average time to first CPA candidate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-success-green mb-2">98%</div>
                <div className="text-wisdom-gray-600">Placement accuracy for compliance roles</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-innovation-orange mb-2">$26T</div>
                <div className="text-wisdom-gray-600">Market size we serve (Global Financial Services)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trust-blue to-success-green text-white">
        <div className="section-container text-center">
          <h2 className="text-h2 font-heading mb-6">
            Ready to Build Your Finance Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Whether you need a CFO, 50 tax accountants, or a quant team—we deliver finance talent fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Request Finance Talent
              <ArrowRight className="ml-2 h-5 h-5" />
            </Link>
            <Link href="/careers/open-positions" className="btn-outline">
              View Finance Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

