import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wisdom-gray-700 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/it-staffing" className="text-gray-300 hover:text-success-green transition-colors">IT Staffing</Link></li>
              <li><Link href="/consulting/services" className="text-gray-300 hover:text-success-green transition-colors">Consulting</Link></li>
              <li><Link href="/solutions/cross-border" className="text-gray-300 hover:text-success-green transition-colors">Cross-Border Solutions</Link></li>
              <li><Link href="/solutions/training" className="text-gray-300 hover:text-success-green transition-colors">Training & Development</Link></li>
              <li><Link href="/contact" className="text-success-green hover:text-success-green-600 font-medium transition-colors">Request Consultation →</Link></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources" className="text-gray-300 hover:text-success-green transition-colors">Blog</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-success-green transition-colors">Salary Guides</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-success-green transition-colors">Success Stories</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-success-green transition-colors">Webinars & Events</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-success-green transition-colors">Newsletter Signup</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/company/about" className="text-gray-300 hover:text-success-green transition-colors">About InTime</Link></li>
              <li><Link href="/company/about" className="text-gray-300 hover:text-success-green transition-colors">Mission & Values</Link></li>
              <li><Link href="/company/about" className="text-gray-300 hover:text-success-green transition-colors">Leadership Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-success-green transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-success-green transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Connect</h3>
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-white font-semibold mb-1">🇺🇸 USA</p>
                <p className="text-gray-300 text-sm">+1 307-650-2850</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">🇨🇦 Canada</p>
                <p className="text-gray-300 text-sm">+1 289-236-9000</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">🇮🇳 India</p>
                <p className="text-gray-300 text-sm">+91 798-166-6144</p>
              </div>
              <p className="text-gray-300 text-sm">
                <a href="mailto:info@intimeesolutions.com" className="text-success-green hover:text-success-green-600">
                  info@intimeesolutions.com
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-wisdom-gray-600 p-2 rounded-full hover:bg-trust-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-wisdom-gray-600 p-2 rounded-full hover:bg-trust-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-wisdom-gray-600 p-2 rounded-full hover:bg-trust-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@intimeesolutions.com" className="bg-wisdom-gray-600 p-2 rounded-full hover:bg-trust-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-wisdom-gray-600">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} InTime eSolutions. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              <span className="text-success-green font-medium">Transform Careers. Power Business. Do It InTime.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
