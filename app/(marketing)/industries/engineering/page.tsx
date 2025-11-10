import { ArrowRight, CheckCircle2, Wrench } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Engineering Staffing & Recruitment | InTime eSolutions',
  description: 'Engineering talent for aerospace, automotive, civil, mechanical, electrical projects. From CAD designers to PE-licensed engineers—immediate deployment.',
  keywords: 'engineering staffing, mechanical engineer jobs, civil engineer recruitment, electrical engineer hiring, aerospace engineer, CAD designer',
};

export default function EngineeringPage() {
  const roles = [
    'Mechanical Engineer',
    'Electrical Engineer',
    'Civil Engineer',
    'Structural Engineer',
    'Chemical Engineer',
    'Industrial Engineer',
    'Aerospace Engineer',
    'Automotive Engineer',
    'Manufacturing Engineer',
    'Quality Engineer',
    'Process Engineer',
    'Design Engineer',
    'CAD Designer / Drafter',
    'Project Engineer',
    'Test Engineer',
    'Systems Engineer',
    'Reliability Engineer',
    'Safety Engineer',
    'Materials Engineer',
    'R&D Engineer',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue-600 via-trust-blue to-trust-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Wrench className="h-4 w-4" />
              <span className="text-sm font-medium">Engineering Staffing & Recruitment</span>
            </div>
            <h1 className="text-h1 font-heading mb-6">
              Engineers Who Build What Works
            </h1>
            <p className="text-xl mb-8 text-sky-blue-500 leading-relaxed">
              From aerospace to automotive, civil to chemical—InTime delivers PE-licensed engineers, CAD designers, and technical specialists who hit the ground running. 82% of engineering firms report talent shortages. We solve that with precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-secondary">
                Find Engineers Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/company/about" className="btn-outline">
                Our Engineering Expertise
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
              Engineering-First Staffing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Licensed & Certified', desc: 'PE, EIT, Six Sigma, PMP—all credentials verified.' },
                { title: 'Technical Screening', desc: 'Engineers interview engineers. No HR gatekeepers.' },
                { title: 'Rapid Deployment', desc: 'Project starting Monday? We staff by Friday.' },
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
                <strong className="text-trust-blue">The Engineering Talent Gap:</strong> 82% of engineering firms can't find qualified candidates. Infrastructure projects sit idle. Product launches delay. R&D labs run understaffed.
              </p>
              <p className="text-lg text-wisdom-gray leading-relaxed">
                InTime maintains a nationwide network of licensed engineers across all disciplines—mechanical, electrical, civil, chemical, aerospace, and more. Whether you need one structural engineer or an entire manufacturing team, we deliver vetted talent fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="py-16 bg-wisdom-gray-50">
        <div className="section-container">
          <h2 className="text-h2 font-heading mb-4 text-trust-blue text-center">
            Engineering Roles We Staff
          </h2>
          <p className="text-center text-wisdom-gray-600 mb-12 max-w-3xl mx-auto">
            From CAD designers to PE-licensed engineers—aerospace, automotive, civil, mechanical, electrical, and beyond.
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

      {/* Why Engineering Firms Choose InTime */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-12 text-trust-blue text-center">
              Why Engineering Firms Choose InTime
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
                    PE & EIT Verified
                  </h3>
                  <p className="text-wisdom-gray">
                    All engineers screened: PE license, EIT certification, disciplinary history, references.
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
                    Multi-Discipline Coverage
                  </h3>
                  <p className="text-wisdom-gray">
                    Need a structural engineer AND a controls engineer? One call. Both roles filled.
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
                    CAD & Design Tools
                  </h3>
                  <p className="text-wisdom-gray">
                    AutoCAD, SolidWorks, CATIA, Revit, ANSYS—our engineers know the software.
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
                    Project-Based Flexibility
                  </h3>
                  <p className="text-wisdom-gray">
                    6-month infrastructure project? 2-week design sprint? We scale with your timeline.
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
              Engineering Staffing By The Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-trust-blue mb-2">72hrs</div>
                <div className="text-wisdom-gray-600">Average time to present qualified engineers</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-success-green mb-2">96%</div>
                <div className="text-wisdom-gray-600">Engineer retention rate (12 months)</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-innovation-orange mb-2">$1.8T</div>
                <div className="text-wisdom-gray-600">US infrastructure market we serve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trust-blue to-success-green text-white">
        <div className="section-container text-center">
          <h2 className="text-h2 font-heading mb-6">
            Need Engineers? We Deliver Fast.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Whether you need one CAD designer or an entire project team—we staff fast, licensed, and ready to engineer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Request Engineering Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/careers/open-positions" className="btn-outline">
              View Engineering Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

