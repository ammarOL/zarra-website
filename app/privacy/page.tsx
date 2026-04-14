import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Zarra",
  description:
    "Learn how Zarra protects your data, reflections, and usage information while delivering Quran-based spiritual guidance through the Quran.com API.",
};

const toc = [
  { id: "introduction", label: "Introduction" },
  { id: "data-we-collect", label: "Data We Collect" },
  { id: "how-we-use-data", label: "How We Use Your Data" },
  { id: "your-rights", label: "Your Rights" },
  { id: "security", label: "Security Measures" },
];

const rights = [
  {
    number: "01",
    title: "Access",
    description:
      "You may request a copy of the data associated with your Zarra account at any time.",
  },
  {
    number: "02",
    title: "Erasure",
    description:
      "You may request permanent deletion of your account data and associated reflections.",
  },
  {
    number: "03",
    title: "Portability",
    description:
      "You may request your journal and progress data in a structured, readable format.",
  },
  {
    number: "04",
    title: "Rectify",
    description:
      "You may request corrections to inaccurate personal information in your profile.",
  },
];

export default function PrivacyPage() {
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
            <span className="font-medium text-[#20208c] underline underline-offset-4">
              Privacy Policy
            </span>
            <Link className="transition-colors hover:text-[#15155c]" href="/terms">
              Terms
            </Link>
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
            Privacy is a{" "}
            <span className="bg-gradient-to-r from-[#4a4ab8] to-[#232389] bg-clip-text italic text-transparent">
              Sacred Trust.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5d5d74]">
            At Zarra, your spiritual journey is yours alone. We are committed to
            protecting your reflections, account data, and progress insights with care,
            clarity, and respect.
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
              id="introduction"
            >
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#141462]">
                Introduction
              </h2>
              <p className="mb-4 max-w-3xl text-sm leading-7 text-[#555576] sm:text-base">
                Zarra is designed to support mindful prayer and reflection. This Privacy
                Policy explains what data we collect, how we use it, and how we protect
                it when you use our website and application services.
              </p>
              <p className="max-w-3xl text-sm leading-7 text-[#555576] sm:text-base">
                We use Quran.com APIs to retrieve Quranic text, translations, and related
                scripture metadata requested by users. Personal reflections and spiritual
                notes are not shared with Quran.com as a commercial dataset, and Zarra
                does not sell personal data.
              </p>
              <p className="mt-5 text-sm font-medium text-[#66658b]">
                Last updated: April 14, 2026
              </p>
            </section>

            <section id="data-we-collect">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Data We Collect
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Account Information
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    When you create an account, we collect your name, email address, and
                    optional profile preferences so we can authenticate your sessions and
                    personalize your experience.
                  </p>
                </article>
                <article className="rounded-2xl border border-[#d9d8ea] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Journal &amp; Reflections
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    We store the reflections and journal entries you intentionally write.
                    This content is scoped to your account and handled as sensitive
                    spiritual content.
                  </p>
                </article>
              </div>
              <article className="mt-4 rounded-2xl border border-[#4545b3] bg-gradient-to-r from-[#3b3baf] to-[#2d2d92] p-6 text-white">
                <h3 className="mb-3 text-xl font-semibold">Usage Analytics</h3>
                <p className="max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
                  We collect limited analytics such as feature usage, navigation paths,
                  and error events to improve reliability and product quality. We avoid
                  using analytics to profile your personal beliefs and we do not sell this
                  data.
                </p>
              </article>
            </section>

            <section id="how-we-use-data">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                How We Use Your Data
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-[#dad9ed] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Personalized Reflections
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    We use your saved preferences and interactions to recommend relevant
                    verses, themes, and reminders. Quranic content itself is fetched from
                    Quran.com APIs when needed for your session.
                  </p>
                  <div className="mt-5 h-40 rounded-xl bg-[radial-gradient(circle_at_35%_25%,#ffecc0_0,#c6b17d_35%,#6f5a3e_65%,#3f3328_100%)]" />
                </article>
                <article className="rounded-2xl border border-[#dad9ed] bg-white p-6">
                  <h3 className="mb-3 text-xl font-semibold text-[#1b1b63]">
                    Progress Tracking
                  </h3>
                  <p className="text-sm leading-7 text-[#585777] sm:text-base">
                    We process your usage and milestones to display consistency insights,
                    streaks, and reflection history. This helps you see your progress over
                    time and maintain mindful habits.
                  </p>
                  <div className="mt-5 h-40 rounded-xl bg-[radial-gradient(circle_at_50%_45%,#fff6ad_0,#e0a73d_25%,#6d3a8e_60%,#1f194f_100%)]" />
                </article>
              </div>
            </section>

            <section id="your-rights">
              <h2 className="mb-5 border-b border-[#dfdeee] pb-3 text-3xl font-semibold tracking-tight text-[#141462]">
                Your Rights
              </h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {rights.map((right) => (
                  <article
                    className="rounded-2xl border border-[#d9d8ea] bg-white p-5 shadow-[inset_0_-3px_0_0_#30309d]"
                    key={right.title}
                  >
                    <p className="mb-3 text-3xl font-semibold tracking-tight text-[#c9c8e4]">
                      {right.number}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-[#1b1b63]">
                      {right.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#5d5d7b]">{right.description}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#5a5a78] sm:text-base">
                To submit a rights request, email{" "}
                <a
                  className="font-semibold text-[#20208c] underline underline-offset-4"
                  href="mailto:devxamr@gmail.com"
                >
                  devxamr@gmail.com
                </a>
                . We aim to acknowledge requests within 7 days and resolve them within 30
                days where legally and technically feasible.
              </p>
            </section>

            <section
              className="rounded-2xl border border-[#d8d8ee] bg-white p-6 sm:p-8"
              id="security"
            >
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#141462]">
                Security Measures
              </h2>
              <p className="mb-4 text-sm leading-7 text-[#585777] sm:text-base">
                We use modern safeguards such as encrypted transport, authenticated access
                controls, and periodic security reviews to reduce risk. No method of
                transmission or storage is perfectly secure, but we continuously improve
                our protections as the product evolves.
              </p>
              <p className="text-sm leading-7 text-[#585777] sm:text-base">
                If we make material changes to this policy, we will update the date above
                and communicate significant updates through the app or website.
              </p>
            </section>

            <section
              className="rounded-2xl border border-[#2a2a9b] bg-gradient-to-r from-[#272796] to-[#1d1d7d] p-8 text-center text-white"
              id="contact"
            >
              <h2 className="mb-3 text-3xl font-semibold tracking-tight">
                Have questions about your data?
              </h2>
              <p className="mx-auto mb-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                Our team is here to support your peace of mind. Contact Zarra privacy
                support for requests, clarifications, or concerns.
              </p>
              <a
                className="inline-flex rounded-full border border-white/80 bg-white px-7 py-3 text-sm font-semibold text-[#20208c] transition hover:bg-[#f2f1ff]"
                href="mailto:devxamr@gmail.com"
              >
                Contact Privacy Support
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
                    <li className="text-[#20208c]">Privacy Policy</li>
                    <li>Terms of Service</li>
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
