import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {
  const whoRef = useRef(null);

  useEffect(() => {
    // GSAP animations for Who We Are section
    if (whoRef.current) {
      const whoHeading = whoRef.current.querySelector(".who-section-label");
      const whoMainHeading = whoRef.current.querySelector(".who-main-heading");
      const whoSubtitle = whoRef.current.querySelector(".who-subtitle");
      const whoLeftContent = whoRef.current.querySelectorAll(".who-left-para");
      const whoRightCards =
        whoRef.current.querySelectorAll(".who-feature-card");
      const whoBottomSection = whoRef.current.querySelector(
        ".who-bottom-cta-section"
      );

      // Section label animation
      gsap.fromTo(
        whoHeading,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Main heading split animation
      if (whoMainHeading) {
        const words = whoMainHeading.textContent.split(" ");
        whoMainHeading.innerHTML = words
          .map((word) => `<span class="who-word">${word}</span>`)
          .join(" ");

        const wordSpans = whoMainHeading.querySelectorAll(".who-word");

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
              trigger: whoMainHeading,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Subtitle animation
      if (whoSubtitle) {
        gsap.fromTo(
          whoSubtitle,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whoSubtitle,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Left content paragraphs
      gsap.fromTo(
        whoLeftContent,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoLeftContent[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Right feature cards
      gsap.fromTo(
        whoRightCards,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whoRightCards[0],
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bottom CTA section
      if (whoBottomSection) {
        gsap.fromTo(
          whoBottomSection,
          { opacity: 0, y: 60, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whoBottomSection,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  return (
    <>
      {/* WHO WE ARE SECTION - ULTRA PROFESSIONAL REDESIGN */}
      <div
        ref={whoRef}
        style={{
          padding: "3rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          backgroundColor: "#F8F9FA",
        }}
        className="who-we-are-section"
      >
        {/* Section Label */}
        <div style={{ marginBottom: "1rem" }}>
          <span
            className="who-section-label"
            style={{
              fontSize: "0.875rem",
              fontWeight: "600",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#3F37C9",
              display: "inline-block",
            }}
          >
            Who We Are
          </span>
        </div>

        {/* Main Heading & Subtitle */}
        <div style={{ marginBottom: "5rem", maxWidth: "900px" }}>
          <h2
            className="who-main-heading"
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
              color: "#242424",
              lineHeight: "1.15",
              fontWeight: "700",
              marginBottom: "1.5rem",
              maxWidth: "700px",
            }}
          >
            We Help Businesses Think Clearly Work Smarter and Grow Confidently
          </h2>
          <p
            className="who-subtitle"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.7",
              color: "#666",
              maxWidth: "750px",
            }}
          >
            A strategic partner committed to solving real problems with clarity,
            systems, and measurable results.
          </p>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "5rem",
            marginBottom: "6rem",
          }}
          className="who-two-column"
        >
          {/* LEFT - Story */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div
              className="who-left-para"
              style={{
                paddingLeft: "2rem",
                borderLeft: "4px solid #3F37C9",
              }}
            >
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.9",
                  color: "#444",
                  marginBottom: "1.5rem",
                }}
              >
                I'm{" "}
                <strong style={{ color: "#242424", fontWeight: "600" }}>
                  Pravesh Maurya
                </strong>
                , founder of Dream LogicX. I started this company because I've
                seen too many good businesses struggle—not because they lacked
                ideas, but because they lacked{" "}
                <strong style={{ color: "#242424", fontWeight: "600" }}>
                  clarity, systems, and the right tools
                </strong>
                .
              </p>
              <p
                style={{
                  fontSize: "1.125rem",
                  lineHeight: "1.9",
                  color: "#444",
                }}
              >
                Today, we're a team of{" "}
                <strong style={{ color: "#242424", fontWeight: "600" }}>
                  200+ consultants, developers, designers, and strategists
                </strong>{" "}
                who work as one unit. We don't sell services—we solve real
                problems.
              </p>
            </div>

            <div
              className="who-left-para"
              style={{
                backgroundColor: "#F8F9FA",
                padding: "2.5rem",
                borderRadius: "2px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  color: "#242424",
                  marginBottom: "1rem",
                  fontWeight: "700",
                }}
              >
                Our Promise
              </h3>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                We build solutions that{" "}
                <strong style={{ color: "#242424" }}>
                  work for your business
                </strong>
                , not just look good on paper. From automating daily operations
                to launching digital products that win customers, every project
                is tailored to deliver real progress.
              </p>
            </div>
          </div>

          {/* RIGHT - Feature Cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div
              className="who-feature-card"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E8E8E8",
                padding: "2.5rem",
                borderRadius: "2px",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3F37C9";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E8E8E8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#3F37C9",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                ✦
              </div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  color: "#242424",
                  marginBottom: "1rem",
                  fontWeight: "700",
                }}
              >
                Your Growth Partner
              </h3>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                We've worked with startups raising their first round, SMEs stuck
                in manual processes, and enterprises ready to scale digitally.
              </p>
            </div>

            <div
              className="who-feature-card"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E8E8E8",
                padding: "2.5rem",
                borderRadius: "2px",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3F37C9";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E8E8E8";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#1F271B",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                ⚡
              </div>
              <h3
                style={{
                  fontSize: "1.375rem",
                  color: "#242424",
                  marginBottom: "1rem",
                  fontWeight: "700",
                }}
              >
                No Jargon, No Templates
              </h3>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                Our promise is simple: no half-measures—just practical, tailored
                solutions that deliver real progress every single time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .who-word {
          display: inline-block;
          margin-right: 0.3em;
          transform-origin: center bottom;
          perspective: 1000px;
        }

        @media (max-width: 1200px) {
          .who-two-column {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .who-stats-grid {
            gap: 2rem !important;
          }

          .who-bottom-cta-section {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }

          .who-bottom-cta-section img {
            margin: 0 auto !important;
          }

          .who-bottom-cta-section button {
            margin: 0 auto !important;
          }
        }

        @media (max-width: 768px) {
          .who-we-are-section {
            padding: 5rem 1rem !important;
          }

          .who-main-heading {
            font-size: clamp(1.75rem, 5vw, 2.5rem) !important;
          }

          .who-subtitle {
            font-size: 1.125rem !important;
          }

          .who-feature-card,
          .who-left-para {
            padding: 2rem !important;
          }

          .who-bottom-cta-section {
            padding: 2.5rem 2rem !important;
          }

          .who-bottom-cta-section img {
            width: 140px !important;
            height: 140px !important;
          }

          .who-bottom-cta-section h3 {
            font-size: 1.5rem !important;
          }

          .who-bottom-cta-section p {
            font-size: 1rem !important;
          }

          .stat-number {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .who-main-heading {
            font-size: 1.625rem !important;
          }

          .who-subtitle {
            font-size: 1rem !important;
          }

          .who-feature-card,
          .who-left-para {
            padding: 1.5rem !important;
          }

          .who-left-para p,
          .who-feature-card p {
            font-size: 1rem !important;
          }

          .who-bottom-cta-section {
            padding: 2rem 1.5rem !important;
          }

          .who-bottom-cta-section button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
}

export default WhoWeAre;
