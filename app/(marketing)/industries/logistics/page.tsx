import { ArrowRight, CheckCircle2, Truck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Logistics & Supply Chain Staffing | InTime eSolutions',
  description: 'Supply chain, logistics, transportation, and warehouse talent. From supply chain analysts to logistics managers—immediate deployment for peak season.',
  keywords: 'logistics staffing, supply chain recruitment, warehouse jobs, transportation manager, logistics coordinator, freight broker, supply chain analyst',
};

export default function LogisticsPage() {
  const roles = [
    'Supply Chain Manager',
    'Logistics Coordinator',
    'Transportation Manager',
    'Warehouse Manager',
    'Inventory Control Specialist',
    'Procurement Manager',
    'Demand Planner',
    'Supply Chain Analyst',
    'Freight Broker',
    'Distribution Manager',
    'Operations Manager',
    'Logistics Analyst',
    'Fleet Manager',
    'Import/Export Specialist',
    'Customs Compliance Specialist',
    'Supply Chain Director',
    'Logistics Supervisor',
    'Material Handler',
    'Shipping & Receiving Clerk',
    'Route Planner',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-blue-600 via-trust-blue to-trust-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium">Logistics & Supply Chain Staffing</span>
            </div>
            <h1 className="text-h1 font-heading mb-6">
              Move Goods. Move Fast. Move Right.
            </h1>
            <p className="text-xl mb-8 text-sky-blue-500 leading-relaxed">
              From warehouse floors to C-suite supply chain strategy—InTime delivers logistics talent that keeps shelves stocked and trucks moving. Peak season? Port delays? ERP migration? We staff 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-secondary">
                Find Logistics Talent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/company/about" className="btn-outline">
                Our Supply Chain Expertise
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
              Supply Chain Precision
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { title: 'Peak Season Ready', desc: 'Q4 surge? We staff 100+ warehouse roles in 72 hours.' },
                { title: 'WMS/TMS Certified', desc: 'SAP, Oracle, Manhattan, Blue Yonder—our talent knows the systems.' },
                { title: '24/7 Operations Support', desc: 'Night shifts, weekends, holidays—we staff around the clock.' },
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
                <strong className="text-trust-blue">The Logistics Talent Crunch:</strong> 78% of logistics firms report critical talent shortages. Peak season demand spikes 300%. Port congestion creates emergency staffing needs.
              </p>
              <p className="text-lg text-wisdom-gray leading-relaxed">
                InTime maintains a national network of logistics professionals—warehouse managers, supply chain analysts, freight brokers, and operations specialists. We staff for normal operations AND emergency surges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="py-16 bg-wisdom-gray-50">
        <div className="section-container">
          <h2 className="text-h2 font-heading mb-4 text-trust-blue text-center">
            Logistics Roles We Staff
          </h2>
          <p className="text-center text-wisdom-gray-600 mb-12 max-w-3xl mx-auto">
            From warehouse floors to executive supply chain strategy—transportation, distribution, procurement, and more.
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

      {/* Why Logistics Companies Choose InTime */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading mb-12 text-trust-blue text-center">
              Why Logistics Companies Choose InTime
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
                    Emergency Staffing (24-48hrs)
                  </h3>
                  <p className="text-wisdom-gray">
                    Port strike? Peak season surge? We deploy warehouse teams overnight.
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
                    WMS/TMS Expertise
                  </h3>
                  <p className="text-wisdom-gray">
                    SAP EWM, Oracle WMS, Manhattan, Blue Yonder—our talent knows the systems.
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
                    Compliance-Focused
                  </h3>
                  <p className="text-wisdom-gray">
                    OSHA, DOT, customs regulations—all candidates screened for compliance.
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
                    Flexible Scaling
                  </h3>
                  <p className="text-wisdom-gray">
                    1 logistics manager or 100 warehouse workers—we scale with your needs.
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
              Logistics Staffing By The Numbers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-trust-blue mb-2">48hrs</div>
                <div className="text-wisdom-gray-600">Average response time for emergency staffing</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-success-green mb-2">97%</div>
                <div className="text-wisdom-gray-600">On-time placement success rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-innovation-orange mb-2">$1.6T</div>
                <div className="text-wisdom-gray-600">US logistics market we serve</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-trust-blue to-success-green text-white">
        <div className="section-container text-center">
          <h2 className="text-h2 font-heading mb-6">
            Need Logistics Talent? We Move Fast.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Whether you need one supply chain analyst or an entire warehouse crew—we staff fast, trained, and ready to ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Request Logistics Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/careers/open-positions" className="btn-outline">
              View Logistics Jobs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

