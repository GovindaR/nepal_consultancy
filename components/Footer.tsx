import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white/80">
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-crimson-600 via-gold-400 to-crimson-600" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 36 36" fill="none" width="32" height="32">
                <rect x="2" y="8" width="32" height="3.5" rx="1.5" fill="#dc2626" />
                <rect x="4" y="4" width="28" height="3" rx="1.5" fill="#dc2626" />
                <rect x="6" y="11.5" width="3.5" height="20" rx="1.5" fill="#dc2626" />
                <rect x="26.5" y="11.5" width="3.5" height="20" rx="1.5" fill="#dc2626" />
                <rect x="12" y="14" width="12" height="3" rx="1" fill="#d4af37" />
              </svg>
              <span className="font-display font-bold text-white text-lg">
                Sakura Bridge
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5 font-body">
              Bridging dreams between Nepal and Japan since 2015. Your trusted partner for a new chapter.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-crimson-600 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-crimson-400 transition-colors font-body flex items-center gap-1.5"
                  >
                    <span className="text-crimson-600">›</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Visa Assistance",
                "Student Enrollment",
                "Work Placement",
                "Business Setup",
                "Language Training",
                "Spouse & Family Visa",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/60 font-body flex items-center gap-1.5">
                    <span className="text-crimson-600">›</span> {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-4 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin size={15} className="text-crimson-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60 font-body">
                  Putalisadak, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-crimson-400 flex-shrink-0" />
                <a href="tel:+977-1-XXXXXXX" className="text-sm text-white/60 hover:text-white font-body">
                  +977-1-XXX-XXXX
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} className="text-crimson-400 flex-shrink-0" />
                <a href="mailto:info@sakurabridge.com.np" className="text-sm text-white/60 hover:text-white font-body">
                  info@sakurabridge.com.np
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gold-400 font-japanese mb-1">営業時間</p>
              <p className="text-xs text-white/50 font-body">
                Sun – Fri: 9:00 AM – 6:00 PM NPT
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40 font-body">
            © 2025 Sakura Bridge Consultancy. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-body font-japanese">
            ネパール・日本コンサルタンシー
          </p>
        </div>
      </div>
    </footer>
  );
}
