import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Enrol", description: "Start an application for Qur’an, Hifz, Islamic Studies or the Diploma in Islamic Studies at Tarbiyah Academy, Ilford.", alternates: { canonical: "/enroll" } };

export default function EnrollPage() {
  return <section className="enrol-page"><div className="wrap enrol-grid"><div className="enrol-copy"><span className="eyebrow light">Enrolment</span><h1>The next step starts <em>here.</em></h1><p>Complete our short application form and a member of the Tarbiyah Academy team will get in touch to guide you.</p><ol><li><b>01</b><span><strong>Tell us about the student</strong>Share their current level and the pathway you are interested in.</span></li><li><b>02</b><span><strong>We review your application</strong>Our team checks the best fit and may contact you for more information.</span></li><li><b>03</b><span><strong>Begin the journey</strong>We will confirm the next steps, class information and start date.</span></li></ol><div className="enrol-help">Need help first? <a href={contact.whatsapp}>Message us on WhatsApp →</a></div></div><div className="form-card"><span>Online application</span><h2>Apply to Tarbiyah Academy</h2><p>The form opens securely in Google Forms and usually takes only a few minutes.</p><a href={contact.form} target="_blank" rel="noreferrer" className="button button-gold">Open application form <span>↗</span></a><small>By submitting the form, you agree that our team may contact you about your application.</small></div></div></section>;
}
