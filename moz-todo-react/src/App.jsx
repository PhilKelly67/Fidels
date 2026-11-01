import Fidel from "./assets/fidel.png";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Compass,
  MoveUpRight,
  Layers3,
  DraftingCompass,
  Atom,
  Globe2,
  Target,
  Award,
  Sparkles,
  Mountain,
  Building2,
  ChevronRight,
  Quote,
} from "lucide-react";

const instagram = "https://www.instagram.com/gulby.jones/";

const subjects = [
  { name: "Mathematics", icon: Layers3, number: "01" },
  { name: "Physics", icon: Atom, number: "02" },
  { name: "Chemistry", icon: Sparkles, number: "03" },
  { name: "Geography", icon: Globe2, number: "04" },
];

const ambitions = [
  {
    number: "01",
    title: "Structural Engineering",
    description:
      "Understanding the science behind structures, their strength, stability, and ability to withstand the forces of nature.",
    icon: Building2,
  },
  {
    number: "02",
    title: "Bridge Engineering",
    description:
      "Designing innovative bridges that overcome geographical barriers and connect communities.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Global Education",
    description:
      "Aspiring to study at world-class institutions and develop the knowledge to contribute to engineering innovation.",
    icon: GraduationCap,
  },
];

const milestones = [
  {
    year: "01",
    title: "Build the Foundation",
    text: "Master Mathematics, Physics, Chemistry, and Geography while developing strong academic discipline.",
  },
  {
    year: "02",
    title: "Pursue Excellence",
    text: "Achieve outstanding academic results, explore engineering concepts, and develop practical problem-solving skills.",
  },
  {
    year: "03",
    title: "Global Education",
    text: "Work towards gaining admission to leading institutions such as MIT or Tsinghua University.",
  },
  {
    year: "04",
    title: "Engineer the Future",
    text: "Become a structural and bridge engineer, contributing to safe, durable, and innovative infrastructure.",
  },
];

