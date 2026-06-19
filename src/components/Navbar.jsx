import { useState, useEffect } from 'react'
import { profile } from '../data/content'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#work' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 130) current = '#' + sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => active === href

  // Intercept the click: scroll manually, skip the browser's hash navigation
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      // Update the URL bar without adding #about etc.
      window.history.replaceState(null, '', window.location.pathname)
    }
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-800' : ''
      }`}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-24">

        {/* Name */}
<a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.55rem',
            fontWeight: 700,
            color: '#F8FAFC',
            letterSpacing: '0.04em'
          }}
          className="transition-opacity duration-300 hover:opacity-75"
        >
          Arfa Ahsan
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative group"
              style={{
                fontSize: '0.95rem',
                fontWeight: isActive(link.href) ? 500 : 300,
                color: isActive(link.href) ? '#F8FAFC' : '#94A3B8',
                letterSpacing: '0.06em',
                transition: 'color 0.2s ease'
              }}
            >
              {link.label}

              {/* Active underline */}
              <span
                className="absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300"
                style={{
                  width: isActive(link.href) ? '100%' : '0%',
                  background: 'linear-gradient(to right, #60A5FA, #3B82F6)'
                }}
              />

              {/* Hover underline for inactive */}
              <span
                className="absolute -bottom-1 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                style={{
                  background: isActive(link.href) ? 'transparent' : '#334155'
                }}
              />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-1 transition-colors duration-200"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-xl border-t flex flex-col gap-7 px-8 py-10"
          style={{
            background: 'rgba(15, 23, 42, 0.97)',
            borderColor: '#1E293B'
          }}
        >
          {links.map(link => (
<a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontSize: '1.05rem',
                fontWeight: isActive(link.href) ? 500 : 300,
                color: isActive(link.href) ? '#60A5FA' : '#94A3B8',
                letterSpacing: '0.06em',
                transition: 'color 0.2s ease'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}