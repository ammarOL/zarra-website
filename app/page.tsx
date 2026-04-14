import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zarra | Sanctuary for Reflection",
  description:
    "A calm digital sanctuary for reading, reflecting, and returning to the Quran with steadier attention.",
};

const ritualFeatures = [
  {
    title: "Voice recitation",
    description: "Clear recitation audio designed for unhurried listening.",
  },
  {
    title: "Contextual tafsir",
    description: "Gentle explanations to support understanding with care.",
  },
];

const readingPoints = [
  "Search within surahs and themes with clarity.",
  "Move between translations without losing focus.",
  "Adjust text settings for comfortable, longer reading.",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f2f1f8] text-[#171739]">
      <div className="mx-auto max-w-6xl px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        <header className="mb-12 flex items-center justify-between">
          <Link className="text-lg font-semibold tracking-tight text-[#13134f]" href="/">
            Zarra
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#5d5d78] sm:flex">
            <Link className="text-[#20208c] underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-[#1a1a63]" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="transition-colors hover:text-[#1a1a63]" href="/terms">
              Terms
            </Link>
          </nav>
          <a
            className="rounded-full border border-[#232389] bg-[#232389] px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-[#1e1e73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b5bcf] focus-visible:ring-offset-2"
            href="#download"
          >
            Download app
          </a>
        </header>

        <section
          className="relative mb-20 overflow-hidden rounded-3xl border border-[#e2e1ef] bg-[linear-gradient(180deg,#f7f6fb_0%,#f0eff7_100%)] px-6 py-12 sm:px-10 lg:px-14"
          id="sanctuary"
        >
          <div className="absolute right-6 top-8 hidden h-[360px] w-[250px] rounded-t-[130px] border-[8px] border-[#e6e5ee] bg-white/20 lg:block">
            <div className="absolute inset-x-[18%] top-8 h-[2px] bg-[#ecebf4]" />
            <div className="absolute inset-x-[18%] bottom-8 h-[2px] bg-[#ecebf4]" />
            <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-[#ecebf4]" />
            <div className="absolute bottom-[35%] left-0 right-0 h-[2px] bg-[#ecebf4]" />
            <div className="absolute -right-12 top-1/3 h-32 w-32 rounded-full bg-[#f5f3ff] blur-2xl" />
          </div>

          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-[#d9d8ea] bg-white/70 px-4 py-1 text-[10px] tracking-[0.16em] text-[#68678a] uppercase">
              Introducing Zarra
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-[#17176a] sm:text-6xl">
              A digital sanctuary
              <br />
              for{" "}
              <span className="bg-gradient-to-r from-[#4a4ab8] to-[#232389] bg-clip-text italic text-transparent">
                daily devotion.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-[#5f5f78] sm:text-lg">
              Read with steadiness, reflect with intention, and return to the Quran in a
              quieter rhythm.
            </p>
            <div className="flex flex-wrap gap-3" id="download">
              <a
                className="rounded-full border border-[#232389] bg-[#232389] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e1e73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b5bcf] focus-visible:ring-offset-2"
                href="#"
              >
                Download app
              </a>
              <a
                className="rounded-full border border-[#dad9eb] bg-[#eeedf7] px-6 py-3 text-sm font-medium text-[#26265f] transition hover:bg-[#e7e5f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b5bcf] focus-visible:ring-offset-2"
                href="#"
              >
                Android early access
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto mb-14 grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-12">
        <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-[#d9d8ea] bg-white p-4 shadow-[0_12px_40px_-18px_rgba(20,20,80,0.35)]">
          <div className="rounded-[1.5rem] border border-[#ecebf4] bg-[#fbfbfe] p-4">
            <div className="mb-10 flex items-center justify-between text-xs text-[#7a7997]">
              <span>Menu</span>
              <span className="font-semibold text-[#1a1a66]">Zarra</span>
              <span>Profile</span>
            </div>
            <p className="mb-3 text-center text-[10px] tracking-[0.12em] text-[#8786a2] uppercase">
              Today&apos;s ayah
            </p>
            <p className="mb-2 text-center text-3xl text-[#1d1d77]">وَمَعَ الصَّبْرِ</p>
            <p className="mb-8 text-center text-xs text-[#666681]">
              “With patience, there is opening.”
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#262694] text-white">
                ▶
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e9e8f8] text-xs text-[#2b2b8f]">
                1x
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-[#18186b]">
            The daily ritual
          </h2>
          <p className="mb-6 text-sm leading-7 text-[#5f5f79] sm:text-base">
            Begin with a passage chosen for reflection. Listen, read, and pause without
            rush.
          </p>
          <ul className="space-y-4">
            {ritualFeatures.map((feature) => (
              <li className="flex gap-3" key={feature.title}>
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e5e4f7] text-xs text-[#25258d]">
                  ●
                </span>
                <div>
                  <p className="font-semibold text-[#1c1c66]">{feature.title}</p>
                  <p className="text-sm text-[#666683]">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-14 border-y border-[#e5e4f0] bg-[#ecebf6]" id="journal">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
          <div>
            <h2 className="mb-3 text-3xl font-semibold tracking-tight text-[#18186b]">
              Turn reading into{" "}
              <span className="bg-gradient-to-r from-[#4a4ab8] to-[#2c2c90] bg-clip-text italic text-transparent">
                reflection.
              </span>
            </h2>
            <p className="mb-5 max-w-xl text-sm leading-7 text-[#5f5f79] sm:text-base">
              Keep brief notes after each session. A few honest lines are enough to mark
              what you noticed.
            </p>
            <article className="max-w-xl rounded-2xl border border-[#d9d8ea] bg-white p-5">
              <p className="mb-2 text-[10px] tracking-[0.14em] text-[#7e7d98] uppercase">
                Journal entry • Surah Al-Kahf
              </p>
              <p className="text-sm leading-7 text-[#5c5b77]">
                “Today&apos;s reading reminded me that patience is often quiet. I can return
                with sincerity, even in short moments.”
              </p>
            </article>
          </div>

          <div className="h-56 rounded-2xl border border-[#cbc9da] bg-[linear-gradient(135deg,#f4f0e0_0%,#e5dbc2_45%,#f8f6ee_100%)] p-5 shadow-[0_12px_32px_-20px_rgba(22,22,80,0.45)]">
            <div className="relative h-full rounded-xl bg-[radial-gradient(circle_at_60%_28%,#ffffff_0,#e6e2d4_34%,#91886f_100%)]">
              <div className="absolute bottom-4 left-5 h-28 w-20 rounded-md bg-[#fdfcf8] shadow-[0_10px_20px_-12px_rgba(0,0,0,0.35)]" />
              <div className="absolute bottom-4 left-[5.4rem] h-28 w-20 rounded-md bg-[#ece8dc] shadow-[0_10px_20px_-12px_rgba(0,0,0,0.25)]" />
              <div className="absolute right-8 top-6 h-32 w-1 rounded bg-[#252563]" />
              <div className="absolute right-[1.85rem] top-4 h-5 w-5 rounded-full border border-[#252563] bg-[#faf9f3]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-14 max-w-6xl px-5 sm:px-8 lg:px-12" id="journey">
        <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight text-[#18186b]">
          Witness your journey
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-7 text-[#61607b] sm:text-base">
          Gentle progress views help you stay consistent without pressure.
        </p>
        <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
          <article className="rounded-2xl border border-[#d9d8ea] bg-[#f6f5fb] p-6 text-center">
            <p className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#efcf8d] text-sm text-[#382e11]">
              ✦
            </p>
            <p className="text-3xl font-semibold text-[#212176]">12</p>
            <p className="text-xs tracking-[0.14em] text-[#6b6a87] uppercase">
              Current streak
            </p>
          </article>
          <article className="rounded-2xl border border-[#d9d8ea] bg-[#e9e8f6] p-6">
            <p className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#6e6d89] uppercase">
              Monthly reflection volume
            </p>
            <div className="flex h-28 items-end gap-2">
              <span className="w-full rounded-md bg-[#c9c8e3]" style={{ height: "36%" }} />
              <span className="w-full rounded-md bg-[#a8a6d6]" style={{ height: "48%" }} />
              <span className="w-full rounded-md bg-[#b9b8de]" style={{ height: "44%" }} />
              <span className="w-full rounded-md bg-[#3535a4]" style={{ height: "66%" }} />
              <span className="w-full rounded-md bg-[#8f8dc8]" style={{ height: "55%" }} />
              <span className="w-full rounded-md bg-[#a9a8d6]" style={{ height: "46%" }} />
              <span className="w-full rounded-md bg-[#4a4ab7]" style={{ height: "72%" }} />
            </div>
          </article>
        </div>
      </section>

      <section className="mb-16 bg-[#37379b] py-14" id="reading">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-12">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold leading-tight tracking-tight">
              A focused reading
              <br />
              experience.
            </h2>
            <p className="mb-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Move through the Quran with fewer distractions and more attention to meaning.
            </p>
            <ul className="space-y-2 text-sm text-white/90 sm:text-base">
              {readingPoints.map((point) => (
                <li className="flex items-start gap-2" key={point}>
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f0d289] text-[10px] text-[#2a225f]">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-80 rounded-2xl border border-[#5858b6] bg-[radial-gradient(circle_at_50%_25%,#2f5a4f_0,#17273f_45%,#111633_100%)] p-4 shadow-[0_16px_32px_-20px_rgba(0,0,0,0.6)]">
            <div className="relative h-full rounded-xl border border-white/10">
              <div className="absolute bottom-8 left-1/2 h-28 w-52 -translate-x-1/2 rounded-[100%] border border-[#60431a] bg-[linear-gradient(180deg,#ccb07d_0%,#6f4d24_100%)] shadow-[0_8px_20px_-14px_rgba(0,0,0,0.85)]" />
              <div className="absolute bottom-14 left-[29%] h-20 w-24 origin-bottom-right -rotate-12 rounded-l-md bg-[linear-gradient(180deg,#f3ecda_0%,#d9ccb4_100%)] shadow-[0_8px_18px_-12px_rgba(0,0,0,0.55)]" />
              <div className="absolute bottom-14 right-[29%] h-20 w-24 origin-bottom-left rotate-12 rounded-r-md bg-[linear-gradient(180deg,#f3ecda_0%,#d9ccb4_100%)] shadow-[0_8px_18px_-12px_rgba(0,0,0,0.55)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-6xl px-5 text-center sm:px-8 lg:px-12">
        <h2 className="mb-3 text-4xl font-semibold tracking-tight text-[#17176a] sm:text-5xl">
          Begin gently, and keep returning.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-[#5f5f78] sm:text-base">
          Zarra is built for steady practice. No noise, no pressure, just a place to
          read, listen, and reflect.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            className="rounded-full border border-[#232389] bg-[#232389] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1e1e73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b5bcf] focus-visible:ring-offset-2"
            href="#"
          >
            Download app
          </a>
          <a
            className="rounded-full border border-[#dad9eb] bg-[#eeedf7] px-7 py-3 text-sm font-medium text-[#26265f] transition hover:bg-[#e7e5f3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b5bcf] focus-visible:ring-offset-2"
            href="#"
          >
            Android early access
          </a>
        </div>
      </section>

      <footer className="border-t border-[#dcdbe9] bg-[#eef0f4]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-[#5d5c78] sm:px-8 lg:grid-cols-4 lg:px-12">
          <div>
            <p className="mb-2 text-base font-semibold text-[#15155d]">Zarra</p>
            <p className="leading-6">Crafted for the contemplative soul.</p>
          </div>
          <div>
            <p className="mb-2 text-xs tracking-[0.14em] text-[#747392] uppercase">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <Link className="text-[#20208c]" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#20208c]" href="/privacy">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#20208c]" href="/terms">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs tracking-[0.14em] text-[#747392] uppercase">
              Divine guidance
            </p>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#20208c]" href="#journal">
                  Journal
                </a>
              </li>
              <li>
                <a className="hover:text-[#20208c]" href="#reading">
                  Tafsir
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs tracking-[0.14em] text-[#747392] uppercase">
              Contact
            </p>
            <a className="hover:text-[#20208c]" href="mailto:devxamr@gmail.com">
              devxamr@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
