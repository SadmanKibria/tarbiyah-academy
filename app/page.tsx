"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BookOpen, Heart, Users, Award, CheckCircle2, ChevronRight } from "lucide-react"

export default function Home() {
  const courses = [
    {
      title: "Qur'an for Beginners",
      description: "Our Qur'an classes focus on correct recitation (Tajweed) and understanding the meanings and lessons from the Qur'an",
      icon: BookOpen,
      href: "/courses",
    },
    {
      title: "Hifz and Islamic Studies",
      description: "Our Qur'an classes focus on correct recitation (Tajweed), memorisation (Hifz) and understanding the meanings and lessons from the Qur'an",
      icon: Users,
      href: "/courses",
    },
    {
      title: "Diploma in Islamic Studies",
      description: "Advanced studies in Fiqh, Aqeedah, Tafsir, and comprehensive Islamic jurisprudence",
      icon: Award,
      href: "/diploma",
    },
  ]

  const whyChoose = [
    "Qualified & experienced Islamic educators",
    "Faith-based, nurturing learning environment",
    "Comprehensive, age-appropriate curriculum",
    "Strong emphasis on character & values",
    "Supportive community for students & parents",
    "Flexible learning pathways & progression",
    "Segregated class for boys and girls",
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 max-w-7xl mx-auto">
          <HeroSlideshow />
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-16 sm:py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-3 mb-4 items-start">
                  <div className="w-1.5 h-10 bg-secondary rounded-full mt-1"></div>
                  <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  To build a strong foundation of faith, character and practice, helping children grow into confident, responsible Muslims who live by authentic Islamic teachings. 
                  We aim to nurture a generation that is spiritually aware, morally upright and deeply rooted in their Islamic identity, ready to contribute positively to society while remaining steadfast in their faith.
                </p>
              </div>
              <div>
                <div className="flex gap-3 mb-4 items-start">
                  <div className="w-1.5 h-10 bg-secondary rounded-full mt-1"></div>
                  <h2 className="text-4xl font-bold text-primary">Events</h2>
                </div>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  We organise a variety of spiritual, educational and community-centered events designed to inspire, strengthen faith and bring people together. 
                  Our programs include insightful talks, workshops and gatherings that encourage learning, reflection and connection. 
                  Visit this page regularly to stay informed about upcoming events and opportunities to get involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Tarbiyah Academy?</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((reason, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-6 bg-muted/50 rounded-lg hover:shadow-md hover:bg-muted transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/85 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Overview */}
        <section className="w-full py-16 sm:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Programs</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course, i) => {
                const Icon = course.icon
                return (
                  <Link
                    key={i}
                    href={course.href}
                    className="group bg-white border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex gap-4 items-start mb-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mt-1 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{course.description}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 text-balance">Ready to Begin Your Journey?</h2>
            <p className="text-lg opacity-95 mb-10 text-balance max-w-2xl mx-auto">
              Join Tarbiyah Academy where Islamic knowledge meets character excellence. Enroll your child today and be
              part of our learning community.
            </p>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Enroll Now
              <ChevronRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
