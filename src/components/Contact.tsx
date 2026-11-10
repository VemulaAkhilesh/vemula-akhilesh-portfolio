import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { profile } from '../data/profile.ts'
import { SectionHeading } from './SectionHeading.tsx'

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Add your name'),
  email: z.string().trim().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Use a valid email'),
  message: z.string().trim().min(12, 'Write a little more about the work'),
})

type ContactValues = z.infer<typeof contactSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  function onSubmit(values: ContactValues) {
    const subject = encodeURIComponent(`Note from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`)
    const mail = document.createElement('a')
    mail.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    mail.click()
  }

  return (
    <section className="section" id="contact">
      <div className="shell contact-grid">
        <div>
          <SectionHeading
            index="06"
            kicker="Contact"
            title="Tell me about the product."
            lede="Email, phone, or a short note. The form opens your mail app with the message filled in."
          />
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.phoneHref}>
              {profile.phone}
              <ArrowUpRight size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <form className="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <label className="field">
            <span>Name</span>
            <input type="text" autoComplete="name" {...register('name')} />
            {errors.name ? <small role="alert">{errors.name.message}</small> : null}
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" autoComplete="email" {...register('email')} />
            {errors.email ? <small role="alert">{errors.email.message}</small> : null}
          </label>
          <label className="field">
            <span>Message</span>
            <textarea rows={5} {...register('message')} />
            {errors.message ? <small role="alert">{errors.message.message}</small> : null}
          </label>
          <button className="btn btn-primary" type="submit">
            Send email
            <ArrowUpRight size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
