import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const serviceCategories = [
  {
    id: "visa",
    emoji: "🎓",
    title: "Student Visa Services",
    subtitle: "Education in Japan",
    color: "from-blue-50 to-indigo-50",
    accent: "#4f46e5",
    description:
      "Japan offers world-class education from language schools to top universities. We guide Nepali students through every step — school selection, application, CoE (Certificate of Eligibility), and embassy interview preparation.",
    items: [
      "Japanese Language School enrollment",
      "University & graduate program applications",
      "Vocational college (Senmon Gakko) placement",
      "Certificate of Eligibility (CoE) processing",
      "Student visa application support",
      "Embassy interview coaching",
      "Scholarship guidance",
    ],
    duration: "4–8 weeks",
    fee: "Starting NPR 25,000",
  },
  {
    id: "work",
    emoji: "💼",
    title: "Work Visa & Placement",
    subtitle: "Employment in Japan",
    color: "from-emerald-50 to-teal-50",
    accent: "#059669",
    description:
      "Japan faces a significant labor shortage. Nepali workers are increasingly sought in manufacturing, caregiving, hospitality, construction, and more. We connect you with legitimate employers and handle your visa application.",
    items: [
      "Specified Skilled Worker (SSW) Type 1 & 2",
      "Technical Intern Training Program (TITP)",
      "Employer matching & interview preparation",
      "Skills exam registration & coaching",
      "Japanese language test (JLPT/JFT) prep",
      "Employment contract review",
      "Pre-departure orientation",
    ],
    duration: "8–16 weeks",
    fee: "Starting NPR 40,000",
  },
  {
    id: "business",
    emoji: "🏢",
    title: "Business & Investor Visa",
    subtitle: "Trade & Entrepreneurship",
    color: "from-amber-50 to-orange-50",
    accent: "#d97706",
    description:
      "Nepal–Japan trade is growing. Whether you're starting a company in Japan or expanding your Nepali business into the Japanese market, our team provides comprehensive business setup and compliance support.",
    items: [
      "Business Manager visa application",
      "Company registration in Japan (KK/GK)",
      "Business plan development",
      "Japanese market entry strategy",
      "Nepal–Japan import/export consulting",
      "Tax compliance guidance",
      "Partner & investor introductions",
    ],
    duration: "12–20 weeks",
    fee: "Starting NPR 80,000",
  },
  {
    id: "family",
    emoji: "🏠",
    title: "Family & Spouse Visa",
    subtitle: "Reunification Services",
    color: "from-pink-50 to-rose-50",
    accent: "#be185d",
    description:
      "Bring your family to Japan or join a spouse already living there. We handle the paperwork and communicate directly with the Japanese Immigration Services Agency on your behalf.",
    items: [
      "Spouse of Japanese National visa",
      "Spouse of Permanent Resident visa",
      "Dependent visa for children",
      "Long-term resident visa",
      "Permanent residency application",
      "Status of residence changes",
      "Address registration support",
    ],
    duration: "6–12 weeks",
    fee: "Starting NPR 30,000",
  },
  {
    id: "language",
    emoji: "🗣️",
    title: "Japanese Language Training",
    subtitle: "JLPT N5 to N1",
    color: "from-violet-50 to-purple-50",
    accent: "#7c3aed",
    description:
      "Language is your most valuable tool in Japan. Our certified instructors teach from absolute beginner level to advanced business Japanese, with a strong focus on JLPT exam success.",
    items: [
      "JLPT N5, N4, N3, N2, N1 courses",
      "JFT-Basic (for SSW applicants)",
      "Conversational Japanese",
      "Business Japanese",
      "Hiragana & Katakana intensive",
      "Online & in-person classes",
      "Mock exam practice",
    ],
    duration: "3–12 months",
    fee: "Starting NPR 8,000/month",
  },
  {
    id: "predeparture",
    emoji: "✈️",
    title: "Pre-Departure & Arrival Support",
    subtitle: "Smooth Transition",
    color: "from-sky-50 to-cyan-50",
    accent: "#0284c7",
    description:
      "Arriving in Japan can be overwhelming. We prepare you before you leave and support you when you land — from finding accommodation to setting up your bank account and phone.",
    items: [
      "Cultural orientation program",
      "Accommodation search assistance",
      "Airport pickup (Tokyo & Osaka)",
      "SIM card & bank account setup",
      "My Number Card registration",
      "National Health Insurance enrollment",
      "Emergency contact support (24/7 first month)",
    ],
    duration: "Ongoing",
    fee: "Starting NPR 15,000",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-ink-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #d4af37 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-gold-400 font-body text-sm tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-white/60 font-body text-xl max-w-2xl leading-relaxed">
            Comprehensive support for every pathway from Nepal to Japan. Choose your journey.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          {serviceCategories.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 60}>
              <div className="bg-white rounded-2xl overflow-hidden border border-parchment service-card">
                <div className={`bg-gradient-to-r ${service.color} p-8`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{service.emoji}</span>
                      <div>
                        <p className="text-xs font-body font-medium tracking-widest uppercase mb-1" style={{ color: service.accent }}>
                          {service.subtitle}
                        </p>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                    <div className="flex gap-6 text-right">
                      <div>
                        <div className="text-xs text-ink-700/60 font-body uppercase tracking-wider">Timeline</div>
                        <div className="font-display font-semibold text-ink-900 text-sm mt-1">{service.duration}</div>
                      </div>
                      <div>
                        <div className="text-xs text-ink-700/60 font-body uppercase tracking-wider">Fee</div>
                        <div className="font-display font-semibold text-ink-900 text-sm mt-1">{service.fee}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <p className="text-ink-700 font-body leading-relaxed">{service.description}</p>
                  <div>
                    <h4 className="font-display font-semibold text-ink-900 mb-4 text-sm uppercase tracking-wider">
                      What's Included
                    </h4>
                    <ul className="space-y-2.5">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="flex-shrink-0 mt-0.5" style={{ color: service.accent }} />
                          <span className="text-ink-700 text-sm font-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all hover:opacity-90"
                    style={{ backgroundColor: service.accent }}
                  >
                    Inquire About This Service <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-parchment">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink-900 mb-5">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-ink-700 font-body mb-8">
            Book a free consultation. We'll assess your situation and recommend the right path for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-4 rounded-full font-body font-medium transition-all"
          >
            Get Free Advice <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
