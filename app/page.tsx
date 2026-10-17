import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { courses } from "@/lib/content";

export default function HomePage() {
  return <>
    <section className="hero">
      <Image src="/images/hero-classroom.jpg" alt="Young students learning Qur’an together at Tarbiyah Academy in Ilford" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-wash" />
      <div className="wrap hero-content">
        <div className="hero-copy">
          <span className="eyebrow light">Qur’an · Knowledge · Character</span>
          <h1>More than lessons.<br /><em>A foundation for life.</em></h1>
          <p>Helping children and young people grow in faith, confidence and character—in a place where they feel they belong.</p>
          <div className="hero-actions"><Link href="/enroll" className="button button-gold">Enrol your child <span>↗</span></Link><Link href="/courses" className="button button-ghost">Explore courses <span>↓</span></Link></div>
        </div>
        <div className="hero-note"><b>Ilford, East London</b><span>Learning rooted in faith.<br />Ready for the world.</span></div>
      </div>
      <div className="hero-proof"><div className="wrap proof-grid"><span><b>01</b> Structured learning</span><span><b>02</b> Caring teachers</span><span><b>03</b> Faith in practice</span></div></div>
    </section>

    <section className="intro section" id="approach">
      <div className="wrap intro-grid">
        <div><span className="eyebrow">Our approach</span><h2>We teach the whole child, <em>not just the page.</em></h2></div>
        <div className="intro-copy"><p>Real Islamic education shapes how a young person thinks, behaves and shows up in the world. That is why every lesson at Tarbiyah connects knowledge to character.</p><Link href="/courses" className="text-link">Discover our learning pathways <span>→</span></Link></div>
      </div>
      <div className="wrap value-strip">
        <article><span>01</span><div><h3>Know</h3><p>Build sound, age-appropriate Islamic knowledge.</p></div></article>
        <article><span>02</span><div><h3>Love</h3><p>Nurture a living connection with Allah and His Book.</p></div></article>
        <article><span>03</span><div><h3>Live</h3><p>Turn learning into excellent character and everyday action.</p></div></article>
      </div>
    </section>

    <section className="courses-section section">
      <div className="wrap section-heading"><div><span className="eyebrow">Learning pathways</span><h2>One journey.<br /><em>Every stage covered.</em></h2></div><p>From first letters to deeper Islamic scholarship, each pathway gives students a clear next step.</p></div>
      <div className="wrap course-grid">
        {courses.map((course, index) => <article className="course-card" key={course.title}>
          <div className="course-image"><Image src={course.image} alt={`${course.title} at Tarbiyah Academy`} fill sizes="(max-width: 850px) 100vw, 33vw" /><span>{course.number}</span></div>
          <div className="course-body"><small>{course.strapline}</small><h3>{course.title}</h3><p>{course.description}</p><ul>{course.points.map(point => <li key={point}>{point}</li>)}</ul><Link href={index === 2 ? "/diploma" : "/courses"} aria-label={`Learn more about ${course.title}`}>Explore pathway <span>↗</span></Link></div>
        </article>)}
      </div>
    </section>

    <section className="story section">
      <div className="wrap story-grid">
        <div className="story-gallery">
          <div className="image-tall"><Image src="/images/full-classroom.jpg" alt="A full Tarbiyah Academy classroom" fill sizes="(max-width: 850px) 50vw, 28vw" /></div>
          <div className="image-stack"><div><Image src="/images/personal-guidance.jpg" alt="A teacher giving one-to-one guidance" fill sizes="(max-width: 850px) 50vw, 25vw" /></div><div><Image src="/images/youth-presentation.jpg" alt="Young students presenting to their class" fill sizes="(max-width: 850px) 50vw, 25vw" /></div></div>
        </div>
        <div className="story-copy"><span className="eyebrow light">A place to belong</span><h2>Serious learning.<br /><em>Warm community.</em></h2><p>Young people learn best when they feel seen, supported and inspired. Our classrooms make space for questions, friendship, reflection and real participation.</p><div className="quote">“We want every student to leave with knowledge in their mind, faith in their heart and confidence in who they are.”</div><Link href="/contact" className="text-link light">Come and meet us <span>→</span></Link></div>
      </div>
    </section>

    <section className="parent-section section">
      <div className="wrap parent-grid">
        <div><span className="eyebrow">For parents</span><h2>A choice you can feel <em>good about.</em></h2><p>Choosing an Islamic education is choosing who helps shape your child. We take that trust seriously.</p></div>
        <div className="parent-points"><article><b>01</b><h3>Clear progression</h3><p>Structured pathways help students build strong foundations before moving forward.</p></article><article><b>02</b><h3>Character-led</h3><p>Adab, responsibility and compassion are part of the lesson—not an afterthought.</p></article><article><b>03</b><h3>Local & connected</h3><p>A welcoming Ilford community where young Muslims learn and grow together.</p></article><article><b>04</b><h3>Easy to start</h3><p>Tell us about your child and our team will guide you to the right course.</p></article></div>
      </div>
    </section>
    <CtaBand />
  </>;
}
