import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLightbulb,
  FaPalette,
  FaCode,
  FaChartLine,
  FaRobot,
  FaRocket,
} from "react-icons/fa";
import {
  HiArrowRight,
  HiPlay,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const serviceRef = useRef(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  const services = [
    {
      icon: FaLightbulb,
      title: "Strategy & Consulting",
      description:
        "Transform your business with data-driven insights and actionable roadmaps tailored to your unique challenges.",
      features: ["Market Analysis", "Business Modeling", "Growth Strategy"],
      color: "#3F37C9",
    },
    {
      icon: FaPalette,
      title: "Design & Branding",
      description:
        "Create memorable brand experiences that resonate with your audience and drive engagement across all touchpoints.",
      features: ["UI/UX Design", "Brand Identity", "Visual Systems"],
      color: "#1F271B",
    },
    {
      icon: FaCode,
      title: "Development & Tech",
      description:
        "Build scalable, high-performance digital solutions powered by cutting-edge technology and best practices.",
      features: ["Web & Mobile Apps", "Cloud Solutions", "API Integration"],
      color: "#3F37C9",
    },
    {
      icon: FaChartLine,
      title: "Digital Marketing",
      description:
        "Amplify your reach and maximize ROI with precision-targeted campaigns and performance optimization.",
      features: ["SEO & SEM", "Social Media", "Content Strategy"],
      color: "#1F271B",
    },
    {
      icon: FaRobot,
      title: "AI & Automation",
      description:
        "Streamline operations and unlock new possibilities with intelligent automation and machine learning solutions.",
      features: ["Process Automation", "AI Integration", "Smart Analytics"],
      color: "#3F37C9",
    },
    {
      icon: FaRocket,
      title: "Growth Acceleration",
      description:
        "Scale your business faster with proven frameworks, optimization strategies, and continuous performance tracking.",
      features: ["Growth Hacking", "CRO", "Performance Analytics"],
      color: "#1F271B",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = services.length - cardsPerView;

  useEffect(() => {
    if (serviceRef.current) {
      const heading = serviceRef.current.querySelector(".service-heading");
      const subtitle = serviceRef.current.querySelector(".service-subtitle");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (subtitle) {
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitle,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }
  }, []);

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex - 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const cardWidth = 100 / cardsPerView;
  const translateX = -(currentIndex * cardWidth);

  // When showing a single card on mobile, avoid gaps so no adjacent cards peek in.
  // Keep desktop/tablet behavior unchanged.
  const trackGap = cardsPerView === 1 ? "0" : "2rem";
  const childMinWidth =
    cardsPerView === 1
      ? "100%"
      : `calc(${cardWidth}% - ${(2 * (cardsPerView - 1)) / cardsPerView}rem)`;
  const childFlex =
    cardsPerView === 1
      ? "0 0 100%"
      : `0 0 calc(${cardWidth}% - ${
          (2 * (cardsPerView - 1)) / cardsPerView
        }rem)`;

  return (
    <div
      ref={serviceRef}
      style={{
        padding: "4rem 2rem 3rem",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: "1.5rem", maxWidth: "600px" }}>
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
          Our Services
        </span>
        <h2
          className="service-heading"
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
            color: "#242424",
            lineHeight: "1.2",
            fontWeight: "700",
            marginBottom: "1.5rem",
            margin: "0 auto 1.5rem",
            marginTop: "1.2rem",
          }}
        >
          Solutions That Drive Real Results
        </h2>
        <p
          className="service-subtitle"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.7",
            color: "#666",
            margin: "0 auto",
          }}
        >
          From strategy to execution, we deliver end-to-end solutions designed
          to accelerate your growth.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        style={{
          position: "relative",
          paddingBottom: "5rem",
          marginTop: "2rem",
        }}
      >
        {/* Carousel Track */}
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            position: "relative",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <motion.div
            ref={carouselRef}
            animate={{ x: `${translateX}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              display: "flex",
              gap: trackGap,
            }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="service-card"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E8E8E8",
                    borderRadius: "0",
                    padding: "2.5rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    minWidth: childMinWidth,
                    flex: childFlex,
                    boxShadow: "none",
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = "translateY(-12px) scale(1.01)";
                    card.style.boxShadow = "0 28px 60px rgba(0, 0, 0, 0.12)";
                    card.style.borderColor = service.color;

                    const iconBg = card.querySelector(".icon-bg");
                    if (iconBg) {
                      iconBg.style.backgroundColor = service.color;
                      iconBg.style.color = "#ffffff";
                    }

                    const accentLine = card.querySelector(".accent-line");
                    if (accentLine) {
                      accentLine.style.transform = "scaleX(1)";
                    }

                    const ctaArrow = card.querySelector(".cta-arrow");
                    if (ctaArrow) {
                      ctaArrow.style.transform = "translateX(6px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = "translateY(0)";
                    card.style.boxShadow = "none";
                    card.style.borderColor = "#E8E8E8";

                    const iconBg = card.querySelector(".icon-bg");
                    if (iconBg) {
                      iconBg.style.backgroundColor = "#F5F7FA";
                      iconBg.style.color = service.color;
                    }

                    const accentLine = card.querySelector(".accent-line");
                    if (accentLine) {
                      accentLine.style.transform = "scaleX(0)";
                    }

                    const ctaArrow = card.querySelector(".cta-arrow");
                    if (ctaArrow) {
                      ctaArrow.style.transform = "translateX(0)";
                    }
                  }}
                >
                  {/* Accent Line */}
                  <div
                    className="accent-line"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      backgroundColor: service.color,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* No decorative background per request */}

                  {/* Icon */}
                  <div
                    className="icon-bg"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#F5F7FA",
                      borderRadius: "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                      fontSize: "1.6rem",
                      color: service.color,
                      transition: "all 0.4s ease",
                    }}
                  >
                    <IconComponent />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      color: "#242424",
                      marginBottom: "1rem",
                      fontWeight: "700",
                      lineHeight: "1.3",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                      color: "#666",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "0.4rem 0.9rem",
                          backgroundColor: "#F7F7F7",
                          color: "#333",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          borderRadius: "0",
                          border: `1px solid #E0E0E0`,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="https://services.dreamlogicx.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      color: service.color,
                      fontSize: "1.02rem",
                      fontWeight: "600",
                      marginTop: "auto",
                      textDecoration: "none",
                    }}
                    aria-label="Learn more about this service"
                  >
                    <span>Learn More</span>
                    <HiArrowRight
                      className="cta-arrow"
                      style={{
                        transition: "transform 0.3s ease",
                        fontSize: "1.25rem",
                      }}
                    />
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation Bottom Section */}
        <div
          style={{
            position: "absolute",
            bottom: "1.25rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "0",
              backgroundColor: "#ffffff",
              color: currentIndex === 0 ? "#B3B3B3" : "#3F37C9",
              border: `1px solid ${currentIndex === 0 ? "#E6E6E6" : "#D7D7D7"}`,
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              transition: "all 0.25s ease",
            }}
          >
            <HiChevronLeft />
          </motion.button>

          {/* Carousel Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                style={{
                  width: currentIndex === index ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "0",
                  backgroundColor:
                    currentIndex === index ? "#3F37C9" : "#E0E0E0",
                  border: "1px solid #D7D7D7",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "0",
              backgroundColor: "#ffffff",
              color: currentIndex >= maxIndex ? "#B3B3B3" : "#3F37C9",
              border: `1px solid ${
                currentIndex >= maxIndex ? "#E6E6E6" : "#D7D7D7"
              }`,
              cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              transition: "all 0.25s ease",
            }}
          >
            <HiChevronRight />
          </motion.button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .service-card {
            padding: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .service-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceSection;
