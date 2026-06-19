import { useEffect, useState } from "react";
import { profile } from "../../data/content";

const roles = ["FinTech Professional", "AI & ML Developer"];

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout;

    if (!deleting) {
      if (displayed.length < role.length) {
        timeout = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          55,
        );
      } else {
        timeout = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  // Same scroll-without-hash logic used in the Navbar
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 section relative overflow-hidden"
    >
      {/* Premium Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 15% 30%, rgba(96,165,250,0.15), transparent 35%),
            radial-gradient(circle at 85% 70%, rgba(96,165,250,0.08), transparent 40%),
            #0F172A
          `,
        }}
      />

      <div className="container-main">
        <div className="max-w-6xl mx-auto text-center">

          <p
            className="mb-12 uppercase tracking-[0.4em] text-sm md:text-base font-semibold"
            style={{ color: "#60A5FA", letterSpacing: "0.35em" }}
          >
          </p>

          {/* Name */}
          <h1
            className="mb-5 leading-none tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(4rem, 10vw, 7.5rem)",
              fontWeight: 700,
              color: "#F8FAFC",
            }}
          >
            Arfa Ahsan
          </h1>

          {/* Typing Role */}
          <div className="h-7 mb-6 flex items-center justify-center">
            <span
              className="text-base md:text-xl font-light"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#bfc5cd",
              }}
            >
              {displayed}
            </span>
            <span className="cursor-blink" />
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "#CBD5E1" }}
          >
            I enjoy solving problems at the intersection of fintech, software
            engineering, and AI, building technology that is reliable, scalable,
            and trustworthy.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-5 mb-14">
          <a 
              href="#work"
              onClick={(e) => handleNavClick(e, "#work")}
              className="btn-primary"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.95rem" }}
            >
              View my work
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-outline"
              style={{ padding: "0.85rem 1.75rem", fontSize: "0.95rem" }}
            >
              Get in touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-10">
            <SocialLink href={profile.github} external>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </SocialLink>

            <SocialLink href={profile.linkedin} external>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </SocialLink>

            <SocialLink href={`mailto:${profile.email}`}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Email
            </SocialLink>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="label text-[10px]" style={{ color: "#64748B" }}>
          SCROLL
        </span>
        <div className="scroll-indicator" />
      </div>
    </section>
  );
}

function SocialLink({ href, children, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 text-base md:text-lg font-medium transition-all duration-300 hover:scale-110"
      style={{ color: "#94A3B8" }}
      onMouseEnter={(e) => { e.currentTarget.style.color = "#60A5FA" }}
      onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8" }}
    >
      {children}
    </a>
  );
}