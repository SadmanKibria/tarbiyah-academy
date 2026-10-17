import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { semesters } from "@/lib/content";

export const metadata: Metadata = { title: "Diploma in Islamic Studies", description: "Study Fiqh, Aqeedah, Tafsir, Hadith and Arabic in Tarbiyah Academy's two-year Diploma in Islamic Studies in Ilford.", alternates: { canonical: "/diploma" } };

export default function DiplomaPage() {
  return <>
    <section className="diploma-hero"><Image src="/images/diploma-class.jpg" alt="Diploma students in class at Tarbiyah Academy" fill priority sizes="100vw" /><div className="hero-wash" /><div className="wrap diploma-hero-content"><span className="eyebrow light">Two-year programme · Four semesters</span><h1>Go beyond the basics.<br /><em>Build lasting depth.</em></h1><p>A structured Diploma in Islamic Studies for older students and adults who want to understand their faith with clarity.</p><Link href="/enroll" className="button button-gold">Apply for the diploma <span>↗</span></Link></div></section>
    <section className="diploma-intro section"><div className="wrap intro-grid"><div><span className="eyebrow">Programme overview</span><h2>Classical foundations.<br /><em>Contemporary relevance.</em></h2></div><div className="intro-copy"><p>Learn through lectures, guided discussion, group work and guest speakers. Each semester builds your knowledge across the core Islamic sciences while connecting study to modern life.</p><div className="stat-row"><div><b>2</b><span>Years</span></div><div><b>4</b><span>Semesters</span></div><div><b>20</b><span>Core modules</span></div></div></div></div></section>
    <section className="curriculum section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow light">Curriculum</span><h2>What you will <em>study.</em></h2></div><p>A progressive curriculum spanning belief, law, revelation, language and leadership.</p></div><div className="semester-grid">{semesters.map((semester, index) => <article key={semester.title}><span>0{index + 1}</span><h3>{semester.title}</h3><ul>{semester.subjects.map(subject => <li key={subject}>{subject}</li>)}</ul></article>)}</div></div></section>
    <section className="progression section"><div className="wrap progression-grid"><div className="progression-image"><Image src="/images/youth-presentation.jpg" alt="Students building confidence through presentation" fill sizes="(max-width: 850px) 100vw, 50vw" /></div><div><span className="eyebrow">After the diploma</span><h2>Knowledge that moves <em>with you.</em></h2><p>The programme gives students a strong foundation for lifelong learning, service and further Islamic study. Graduates can progress to more advanced study while bringing greater confidence to their families and communities.</p><Link href="/contact" className="text-link">Ask about entry requirements <span>→</span></Link></div></div></section>
    <CtaBand title="Ready to study Islam in depth?" />
  </>;
}
