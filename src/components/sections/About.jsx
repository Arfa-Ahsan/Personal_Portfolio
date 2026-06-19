import { useScrollReveal } from '../../hooks/useScrollReveal'
import { profile, skills } from '../../data/content'

export default function About() {
  const headRef = useScrollReveal()
  const bioRef = useScrollReveal(80)
  const skillsRef = useScrollReveal(160)

  return (
    <section
      id="about"
      className="section relative overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="about-glow about-glow-1" />
        <div className="about-glow about-glow-2" />
      </div>

      {/* Subtle top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, #60A5FA33, transparent)'
        }}
      />

      <div className="container-main relative z-10">

        {/* Heading */}
        {/* Heading */}
        <div ref={headRef} className="reveal mb-20">
          <span
            className="block mb-4 uppercase tracking-[0.4em] text-sm font-semibold"
            style={{ color: '#93C5FD' }}
          >
            INTRODUCTION
          </span>

          <h2
            className="text-5xl md:text-6xl font-medium text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            ABOUT ME
          </h2>
          <div
            className="mt-5 w-16 h-[2px]"
            style={{ background: 'linear-gradient(to right, #60A5FA, transparent)' }}
          />
        </div>

        {/* Bio + Divider + Skills */}
        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-x-16 md:gap-x-24 items-start">

          {/* Bio */}
          <div ref={bioRef} className="reveal">
            {profile.bio.map((para, i) => (
              <p
                key={i}
                className="mb-6 last:mb-0 leading-relaxed"
                style={{
                  color: '#CBD5E1',
                  fontWeight: 300,
                  fontSize: '1.05rem',
                  lineHeight: '1.85'
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Vertical Divider */}
          <div
            className="hidden md:block self-stretch"
            style={{
              background: 'linear-gradient(to bottom, transparent, #334155 20%, #334155 80%, transparent)',
              width: '1px'
            }}
          />

          {/* Skills */}
          <div ref={skillsRef} className="reveal">

            <span
              className="block mb-8 uppercase tracking-[0.5em] text-xs font-medium"
              style={{ color: '#60A5FA' }}
            >
              Technical Range
            </span>

            <div className="space-y-8">
              {skills.map((group, idx) => (
                <div key={group.category}>

                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-[3px] h-4 rounded-full flex-shrink-0"
                      style={{
                        background: idx === 0
                          ? 'linear-gradient(to bottom, #60A5FA, #3B82F6)'
                          : '#334155'
                      }}
                    />
                    <p
                      className="uppercase font-medium"
                      style={{
                        color: idx === 0 ? '#E2E8F0' : '#64748B',
                        letterSpacing: '0.1em',
                        fontSize: '0.7rem'
                      }}
                    >
                      {group.category}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pl-4">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5
                          rounded-md
                          border
                          transition-all
                          duration-200
                          hover:border-blue-400/50
                          hover:bg-blue-400/5
                          hover:text-slate-200
                          cursor-default
                        "
                        style={{
                          borderColor: 'rgba(51, 65, 85, 0.5)',
                          background: 'rgba(15, 23, 42, 0.5)',
                          color: '#94A3B8',
                          fontSize: '0.8rem',
                          letterSpacing: '0.02em',
                          fontWeight: 400
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Group Divider */}
                  {idx < skills.length - 1 && (
                    <div
                      className="mt-8 h-px"
                      style={{ background: 'rgba(30, 41, 59, 0.8)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}