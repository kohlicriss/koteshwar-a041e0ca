import Header from "@/components/Header";
import { Mail, Github, Linkedin, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

type Channel = {
  name: string;
  icon: typeof Mail;
  description: string;
  cta: string;
  href: string;
  accent: string; // tailwind classes for icon tile gradient
  ring: string;
};

const channels: Channel[] = [
  {
    name: "Email",
    icon: Mail,
    description:
      "Reach out anytime via email — questions, collaboration, or just a hello. I respond within a day.",
    cta: "chinnollakoteshwar@gmail.com",
    href: "mailto:chinnollakoteshwar@gmail.com",
    accent: "from-violet-500/25 to-amber-400/25 text-violet-500",
    ring: "group-hover:shadow-violet-500/30",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    description:
      "Connect for professional updates, research highlights, and opportunities in agentic AI & robotics.",
    cta: "Connect on LinkedIn",
    href: "https://linkedin.com/in/koteshwar-chinnolla-2065b4253",
    accent: "from-sky-500/25 to-blue-600/25 text-sky-500",
    ring: "group-hover:shadow-sky-500/30",
  },
  {
    name: "GitHub",
    icon: Github,
    description:
      "Browse open-source projects, agentic AI experiments, and the codebases behind my research work.",
    cta: "View on GitHub",
    href: "https://github.com/KoteshwarChinnolla",
    accent: "from-foreground/15 to-foreground/5 text-foreground",
    ring: "group-hover:shadow-foreground/20",
  },
  {
    name: "X",
    icon: ExternalLink,
    description:
      "Follow me on X for updates, projects, and quick notes from my portfolio journey.",
    cta: "@Iam_Koteshwar",
    href: "https://x.com/Iam_Koteshwar",
    accent: "from-blue-500/25 to-sky-400/25 text-blue-500",
    ring: "group-hover:shadow-blue-500/30",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to collaborate
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight animate-slide-down">
            Connect{" "}
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 bg-clip-text text-transparent italic">
              with me
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Follow along for the latest research, projects, and behind-the-scenes work in
            agentic AI, robotics, and intelligent systems.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent" />
            Hyderabad, India
          </div>
        </section>

        {/* Channel cards */}
        <section className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const external = c.href.startsWith("http");
            return (
              <a
                key={c.name}
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`group relative rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-8 flex flex-col text-center items-center transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-2xl ${c.ring} animate-scale-in`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Animated icon tile */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.accent} blur-xl opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${c.accent} border border-border/60 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg]`}
                  >
                    <Icon className="w-7 h-7 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {/* floating ping dot */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-70" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                  </span>
                </div>

                <h3 className="text-xl font-semibold font-serif mb-3">{c.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xs">
                  {c.description}
                </p>

                <div className="mt-auto pt-4 border-t border-border w-full">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                    {c.cta}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </span>
                </div>
              </a>
            );
          })}
        </section>

        {/* Footer note */}
        <section className="mt-20 text-center">
          <p className="text-sm text-muted-foreground">
            Prefer something else? Drop a line at{" "}
            <a
              href="mailto:chinnollakoteshwar@gmail.com"
              className="text-accent hover:underline font-medium"
            >
              chinnollakoteshwar@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Contact;
