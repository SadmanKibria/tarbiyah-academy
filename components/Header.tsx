import Image from "next/image";
import Link from "next/link";

const links = [
  ["Courses", "/courses"],
  ["Diploma", "/diploma"],
  ["Our approach", "/#approach"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Tarbiyah Academy home">
          <div className="brand-logo"><Image src="/tarbiya-logo.jpg" width={76} height={76} alt="Tarbiyah Academy logo" priority /></div>
          <span><strong>Tarbiyah Academy</strong><small>Faith · Knowledge · Character</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/enroll" className="button button-small">Enrol now <span>↗</span></Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open menu"><span></span><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/enroll" className="button">Enrol now <span>↗</span></Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
