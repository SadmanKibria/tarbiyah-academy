import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { courses } from "@/lib/content";

export const metadata: Metadata = { title: "Qur’an, Hifz & Islamic Studies Courses", description: "Explore Qur’an, Tajweed, Hifz and Islamic Studies classes for children and young people at Tarbiyah Academy in Ilford.", alternates: { canonical: "/courses" } };

export default function CoursesPage() {
  return <>
    <section className="page-hero page-hero-courses"><div className="wrap"><span className="eyebrow light">Courses</span><h1>Find the right next step<br /><em>for their journey.</em></h1><p>Clear pathways from first letters to confident, lived Islamic knowledge.</p></div></section>
    <section className="pathways section"><div className="wrap pathway-list">
      {courses.slice(0, 2).map((course, index) => <article className="pathway" key={course.title}>
        <div className="pathway-image"><Image src={course.image} alt={`${course.title} class`} fill sizes="(max-width: 850px) 100vw, 48vw" /></div>
        <div className="pathway-copy"><span className="eyebrow">Pathway {course.number}</span><h2>{course.title}</h2><p className="lead">{course.description}</p><ul>{course.points.map(point => <li key={point}><span>✓</span>{point}</li>)}</ul><Link href="/enroll" className="button">Enquire about this course <span>↗</span></Link></div>
      </article>)}
    </div></section>
    <section className="course-note"><div className="wrap"><span>Not sure which level?</span><p>That is completely fine. Tell us where your child is currently, and our team will help you choose the right starting point.</p><Link href="/contact" className="text-link light">Talk to our team <span>→</span></Link></div></section>
    <CtaBand title="Give them a confident start." />
  </>;
}
