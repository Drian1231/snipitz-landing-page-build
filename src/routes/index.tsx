import { createFileRoute } from "@tanstack/react-router";
import heroNetwork from "@/assets/hero-network.jpg";
import audienceLattice from "@/assets/audience-lattice.jpg";
import { Cta } from "@/components/cta";
import { LogoLockup, LogoMark } from "@/components/brand";
import { Reveal } from "@/components/reveal";
import { CONTACT_EMAIL, LINKEDIN_URL, mailto } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Snipitz — Commercial Intelligence for Sports Rights Holders" },
      {
        name: "description",
        content:
          "Snipitz turns your anonymous digital audience into verified, sponsor-ready intelligence, so your commercial team can close bigger partnerships, faster.",
      },
      { property: "og:title", content: "Snipitz — Commercial Intelligence for Sports Rights Holders" },
      {
        property: "og:description",
        content:
          "Prove the value of the fans you don't know yet. Verified identity resolution, monthly commercial intelligence, and direct support for sports rights holders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SnipitzPage,
});

const CAPABILITIES = [
  {
    index: "01",
    title: "Data Foundation",
    tag: "Identity resolution",
    body: "We resolve anonymous visitors on your existing website and app into verified identity — built from actual purchase history and demographic data, not browsing behaviour or guesswork.",
  },
  {
    index: "02",
    title: "Commercial Intelligence",
    tag: "The core product",
    body: "Monthly analysis translating your audience into brand category matches, named sponsor targets, and the ROI case each brand's team needs to say yes.",
  },
  {
    index: "03",
    title: "Direct Support",
    tag: "Included",
    body: "Direct access to a commercial partner with 15 years of senior sports experience — brand meeting prep, pitch review, warm introductions.",
  },
];

const PERSONAS = [
  {
    name: "The Lean Team",
    body: "Real commercial ambition, but no in-house data analyst to build the audience case for sponsors.",
  },
  {
    name: "The Agency Patchwork",
    body: "Fan data scattered across a ticketing vendor, a social agency, and a CRM — nobody owns the full picture.",
  },
  {
    name: "The Growing Property",
    body: "Building commercial infrastructure from scratch, without the internal team to match the ambition.",
  },
  {
    name: "The Underleveraged Audience",
    body: "A large, engaged digital following that sponsorship revenue doesn't yet reflect.",
  },
];

function SnipitzPage() {
  return (
    <div className="bg-navy font-sans antialiased">
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhoFor />
      <FinalCta />
      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroNetwork}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1008}
          fetchPriority="high"
          decoding="async"
          className="drift absolute top-0 right-0 h-full w-full object-cover opacity-[0.5] [mask-image:linear-gradient(to_left,black_5%,transparent_68%)] md:w-[68%] lg:w-[62%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/20 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[80rem] flex-col px-6 py-8 sm:px-10 lg:px-14">
        <header className="rise-in flex items-center justify-between">
          <LogoLockup />
        </header>

        <div className="flex flex-1 items-center py-16 lg:py-24">
          <div className="max-w-3xl">
            <p
              className="eyebrow rise-in text-accent-blue"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              Commercial intelligence for sports rights holders
            </p>

            <h1
              className="headline rise-in mt-7 text-[clamp(2.6rem,7vw,5.1rem)] text-light"
              style={{ "--rise-delay": "220ms" } as React.CSSProperties}
            >
              Prove the value of the fans you{" "}
              <span className="text-accent-blue italic">don&rsquo;t</span> know yet.
            </h1>

            <p
              className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
              style={{ "--rise-delay": "340ms" } as React.CSSProperties}
            >
              Snipitz turns your anonymous digital audience into verified, sponsor-ready
              intelligence — so your commercial team can close bigger partnerships, faster.
            </p>

            <div
              className="rise-in mt-11"
              style={{ "--rise-delay": "460ms" } as React.CSSProperties}
            >
              <Cta
                href={mailto(
                  "Snipitz — conversation request",
                  "Hi Snipitz team,\n\nWe'd like to talk about our audience.\n\nOrganisation:\nDigital properties:\nWhat we're trying to prove:\n",
                )}
              >
                Talk to us
              </Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- problem */

