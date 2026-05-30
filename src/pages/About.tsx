import Header from "@/components/Header";
import { Mail, MapPin, Briefcase, GraduationCap, Award, Users, Github, Linkedin, Quote, Atom, Cpu, Bot, Rocket, BookOpen, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import koteshwarImg from "@/assets/koteshwar.jpeg";

const About = () => {
  const chapters = [
    {
      icon: Atom,
      kicker: "Chapter 01",
      title: "It Started with Physics",
      body: [
        "Physics was always my strongest subject. I loved how motion, energy and electricity fit together — and I wanted to build things that used those rules.",
        "That pulled me into Electronics and Communication Engineering, and then toward systems that can sense, think, and move in the real world.",
      ],
    },
    {
      icon: Cpu,
      kicker: "Chapter 02",
      title: "Finding AI Inside ECE",
      body: [
        "By the end of my first semester, I knew AI and ML were what I wanted to chase. I joined the Advanced Academic Centre (AAC), a selective research group where students pick their own problems.",
        "My first real project there was a demand forecasting model built on five years of wholesale market data. It was the first time my code actually did something useful — and that feeling stuck.",
      ],
    },
    {
      icon: Bot,
      kicker: "Chapter 03",
      title: "Hackathons and the First Robot",
      body: [
        "In my second year I went deeper into ML and DL — NLP pipelines, transformers, BERT classifiers, and OpenCV. I also made it into the top 100 coders batch at my college, training with the Smart Interviews team.",
        "Four hackathons later, I had watched teams ship robots in 24 hours and met students already running startups. I came back from each one with a longer list of things to build.",
        "By my third year, I was mentoring juniors at AAC and building my first robot — an A* based autonomous vehicle where the user picked a destination on a grid. It worked, but one question kept nagging me: why should a human have to think in grids?",
      ],
    },
    {
      icon: Rocket,
      kicker: "Chapter 04",
      title: "Talking to a Robot",
      body: [
        "That question pushed me into Agentic AI research in my final year. Making natural language reliably drive a physical system is harder than it sounds.",
        "By my last semester I had it working: ROS for navigation, A* for paths, OpenCV for vision, and LangChain/LangGraph for the agent layer — all on a Raspberry Pi. A robot you could simply tell where to go.",
        "The paper was accepted and presented at an IEEE conference. More than the publication, it taught me how to think like a researcher, not just a builder.",
      ],
    },
    {
      icon: Lightbulb,
      kicker: "Chapter 05",
      title: "Industry, APISynIQ, and the Road to Grad School",
      body: [
        "After graduating, I joined as an Associate Software Engineer working across AI and DevOps. Production work taught me the full stack: recommendation systems, AWS, Kubernetes, and Terraform. My open-source Terraform modules and Helm charts are in active use at the company.",
        "But robots have no UI. No forms, no dropdowns — just raw natural language. The agent has to ask the right questions, map answers to API parameters, and submit. That gap is why I built APISynIQ.",
        "APISynIQ is an open-source agent that turns natural language into correct API calls. In real use, one hard problem surfaced: long conversations still break structured outputs — wrong fields, ignored corrections, and cascading failures.",
        "I am now researching this at the intersection of world models and reinforcement learning — teaching a model to represent structured output requirements internally and self-correct from feedback. It is early-stage work, and it is exactly what I want to pursue at the graduate level.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* HERO */}
        <section className="relative mb-24 overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-card via-background to-card p-6 md:p-12 lg:p-16">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-[hsl(262,83%,58%)]/25 via-[hsl(292,84%,61%)]/20 to-transparent blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-[hsl(38,97%,64%)]/20 via-[hsl(292,84%,61%)]/15 to-transparent blur-3xl" />
          {/* subtle grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <div className="md:col-span-2 animate-scale-in">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-[hsl(262,83%,58%)]/30 via-[hsl(292,84%,61%)]/30 to-[hsl(38,97%,64%)]/30 blur-2xl rounded-[2.5rem]" />
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-border/60">
                  <img src={koteshwarImg} alt="Chinnolla Koteshwar" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Hyderabad · IN</span>
                    <span>Grad School ’26</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-6 animate-slide-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5" />
                Prospective Graduate Researcher · 2026
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] bg-clip-text text-transparent italic font-serif">
                  Koteshwar
                </span>
                .
              </h1>

              <p className="text-xl md:text-2xl text-foreground/85 leading-relaxed font-light">
                I build <span className="font-medium text-foreground">agentic AI and robotic systems</span> — and I’m heading to grad school to push them further with <span className="font-medium text-foreground">world models and reinforcement learning</span>.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground"><Briefcase className="w-4 h-4" /> Assoc. SE · Anasol</span>
                <span className="flex items-center gap-2 text-muted-foreground"><GraduationCap className="w-4 h-4" /> B.Tech ECE · AI/ML Minor</span>
                <span className="flex items-center gap-2 text-muted-foreground"><BookOpen className="w-4 h-4" /> IEEE Published</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:chinnollakoteshwar@gmail.com">
                  <Button className="rounded-full px-6 group"><Mail className="mr-2 h-4 w-4" /> Reach Out <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></Button>
                </a>
                <a href="https://github.com/KoteshwarChinnolla" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full px-6"><Github className="mr-2 h-4 w-4" /> GitHub</Button>
                </a>
                <a href="https://www.linkedin.com/in/koteshwar-chinnolla-2065b4253/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full px-6"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="mb-24 relative rounded-[2rem] bg-gradient-to-br from-card via-card to-muted p-10 md:p-16 overflow-hidden">
          <Quote className="absolute top-6 left-6 w-20 h-20 text-foreground/5" />
          <blockquote className="relative max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-snug text-foreground">
              "Give what ever it takes !!"
            </p>
            <footer className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">— Personal Mantra</footer>
          </blockquote>
        </section>

        {/* STATS STRIP */}
        <section className="mb-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { v: "8.39", l: "CGPA · GRIET", g: "from-[hsl(262,83%,58%)] to-[hsl(292,84%,61%)]" },
            { v: "988", l: "/1000 · Intermediate", g: "from-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)]" },
            { v: "IEEE", l: "Published Researcher", g: "from-[hsl(38,97%,64%)] to-[hsl(262,83%,58%)]" },
            { v: "4×", l: "Hackathons", g: "from-[hsl(262,83%,58%)] to-[hsl(38,97%,64%)]" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-card p-6 md:p-8 text-center card-hover">
              <p className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${s.g} bg-clip-text text-transparent`}>{s.v}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 tracking-wider uppercase">{s.l}</p>
            </div>
          ))}
        </section>

        {/* STORY CHAPTERS */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">— The Long Form</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">My Journey, in Five Chapters</h2>
          </div>

          <div className="space-y-16 md:space-y-20">
            {chapters.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <article key={ch.kicker} className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                  <div className="md:col-span-3 md:sticky md:top-24">
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(262,83%,58%)] via-[hsl(292,84%,61%)] to-[hsl(38,97%,64%)] flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-mono tracking-widest text-muted-foreground">{ch.kicker}</p>
                        <p className="text-sm font-semibold mt-1 leading-tight">{ch.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-9 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                      {ch.title}
                    </h3>
                    {ch.body.map((p, idx) => (
                      <p key={idx} className="text-base md:text-lg text-muted-foreground leading-relaxed">{p}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-24 rounded-[2rem] bg-card p-8 md:p-14">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">— Toolbox</p>
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          </div>
          <div className="space-y-10">
            {[
              { label: "Languages", items: ["Java", "Python", "C++", "Go", "HCL"] },
              { label: "AI / ML", items: ["Machine Learning", "Deep Learning", "Agentic AI", "Computer Vision", "LangChain", "LangGraph", "TensorFlow", "PyTorch", "OpenCV", "BERT", "Reinforcement Learning"] },
              { label: "Cloud & DevOps", items: ["Kubernetes", "Terraform", "Helm", "AWS", "AWS Lambda", "Docker", "CI/CD", "GitHub Actions", "Istio", "Elasticsearch"] },
              { label: "Backend & Systems", items: ["Spring Boot", "gRPC", "Kafka", "Redis", "ROS", "Raspberry Pi", "Arduino"] },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="font-semibold mb-4 text-muted-foreground text-xs tracking-[0.25em] uppercase">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESEARCH HIGHLIGHT */}
        <section className="mb-24 rounded-[2rem] bg-gradient-to-br from-[hsl(262,83%,58%)]/10 via-[hsl(292,84%,61%)]/10 to-[hsl(38,97%,64%)]/10 p-8 md:p-14 border border-border">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <BookOpen className="w-10 h-10 mb-4" />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">— IEEE Publication</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">Natural Language Based Autonomous Navigation Vehicle</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p>
                Accepted and presented at an IEEE conference, this paper combines ROS, A* path planning, OpenCV, and an agentic LangChain/LangGraph layer running on a Raspberry Pi — translating natural-language commands into autonomous physical motion.
              </p>
              <p>
                The work seeded my current research interest: <span className="text-foreground font-medium">how agentic systems can reliably produce structured outputs and learn from their own mistakes</span> — explored through world models and reinforcement learning.
              </p>
            </div>
          </div>
        </section>

        {/* ROLES */}
        <section className="mb-24">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">— Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold">Roles & Mentorship</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-card card-hover flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Backend & DevOps Lead</h3>
                <p className="text-muted-foreground text-sm mb-2">Junior Developers · April 2025</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Led backend and DevOps initiatives, guiding junior engineers through production deployment patterns and cloud-native architecture.</p>
              </div>
            </div>
            <div className="p-7 rounded-2xl bg-card card-hover flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Mentor — AAC</h3>
                <p className="text-muted-foreground text-sm mb-2">Advanced Academic Center · March 2023</p>
                <p className="text-muted-foreground text-sm leading-relaxed">Guided four junior students through their first research projects. Teaching sharpened my own understanding in ways studying alone never could.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-16 md:py-20 rounded-[2.5rem] bg-gradient-to-br from-card to-muted">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">Let's build, research, or just talk shop.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Open to graduate research opportunities, engineering collaborations, and conversations about agentic AI, robotics, or reinforcement learning.
          </p>
          <a href="mailto:chinnollakoteshwar@gmail.com">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base hover:scale-105 transition-all">
              <Mail className="mr-2 h-5 w-5" />
              chinnollakoteshwar@gmail.com
            </Button>
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;
