import { useState, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const validateField = (field, value) => {
  const trimmed = value.trim()

  switch (field) {
    case 'name':
      if (!trimmed) return 'Name is required'
      if (trimmed.length < 2) return 'Name must be at least 2 characters'
      return ''
    case 'email':
      if (!trimmed) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Enter a valid email address'
      return ''
    case 'subject':
      if (!trimmed) return 'Subject is required'
      return ''
    case 'message':
      if (!trimmed) return 'Message is required'
      if (trimmed.length < 10) return 'Message must be at least 10 characters'
      return ''
    default:
      return ''
  }
}

export default function Contact() {
  const headRef = useScrollReveal()
  const leftRef = useScrollReveal(80)
  const formRef = useScrollReveal(160)

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [status])

  const set = field => e => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    // Clear the error for this field as soon as the user starts fixing it
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    Object.keys(form).forEach(field => {
      const error = validateField(field, form[field])
      if (error) newErrors[field] = error
    })
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(prev => ({ ...prev, ...newErrors }))
      return
    }

    setErrors({ name: '', email: '', subject: '', message: '' })
    setStatus('sending')

    const formData = new FormData()
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY)
    formData.append('name',    form.name)
    formData.append('email',   form.email)
    formData.append('subject', form.subject)
    formData.append('message', form.message)

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="section relative overflow-hidden bg-slate-900"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="about-glow about-glow-1" />
        <div className="about-glow about-glow-2" />
      </div>

      <div className="container-main relative z-10">

        {/* Heading */}
        <div ref={headRef} className="reveal mb-20">
          <span
            className="block mb-4 uppercase tracking-[0.4em] text-sm font-semibold"
            style={{ color: '#93C5FD' }}
          >
            LET'S TALK
          </span>

          <h2
            className="text-5xl md:text-6xl font-medium text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            CONTACT ME
          </h2>

          <div
            className="mt-4 w-14 h-[2px]"
            style={{ background: 'linear-gradient(to right, #93C5FD, transparent)' }}
          />
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">

          {/* Left Side */}
          <div ref={leftRef} className="reveal lg:sticky lg:top-28">
            <span
              className="block mb-4 uppercase tracking-[0.35em] text-xs font-semibold"
              style={{ color: '#93C5FD' }}
            >
              LET'S CONNECT
            </span>

            <p
              className="text-lg leading-relaxed max-w-md"
              style={{ color: '#CBD5E1' }}
            >
              Interested in AI, Machine Learning,
              Software Engineering, FinTech, research,
              or collaboration opportunities?
              Feel free to reach out and let's build
              something meaningful together.
            </p>
          </div>

          {/* Form */}
          <div ref={formRef} className="reveal">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-slate-800 bg-slate-900/40 backdrop-blur-md p-8 space-y-5"
            >
              <Field
                label="Name"
                type="text"
                value={form.name}
                onChange={set('name')}
                placeholder="Your name"
                error={errors.name}
              />

              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="you@example.com"
                error={errors.email}
              />

              <Field
                label="Subject"
                type="text"
                value={form.subject}
                onChange={set('subject')}
                placeholder="Job Opportunity / Collaboration"
                error={errors.subject}
              />

              <div>
                <label
                  className="block mb-2 text-xs uppercase tracking-[0.25em]"
                  style={{ color: '#93C5FD' }}
                >
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  placeholder="Tell me about your project..."
                  aria-invalid={Boolean(errors.message)}
                  className={`
                    w-full bg-slate-950/70 border
                    px-4 py-3 text-slate-200 placeholder:text-slate-500
                    focus:outline-none resize-none
                    ${errors.message
                      ? 'border-red-500/60 focus:border-red-400'
                      : 'border-slate-800 focus:border-blue-300'}
                  `}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              {status === 'success' && (
                <p
                  className="text-sm border px-4 py-3"
                  style={{ color: '#93C5FD', borderColor: '#93C5FD40' }}
                >
                  ✓ Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm border border-red-500/30 text-red-300 px-4 py-3">
                  ✕ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 font-medium transition-all duration-300 hover:opacity-90 disabled:opacity-50"
                style={{ background: '#93C5FD', color: '#0F172A' }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

function Field({ label, type, value, onChange, placeholder, error }) {
  return (
    <div>
      <label
        className="block mb-2 text-xs uppercase tracking-[0.25em]"
        style={{ color: '#93C5FD' }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`
          w-full bg-slate-950/70 border
          px-4 py-3 text-slate-200 placeholder:text-slate-500
          focus:outline-none
          ${error
            ? 'border-red-500/60 focus:border-red-400'
            : 'border-slate-800 focus:border-blue-300'}
        `}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  )
}