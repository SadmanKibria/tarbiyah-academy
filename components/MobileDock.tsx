import Link from "next/link";
import { contact } from "@/lib/content";

export function MobileDock() {
  return <nav className="mobile-dock" aria-label="Quick actions">
    <Link href="/courses"><b>⌁</b><span>Courses</span></Link>
    <Link href="/enroll" className="dock-enrol"><b>↗</b><span>Enrol</span></Link>
    <a href={contact.whatsapp}><b>◌</b><span>WhatsApp</span></a>
    <a href={`tel:${contact.phone}`}><b>⌕</b><span>Call</span></a>
  </nav>;
}
