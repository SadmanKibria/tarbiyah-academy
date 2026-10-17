import Link from "next/link";
import { contact } from "@/lib/content";

export function CtaBand({ title = "Ready to start their journey?" }: { title?: string }) {
  return <section className="cta-band">
    <div className="wrap cta-inner">
      <div><span className="eyebrow light">Applications open</span><h2>{title}</h2><p>Speak to our team or begin the enrolment form today.</p></div>
      <div className="cta-actions"><Link href="/enroll" className="button button-cream">Enrol now <span>↗</span></Link><a href={contact.whatsapp} className="text-link light">Chat on WhatsApp <span>→</span></a></div>
    </div>
  </section>;
}
