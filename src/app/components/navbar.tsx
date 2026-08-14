"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "About", href: "/#aboutus" },
  { label: "Training", href: "/#trainingprogram" },
  { label: "Consultancy", href: "/#services" },
  { label: "Archive", href: "/archive" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-shell nav-inner" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="CMUCBs home">
          <Image src="/cmucblogo.jpg" alt="" width={62} height={62} priority />
        </Link>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div id="primary-menu" className={`nav-menu ${open ? "is-open" : ""}`}>
          <div className="nav-links">
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <a href="https://website.rbi.org.in/web/rbi/notifications/rbi-circulars" target="_blank" rel="noreferrer">RBI updates</a>
          </div>
          <Link className="button button-nav" href="https://forms.gle/ExCvt9jbBhp7tzg68">
            Nominations <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
