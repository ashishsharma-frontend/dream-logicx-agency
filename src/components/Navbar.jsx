import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsCompact(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // GSAP-like animations with RAF
  useEffect(() => {
    if (!navbarRef.current) return;

    let frame;
    let progress = 0;
    const animate = () => {
      if (progress < 1) {
        progress += 0.02;
        const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubic
        navbarRef.current.style.transform = `translateY(${
          -100 + eased * 100
        }%)`;
        navbarRef.current.style.opacity = eased;
        frame = requestAnimationFrame(animate);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!menuRef.current) return;

    let frame;
    let progress = 0;

    if (isMenuOpen) {
      menuRef.current.style.display = "flex";
      const animate = () => {
        if (progress < 1) {
          progress += 0.03;
          const eased = 1 - Math.pow(1 - progress, 4);
          menuRef.current.style.transform = `translateX(${100 - eased * 100}%)`;
          if (overlayRef.current) {
            overlayRef.current.style.opacity = eased * 0.6;
          }
          frame = requestAnimationFrame(animate);
        }
      };
      frame = requestAnimationFrame(animate);
    } else {
      progress = 1;
      const animate = () => {
        if (progress > 0) {
          progress -= 0.04;
          const eased = 1 - Math.pow(1 - progress, 4);
          if (menuRef.current) {
            menuRef.current.style.transform = `translateX(${
              100 - eased * 100
            }%)`;
          }
          if (overlayRef.current) {
            overlayRef.current.style.opacity = eased * 0.6;
          }
          frame = requestAnimationFrame(animate);
        } else {
          if (menuRef.current) menuRef.current.style.display = "none";
        }
      };
      frame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(frame);
  }, [isMenuOpen]);

  const navItems = ["About", "Services", "Industries", "Blog", "Contact"];
  const services = [
    "Software Development",
    "Mobile Applications",
    "AI & Automation",
    "UI/UX Design",
    "Consulting",
    "Cloud Solutions",
  ];
  const industries = [
    "Real Estate",
    "Education",
    "Healthcare",
    "Hospitality",
    "E-commerce",
    "Manufacturing",
  ];

  const navbarOpacity = Math.min(1, scrollY / 100);
  const navbarBlur = Math.min(16, scrollY / 8);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes navItemFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          transform: translateY(-100%);
          opacity: 0;
          will-change: transform, opacity;
          
        }

        .navbar-inner {
          margin: 0 auto;
          position: relative;
        }

        .navbar-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, ${0.6 + navbarOpacity * 0.35});
          backdrop-filter: blur(${navbarBlur}px) saturate(180%);
          border: 1px solid rgba(0, 0, 0, ${0.06 + navbarOpacity * 0.04});
          box-shadow: 0 4px 24px rgba(0, 0, 0, ${0.04 + navbarOpacity * 0.06});
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          position: relative;
          z-index: 2;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo:hover {
          transform: scale(1.02);
        }

        .logo:hover .logo-icon {
          transform: scale(1.08) rotate(5deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #111 0%, #2a2a2a 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .logo-icon::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 70%
          );
          animation: shimmer 3s infinite;
        }

        .logo-text {
          font-size: 19px;
          font-weight: 600;
          letter-spacing: -0.5px;
          color: #111;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo:hover .logo-text {
          letter-spacing: 0px;
        }

        .nav-menu {
          display: ${isCompact ? "none" : "flex"};
          align-items: center;
          gap: 8px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-link {
          position: relative;
          color: #666;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          background: none;
          border: none;
          text-decoration: none; /* remove default anchor underline */
          display: inline-flex; /* ensure padding behaves like before */
          align-items: center;
          padding: 10px 20px;
          border-radius: 8px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation: navItemFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: calc(var(--index) * 0.08s);
          opacity: 0;
        }

        .nav-link:nth-child(1) { --index: 0; }
        .nav-link:nth-child(2) { --index: 1; }
        .nav-link:nth-child(3) { --index: 2; }
        .nav-link:nth-child(4) { --index: 3; }
        .nav-link:nth-child(5) { --index: 4; }

        .nav-link:hover {
          color: #111;
          background: rgba(0, 0, 0, 0.04);
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 20px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link:hover::after {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 2;
        }

        .icon-button {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          color: #666;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .icon-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.04);
          border-radius: 10px;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .icon-button:hover::before {
          transform: scale(1);
        }

        .icon-button:hover {
          color: #111;
          transform: scale(1.08) rotate(8deg);
        }

        .cta-button {
          display: ${isCompact ? "none" : "inline-flex"};
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .cta-button:hover::before {
          transform: translateX(100%);
        }

        .cta-button:hover {
          background: #000;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
        }

        .cta-button:active {
          transform: translateY(-1px) scale(0.98);
        }

        .menu-toggle {
          display: ${isCompact ? "flex" : "none"};
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .menu-toggle:hover {
          background: rgba(0, 0, 0, 0.04);
          transform: scale(1.08);
        }

        .menu-toggle:active {
          transform: scale(0.95);
        }

        .hamburger-line {
          position: absolute;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .line-top {
          width: 20px;
          top: 35%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        .line-top.open {
          top: 50%;
          width: 20px;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }

        .line-middle {
          width: 20px;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          opacity: 1;
        }

        .line-middle.open {
          opacity: 0;
          transform: translateX(-50%) translateY(-50%) scale(0);
        }

        .line-bottom {
          width: 14px;
          bottom: 35%;
          left: calc(50% + 3px);
          transform: translateX(-50%) translateY(50%);
        }

        .line-bottom.open {
          width: 20px;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(50%) rotate(-45deg);
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          z-index: 1000;
          opacity: 0;
          pointer-events: ${isMenuOpen ? "auto" : "none"};
          will-change: opacity;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(400px, 90vw);
          background: #ffffff;
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.12);
          z-index: 1001;
          overflow-y: auto;
          display: none;
          flex-direction: column;
          transform: translateX(100%);
          will-change: transform;
        }

        .mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .mobile-close {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.04);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .mobile-close:hover {
          background: rgba(0, 0, 0, 0.08);
          transform: scale(1.08) rotate(90deg);
        }

        .mobile-close:active {
          transform: scale(0.95);
        }

        .close-line {
          position: absolute;
          width: 18px;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .close-line:first-child {
          transform: rotate(45deg);
        }

        .close-line:last-child {
          transform: rotate(-45deg);
        }

        .mobile-content {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
        }

        .mobile-cta {
          width: 100%;
          padding: 16px;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .mobile-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
        }

        .mobile-cta:hover::before {
          animation: shimmer 0.8s;
        }

        .mobile-cta:hover {
          background: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .mobile-cta:active {
          transform: translateY(0);
        }

        .mobile-section {
          margin-bottom: 4px;
        }

        .mobile-nav-link {
          width: 100%;
          padding: 16px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          border-radius: 10px;
          text-decoration: none; /* remove underline for anchors */
          display: block; /* full-width clickable area */
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: #111;
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mobile-nav-link:hover::before {
          width: 16px;
        }

        .mobile-nav-link:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #111;
          padding-left: 28px;
        }

        .accordion-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 15px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .accordion-button:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #111;
        }

        .accordion-icon {
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          color: #999;
        }

        .accordion-icon.open {
          transform: rotate(180deg);
        }

        .accordion-content {
          padding: 8px 0 12px 20px;
          display: grid;
          gap: 2px;
          overflow: hidden;
        }

        .accordion-item {
          padding: 12px 20px;
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          color: #999;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .accordion-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #111, #666);
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .accordion-item:hover::before {
          width: 12px;
        }

        .accordion-item:hover {
          background: rgba(0, 0, 0, 0.04);
          color: #111;
          padding-left: 24px;
        }

        .divider {
          height: 1px;
          background: rgba(0, 0, 0, 0.06);
          margin: 24px 0;
        }

        .mobile-footer {
          padding: 16px 0;
          color: #999;
          font-size: 13px;
          font-weight: 500;
        }

        .mobile-menu::-webkit-scrollbar {
          width: 6px;
        }

        .mobile-menu::-webkit-scrollbar-track {
          background: transparent;
        }

        .mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }

        .mobile-menu::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 12px 16px;
          }

          .navbar-container {
            padding: 8px 16px;
          }

          .logo-text {
            font-size: 17px;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>

      <nav className="navbar" ref={navbarRef}>
        <div
          style={{ backgroundColor: "#ffff",  }}
          className="navbar-inner"
        >
          <div className="navbar-backdrop" />
          <div className="navbar-container">
            <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
              <div className="logo-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2L3 6V16H7V11H11V16H15V6L9 2Z" fill="white" />
                </svg>
              </div>
              <span className="logo-text">Dream LogicX</span>
            </Link>

            <div className="nav-menu">
              {navItems.map((item) => {
                // External blog URL for Blog
                if (item === "Blog") {
                  return (
                    <a
                      key={item}
                      href="https://blogs.dreamlogicx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  );
                }

                // Keep About and Contact as internal routes; make Services and Industries point to main site
                if (item === "Services" || item === "Industries") {
                  return (
                    <a
                      key={item}
                      href="https://dreamlogicx.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  );
                }

                const to = item === "About" ? "/about" : item === "Contact" ? "/contact" : "/";

                return (
                  <Link
                    key={item}
                    to={to}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            <div className="nav-actions">
              {/* Globe icon removed per request */}
              <a href="https://services.dreamlogicx.com/register/" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ textDecoration: "none" }}>Get Started</a>
              <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span
                  className={`hamburger-line line-top ${
                    isMenuOpen ? "open" : ""
                  }`}
                />
                <span
                  className={`hamburger-line line-middle ${
                    isMenuOpen ? "open" : ""
                  }`}
                />
                <span
                  className={`hamburger-line line-bottom ${
                    isMenuOpen ? "open" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div
            ref={overlayRef}
            className="mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
          <div ref={menuRef} className="mobile-menu">
            <div className="mobile-header">
              <Link
                to="/"
                className="logo"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="logo-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L3 6V16H7V11H11V16H15V6L9 2Z" fill="white" />
                  </svg>
                </div>
                <span className="logo-text">Dream LogicX</span>
              </Link>
              <button
                className="mobile-close"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="close-line" />
                <span className="close-line" />
              </button>
            </div>

            <div className="mobile-content">
              <a href="https://services.dreamlogicx.com/register/" target="_blank" rel="noopener noreferrer" className="mobile-cta" style={{ textDecoration: "none", display: "block", textAlign: "center" }}>Get Started</a>

              <div className="mobile-section">
                <Link
                  to="/about"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </div>

              <div className="mobile-section">
                <button
                  className="accordion-button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className={`accordion-icon ${isServicesOpen ? "open" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <div className="accordion-content">
                    {services.map((service) => (
                      <a
                        key={service}
                        href="https://dreamlogicx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accordion-item"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ textDecoration: 'none', display: 'block' }}
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="mobile-section">
                <button
                  className="accordion-button"
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className={`accordion-icon ${
                      isIndustriesOpen ? "open" : ""
                    }`}
                  />
                </button>
                {isIndustriesOpen && (
                  <div className="accordion-content">
                    {industries.map((industry) => (
                      <a
                        key={industry}
                        href="https://dreamlogicx.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="accordion-item"
                        onClick={() => setIsMenuOpen(false)}
                        style={{ textDecoration: 'none', display: 'block' }}
                      >
                        {industry}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers removed per request */}

              <div className="mobile-section">
                <Link
                  to="/contact"
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <div className="divider" />

              <div className="mobile-footer">Language & Region</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
