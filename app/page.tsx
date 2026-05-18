import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, Award, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: "🎓",
    title: "Student Visa",
    desc: "Language schools, universities, vocational training — we navigate the Japanese education system for you.",
  },
  {
    icon: "💼",
    title: "Work Placement",
    desc: "Skilled worker visas, specified skilled worker (SSW) programs, and direct employment matching.",
  },
  {
    icon: "🏢",
    title: "Business Setup",
    desc: "Company registration, legal compliance, and market-entry strategy for Nepal–Japan trade.",
  },
  {
    icon: "🏠",
    title: "Spouse & Family",
    desc: "Reunite with loved ones. Family reunification visas handled with care and precision.",
  },
  {
    icon: "🗣️",
    title: "Japanese Language",
    desc: "JLPT preparation, conversation courses, and business Japanese — from N5 to N1.",
  },
  {
    icon: "✈️",
    title: "Pre-Departure",
    desc: "Cultural orientation, housing support, SIM card setup, and airport assistance in Japan.",
  },
];

const stats = [
  { value: "2,400+", label: "Visas Approved", icon: CheckCircle2 },
  { value: "98%", label: "Success Rate", icon: Star },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "12", label: "Partner Universities", icon: Globe },
];

const testimonials = [
  {
    name: "Priya Shrestha",
    role: "Student in Tokyo",
    text: "Sakura Bridge made my dream of studying in Japan a reality. From JLPT prep to getting my student visa — everything was seamless.",
    rating: 5,
  },
  {
    name: "Bikash Tamang",
    role: "SSW Visa Holder, Osaka",
    text: "I applied for the Specified Skilled Worker visa and was honestly nervous. The team guided me through every step and I'm now working in Osaka!",
    rating: 5,
  },
  {
    name: "Sunita Gurung",
    role: "Business Owner, Kathmandu",
    text: "We needed help setting up a Nepal–Japan import business. Their knowledge of both markets saved us months of effort.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-900">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, #dc2626 0%, transparent 50%),
                               radial-gradient(circle at 70% 20%, #d4af37 0%, transparent 40%)`,
            }}
          />
          {/* Mount Fuji silhouette */}
          <svg
            className="absolute bottom-0 right-0 opacity-10 w-2/3"
            viewBox="0 0 800 300"
            preserveAspectRatio="xMaxYMax meet"
          >
            <path
              d="M400 20 L550 180 L480 180 L540 220 L460 220 L520 260 L280 260 L340 220 L260 220 L320 180 L250 180 Z"
              fill="white"
            />
            <path
              d="M400 20 L440 80 L380 80 Z"
              fill="white"
              opacity="0.8"
            />
          </svg>
          {/* Himalayas silhouette */}
          <svg
            className="absolute bottom-0 left-0 opacity-10 w-2/3"
            viewBox="0 0 800 300"
            preserveAspectRatio="xMinYMax meet"
          >
            <path
              d="M0 300 L0 200 L60 120 L120 180 L200 80 L280 160 L340 60 L420 140 L500 100 L560 170 L620 90 L700 160 L760 100 L800 140 L800 300 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Japanese circles decoration */}
        <div className="absolute top-20 right-16 w-64 h-64 rounded-full border border-crimson-600/20 animate-pulse" />
        <div className="absolute top-28 right-24 w-48 h-48 rounded-full border border-gold-400/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-gold-400 font-japanese text-sm">ネパール・日本</span>
              <span className="w-px h-3 bg-white/30" />
              <span className="text-white/70 text-xs font-body tracking-widest uppercase">Nepal · Japan</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Your Bridge to{" "}
              <span className="text-crimson-400">Japan</span>{" "}
              Starts Here
            </h1>

            <p className="text-white/70 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-xl">
              Trusted consultancy for Nepali citizens seeking education, employment, and business opportunities in Japan. Honest guidance. Real results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-3.5 rounded-full font-body font-medium flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-crimson-900/40"
              >
                Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full font-body font-medium transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-white">{value}</div>
                <div className="text-white/50 text-xs font-body mt-1 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-crimson-600 font-body text-sm font-medium tracking-widest uppercase mb-3">
                  Who We Are
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-6 leading-tight">
                  A Decade of Trusted <span className="brush-underline">Connections</span>
                </h2>
                <p className="text-ink-700 font-body leading-relaxed mb-5">
                  Sakura Bridge Consultancy has been the go-to Nepal–Japan consultancy since 2015. We've helped thousands of Nepali nationals find their footing in Japan — whether as students, workers, entrepreneurs, or families.
                </p>
                <p className="text-ink-700 font-body leading-relaxed mb-8">
                  Our team includes certified immigration specialists, former Japanese language teachers, and professionals with first-hand experience living in Japan.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-crimson-600 font-body font-medium hover:gap-3 transition-all"
                >
                  Learn more about us <ArrowRight size={16} />
                </Link>
              </div>

              <div className="relative">
                <div className="bg-parchment rounded-2xl p-8 wave-pattern">
                  <div className="font-japanese text-5xl text-crimson-600/20 mb-4 text-right">桜橋</div>
                  <div className="space-y-4">
                    {[
                      "Government-registered consultancy (License #NJC-2015-001)",
                      "Certified Japanese Language Instructors",
                      "Direct partnerships with 12 Japanese universities",
                      "In-house legal team in Kathmandu & Tokyo office",
                      "Free initial consultation for all applicants",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-crimson-600 flex-shrink-0 mt-0.5" />
                        <span className="text-ink-700 text-sm font-body">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative torii color block */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-crimson-600 rounded-2xl -z-10 opacity-30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gold-400 rounded-xl -z-10 opacity-30" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-parchment diagonal-section">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-crimson-600 font-body text-sm font-medium tracking-widest uppercase mb-3">
                What We Offer
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900 mb-4">
                Our Services
              </h2>
              <p className="text-ink-700 font-body max-w-xl mx-auto">
                End-to-end support for every stage of your Japan journey
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="service-card bg-white rounded-2xl p-7 border border-parchment cursor-pointer group">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-xl font-semibold text-ink-900 mb-3 group-hover:text-crimson-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-ink-700 text-sm font-body leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-crimson-600 text-sm font-medium font-body opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-8 py-3.5 rounded-full font-body font-medium transition-all"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-crimson-600 font-body text-sm font-medium tracking-widest uppercase mb-3">
                Success Stories
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink-900">
                What Our Clients Say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div className="bg-white rounded-2xl p-7 border border-parchment h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={16} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                  <p className="text-ink-700 font-body text-sm leading-relaxed flex-1 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-parchment">
                    <div className="font-display font-semibold text-ink-900">{t.name}</div>
                    <div className="text-crimson-600 text-xs font-body mt-0.5">{t.role}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 bg-ink-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #dc2626 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="font-japanese text-6xl text-crimson-600/30 mb-4">日本へ</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Start Your Japan Journey?
          </h2>
          <p className="text-white/60 font-body mb-8 text-lg">
            Book a free 30-minute consultation. No commitment, just clarity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-crimson-600 hover:bg-crimson-700 text-white px-10 py-4 rounded-full font-body font-medium text-lg transition-all hover:shadow-lg"
          >
            Book Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
