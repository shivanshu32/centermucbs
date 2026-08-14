import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-shell footer-top">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <Image src="/cmucblogo.jpg" alt="CMUCBs logo" width={58} height={58} />
            <span><strong>CMUCBs</strong><small>Centre for Management of UCBs</small></span>
          </Link>
          <p>Delivering expert advice for stronger, future-ready co-operative banks.</p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/#aboutus">About us</Link>
          <Link href="/#trainingprogram">Training</Link>
          <Link href="/#services">Consultancy</Link>
          <Link href="/archive">Programme archive</Link>
        </div>

        <div className="footer-column">
          <h3>Connect</h3>
          <a href="mailto:cmucbs@gmail.com">cmucbs@gmail.com</a>
          <a href="tel:+919870265838">+91 98702 65838</a>
          <a href="tel:+911203551050">0120 355 1050</a>
          <a href="https://wa.me/919870265838">WhatsApp us <FiArrowUpRight aria-hidden="true" /></a>
        </div>

        <div className="footer-column">
          <h3>Follow</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/centre-for-management-of-ucbs-cmucbs-a19b79347" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
            <a href="https://www.facebook.com/61572386815695" aria-label="Facebook"><FaFacebookF aria-hidden="true" /></a>
            <a href="https://www.instagram.com/centreformanagementof/" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <p>© {new Date().getFullYear()} CMUCBs. All rights reserved.</p>
        <div><Link href="/privacypolicy">Privacy</Link><Link href="/termsandconditions">Terms</Link></div>
      </div>
    </footer>
  );
}
