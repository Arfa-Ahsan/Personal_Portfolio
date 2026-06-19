import { useScrollReveal } from '../../hooks/useScrollReveal'
import { experience } from '../../data/content'

export default function Experience() {
  const headRef = useScrollReveal()
  const bodyRef = useScrollReveal(100)

  const exp = experience[0]

  return (
    <section
      id="experience"
      className="section relative overflow-hidden bg-slate-900"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="experience-glow experience-glow-1" />
        <div className="experience-glow experience-glow-2" />
      </div>

      <div className="container-main relative z-10">

        {/* Heading */}
        <div ref={headRef} className="reveal mb-20">
          <span
            className="block mb-4 uppercase tracking-[0.4em] text-sm font-semibold"
            style={{ color: '#93C5FD' }}
          >
            EXPERIENCE
          </span>

          <h2
            className="text-5xl md:text-6xl font-medium text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif"
            }}
          >
            Where I've Worked
          </h2>

          <div
            className="mt-4 w-14 h-[2px]"
            style={{
              background:
                'linear-gradient(to right,#93C5FD,transparent)'
            }}
          />
        </div>

        <div ref={bodyRef} className="reveal">

          <div
            className="
              border
              border-slate-800
              bg-slate-900/70
              backdrop-blur-xl
              p-8 md:p-10
              transition-all
              duration-300
              hover:border-slate-700
            "
          >
            <div className="grid md:grid-cols-[260px_1fr] gap-12">

              {/* Sidebar */}
              <div>

                <h3
                  className="text-3xl text-white mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif"
                  }}
                >
                  {exp.company}
                </h3>

                <p
                  className="font-medium mb-2"
                  style={{
                    color: '#93C5FD'
                  }}
                >
                  {exp.role}
                </p>

                <p
                  className="text-sm text-slate-400 mb-1"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {exp.period}
                </p>

                <p className="text-sm text-slate-500 mb-8">
                  {exp.location}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-1
                        text-xs
                        border
                        transition-all
                        duration-300
                        hover:border-blue-300
                        hover:bg-blue-400/10
                      "
                      style={{
                        borderColor: 'rgba(147,197,253,0.25)',
                        color: '#93C5FD',
                        background: 'rgba(147,197,253,0.05)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Main Content */}
              <div>

                <p
                  className="text-base leading-relaxed mb-8"
                  style={{
                    color: '#CBD5E1'
                  }}
                >
                  {exp.description}
                </p>

                <p
                  className="mb-5 uppercase tracking-[0.3em] text-xs font-semibold"
                  style={{
                    color: '#93C5FD'
                  }}
                >
                  Responsibilities
                </p>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                        style={{
                          background: '#93C5FD'
                        }}
                      />

                      <span
                        className="leading-relaxed text-sm"
                        style={{
                          color: '#CBD5E1'
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}