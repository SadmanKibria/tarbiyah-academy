import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";

export const metadata: Metadata = { title: "Contact & Visit", description: "Contact Tarbiyah Academy at 379 Oaklands Park Avenue, Ilford, IG1 1TG. Call, email or message our team about classes and enrolment.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <>
    <section className="contact-page section"><div className="wrap contact-grid"><div><span className="eyebrow">Contact us</span><h1>Let’s talk about<br /><em>their next step.</em></h1><p>Questions about a course, level or application? Our team is here to help.</p><div className="contact-list"><a href={`tel:${contact.phone}`}><span>Call</span><strong>{contact.phoneDisplay}</strong><b>↗</b></a><a href={contact.whatsapp}><span>WhatsApp</span><strong>Message our team</strong><b>↗</b></a><a href={`mailto:${contact.email}`}><span>Email</span><strong>{contact.email}</strong><b>↗</b></a></div></div><div className="visit-card"><div className="visit-image"><Image src="/images/personal-guidance.jpg" alt="Teacher supporting a Tarbiyah Academy student" fill sizes="(max-width: 850px) 100vw, 45vw" /></div><div><span className="eyebrow light">Visit us in Ilford</span><h2>{contact.address}</h2><a href={contact.maps} target="_blank" rel="noreferrer" className="button button-cream">Get directions <span>↗</span></a></div></div></div></section>
    <section className="simple-cta"><div className="wrap"><h2>Already know you’re ready?</h2><Link href="/enroll" className="button button-gold">Start an application <span>↗</span></Link></div></section>
  </>;
}
