import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top wrap">
        <div className="footer-brand">
          <Image src="/tarbiya-logo.jpg" width={78} height={78} alt="" />
          <div><strong>Tarbiyah Academy</strong><p>Growing knowledge, character and confidence in the heart of Ilford.</p></div>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link href="/courses">Courses</Link><Link href="/diploma">Diploma</Link><Link href="/enroll">Enrol</Link></div>
          <div><span>Visit</span><a href={contact.maps} target="_blank" rel="noreferrer">{contact.address}</a></div>
          <div><span>Talk to us</span><a href={`tel:${contact.phone}`}>{contact.phoneDisplay}</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <p>© {new Date().getFullYear()} Tarbiyah Academy. All rights reserved.</p>
        <p>Durotech Limited T/A Tarbiyah Academy · Company no. 12671924</p>
      </div>
    </footer>
  );
}
