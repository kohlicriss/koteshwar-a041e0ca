import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Phone, ArrowUpRight, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Architecture", to: "/architecture" },
  { label: "Blogs", to: "/blogs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/KoteshwarChinnolla" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/koteshwar-chinnolla-2065b4253" },
  { icon: Mail, label: "Email", href: "mailto:chinnollakoteshwar@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+916300727875" },
];

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-14">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-block group">
              <span className="text-2xl font-serif font-bold tracking-tight">
                Chinnolla{" "}
                <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent italic">
                  Koteshwar
                </span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building systems that sense, reason, and act — at the intersection of Agentic AI, robotics, and reinforcement learning.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="group relative w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:scale-110 transition-all duration-300"
                >
                  <s.icon className="w-[18px] h-[18px] transition-transform duration-300 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills / Tech column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-5">
              Tech Stack
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(262,83%,58%)]" />
                Python, Java, Go, C++
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(292,84%,61%)]" />
                Kubernetes, Terraform, AWS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[hsl(38,97%,64%)]" />
                LangChain, PyTorch, TensorFlow
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Kafka, Redis, Docker, ROS
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Chinnolla Koteshwar</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">All rights reserved</span>
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-red-400 fill-red-400 animate-pulse" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
