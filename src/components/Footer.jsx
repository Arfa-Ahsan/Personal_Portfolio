import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-10">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-light text-stone-400">
          Arfa Ahsan · SQA Engineer & AI Developer · Karachi, Pakistan
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: 'GitHub',   href: profile.github,   external: true },
            { label: 'LinkedIn', href: profile.linkedin, external: true },
            { label: 'Email',    href: `mailto:${profile.email}` },
          ].map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-sm font-light text-stone-400 hover:text-stone-700 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
