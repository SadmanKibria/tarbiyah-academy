import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookOpen, Heart, Users, Award, ChevronRight } from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Qur'an Learning",
      description:
        "Our Qur'an classes focus on correct recitation (Tajweed), memorisation (Hifz), and understanding the meanings and lessons from the Qur'an.",
      icon: BookOpen,
      highlights: [
        "Tajweed (Correct Recitation)",
        "Hifz (Memorisation Programs)",
        "Understanding & Reflection (Tadabur)",
        "Age-appropriate classes",
      ],
    },
    {
      id: 2,
      title: "Hadith & Seerah Studies",
      description:
        "Children learn selected Hadiths and the life of the Prophet ﷺ to strengthen their connection with the Sunnah and apply it in practical ways.",
      icon: Heart,
      highlights: [
        "Selected Hadith collections",
        "Life of Prophet Muhammad ﷺ",
        "Practical application of Sunnah",
        "Character building through examples",
      ],
    },
    {
      id: 3,
      title: "Islamic Manners & Values (Adab & Akhlaaq)",
      description:
        "We place great emphasis on character development, helping children embody the morals and ethics of a practicing Muslim.",
      icon: Users,
      highlights: [
        "Moral and ethical development",
        "Islamic etiquette",
        "Family values and respect",
        "Community responsibility",
      ],
    },
    {
      id: 4,
      title: "Islamic Diploma Programs",
      description:
        "For older students and adults seeking structured and advanced knowledge, our Islamic Diploma programs cover essential subjects such as Fiqh, Aqeedah, Tafsir, and more.",
      icon: Award,
      highlights: [
        "Fiqh (Islamic Jurisprudence)",
        "Aqeedah (Islamic Theology)",
        "Tafsir (Qur'an Interpretation)",
        "Advanced Islamic Studies",
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
            <h1 className="text-4xl font-bold">Our Courses</h1>
            <p className="text-lg opacity-90 mt-2">Comprehensive Islamic education programs for all ages</p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => {
                const Icon = course.icon
                return (
                  <div
                    key={course.id}
                    className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="flex gap-4 items-start mb-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{course.description}</p>
                    <div>
                      <p className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        Key Highlights
                        <span className="w-1 h-4 bg-secondary rounded-full"></span>
                      </p>
                      <ul className="space-y-2">
                        {course.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-2 items-start text-foreground/70 text-sm">
                            <span className="text-secondary font-bold mt-0.5">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 sm:py-20 bg-secondary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Choose Your Course Today</h2>
            <Link
              href="/enroll"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
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
