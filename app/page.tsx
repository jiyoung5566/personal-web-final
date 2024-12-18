'use client'

import { useEffect, useState } from 'react'

import Header from '@/components/headers'
import HomeSection from '@/components/homesection'
import ProfileSection from '@/components/profilesection'
import ProjectSection from '@/components/projectsection'
import ContactSection from '@/components/contactsection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let currentSection = ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id') || ''
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const navLinks = document.querySelectorAll('a[href^="#"]')
    navLinks.forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${activeSection}`) {
        link.classList.add('active')
      }
    })
  }, [activeSection])

  return (
    <main>
      <Header />
      <HomeSection />
      <ProfileSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}
