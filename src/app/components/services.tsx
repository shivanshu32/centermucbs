import { FiArrowUpRight, FiBarChart2, FiFileText, FiLock, FiRefreshCw, FiShield, FiTrendingUp } from "react-icons/fi";

const services = [
  { icon: FiFileText, title: "Policy formation", copy: "RBI-aligned policies that are clear, current and ready to put into practice." },
  { icon: FiShield, title: "Governance & controls", copy: "Internal control mechanisms that strengthen oversight and accountability." },
  { icon: FiBarChart2, title: "Credit & investment", copy: "Stronger administration, evaluation and management of funds and credit." },
  { icon: FiRefreshCw, title: "Recovery management", copy: "Practical frameworks for recovery strategy, process and performance." },
  { icon: FiLock, title: "Sustained compliance", copy: "Structured readiness for statutory and RBI inspection requirements." },
  { icon: FiTrendingUp, title: "Regulatory approvals", copy: "Experienced guidance through complex regulatory approval processes." },
];

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="site-shell">
        <div className="section-heading services-heading">
          <div>
            <div className="eyebrow">Consultancy</div>
            <h2>Clarity for complex banking challenges.</h2>
          </div>
          <p>
            Focused advisory that helps Urban Co-operative Banks move from
            interpretation to implementation—with confidence.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, copy }, index) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon aria-hidden="true" /></div>
              <span className="service-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contactus" aria-label={`Discuss ${title}`}><FiArrowUpRight aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