function Problem() {
  return (
    <section className="relative bg-light text-ink">
      <div className="mx-auto w-full max-w-[80rem] px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
        <Reveal as="p" className="eyebrow text-accent-blue">
          The problem
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <h2 className="headline text-[clamp(2rem,4.4vw,3.35rem)] text-ink">
              Rights holders don&rsquo;t know who their fans actually are.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-lg leading-relaxed text-ink-200">
                Sports organisations know only{" "}
                <span className="font-semibold text-ink">24%</span> of their fanbase by name and
                contact detail. One in three cannot identify even that much.
              </p>

              <div className="mt-7">
                <div
                  className="flex h-2.5 w-full overflow-hidden rounded-full bg-light-200"
                  role="img"
                  aria-label="24 per cent of a fanbase is known by name and contact detail; 76 per cent is not"
                >
                  <span className="h-full w-[24%] bg-accent-blue" />
                  <span className="h-full flex-1 bg-[repeating-linear-gradient(90deg,var(--color-steel)_0_3px,transparent_3px_9px)] opacity-45" />
                </div>
                <div className="mt-3 flex justify-between text-xs font-medium tracking-wide text-steel">
                  <span className="text-accent-blue">24% known</span>
                  <span>76% invisible</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="p"
          delay={160}
          className="headline mt-16 max-w-4xl border-l-2 border-accent-blue pl-6 text-[clamp(1.35rem,2.6vw,2.05rem)] leading-[1.25] text-ink sm:pl-8"
        >
          When a brand asks who your audience is, &ldquo;we have 500,000 monthly visitors&rdquo;
          isn&rsquo;t an answer they can act on.
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- what we do */

function WhatWeDo() {
  return (
    <section className="relative bg-navy">
      <div className="mx-auto w-full max-w-[80rem] px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
        <Reveal as="h2" className="headline max-w-2xl text-[clamp(2rem,4.4vw,3.35rem)] text-light">
          This is how Snipitz works.
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {CAPABILITIES.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 110}
              className="group relative flex h-full flex-col rounded-2xl border border-light/10 bg-navy-800/60 p-8 transition-colors duration-500 hover:border-accent-blue/50 hover:bg-navy-700/60"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl text-accent-blue/70">{card.index}</span>
                <span className="eyebrow text-[0.62rem] text-steel">{card.tag}</span>
              </div>

              <h3 className="headline mt-8 text-2xl text-light">{card.title}</h3>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-mist">{card.body}</p>

              <div className="mt-8 h-px w-full bg-light/10" />
              <div className="mt-4 h-px w-10 bg-accent-blue transition-all duration-500 group-hover:w-20" />
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={120}
          className="mt-5 overflow-hidden rounded-2xl border border-accent-blue/25 bg-gradient-to-r from-navy-700 via-navy-800 to-navy-700 px-8 py-10 text-center sm:px-12"
        >
          <p className="headline mx-auto max-w-3xl text-[clamp(1.3rem,2.7vw,2.1rem)] text-light">
            Revenue from the audience you already have, and the one you{" "}
            <span className="text-accent-green">didn&rsquo;t know</span> you had.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- who it's for */

function WhoFor() {
  return (
    <section className="relative bg-light text-ink">
      <div className="mx-auto w-full max-w-[80rem] px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
        <Reveal as="h2" className="headline max-w-2xl text-[clamp(2rem,4.4vw,3.35rem)] text-ink">
          Built for organisations like yours.
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {PERSONAS.map((persona, i) => (
            <Reveal
              key={persona.name}
              delay={i * 90}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-card p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-blue/45 hover:shadow-lift"
            >
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                <span className="eyebrow text-[0.62rem] text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="headline mt-6 text-[1.6rem] text-ink">{persona.name}</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-200">{persona.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ close */

function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={audienceLattice}
        alt=""
        aria-hidden="true"
        width={1600}
        height={912}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] w-full object-cover opacity-60 [mask-image:linear-gradient(to_top,black_10%,transparent_85%)]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy" />

      <div className="relative mx-auto flex w-full max-w-[80rem] flex-col items-center px-6 py-28 text-center sm:px-10 sm:py-36 lg:px-14">
        <Reveal as="h2" className="headline max-w-3xl text-[clamp(2.2rem,5.4vw,4rem)] text-light">
          Let&rsquo;s find out what your audience is worth.
        </Reveal>

        <Reveal as="p" delay={120} className="mt-7 text-lg text-mist sm:text-xl">
          Live in 5 business days. First audience report within 30 days.
        </Reveal>

        <Reveal delay={220} className="mt-11">
          <Cta href={mailto("Snipitz — audience conversation")}>Get in touch</Cta>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- footer */

function SiteFooter() {
  return (
    <footer className="border-t border-light/10 bg-navy-deep">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-6 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-14">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="text-sm text-steel">Snipitz &copy; 2026</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-mist transition-colors hover:text-light"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="text-mist transition-colors hover:text-light"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
