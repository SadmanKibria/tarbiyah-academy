import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-secondary">Tarbiyah Academy</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Nurturing young hearts and minds through authentic Islamic knowledge, character development, and spiritual
              growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-secondary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="hover:text-secondary transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/diploma" className="hover:text-secondary transition-colors">
                  Islamic Diploma
                </Link>
              </li>
              <li>
                <Link href="/enroll" className="hover:text-secondary transition-colors">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3 text-secondary">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <p>379 Oaklands Park Avenue, Ilford, Essex, IG1 1TG</p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <a href="tel:+447950206007" className="hover:text-secondary transition-colors">
                  +44 7950 206007
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={16} />
                <a href="mailto:tarbiyah.ac@gmail.com" className="hover:text-secondary transition-colors">
                  tarbiyah.ac@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-90 mb-2">
            Durotech Limited. T/A Tarbiyah Academy | Registered in England and Wales. Company Number: 12671924
          </p>
          <p className="text-center text-xs opacity-75">
            &copy; 2025 All rights reserved. | Website designed by{" "}
            <a
              href="https://sadmankibria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Sadman Kibria
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
