import Link from "next/link";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const focusAreas = ["Governance", "Compliance", "Capacity building"];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="site-shell hero-inner">
        <div className="hero-copy">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            Advancing India&apos;s co-operative banking sector
          </div>
          <h1 id="hero-title">
            Stronger banks.<br /><em>Smarter leadership.</em>
          </h1>
          <p className="hero-lead">
            We help Urban Co-operative Banks turn regulation, governance and
            people capability into confident, sustainable growth.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="https://forms.gle/GJa2SqFGqBDa6tsa7">
              Nominate a participant <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link className="button button-ghost" href="#services">
              Explore our expertise
            </Link>
          </div>
          <div className="hero-focus" aria-label="Our focus areas">
            {focusAreas.map((area) => (
              <span key={area}><FiCheckCircle aria-hidden="true" /> {area}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-image-card">
            <div className="hero-image" />
            <div className="hero-image-overlay" />
            <div className="hero-stat">
              <span>Built for co-operative banking</span>
              <strong>Expert advice.<br />Real-world impact.</strong>
            </div>
          </div>
          <div className="floating-note floating-note-top">
            <span className="note-mark">01</span>
            RBI-aligned advisory
          </div>
          <div className="floating-note floating-note-bottom">
            <span className="note-mark">02</span>
            Industry-led learning
          </div>
        </div>
      </div>

      <div className="marquee" aria-label="Areas of expertise">
        <div className="marquee-track">
          <span>Governance</span><i />
          <span>Risk Management</span><i />
          <span>Credit Administration</span><i />
          <span>KYC &amp; AML</span><i />
          <span>Customer Service</span><i />
          <span>Recovery Management</span><i />
          <span>Governance</span><i />
          <span>Risk Management</span><i />
        </div>
      </div>
    </section>
  );
}
