import { FiCheck } from "react-icons/fi";

const strengths = [
  "Governance and sustained compliance",
  "Technology aligned with the cyber security framework",
  "Business growth centred on customer expectations",
  "Clear SOPs across acquisition, funds, credit and recovery",
  "Policies updated in line with Reserve Bank of India guidance",
];

export default function Whychooseus() {
  return (
    <section className="section why-section">
      <div className="site-shell why-layout">
        <div className="why-art" aria-hidden="true">
          <div className="why-rings">
            <span>Insight</span>
            <span>Action</span>
            <span>Impact</span>
          </div>
        </div>
        <div className="why-copy">
          <div className="eyebrow eyebrow-light">Why CMUCBs</div>
          <h2>Deep expertise.<br />Practical outcomes.</h2>
          <p>
            We connect regulatory understanding with the day-to-day realities of
            banking, so advice is not only sound—it is usable.
          </p>
          <ul>
            {strengths.map((strength) => (
              <li key={strength}><span><FiCheck aria-hidden="true" /></span>{strength}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
