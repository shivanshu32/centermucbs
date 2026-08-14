import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiUsers } from "react-icons/fi";
import Upcomingtraining from "./upcomingtraining";

const formats = [
  {
    icon: FiUsers,
    number: "01",
    title: "Management development",
    copy: "Immersive programmes for chairpersons, directors, CEOs and senior leaders—designed around sharper decisions and sound governance.",
    tag: "For leadership teams",
  },
  {
    icon: FiBookOpen,
    number: "02",
    title: "Staff capacity building",
    copy: "Applied learning that equips officers with current knowledge, better processes and the confidence to serve customers well.",
    tag: "For banking professionals",
  },
];

export default function Trainingprograms() {
  return (
    <section id="trainingprogram" className="section training-section">
      <div className="site-shell">
        <div className="section-heading split-heading">
          <div>
            <div className="eyebrow eyebrow-light">Learning that moves institutions</div>
            <h2>Expert-led. Applied.<br />Built to make a difference.</h2>
          </div>
          <div>
            <p>
              Programmes shaped around the real regulatory, operational and
              leadership challenges facing co-operative banks today.
            </p>
            <Link className="text-link text-link-light" href="/archive">
              View past programmes <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="format-grid">
          {formats.map(({ icon: Icon, number, title, copy, tag }) => (
            <article className="format-card" key={number}>
              <div className="format-card-top">
                <span>{number}</span>
                <Icon aria-hidden="true" />
              </div>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
              <span className="format-tag">{tag}</span>
            </article>
          ))}
        </div>
      </div>
      <Upcomingtraining />
    </section>
  );
}
