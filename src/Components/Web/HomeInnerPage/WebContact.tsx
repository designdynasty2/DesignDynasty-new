import { Link } from "react-router-dom";
import { useRef } from "react";
import { images } from "../../../assets/Images/Images";

export const WebContact = () => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const moveX = (x / rect.width - 0.5) * 20; 
    const moveY = (y / rect.height - 0.5) * 20;

    btn.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;

    btn.style.transform = "translate(0,0)";
  };

  return (
    <section id="Contact-Section" className="contract-section">
      <div className="container service-container w-container">
        <div className="contract-wrapper">
          <h2 className="contact-title stoke-text">Let’s Discuss</h2>
          <Link
            to="/contact"
            className="contract-link-block w-inline-block hover-btn"
            ref={btnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={images.contacticon}
              loading="lazy"
              alt="Icon"
              className="contact-icon"
            />
            <div className="contect-text">Contact Us</div>
          </Link>
        </div>
      </div>
      <div className="line-design-wrapper">
        <div className="single-line"></div>
        <div className="single-line"></div>
        <div className="single-line"></div>
      </div>
    </section>
  );
};
