import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Zarra",
  description:
    "Read Zarra's Terms of Service covering account eligibility, acceptable use, third-party Quran.com API dependencies, and your responsibilities when using the app.",
};

const toc = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "eligibility", label: "Eligibility (13+)" },
  { id: "account-security", label: "Account Responsibilities" },
  { id: "acceptable-use", label: "Permitted and Prohibited Use" },
  { id: "third-party-services", label: "Quran.com API & Third Parties" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "service-availability", label: "Service Availability" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limitation-liability", label: "Limitation of Liability" },
  { id: "termination", label: "Termination" },
  { id: "disputes", label: "Disputes" },
  { id: "changes", label: "Changes to Terms" },
];

const responsibilities = [
  {
    number: "01",
    title: "Account Security",
    description:
      "You are responsible for safeguarding your login credentials and all activity under your account.",
  },
  {
    number: "02",
    title: "Respectful Use",
    description:
      "You agree not to misuse the service, interfere with security, or attempt unauthorized access.",
  },
  {
    number: "03",
    title: "Lawful Conduct",
    description:
      "You agree to use Zarra in compliance with applicable laws and regulations in your location.",
  },
  {
    number: "04",
    title: "Accurate Information",
    description:
      "You agree to provide truthful account details and promptly update them when they change.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f2f1f8] text-[#1f1f35]">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        <header className="mb-12 flex items-center justify-between">
          <Link className="text-lg font-semibold tracking-tight text-[#13134f]" href="/">
            Zarra
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#5c5c76] sm:flex">
            <Link className="transition-colors hover:text-[#15155c]" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-[#15155c]" href="/privacy">
              Privacy Policy
            </Link>
            <span className="font-medium text-[#20208c] underline underline-offset-4">
              Terms
            </span>
          </nav>
          <a
            className="rounded-full border border-[#232389] bg-[#232389] px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[#1e1e73]"
            href="#contact"
          >
            Download App
          </a>
        </header>

        <section className="mb-12 text-center lg:mb-14">
          <p className="mb-5 inline-flex rounded-full border border-[#d8d7ea] bg-white/60 px-4 py-1 text-[10px] tracking-[0.16em] text-[#5f5e7d] uppercase">
            Legal &amp; Safety
          </p>
          <h1 className="mx-auto mb-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#17176a] sm:text-6xl">
            Terms for a{" "}
            <span className="bg-gradient-to-r from-[#4a4ab8] to-[#232389] bg-clip-text italic text-transparent">
              Mindful Journey.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5d5d74]">
            These Terms of Service describe the rules, responsibilities, and limitations
            that apply when you use Zarra and its Quran-based reflection features.
          </p>
        </section>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <p className="mb-4 text-[10px] tracking-[0.16em] text-[#7d7c96] uppercase">
                Table of Contents
              </p>
              <ul className="space-y-3 text-sm text-[#64637d]">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      className="block border-l border-[#cecee6] pl-3 transition-colors hover:border-[#232389] hover:text-[#17176a]"
                      href={`#${item.id}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-12">
            <section
              className="rounded-2xl border border-[#dddcef] bg-[#eeedfa] p-6 sm:p-8"
              id="acceptance"
            >
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#141462]">
                Acceptance of Terms
              </h2>
              <p className="mb-4 max-w-3xl text-sm leading-7 text-[#555576] sm:text-base">
                By accessing or using Zarra, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, you must stop using the
                website and any related app services.
              </p>
              <p className="max-w-3xl text-sm leading-7 text-[#555576] sm:text-base">
                These terms apply to all users of Zarra, including visitors, registered
                users, and anyone accessing content made available through Quran.com APIs.
              </p>
              <p className="mt-5 text-sm font-medium text-[#66658b]">
                Effective date: April 14, 2026
              </p>
            </section>

            <section id="eligibility">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Eligibility (13+)
              </h2>
              <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  You must be at least 13 years old to create or use a Zarra account. If
                  you are under the age of majority in your jurisdiction, you confirm that
                  your use is supervised by a parent or legal guardian.
                </p>
              </article>
            </section>

            <section id="account-security">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Account Responsibilities &amp; Security
              </h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {responsibilities.map((item) => (
                  <article
                    className="rounded-2xl border border-[#d9d8ea] bg-white p-5 shadow-[inset_0_-3px_0_0_#30309d]"
                    key={item.title}
                  >
                    <p className="mb-3 text-3xl font-semibold tracking-tight text-[#c9c8e4]">
                      {item.number}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-[#1b1b63]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#5d5d7b]">{item.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="acceptable-use">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Permitted and Prohibited Use
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Permitted Use
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    You may use Zarra for personal spiritual growth, reflection, and
                    lawful, non-commercial engagement with content and tools provided by
                    the service.
                  </p>
                </article>
                <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Prohibited Use
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    You may not reverse engineer, scrape protected content at scale, abuse
                    APIs, distribute malicious code, impersonate others, or use Zarra to
                    violate rights, laws, or platform safety expectations.
                  </p>
                </article>
              </div>
            </section>

            <section id="third-party-services">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Quran.com API &amp; Third-Party Services
              </h2>
              <article className="rounded-2xl border border-[#4545b3] bg-gradient-to-r from-[#3b3baf] to-[#2d2d92] p-6 text-white">
                <h3 className="mb-3 text-xl font-semibold">
                  Third-Party Content and Dependencies
                </h3>
                <p className="max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                  Zarra relies on Quran.com APIs for Quranic text, translations, and
                  related metadata. Availability, accuracy, and continuity of third-party
                  services may affect feature behavior. Your use of third-party services
                  may also be subject to their respective terms and policies.
                </p>
              </article>
            </section>

            <section id="intellectual-property">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Intellectual Property
              </h2>
              <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  Zarra’s branding, interface, and original product materials are owned by
                  Zarra or its licensors. Except where permitted by law, you may not copy,
                  modify, distribute, sell, or create derivative works from protected
                  content without written permission.
                </p>
              </article>
            </section>

            <section id="service-availability">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Service Availability and Changes
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-[#dad9ed] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Availability
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    We work to keep Zarra available and reliable, but we do not guarantee
                    uninterrupted access at all times. Maintenance, outages, and third-party
                    disruptions can occur.
                  </p>
                  <div className="mt-5 h-40 rounded-xl bg-[radial-gradient(circle_at_35%_25%,#ffecc0_0,#c6b17d_35%,#6f5a3e_65%,#3f3328_100%)]" />
                </article>
                <article className="rounded-2xl border border-[#dad9ed] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Product Changes
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    We may update, improve, suspend, or discontinue features at any time
                    to maintain quality, security, and long-term product direction.
                  </p>
                  <div className="mt-5 h-40 rounded-xl bg-[radial-gradient(circle_at_50%_45%,#fff6ad_0,#e0a73d_25%,#6d3a8e_60%,#1f194f_100%)]" />
                </article>
              </div>
            </section>

            <section id="disclaimers">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Disclaimers
              </h2>
              <article className="rounded-2xl border border-[#d8d8ee] bg-white p-6 sm:p-8">
                <p className="mb-4 text-sm leading-7 text-[#585777] sm:text-base">
                  Zarra is provided on an &quot;as is&quot; and &quot;as available&quot;
                  basis. To the maximum extent permitted by applicable law, we disclaim
                  warranties of merchantability, fitness for a particular purpose, and
                  non-infringement.
                </p>
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  Zarra provides spiritual support tools and not medical, legal, or
                  clinical advice. You remain responsible for your personal decisions.
                </p>
              </article>
            </section>

            <section id="limitation-liability">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Limitation of Liability
              </h2>
              <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  To the fullest extent permitted by law, Zarra and its affiliates will
                  not be liable for indirect, incidental, special, consequential, or
                  punitive damages, or for loss of data, profits, goodwill, or business
                  interruption arising from your use of the service.
                </p>
              </article>
            </section>

            <section id="termination">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Termination or Suspension
              </h2>
              <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  We may suspend or terminate access if we reasonably believe these terms
                  are violated, security is at risk, or continued access may harm users,
                  systems, or legal compliance obligations.
                </p>
              </article>
            </section>

            <section id="disputes">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Dispute Process
              </h2>
              <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                <p className="mb-4 text-sm leading-7 text-[#585777] sm:text-base">
                  If you have a dispute or claim related to Zarra, you agree to contact us
                  first and attempt informal resolution in good faith before starting legal
                  proceedings.
                </p>
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  If informal resolution does not resolve the dispute, either party may
                  pursue available remedies through courts of competent jurisdiction.
                </p>
              </article>
            </section>

            <section id="changes">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Changes to Terms and Contact
              </h2>
              <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                <p className="mb-4 text-sm leading-7 text-[#585777] sm:text-base">
                  We may update these Terms of Service from time to time. Material updates
                  will be reflected by revising the effective date and may be communicated
                  through the app or website.
                </p>
                <p className="text-sm leading-7 text-[#585777] sm:text-base">
                  Questions about these terms can be sent to{" "}
                  <a
                    className="font-semibold text-[#20208c] underline underline-offset-4"
                    href="mailto:devxamr@gmail.com"
                  >
                    devxamr@gmail.com
                  </a>
                  .
                </p>
              </article>
            </section>

            <section
              className="rounded-2xl border border-[#2a2a9b] bg-gradient-to-r from-[#272796] to-[#1d1d7d] p-8 text-center text-white"
              id="contact"
            >
              <h2 className="mb-3 text-3xl font-semibold tracking-tight">
                Questions about these terms?
              </h2>
              <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                Reach out to our team for clarifications about eligibility, account use,
                policy updates, or dispute resolution.
              </p>
              <a
                className="inline-flex rounded-full border border-white/80 bg-white px-7 py-3 text-sm font-semibold text-[#20208c] transition hover:bg-[#f2f1ff]"
                href="mailto:devxamr@gmail.com"
              >
                Contact Terms Support
              </a>
            </section>

            <footer className="mt-4 border-t border-[#d8d8eb] pt-8">
              <div className="grid gap-8 text-sm text-[#5b5b76] sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="mb-2 text-base font-semibold text-[#15155d]">Zarra</p>
                  <p className="leading-6">
                    A digital sanctuary for mindful prayer and reflection.
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs tracking-[0.14em] text-[#757497] uppercase">
                    Navigation
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link className="hover:text-[#20208c]" href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-[#20208c]" href="/privacy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="text-[#20208c]">Terms of Service</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs tracking-[0.14em] text-[#757497] uppercase">
                    Support
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a className="hover:text-[#20208c]" href="mailto:devxamr@gmail.com">
                        Contact Us
                      </a>
                    </li>
                    <li>FAQ</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs tracking-[0.14em] text-[#757497] uppercase">
                    Connect
                  </p>
                  <p className="leading-6">
                    Email:{" "}
                    <a className="hover:text-[#20208c]" href="mailto:devxamr@gmail.com">
                      devxamr@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <p className="mt-8 border-t border-[#e1e0ef] pt-5 text-xs text-[#747391]">
                Made with reverence for the contemplative life.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
