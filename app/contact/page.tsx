import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* Page Header */}
        <section className="w-full bg-primary text-primary-foreground py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="text-lg opacity-90 mt-2">Get in touch with Tarbiyah Academy</p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Address</h3>
                      <p className="text-foreground/70">
                        379 Oaklands Park Avenue
                        <br />
                        Ilford, Essex, IG1 1TG
                        <br />
                        United Kingdom
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@tarbiyahacademy.com" className="text-primary hover:underline">
                        info@tarbiyahacademy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <p className="text-foreground/70">Contact us for phone number</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-foreground mb-4">About Tarbiyah Academy</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Tarbiyah Academy is a dedicated Islamic educational institution committed to nurturing young hearts
                  and minds through authentic Islamic knowledge and values.
                </p>
                <div className="space-y-3 text-sm text-foreground/70">
                  <p>
                    <span className="font-semibold text-foreground">Registered:</span> In England and Wales
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Registration Number:</span> 14615563
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Location:</span> Ilford, Essex
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="w-full py-16 sm:py-24 bg-secondary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8">How Can We Help?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Course Inquiries",
                  description: "Ask about our courses, programs, and educational offerings",
                },
                {
                  title: "Enrollment Support",
                  description: "Get help with the enrollment process or have questions about admission",
                },
                {
                  title: "General Questions",
                  description: "Contact us for any other questions or feedback",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
