import { FiArrowUpRight, FiCompass, FiTarget, FiUsers } from "react-icons/fi";

const values = [
  {
    icon: FiCompass,
    title: "Practical guidance",
    copy: "Clear advice designed for real banking decisions—not theory that stays on paper.",
  },
  {
    icon: FiUsers,
    title: "Industry expertise",
    copy: "Experienced banking and co-operative sector leaders who understand your world.",
  },
  {
    icon: FiTarget,
    title: "Focused outcomes",
    copy: "Training and consultancy that strengthen governance, capability and performance.",
  },
];

export default function About() {
  return (
    <section id="aboutus" className="section about-section">
      <div className="site-shell">
        <div className="about-top">
          <div>
            <div className="eyebrow">About CMUCBs</div>
            <h2>Better banking,<br />made practical.</h2>
          </div>
          <div className="about-summary">
            <p>
              We help Urban Co-operative Banks build stronger governance,
              confident teams and sustainable growth.
            </p>
            <span>
              Our experts turn banking experience and regulatory knowledge into
              clear, useful action.
            </span>
          </div>
        </div>

        <div className="about-values">
          {values.map(({ icon: Icon, title, copy }, index) => (
            <article className="about-value" key={title}>
              <div className="about-value-head">
                <Icon aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="about-callout">
          <div>
            <span>From insight to implementation</span>
            <strong>Support shaped around your bank.</strong>
          </div>
          <a className="button button-about" href="#trainingprogram">
            Explore our programmes <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
