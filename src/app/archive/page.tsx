import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiMapPin } from "react-icons/fi";
import { archivePrograms } from "@/data/archivePrograms";

export default function ArchivePage() {
  return (
    <main className="archive-page">
      <header className="archive-hero">
        <div className="site-shell">
          <Link className="back-link" href="/"><FiArrowLeft aria-hidden="true" /> Back to home</Link>
          <div className="eyebrow eyebrow-light">Programme library</div>
          <h1>Learning that has shaped better banking.</h1>
          <p>Explore previous CMUCBs programmes delivered for leaders and professionals across India&apos;s co-operative banking sector.</p>
        </div>
      </header>
      <section className="site-shell archive-content">
        <div className="archive-intro">
          <h2>Previous programmes</h2>
          <span>{archivePrograms.length} programmes</span>
        </div>
        <div className="archive-grid">
          {archivePrograms.map((program, index) => (
            <article className="archive-card" key={`${program.title}-${program.date}`}>
              <div className="archive-card-top"><span>{String(index + 1).padStart(2, "0")}</span><span>Completed</span></div>
              <h3>{program.title}</h3>
              <div className="archive-meta">
                <span><FiMapPin aria-hidden="true" /> {program.location}</span>
                <span><FiCalendar aria-hidden="true" /> {program.date}</span>
              </div>
              {program.targetAudience && <p>{program.targetAudience}</p>}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
