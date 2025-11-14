import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiSearch,
  FiCpu,
  FiLayers,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function ProcessSection() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: "01",
      icon: FiSearch,
      title: "Discovery & Strategy",
      duration: "Week 1",
      description:
        "Deep-dive into your business model, competitive landscape, and growth opportunities. We audit your current state and build a custom roadmap with clear success metrics and prioritized action items.",
      deliverables: [
        "Competitor analysis & market audit",
        "Strategic roadmap with KPIs",
        "Resource allocation plan",
      ],
    },
    {
      number: "02",
      icon: FiCpu,
      title: "Design & Prototyping",
      duration: "Week 2-3",
      description:
        "User-centered design that drives conversions. We create wireframes, interactive prototypes, and high-fidelity designs—all tested with real users before a single line of code is written.",
      deliverables: [
        "Interactive clickable prototypes",
        "Complete design system",
        "User testing validation reports",
      ],
    },
    {
      number: "03",
      icon: FiLayers,
      title: "Development & Integration",
      duration: "Week 3-5",
      description:
        "Clean, scalable code built for performance and growth. We develop in agile sprints with weekly demos, seamless API integrations, and rigorous quality assurance at every stage.",
      deliverables: [
        "Functional MVP deployment",
        "Complete API integrations",
        "QA testing & documentation",
      ],
    },
    {
      number: "04",
      icon: FiTrendingUp,
      title: "Launch & Optimization",
      duration: "Week 5-6+",
      description:
        "Smooth rollout with zero downtime, followed by continuous optimization. We monitor real-time data, analyze user behavior, and iterate to ensure sustained growth and maximum ROI.",
      deliverables: [
        "Production deployment & SSL",
        "Analytics dashboard setup",
        "Monthly optimization reports",
      ],
    },
  ];

  useEffect(() => {
    if (sectionRef.current) {
      const heading = sectionRef.current.querySelector(".process-main-heading");
      if (heading) {
        const words = heading.textContent.split(" ");
        heading.innerHTML = words
          .map((word) => `<span class="process-word">${word}</span>`)
          .join(" ");

        const wordSpans = heading.querySelectorAll(".process-word");

        gsap.fromTo(
          wordSpans,
          { opacity: 0, y: 40, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const subtitle = sectionRef.current.querySelector(".process-subtitle");
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitle,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      const steps = sectionRef.current.querySelectorAll(".process-step-card");
      gsap.fromTo(
        steps,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: steps[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        padding: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        backgroundColor: "#F8F9FA",
      }}
      className="process-section"
    >
      {/* Section Label */}
      <div style={{ marginBottom: "1rem" }}>
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#3F37C9",
            display: "inline-block",
          }}
        >
          Our Process
        </span>
      </div>

      {/* Header */}
      <div style={{ marginBottom: "5rem", maxWidth: "600px" }}>
        <h2
          className="process-main-heading"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
            color: "#242424",
            lineHeight: "1.15",
            fontWeight: "700",
            marginBottom: "1.5rem",
            maxWidth: "700px",
          }}
        >
          From Vision to Reality in 30 Days
        </h2>
        <p
          className="process-subtitle"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.7",
            color: "#666",
            maxWidth: "750px",
          }}
        >
          A systematic approach refined over 27 years. Every phase delivers
          tangible progress with complete transparency and measurable outcomes.
        </p>
      </div>

      {/* Process Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          marginBottom: "2rem",
        }}
        className="process-grid"
      >
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;

          return (
            <motion.div
              key={index}
              className="process-step-card"
              style={{
                position: "relative",
                backgroundColor: "#fff",
                border: isActive ? "2px solid #3F37C9" : "2px solid #E8E8E8",
                padding: "2rem",
                borderRadius: "8px",
                transition: "all 0.4s ease",
                cursor: "pointer",
                boxShadow: isActive
                  ? "0 12px 40px rgba(63, 55, 201, 0.12)"
                  : "0 4px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={() => setActiveStep(index)}
              whileHover={{ y: -8 }}
            >
              {/* Step Number Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: isActive ? "#3F37C9" : "#F8F9FA",
                  color: isActive ? "#fff" : "#3F37C9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  transition: "all 0.4s ease",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <motion.div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: isActive ? "#3F37C9" : "#F8F9FA",
                  border: isActive ? "3px solid #3F37C9" : "3px solid #E8E8E8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  color: isActive ? "#fff" : "#3F37C9",
                  marginBottom: "1.25rem",
                  transition: "all 0.4s ease",
                  position: "relative",
                }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon />
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#06A77D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "0.875rem",
                      border: "3px solid #fff",
                    }}
                  >
                    <FiCheckCircle />
                  </motion.div>
                )}
              </motion.div>

              {/* Duration Badge */}
              <div
                style={{
                  display: "inline-block",
                  padding: "0.4rem 0.875rem",
                  backgroundColor: isActive ? "#3F37C9" : "#F8F9FA",
                  color: isActive ? "#fff" : "#3F37C9",
                  borderRadius: "20px",
                  fontSize: "0.8125rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  transition: "all 0.4s ease",
                }}
              >
                {step.duration}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#242424",
                  fontWeight: "700",
                  marginBottom: "0.75rem",
                  lineHeight: "1.2",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: "1.65",
                  color: "#555",
                  marginBottom: "1.5rem",
                }}
              >
                {step.description}
              </p>

              {/* Deliverables */}
              <div
                style={{
                  paddingTop: "1.5rem",
                  borderTop: "1px solid #E8E8E8",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "#3F37C9",
                    marginBottom: "1rem",
                  }}
                >
                  Key Deliverables
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {step.deliverables.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: "0.75rem",
                        fontSize: "1rem",
                        color: "#444",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#3F37C9",
                          marginTop: "0.5rem",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcessSection;
