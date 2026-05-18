import { CheckCircle2, Users, Award, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const team = [
  {
    name: "Rajesh Karmacharya",
    role: "Founder & Chief Consultant",
    bio: "Former Nepali Embassy attaché in Tokyo with 15+ years of immigration expertise.",
    flag: "🇯🇵🇳🇵",
  },
  {
    name: "Yuki Tanaka",
    role: "Japan Operations Manager",
    bio: "Based in Osaka, Yuki handles student placement and employer partnerships across Japan.",
    flag: "🇯🇵",
  },
  {
    name: "Sangita Rai",
    role: "JLPT Language Instructor",
    bio: "Certified Japanese instructor with N1 proficiency. Has trained over 800 students.",
    flag: "🇯🇵🇳🇵",
  },
  {
    name: "Anish Maharjan",
    role: "Legal & Visa Specialist",
    bio: "Specializes in SSW visas, business visas, and complex immigration cases.",
    flag: "🇳🇵",
  },
];

const values = [
  {
    icon: Heart,
    title: "Honest Guidance",
    desc: "We tell you the truth about your chances — no false promises, no hidden fees.",
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    desc: "Immigration law changes constantly. Our team stays current so you don't have to.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "Every client gets a dedicated consultant. You're never just a case number.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    desc: "From your first inquiry to landing in Japan — we're with you the whole way.",
  },
];

const timeline = [
  { year: "2015", event: "Founded in Kathmandu with a team of 3" },
  { year: "2017", event: "Opened Tokyo liaison office" },
  { year: "2019", event: "Partnered with 8 Japanese language schools" },
  { year: "2021", event: "Launched SSW (Specified Skilled Worker) placement program" },
  { year: "2023", event: "1,000th visa approved milestone" },
  { year: "2025", event: "Expanded to 12 university partnerships across Japan" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-ink-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 40%, #dc2626 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-crimson-400 font-body text-sm tracking-widest uppercase mb-3">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-white/60 font-body text-xl max-w-2xl leading-relaxed">
            Born from a simple belief — that every Nepali who dreams of Japan deserves an honest guide.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold text-ink-900 mb-6">
                  Why We Exist
                </h2>
                <p className="text-ink-700 font-body leading-relaxed mb-5">
                  In 2015, our founder Rajesh Karmacharya returned from Tokyo after a decade at the Nepali Embassy. He saw too many Nepali citizens being misled by unregistered agents — paying huge fees for services that were substandard or outright fraudulent.
                </p>
                <p className="text-ink-700 font-body leading-relaxed mb-5">
                  Sakura Bridge was his answer. A consultancy built on transparency, where every fee is explained and every process is documented. Where clients receive honest assessments, not just the answers they want to hear.
                </p>
                <p className="text-ink-700 font-body leading-relaxed">
                  A decade later, we've helped over 2,400 Nepali nationals build new lives in Japan — and we're just getting started.
                </p>
              </div>
              <div className="bg-parchment rounded-2xl p-8 wave-pattern">
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-6">Our Journey</h3>
                <div className="space-y-5">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-4">
                      <div className="font-display font-bold text-crimson-600 text-sm w-12 flex-shrink-0 pt-0.5">
                        {item.year}
                      </div>
                      <div className="flex-1 pb-5 border-b border-parchment last:border-0">
                        <p className="text-ink-700 text-sm font-body">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-parchment">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-ink-900 mb-4">Our Values</h2>
              <p className="text-ink-700 font-body">The principles that guide every consultation</p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 text-center border border-parchment service-card">
                  <div className="w-12 h-12 bg-crimson-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon size={22} className="text-crimson-600" />
                  </div>
                  <h3 className="font-display font-semibold text-ink-900 mb-2">{v.title}</h3>
                  <p className="text-ink-700 text-sm font-body leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-ink-900 mb-4">Meet the Team</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden border border-parchment service-card">
                  <div className="h-32 bg-gradient-to-br from-crimson-600/20 to-gold-400/20 flex items-center justify-center text-5xl">
                    {member.flag}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-ink-900">{member.name}</h3>
                    <p className="text-crimson-600 text-xs font-body mb-3 mt-1">{member.role}</p>
                    <p className="text-ink-700 text-sm font-body leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
