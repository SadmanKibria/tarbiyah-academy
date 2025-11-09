"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EnrollPage() {
  return (
    <>
      <Header />
      <main className="w-full">
        {/* Page Header */}
        <section className="w-full bg-primary text-primary-foreground py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Enrollment Form</h1>
            <p className="text-lg opacity-90">Join Tarbiyah Academy and begin your Islamic learning journey</p>
          </div>
        </section>

        {/* Form Section */}
        <section className="w-full py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg border border-border p-6 sm:p-8">
              <div className="overflow-x-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf0oiHxnixSQW_H7WNuiGskChvVSMr2GxgB2VgJekCqHqmZOg/viewform?embedded=true"
                  width="100%"
                  height="1822"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="min-h-screen w-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
