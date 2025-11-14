import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiClock,
  FiTool,
  FiPhoneCall,
  FiLayers,
  FiTrendingUp,
  FiChevronDown,
} from "react-icons/fi";

function FAQSection() {
  const faqs = [
    {
      icon: FiUsers,
      q: "What kind of businesses do you work with?",
      a: "We partner with startups launching their first product, SMEs stuck in manual processes, and enterprises ready to scale digitally. No matter your size — if you're serious about growth, we're here.",
    },
    {
      icon: FiClock,
      q: "How long does a project take?",
      a: "It depends on scope. A brand refresh might take 2–3 weeks. A full ERP system? 3–6 months. We give you a clear timeline from day one — no surprises.",
    },
    {
      icon: FiTool,
      q: "Do you offer ongoing support?",
      a: "Yes. Every project comes with 30 days of free support. After that, we offer flexible maintenance plans so your systems keep running smoothly.",
    },
    {
      icon: FiPhoneCall,
      q: "What's the first step?",
      a: "A free 30-minute strategy call. No pitch, no pressure — just honest talk about your goals and how we can help. Book it below.",
    },
    {
      icon: FiLayers,
      q: "Can you work with our existing team or tools?",
      a: "Absolutely. We integrate with your current stack — whether it's Slack, Notion, Figma, or custom software. Collaboration is in our DNA.",
    },
    {
      icon: FiTrendingUp,
      q: "How do you ensure results?",
      a: "We don't guess. Every decision is backed by data, tested in real-time, and tied to your KPIs. You'll see progress reports weekly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  // split faqs into two columns for desktop while keeping order
  const left = faqs.filter((_, idx) => idx % 2 === 0);
  const right = faqs.filter((_, idx) => idx % 2 === 1);

  return (
    <section
      className="faq-section-container"
      aria-labelledby="faq-heading"
      style={{
        backgroundColor: "#FFFFFF",
        padding: "2rem 0",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: "550px", marginBottom: "3rem" }}>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#3F37C9",
              display: "inline-block",
            }}
          >
            FAQ
          </span>
          <h2
            id="faq-heading"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
              margin: "0.5rem 0 0.5rem",
              color: "#242424",
            }}
          >
            Frequently asked questions
          </h2>
          <p style={{ color: "#666", maxWidth: 820 }}>
            Clear answers to common questions about our process, timelines, and
            how we work with your team.
          </p>
        </div>

        <div className="faq-grid">
          <div className="faq-column">
            {left.map((f, i) => {
              const idx = i * 2;
              const Icon = f.icon;
              return (
                <div className="faq-card" key={idx}>
                  <button
                    className="faq-card-toggle"
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-answer-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(idx);
                      }
                    }}
                  >
                    <span className="faq-card-left">
                      <span className="faq-icon-wrap">
                        <Icon className="faq-icon" />
                      </span>
                      <span className="faq-title">{f.q}</span>
                    </span>
                    <span
                      className={`faq-chevron ${
                        openIndex === idx ? "open" : ""
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </button>

                  <motion.div
                    id={`faq-answer-${idx}`}
                    className="faq-card-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      openIndex === idx
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.32 }}
                    aria-hidden={openIndex !== idx}
                  >
                    <div className="faq-body-inner">{f.a}</div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="faq-column">
            {right.map((f, i) => {
              const idx = i * 2 + 1;
              const Icon = f.icon;
              return (
                <div className="faq-card" key={idx}>
                  <button
                    className="faq-card-toggle"
                    aria-expanded={openIndex === idx}
                    aria-controls={`faq-answer-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggle(idx);
                      }
                    }}
                  >
                    <span className="faq-card-left">
                      <span className="faq-icon-wrap">
                        <Icon className="faq-icon" />
                      </span>
                      <span className="faq-title">{f.q}</span>
                    </span>
                    <span
                      className={`faq-chevron ${
                        openIndex === idx ? "open" : ""
                      }`}
                    >
                      <FiChevronDown />
                    </span>
                  </button>

                  <motion.div
                    id={`faq-answer-${idx}`}
                    className="faq-card-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      openIndex === idx
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.32 }}
                    aria-hidden={openIndex !== idx}
                  >
                    <div className="faq-body-inner">{f.a}</div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem; }
        .faq-column { display:flex; flex-direction:column; gap: 1rem }

        .faq-card { background: transparent; }
        .faq-card-toggle { width:100%; display:flex; align-items:center; justify-content:space-between; gap:1rem; padding: 1rem; background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 10px; cursor: pointer; font-weight: 600; color: #242424; transition: box-shadow .12s ease, transform .08s ease }
        .faq-card-toggle:focus { outline: 3px solid rgba(63,55,201,0.12); outline-offset: 4px }
        .faq-card-toggle:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(31,39,27,0.04) }

        .faq-card-left { display:flex; gap:1rem; align-items:center; flex:1 }
        .faq-icon-wrap { width:48px; height:48px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; background:#F5F7FA; color:#3F37C9; flex:0 0 48px }
        .faq-title { font-size: 1rem; text-align: left }

        .faq-chevron { display:flex; align-items:center; color:#666; transition: transform .25s ease }
        .faq-chevron.open { transform: rotate(180deg); color:#3F37C9 }

        .faq-card-body { overflow:hidden }
        .faq-body-inner { padding: 0.75rem 1rem 1rem; color:#555; line-height:1.7 }

        .btn-cta { background: #3F37C9; color: #fff; border: none; padding: 0.95rem 1.5rem; border-radius: 8px; font-weight: 700; cursor: pointer }
        .btn-cta:hover { background: #5046DB }

        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr }
        }

        @media (max-width: 480px) {
          .faq-card-toggle { padding: 0.9rem }
          .faq-icon-wrap { width:40px; height:40px }
        }
      `}</style>
    </section>
  );
}

export default FAQSection;