function SectionLabel({ children, number }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[10px] tracking-[0.3em] text-[#b6a17c]">
        {number}
      </span>
      <div className="h-px w-8 bg-[#b6a17c]" />
      <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">
        {children}
      </span>
    </div>
  );
}
function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Vision", "#vision"],
    ["Journey", "#journey"],
    ["Connect", "#contact"],
  ];

  return (
    <main className="bg-[#090a0a] text-[#f2efe9] min-h-screen overflow-hidden selection:bg-[#b6a17c] selection:text-black">
      {/* SCROLL PROGRESS */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#c4a77b] z-[100] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#090a0a]/85 backdrop-blur-xl border-b border-white/[0.07]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[76px] flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <div className="w-9 h-9 border border-[#b6a17c] flex items-center justify-center">
              <span className="font-serif text-[#c4a77b] text-lg">F.</span>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.19em]">
                VINCENT FIDEL
              </p>
              <p className="text-[9px] text-white/40 tracking-[0.25em]">
                PERSONAL PORTFOLIO
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-[11px] tracking-[0.15em] uppercase text-white/55 hover:text-[#c4a77b] transition-colors"
              >
                {name}
              </a>
            ))}

            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs border border-white/20 px-5 py-3 hover:border-[#c4a77b] hover:text-[#c4a77b] transition-all"
            >
              <InstagramIcon size={14} />
              Instagram
              <ArrowUpRight size={13} />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#101110] border-t border-white/10 px-6 py-7 space-y-6">
            {navItems.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={closeMenu}
                className="block text-sm tracking-widest uppercase text-white/70"
              >
                {name}
              </a>
            ))}

            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#c4a77b]"
            >
              <Instagram size={17} />
              Follow on Instagram
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 pb-16"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=85&w=2200"
            alt="Modern architectural bridge structure"
            className="w-full h-full object-cover opacity-[0.25]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#090a0a] via-[#090a0a]/90 to-[#090a0a]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090a0a] via-transparent to-[#090a0a]/50" />
        </div>

        {/* Decorative elements */}
        {/* FIDEL HERO PORTRAIT */}
        <div className="absolute right-[2%] bottom-0 hidden md:flex items-end justify-end w-[48%] h-[92%] z-10 pointer-events-none">
          <img
            src={Fidel}
            alt="Vincent Fidel Jomo"
            className="
      h-full
      max-h-[780px]
      w-full
      object-contain
      object-bottom
      drop-shadow-[0_15px_50px_rgba(196,167,123,0.12)]
      animate-fade-in
    "
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-9">
              <span className="w-2 h-2 bg-[#c4a77b] rounded-full animate-pulse" />
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#c4a77b]">
                The journey of an aspiring engineer
              </p>
            </div>

            <p className="text-white/50 text-sm tracking-[0.35em] uppercase mb-5">
              Vincent Fidel Jomo
            </p>

            <h1 className="font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.88] tracking-[-0.055em]">
              THINK
              <br />
              BEYOND
              <br />
              <span className="italic text-[#c4a77b]">LIMITS.</span>
            </h1>

            <div className="mt-10 max-w-xl">
              <p className="text-white/65 text-sm md:text-base leading-8">
                An ambitious eleventh-grade student. A future structural and
                bridge engineer. Driven by curiosity, discipline, innovation,
                and the determination to build something that outlasts a
                lifetime.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-10">
              <a
                href="#about"
                className="group flex items-center gap-5 bg-[#c4a77b] text-black px-7 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#e0c49b] transition-all"
              >
                Explore my story
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>

              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/65 hover:text-[#c4a77b] text-xs transition-colors"
              >
                <InstagramIcon size={17} />
                @gulby.jones
              </a>
            </div>
          </div>

          <div className="absolute right-12 bottom-[-65px] hidden lg:block">
            <p className="text-[9px] tracking-[0.3em] text-white/35 [writing-mode:vertical-rl]">
              SCROLL TO DISCOVER
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/[0.08] py-6 overflow-hidden bg-[#0d0e0d]">
        <div className="flex items-center justify-around gap-10 min-w-[850px]">
          {[
            "ENGINEERING",
            "INNOVATION",
            "DISCIPLINE",
            "ARCHITECTURE",
            "EXCELLENCE",
          ].map((item, index) => (
            <div key={item} className="flex items-center gap-5">
              <span className="text-[10px] tracking-[0.3em] text-white/40">
                {item}
              </span>
              <span className="text-[#c4a77b] text-xs">
                {index === 4 ? "✦" : "✧"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-[1250px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <SectionLabel number="01">The individual</SectionLabel>

            <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
              Beyond the
              <br />
              <span className="italic text-[#c4a77b]">horizon.</span>
            </h2>

            <div className="mt-10 relative">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=1000"
                alt="Contemporary architectural design"
                className="w-full h-[380px] object-cover opacity-75"
              />

              <div className="absolute bottom-0 left-0 bg-[#c4a77b] text-black px-6 py-5">
                <p className="text-[9px] tracking-[0.25em] uppercase">
                  My chosen direction
                </p>
                <p className="font-serif text-xl mt-1">
                  Structural Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[#c4a77b] text-xs tracking-[0.25em] uppercase mb-6">
              Who am I?
            </p>

            <h3 className="font-serif text-3xl md:text-4xl leading-snug mb-8">
              A mind driven by curiosity. A vision built on purpose.
            </h3>

            <p className="text-white/55 leading-8 text-sm mb-6">
              My name is <span className="text-white">Vincent Fidel Jomo</span>,
              and I am an eleventh-grade student with a dream that extends far
              beyond the boundaries of an ordinary classroom.
            </p>

            <p className="text-white/55 leading-8 text-sm mb-6">
              I aspire to become a civil engineer specializing in structural and
              bridge engineering — a profession that combines mathematics,
              science, creativity, and innovation to transform ambitious ideas
              into structures that stand against the test of time.
            </p>

            <p className="text-white/55 leading-8 text-sm">
              To me, engineering is more than constructing buildings and
              bridges. It is the art of solving real-world problems, connecting
              communities, and creating solutions that improve lives for
              generations to come.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12 border-t border-white/10 pt-8">
              <div>
                <p className="font-serif text-3xl text-[#c4a77b]">11th</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mt-2">
                  Academic grade
                </p>
              </div>

              <div>
                <p className="font-serif text-3xl text-[#c4a77b]">01</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 mt-2">
                  Definite vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-28 bg-[#101110] px-6 md:px-12">
        <div className="max-w-[1250px] mx-auto">
          <SectionLabel number="02">The vision</SectionLabel>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              I don't just
              <br />
              dream of
              <br />
              <span className="italic text-[#c4a77b]">building.</span>
            </h2>

            <div className="flex flex-col justify-end">
              <p className="text-white/55 text-sm leading-8 max-w-lg">
                I dream of designing structures that redefine possibilities,
                bridges that connect distant communities, and infrastructure
                that creates opportunities for generations.
              </p>

              <p className="text-[#c4a77b] text-xs uppercase tracking-[0.2em] mt-8">
                My ambition is bigger than the blueprint.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 border border-white/10">
            {ambitions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className={`p-8 md:p-10 group hover:bg-white/[0.035] transition-colors ${
                    index !== 2 ? "md:border-r border-white/10" : ""
                  } ${index !== 0 ? "border-t md:border-t-0 border-white/10" : ""}`}
                >
                  <div className="flex items-center justify-between mb-14">
                    <span className="text-[#c4a77b] text-xs tracking-widest">
                      {item.number}
                    </span>
                    <Icon
                      size={27}
                      strokeWidth={1}
                      className="text-white/40 group-hover:text-[#c4a77b] transition-colors"
                    />
                  </div>

                  <h3 className="font-serif text-2xl mb-5">{item.title}</h3>

                  <p className="text-white/45 text-sm leading-7">
                    {item.description}
                  </p>

                  <div className="h-px bg-white/10 mt-10 group-hover:bg-[#c4a77b] transition-colors" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACADEMIC FOUNDATION */}
      <section className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-[1250px] mx-auto">
          <SectionLabel number="03">Academic foundation</SectionLabel>

          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight">
                Excellence
                <br />
                <span className="italic text-[#c4a77b]">is intentional.</span>
              </h2>

              <p className="text-white/50 text-sm leading-8 mt-8 max-w-md">
                Great ambitions demand extraordinary commitment. I understand
                that my chosen profession requires a strong foundation in
                specific subjects, each contributing to the knowledge and
                problem-solving abilities of an engineer.
              </p>

              <p className="text-white/50 text-sm leading-8 mt-5 max-w-md">
                I have set remarkably high academic standards for myself, aiming
                for the strongest results I can achieve. I know that this goal
                requires discipline, consistency, sacrifice, and a willingness
                to learn from every mistake.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subjects.map((subject) => {
                const Icon = subject.icon;

                return (
                  <div
                    key={subject.name}
                    className="border border-white/10 p-7 min-h-[190px] flex flex-col justify-between hover:border-[#c4a77b]/60 hover:bg-white/[0.025] transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] tracking-widest text-[#c4a77b]">
                        {subject.number}
                      </span>

                      <Icon
                        size={25}
                        strokeWidth={1}
                        className="text-white/40 group-hover:text-[#c4a77b] transition-colors"
                      />
                    </div>

                    <h3 className="font-serif text-2xl">{subject.name}</h3>

                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Core academic discipline
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 bg-[#101110] border border-white/[0.07] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] text-[#c4a77b] tracking-[0.25em] uppercase mb-3">
                The standard
              </p>

              <h3 className="font-serif text-3xl md:text-4xl">
                Discipline over temporary motivation.
              </h3>
            </div>

            <p className="text-white/45 text-sm leading-7 max-w-sm">
              My daily actions must reflect the future I envision. Every lesson,
              every challenge, and every improvement contributes to the
              foundation I am building.
            </p>
          </div>
        </div>
      </section>

      {/* MINDSET */}
      <section className="relative py-32 px-6 md:px-12 bg-[#111310] overflow-hidden">
        <div className="absolute -right-20 top-0 opacity-[0.06]">
          <Mountain size={500} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 max-w-[1050px] mx-auto text-center">
          <Quote
            size={38}
            strokeWidth={1}
            className="text-[#c4a77b] mx-auto mb-10"
          />

          <SectionLabel number="04">The mindset</SectionLabel>

          <h2 className="font-serif text-3xl md:text-6xl leading-[1.35]">
            "I want my daily actions to reflect the future I
            <span className="italic text-[#c4a77b]"> envision </span>
            for myself."
          </h2>

          <div className="w-12 h-px bg-[#c4a77b] mx-auto mt-12 mb-7" />

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Vincent Fidel Jomo
          </p>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section id="journey" className="py-28 md:py-36 px-6 md:px-12">
        <div className="max-w-[1250px] mx-auto">
          <SectionLabel number="05">The journey ahead</SectionLabel>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              Every great
              <br />
              structure
              <br />
              <span className="italic text-[#c4a77b]">starts small.</span>
            </h2>

            <div className="flex flex-col justify-end">
              <p className="text-white/50 text-sm leading-8">
                I know the journey will not always be easy. There will be
                difficult concepts to master, examinations that test my limits,
                and moments when progress seems slower than I would like.
              </p>

              <p className="text-white/50 text-sm leading-8 mt-5">
                Nevertheless, I refuse to allow temporary difficulties to define
                my potential. I intend to approach every challenge as an
                opportunity to sharpen my mind, strengthen my character, and
                improve my abilities.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10" />

            <div className="space-y-0">
              {milestones.map((milestone) => (
                <div
                  key={milestone.number}
                  className="relative pl-16 pb-12 last:pb-0 group"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 border border-white/20 bg-[#090a0a] flex items-center justify-center group-hover:border-[#c4a77b] transition-colors">
                    <span className="text-[10px] text-[#c4a77b]">
                      {milestone.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-[#c4a77b] transition-colors">
                    {milestone.title}
                  </h3>

                  <p className="text-white/45 text-sm leading-7 max-w-2xl">
                    {milestone.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DREAM UNIVERSITIES */}
      <section className="relative py-28 md:py-36 bg-[#101110] px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.12]">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1250px] mx-auto">
          <SectionLabel number="06">The global ambition</SectionLabel>

          <h2 className="font-serif text-5xl md:text-7xl mb-8">
            Think globally.
            <br />
            <span className="italic text-[#c4a77b]">Aim higher.</span>
          </h2>

          <p className="text-white/50 text-sm leading-8 max-w-xl mb-16">
            Looking ahead, I hope to earn a place at one of the world's leading
            institutions. These are ambitious academic goals that inspire me to
            reach higher, explore new ideas, and prepare for advanced
            engineering.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="group border border-white/15 p-8 md:p-12 hover:border-[#c4a77b]/60 transition-all">
              <div className="flex justify-between items-center mb-16">
                <span className="text-[10px] tracking-[0.25em] text-[#c4a77b]">
                  UNITED STATES
                </span>
                <ArrowUpRight className="text-white/40 group-hover:text-[#c4a77b]" />
              </div>

              <h3 className="font-serif text-4xl md:text-5xl mb-5">MIT</h3>

              <p className="text-white/45 text-sm leading-7">
                <span className="text-white/80">
                  Massachusetts Institute of Technology
                </span>
                <br />
                Cambridge, Massachusetts
              </p>

              <a
                href="https://www.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 text-xs text-[#c4a77b] uppercase tracking-widest"
              >
                Discover MIT <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="group border border-white/15 p-8 md:p-12 hover:border-[#c4a77b]/60 transition-all">
              <div className="flex justify-between items-center mb-16">
                <span className="text-[10px] tracking-[0.25em] text-[#c4a77b]">
                  CHINA
                </span>
                <ArrowUpRight className="text-white/40 group-hover:text-[#c4a77b]" />
              </div>

              <h3 className="font-serif text-4xl md:text-5xl mb-5">Tsinghua</h3>

              <p className="text-white/45 text-sm leading-7">
                <span className="text-white/80">Tsinghua University</span>
                <br />
                Beijing, China
              </p>

              <a
                href="https://www.tsinghua.edu.cn/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 text-xs text-[#c4a77b] uppercase tracking-widest"
              >
                Discover Tsinghua <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <p className="text-[10px] text-white/30 mt-8 tracking-widest">
            ASPIRATIONAL DESTINATIONS — THE JOURNEY IS IN PROGRESS.
          </p>
        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="py-32 md:py-44 px-6 md:px-12">
        <div className="max-w-[1050px] mx-auto text-center">
          <SectionLabel number="07">The philosophy</SectionLabel>

          <h2 className="font-serif text-4xl md:text-7xl leading-[1.2]">
            Before I build bridges
            <br />
            that connect the world,
            <br />
            <span className="italic text-[#c4a77b]">I must build myself.</span>
          </h2>

          <p className="text-white/45 text-sm leading-8 max-w-2xl mx-auto mt-10">
            Perhaps one day, I will stand before a bridge that I helped design,
            knowing that what once existed only as an idea has become a
            structure people depend on every day.
          </p>

          <div className="mt-16 flex justify-center">
            <div className="w-16 h-px bg-[#c4a77b]" />
          </div>

          <p className="font-serif text-2xl md:text-3xl mt-10">
            Vincent Fidel Jomo.
          </p>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mt-4">
            A student with a vision. A learner with a purpose.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-[#101110] border-t border-white/10">
        <div className="max-w-[1250px] mx-auto px-6 md:px-12 pt-20 pb-10">
          <div className="grid md:grid-cols-2 gap-16 pb-20">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#c4a77b] mb-8">
                Let's connect
              </p>

              <h2 className="font-serif text-5xl md:text-7xl leading-tight">
                The future
                <br />
                is{" "}
                <span className="italic text-[#c4a77b]">
                  under construction.
                </span>
              </h2>

              <p className="text-white/40 text-sm leading-7 mt-8 max-w-md">
                Every great journey begins with a vision. Follow mine as I
                continue learning, growing, and working towards becoming a
                structural and bridge engineer.
              </p>
            </div>

            <div className="flex flex-col justify-center md:items-end">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35 mb-8">
                Find me on social media
              </p>

              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full md:max-w-sm border border-white/15 p-6 hover:border-[#c4a77b] transition-all"
              >
                <div className="flex items-center gap-5">
                  <InstagramIcon size={23} className="text-[#c4a77b]" />

                  <div>
                    <p className="text-sm">Instagram</p>
                    <p className="text-xs text-white/40 mt-1">@gulby.jones</p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-white/40 group-hover:text-[#c4a77b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#c4a77b] flex items-center justify-center">
                <span className="font-serif text-[#c4a77b]">F.</span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase">
                Vincent Fidel Jomo
              </span>
            </a>

            <p className="text-[9px] tracking-[0.2em] uppercase text-white/30 text-center">
              © {new Date().getFullYear()} Vincent Fidel Jomo. All rights
              reserved.
            </p>

            <a
              href="#home"
              className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 hover:text-[#c4a77b] transition-colors"
            >
              Back to top <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
