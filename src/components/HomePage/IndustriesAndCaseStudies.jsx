import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaGraduationCap,
  FaBuilding,
  FaCar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const IndustriesAndCaseStudies = () => {
  const [activeTab, setActiveTab] = useState("industries");
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      const title = headerRef.current.querySelector(".section-title");

      if (title) {
        const words = title.textContent.split(" ");
        title.innerHTML = words
          .map((word) => `<span class="title-word">${word}</span>`)
          .join(" ");
        const wordSpans = title.querySelectorAll(".title-word");
        gsap.fromTo(
          wordSpans,
          { opacity: 0, y: 40, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
            },
          }
        );
      }
    }
  }, []);

  const industries = [
    {
      icon: FaHospital,
      name: "Healthcare & Medical",
      description:
        "Digital transformation solutions for hospitals, clinics, and healthcare providers with HIPAA-compliant systems.",
      projects: "240+",
    },
    {
      icon: FaUniversity,
      name: "Finance & Banking",
      description:
        "Secure, scalable fintech solutions with advanced encryption and regulatory compliance built-in.",
      projects: "180+",
    },
    {
      icon: FaShoppingCart,
      name: "E-Commerce & Retail",
      description:
        "High-converting online stores with AI-powered recommendations and seamless checkout experiences.",
      projects: "320+",
    },
    {
      icon: FaGraduationCap,
      name: "Education & E-Learning",
      description:
        "Interactive learning platforms with real-time collaboration and advanced analytics for educators.",
      projects: "150+",
    },
    {
      icon: FaBuilding,
      name: "Real Estate & Construction",
      description:
        "Property management systems and project tracking tools with 3D visualization capabilities.",
      projects: "130+",
    },
    {
      icon: FaCar,
      name: "Automotive & Logistics",
      description:
        "Fleet management, route optimization, and real-time tracking solutions for transport companies.",
      projects: "95+",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Precision Planning",
      client: "Deep Discovery & Clarity",
      description:
        "We dive deep into your operations, uncover hidden bottlenecks, and craft data-backed roadmaps that align perfectly with your goals—no templates, no fluff, just clarity that drives measurable results from day one.",
      highlight:
        "Every milestone is measurable, every decision is yours, and every step moves the needle with precision and purpose.",
      features: [
        "Data-backed roadmaps aligned with your goals",
        "Deep operational analysis & bottleneck identification",
        "No templates, no fluff—just clarity",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Flawless Execution",
      client: "Fixed timelines, transparent pricing",
      description:
        "Fixed timelines, transparent pricing, and zero surprises—delivered with full accountability and 30-day post-launch support, so you stay in control while we handle the rest with ownership and excellence.",
      highlight:
        "On time. On budget. On point—with zero stress and full confidence.",
      features: [
        "Fixed timelines with zero surprises",
        "Transparent pricing & full accountability",
        "30-day post-launch support included",
      ],
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&q=80",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1400px",
        backgroundColor: "#F8F9FA",
        overflow: "hidden",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "3rem 2rem 3rem",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div ref={headerRef}>
          <span
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#3F37C9",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            OUR EXPERTISE
          </span>

          <h2
            className="section-title"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
              color: "#242424",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "1.3rem",
              maxWidth: "700px",
            }}
          >
            Industries We Serve & Success Stories
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#666",
              lineHeight: 1.7,
              maxWidth: "700px",
            }}
          >
            Trusted by businesses across diverse sectors, delivering measurable
            results through technology and innovation.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0",
            margin: "3rem 0",
            borderBottom: "2px solid #E8E8E8",
          }}
        >
          <button
            onClick={() => setActiveTab("industries")}
            style={{
              padding: "1rem 2rem",
              background: "transparent",
              border: "none",
              borderBottom:
                activeTab === "industries"
                  ? "3px solid #3F37C9"
                  : "3px solid transparent",
              color: activeTab === "industries" ? "#3F37C9" : "#666",
              fontSize: "0.9375rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Industries We Serve
          </button>
          <button
            onClick={() => setActiveTab("cases")}
            style={{
              padding: "1rem 2rem",
              background: "transparent",
              border: "none",
              borderBottom:
                activeTab === "cases"
                  ? "3px solid #3F37C9"
                  : "3px solid transparent",
              color: activeTab === "cases" ? "#3F37C9" : "#666",
              fontSize: "0.9375rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Case Studies
          </button>
        </div>
      </section>

      {/* Content Area */}
      <section
        style={{
          padding: "0 2rem 5rem",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <AnimatePresence mode="wait">
          {activeTab === "industries" && (
            <motion.div
              key="industries"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
              className="industries-grid"
            >
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={idx}
                    style={{
                      background: "#fff",
                      border: "1px solid #E8E8E8",
                      padding: "2rem",
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    whileHover={{
                      borderColor: "#3F37C9",
                      boxShadow: "0 8px 30px rgba(63,55,201,0.12)",
                      y: -4,
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        background: "#F8F9FA",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#3F37C9",
                        marginBottom: "1.5rem",
                        transition: "0.3s",
                      }}
                    >
                      <Icon size={28} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        color: "#242424",
                        fontWeight: 700,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {industry.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "#666",
                        lineHeight: 1.7,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {industry.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: "1rem",
                        borderTop: "1px solid #E8E8E8",
                        color: "#3F37C9",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                      }}
                    >
                      <span>{industry.projects} Projects</span>
                      <FaArrowRight size={14} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "cases" && (
            <motion.div
              key="cases"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    padding: "4rem 0",
                    borderBottom:
                      index === caseStudies.length - 1
                        ? "none"
                        : "1px solid #E8E8E8",
                  }}
                  className="case-item"
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      minHeight: "500px",
                    }}
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "1.5rem",
                        left: "1.5rem",
                        padding: "0.625rem 1.25rem",
                        background: "#242424",
                        color: "#fff",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                      }}
                    >
                      Our Approach
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "#3F37C9",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "2.5px",
                      }}
                    >
                      {study.client}
                    </p>
                    <h3
                      style={{
                        fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                        color: "#242424",
                        fontWeight: 700,
                        lineHeight: 1.25,
                      }}
                    >
                      {study.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#666",
                        lineHeight: 1.8,
                      }}
                    >
                      {study.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.875rem",
                        padding: "1.5rem 0",
                        borderTop: "1px solid #E8E8E8",
                        borderBottom: "1px solid #E8E8E8",
                      }}
                    >
                      {study.features.map((f, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.875rem",
                            fontSize: "0.9375rem",
                            color: "#555",
                          }}
                        >
                          <FaCheckCircle
                            size={14}
                            style={{
                              color: "#3F37C9",
                              flexShrink: 0,
                              marginTop: "0.25rem",
                            }}
                          />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <p
                      style={{
                        paddingTop: "1rem",
                        fontSize: "1rem",
                        color: "#242424",
                        fontWeight: 500,
                        fontStyle: "italic",
                        lineHeight: 1.75,
                        paddingLeft: "1.5rem",
                        borderLeft: "3px solid #3F37C9",
                      }}
                    >
                      {study.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <style>{`
        .title-word {
          display: inline-block;
          margin-right: 0.3em;
          transform-origin: center bottom;
          perspective: 1000px;
        }

        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .case-item {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: 1fr !important;
          }

          .cta-container {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default IndustriesAndCaseStudies;
