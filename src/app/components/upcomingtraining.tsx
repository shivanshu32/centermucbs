import Link from "next/link";
import { FiArrowUpRight, FiCalendar, FiClock, FiMapPin, FiUsers } from "react-icons/fi";
import { upcomingTrainingPrograms } from "@/data/trainingPrograms";

export default function Upcomingtraining() {
  return (
    <div id="upcomingtraining" className="programme-calendar">
      <div className="site-shell">
        <div className="calendar-heading">
          <div>
            <div className="eyebrow eyebrow-light">Programme calendar</div>
            <h2>Published programmes</h2>
          </div>
          <p>
            Schedules are updated periodically. Contact our team for the latest
            availability and programme information.
          </p>
        </div>

        <div className="programme-list">
          {upcomingTrainingPrograms.map((program, index) => (
            <article className="programme-card" key={`${program.title}-${program.date}`}>
              <div className="programme-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="programme-main">
                <span className="programme-type">Professional development</span>
                <h3>{program.title}</h3>
                <div className="programme-meta">
                  <span><FiMapPin aria-hidden="true" /> {program.location}</span>
                  <span><FiCalendar aria-hidden="true" /> {program.date}</span>
                  <span><FiClock aria-hidden="true" /> {program.duration}</span>
                </div>
                <p className="programme-audience"><FiUsers aria-hidden="true" /> {program.targetAudience}</p>
              </div>
              <div className="programme-action">
                {program.brochureUrl ? (
                  <a className="circle-link" href={program.brochureUrl} download aria-label={`Download brochure for ${program.title}`}>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <Link className="circle-link" href="#contactus" aria-label={`Enquire about ${program.title}`}>
                    <FiArrowUpRight aria-hidden="true" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
