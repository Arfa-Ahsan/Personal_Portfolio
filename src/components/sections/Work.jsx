import { useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { projects } from '../../data/content'

export default function Work() {
  const headRef = useScrollReveal()
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section
      id="work"
      className="section bg-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="work-glow work-glow-1" />
        <div className="work-glow work-glow-2" />
      </div>

      <div className="container-main relative z-10">

        {/* Heading */}
        <div ref={headRef} className="reveal mb-16">
          <span
            className="block mb-4 uppercase tracking-[0.4em] text-sm font-semibold"
            style={{ color: '#93C5FD' }}
          >
            WORK
          </span>

          <h2
            className="text-5xl md:text-6xl text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 500
            }}
          >
            Projects & Builds
          </h2>

          <div
            className="mt-4 w-14 h-[2px]"
            style={{
              background:
                'linear-gradient(to right,#60A5FA,transparent)'
            }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={i * 50}
              onPlayDemo={() => setActiveVideo(project.demo)}
            />
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          src={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  )
}

function ProjectCard({ project, delay, onPlayDemo }) {
  const ref = useScrollReveal(delay)

  return (
    <div
      ref={ref}
      className="
        reveal
        border
        border-slate-800
        bg-slate-900/40
        p-5
        flex
        flex-col
        transition-all
        duration-300
        hover:border-blue-500/40
      "
    >
      {/* Category */}
      <span
        className="uppercase tracking-[0.25em] text-[10px] mb-3"
        style={{ color: '#60A5FA' }}
      >
        {project.category}
      </span>

      {/* Title */}
      <h3
        className="text-xl mb-3 text-white"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{
          color: '#CBD5E1'
        }}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              px-2 py-1
              text-[11px]
              border
              border-slate-700
              text-slate-400
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">

<a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-3 py-2
            text-xs
            border
            border-slate-700
            text-slate-300
            hover:border-blue-400
            hover:text-white
            transition-all
          "
        >
          GitHub
        </a>

        {project.demo && (
          <button
            onClick={onPlayDemo}
            className="
              px-3 py-2
              text-xs
              border
              border-slate-700
              text-slate-300
              hover:border-blue-400
              hover:text-white
              transition-all
            "
          >
            Demo
          </button>
        )}

      </div>
    </div>
  )
}

function VideoModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute -top-10 right-0
            text-slate-300 hover:text-white
            text-sm uppercase tracking-widest
            transition-colors
          "
        >
          Close ✕
        </button>

        <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-800 bg-black">
          <video
            src={src}
            controls
            autoPlay
            className="w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}