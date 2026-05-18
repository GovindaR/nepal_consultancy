"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "Student Visa",
  "Work Visa / SSW",
  "Business Visa",
  "Family / Spouse Visa",
  "Japanese Language Training",
  "Pre-Departure Support",
  "General Inquiry",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-ink-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 40%, #dc2626 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-crimson-400 font-body text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-white/60 font-body text-xl max-w-2xl leading-relaxed">
            Have questions? Ready to start? Fill out the form or reach us directly. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-6">
                  Reach Us Directly
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      Icon: MapPin,
                      label: "Office Address",
                      value: "Putalisadak, Kathmandu, Nepal\nNear Tribhuvan University Teaching Hospital",
                    },
                    {
                      Icon: Phone,
                      label: "Phone / WhatsApp",
                      value: "+977-1-XXX-XXXX\n+977-98X-XXX-XXXX",
                    },
                    {
                      Icon: Mail,
                      label: "Email",
                      value: "info@sakurabridge.com.np\nvisa@sakurabridge.com.np",
                    },
                    {
                      Icon: Clock,
                      label: "Office Hours",
                      value: "Sunday – Friday\n9:00 AM – 6:00 PM NPT",
                    },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 bg-crimson-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-crimson-600" />
                      </div>
                      <div>
                        <div className="text-xs font-body text-ink-700/50 uppercase tracking-wider mb-1">
                          {label}
                        </div>
                        <div className="text-ink-800 text-sm font-body leading-relaxed whitespace-pre-line">
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Japanese office */}
              <div className="bg-ink-900 rounded-2xl p-6 text-white">
                <div className="font-japanese text-gold-400 text-sm mb-3">日本事務所</div>
                <h3 className="font-display font-semibold mb-2">Japan Liaison Office</h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  Namba, Osaka-shi, Osaka, Japan<br />
                  TEL: +81-6-XXXX-XXXX<br />
                  <span className="text-white/40 text-xs">Mon–Fri, 10:00–18:00 JST</span>
                </p>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-parchment bg-parchment h-48 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin size={32} className="text-crimson-400 mx-auto mb-2" />
                  <p className="text-ink-700/60 text-sm font-body">Putalisadak, Kathmandu</p>
                  <a
                    href="https://maps.google.com/?q=Putalisadak,Kathmandu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-crimson-600 text-xs underline mt-1 inline-block"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-parchment shadow-sm">
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-ink-700/60 text-sm font-body mb-8">
                  Fill in your details and we'll get back to you within one business day.
                </p>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">
                      Message Received!
                    </h3>
                    <p className="text-ink-700/70 font-body max-w-sm">
                      Thank you for reaching out. A member of our team will contact you within one business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-crimson-600 text-sm font-body underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-body font-medium text-ink-700 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full border border-parchment rounded-xl px-4 py-3 text-sm font-body text-ink-900 bg-cream transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-ink-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full border border-parchment rounded-xl px-4 py-3 text-sm font-body text-ink-900 bg-cream transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-body font-medium text-ink-700 uppercase tracking-wider mb-2">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+977-98X-XXXXXXX"
                          className="w-full border border-parchment rounded-xl px-4 py-3 text-sm font-body text-ink-900 bg-cream transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-ink-700 uppercase tracking-wider mb-2">
                          Service Interested In *
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full border border-parchment rounded-xl px-4 py-3 text-sm font-body text-ink-900 bg-cream transition-all"
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-body font-medium text-ink-700 uppercase tracking-wider mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your situation, goals, and any specific questions you have…"
                        className="w-full border border-parchment rounded-xl px-4 py-3 text-sm font-body text-ink-900 bg-cream transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm font-body">
                        <AlertCircle size={16} />
                        {errorMsg || "Something went wrong. Please try again."}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-crimson-600 hover:bg-crimson-700 disabled:opacity-60 text-white py-3.5 rounded-xl font-body font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-ink-700/40 font-body">
                      We respect your privacy. Your details are never shared with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
