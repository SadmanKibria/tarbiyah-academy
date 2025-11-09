import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { CheckCircle2, BookMarked, Users, Award, ChevronRight } from "lucide-react"

export default function DiplomaPage() {
  const semesters = [
    {
      name: "Semester 1",
      courses: [
        { name: "Introduction to Qur'an Studies", hours: "40 hours" },
        { name: "Fundamentals of Islamic Creed (Aqeedah)", hours: "40 hours" },
        { name: "Islamic Ethics & Manners", hours: "30 hours" },
      ],
    },
    {
      name: "Semester 2",
      courses: [
        { name: "Tafsir - Selected Surahs", hours: "40 hours" },
        { name: "Hadith Sciences & Selected Collections", hours: "40 hours" },
        { name: "Islamic Jurisprudence Basics", hours: "35 hours" },
      ],
    },
    {
      name: "Semester 3",
      courses: [
        { name: "Advanced Tafsir Studies", hours: "45 hours" },
        { name: "Fiqh - Pillars of Islam", hours: "45 hours" },
        { name: "Seerah - Life of the Prophet", hours: "40 hours" },
      ],
    },
    {
      name: "Semester 4",
      courses: [
        { name: "Islamic Jurisprudence - Advanced", hours: "45 hours" },
        { name: "Qur'anic Linguistics & Grammar", hours: "40 hours" },
        { name: "Contemporary Islamic Issues", hours: "35 hours" },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="w-full">
        {/* Page Header */}
        <section className="w-full bg-primary text-primary-foreground py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Islamic Diploma Program</h1>
            <p className="text-lg opacity-90 mt-2">
              Comprehensive advanced Islamic studies for adults and older students
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex gap-3 mb-6 items-start">
                  <div className="w-1.5 h-10 bg-secondary rounded-full mt-1"></div>
                  <h2 className="text-3xl font-bold text-primary">Program Details</h2>
                </div>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-start">
                    <BookMarked className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Duration</p>
                      <p className="text-foreground/70">4 semesters (1 year comprehensive program)</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Award className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Total Hours</p>
                      <p className="text-foreground/70">Approximately 450+ hours of structured study</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Format</p>
                      <p className="text-foreground/70">Structured modules with rigorous assessments</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Users className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Subjects Covered</p>
                      <p className="text-foreground/70">Qur'an, Hadith, Fiqh, Aqeedah, Tafsir, Seerah & more</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-lg p-8 border border-primary/20">
                <p className="text-foreground/85 leading-relaxed text-pretty font-medium">
                  Our Islamic Diploma program is designed for dedicated students seeking deep, comprehensive knowledge
                  of Islamic sciences. Combining rigorous theoretical understanding with practical application, this
                  program prepares students to become knowledgeable contributors to their communities, equipped with
                  authentic Islamic wisdom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Breakdown */}
        <section className="w-full py-16 sm:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-2">Curriculum Breakdown</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {semesters.map((semester, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border border-border p-7 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border/50">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{semester.name}</h3>
                  </div>
                  <div className="space-y-4">
                    {semester.courses.map((course, i) => (
                      <div key={i} className="pb-4 border-b border-border/50 last:border-b-0">
                        <p className="font-semibold text-foreground">{course.name}</p>
                        <p className="text-sm text-secondary font-medium mt-1">{course.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-primary mb-2">Program Benefits</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Comprehensive Knowledge",
                  description: "Gain deep understanding across all major Islamic sciences",
                  icon: BookMarked,
                },
                {
                  title: "Expert Instructors",
                  description: "Learn from qualified teachers with extensive Islamic knowledge",
                  icon: Users,
                },
                {
                  title: "Structured Learning",
                  description: "Follow a carefully designed curriculum building year-long",
                  icon: Award,
                },
                {
                  title: "Community Connection",
                  description: "Join a supportive community of dedicated Islamic students",
                  icon: Users,
                },
                {
                  title: "Practical Application",
                  description: "Apply knowledge to real-life situations and contemporary contexts",
                  icon: CheckCircle2,
                },
                {
                  title: "Certificate Upon Completion",
                  description: "Receive formal recognition for successfully completing the program",
                  icon: Award,
                },
              ].map((benefit, i) => {
                const BenefitIcon = benefit.icon
                return (
                  <div
                    key={i}
                    className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex gap-3 items-start mb-3">
                      <BenefitIcon
                        className="text-secondary flex-shrink-0 group-hover:scale-110 transition-transform"
                        size={24}
                      />
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">Begin Your Islamic Studies Journey</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Take the first step towards comprehensive Islamic knowledge and spiritual growth
            </p>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold py-3 px-8 rounded-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Enroll in Diploma Program
              <ChevronRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
