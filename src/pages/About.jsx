import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutImage from "../assets/AboutImage.png";
import { CiCompass1 } from "react-icons/ci";

import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Award,
  Play,
} from "lucide-react";
import { VscServerProcess } from "react-icons/vsc";
import { HiArrowRight, HiPlay } from "react-icons/hi2";
import AshishImg from "../assets/Ashish.png";
import AboutImg from "../assets/AboutImage.png";
import BlogSection from "./BlogSection";

gsap.registerPlugin(ScrollTrigger);

const About01Img =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";
const About02Img =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80";
const ThirdCardImage =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80";
const ProfileImg =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80";

function About() {
  const cardsRef = useRef(null);
  const secondCardRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // (hero section removed) — keep card and second-card animations below

    // GSAP animations for cards
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(".card-animate");

      gsap.fromTo(
        cards,
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // First card internal animation
    if (cardsRef.current) {
      const firstCard = cardsRef.current.querySelector(".bottom-first-card");
      if (firstCard) {
        const topSection = firstCard.querySelector(".top");
        const bottomSection = firstCard.querySelector(".bottom");

        gsap.fromTo(
          topSection,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          bottomSection,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }

    // Second card internal animation
    if (secondCardRef.current) {
      const topSection = secondCardRef.current.querySelector(".top");
      const bottomSection = secondCardRef.current.querySelector(".bottom");

      gsap.fromTo(
        topSection,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        bottomSection,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  const teamMembers = [
    {
      name: "Pravesh Kumar",
      role: "Founder & Visionary",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
      expertise: "Strategic Innovation",
    },
    {
      name: "Abhishek Singh",
      role: "Chief Executive Officer",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      expertise: "Growth Strategy",
    },
    {
      name: "Ashish Sharma",
      role: "Lead Frontend Developer",
      img: AshishImg,
      expertise: "User Experience",
    },
    {
      name: "Priya Desai",
      role: "Head of Design",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      expertise: "Brand Identity",
    },
    {
      name: "Vikram Malhotra",
      role: "Lead Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
      expertise: "Architecture",
    },
    {
      name: "Neha Kapoor",
      role: "Marketing Director",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
      expertise: "Digital Growth",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Vision First",
      description:
        "We architect digital futures with strategy and precision, not just code.",
    },
    {
      icon: Users,
      title: "One Team",
      description:
        "No vendor juggling. Seamless execution from concept to conversion.",
    },
    {
      icon: TrendingUp,
      title: "Results Focus",
      description:
        "We measure success in growth—traffic that converts, brands that endure.",
    },
    {
      icon: Award,
      title: "Transparency",
      description: "Clear timelines. Honest pricing. Trust is our foundation.",
    },
  ];

  return (
    <div className="about-main-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Akro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        }

        .word {
          display: inline-block;
          margin-right: 0.3em;
          transform-origin: center bottom;
          perspective: 1000px;
        }

        @media (max-width: 1024px) {
          .hero-top-section {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding-top: 5rem !important;
          }

          .hero-top-left,
          .hero-top-right {
            max-width: 100% !important;
          }

          .hero-bottom-section {
            flex-direction: column !important;
          }

          .bottom-first-card,
          .second-card,
          .third-card {
            max-width: 100% !important;
            min-width: 100% !important;
            min-height: 400px !important;
          }

          .about-values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .about-team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section,
          .hero-bottom-section {
            padding: 0 1rem !important;
          }

          .hero-top-section {
            gap: 2rem !important;
            padding-top: 8.5rem !important;
          }

          .hero-top-right {
            gap: 2rem !important;
          }

          .hero-top-button {
            flex-direction: column !important;
            width: 100%;
          }

          .hero-top-button button {
            width: 100% !important;
            max-width: 100% !important;
          }

          .about-page-container {
            gap: 3rem !important;
          }

          .bottom-first-card,
          .second-card,
          .third-card {
            min-height: auto !important;
            display: flex !important;
            overflow: hidden !important;
          }

          .third-card img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
            object-position: center center !important;
            display: block !important;
          }

          .about-values-grid,
          .about-team-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 480px) {
          .bottom-first-card,
          .second-card {
            padding: 2rem 1.5rem !important;
            min-height: 350px !important;
          }

          .third-card {
            min-height: auto !important;
            padding-top: 0.5rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
          }

          .third-card img {
            width: 100% !important;
            height: auto !important;
            object-fit: cover !important;
            object-position: center center !important;
            display: block !important;
          }

          h2 {
            font-size: clamp(1.3rem, 5vw, 1.8rem) !important;
          }

          .hero-top-left h2 {
            font-size: clamp(1.9rem, 6vw, 2.4rem) !important;
            line-height: 1.15 !important;
          }

          .hero-top-section {
            padding-top: 9rem !important;
          }
        }
      `}</style>

      <div
        style={{
          backgroundColor: "#3F37C9",
          maxWidth: "100%",
          minHeight: "100vh",
          display: "flex",
          gap: "5rem",
          flexDirection: "column",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2rem",
        }}
        className="about-page-container"
      >
        {/* Top heading for About page (combined title per request) */}
        <div
          style={{
            padding: "4rem 1rem",
            color: "#ffff",
          }}
        >
          <span
            style={{
              fontWeight: "inherit",
              fontSize: "clamp(1rem, 4vw, 1.1rem)",
            }}
          >
            About Us
          </span>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
              lineHeight: 1.15,
              fontWeight: 700,
              margin: "1.5rem 0 2rem",
              maxWidth: "600px",
            }}
          >
            We are Untold — Ecosystem Communication & Professional .
          </h2>

          <p
            style={{
              maxWidth: "880px",
              fontSize: "1rem",
              lineHeight: 1.6,
              maxWidth: "700px",
              marginBottom : '-5rem'
            }}
          >
            A focused network of Indian digital experts — strategists,
            designers, developers — working as one to build simple, powerful
            websites, apps, and automation systems that save time, cut costs,
            and grow your business. No templates. No noise. Just clean
            execution, real results, and ownership at every step.
          </p>
        </div>

        <div
          className="about-image"
          style={{
            position: "relative",
            width: "100%",
            height: "450px",
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={AboutImage}
            alt="About"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          

        </div>
      </div>

      {/* Our Values */}
      <div
        style={{
          padding: "3.5rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: "600",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#3F37C9",
              display: "inline-block",
            }}
          >
            Our Values
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(1.625rem, 4vw, 2.375rem)",
            color: "#242424",
            lineHeight: "1.2",
            fontWeight: "700",
            marginBottom: "3rem",
            maxWidth: "650px",
          }}
        >
          What Drives Us Forward
        </h2>

        <div
          className="about-values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #E8E8E8",
                  padding: "2rem",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(63, 55, 201, 0.12)";
                  e.currentTarget.style.borderColor = "#3F37C9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#E8E8E8";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    backgroundColor: "#F8F9FA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color: "#3F37C9",
                    fontSize: "1.5rem",
                  }}
                >
                  <Icon size={28} />
                </div>
                <h3
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: "700",
                    color: "#242424",
                    marginBottom: "1rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: "1.65",
                    color: "#555",
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div
        style={{
          padding: "3.5rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: "600",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#3F37C9",
              display: "inline-block",
            }}
          >
            Our Team
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(1.625rem, 4vw, 2.375rem)",
            color: "#242424",
            lineHeight: "1.2",
            fontWeight: "700",
            marginBottom: "3rem",
            maxWidth: "650px",
          }}
        >
          Meet the People Behind the Success
        </h2>

        <div
          className="about-team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #E8E8E8",
                overflow: "hidden",
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                setHoveredCard(index);
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.borderColor = "#3F37C9";
              }}
              onMouseLeave={(e) => {
                setHoveredCard(null);
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#E8E8E8";
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "1",
                  overflow: "hidden",
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter:
                      hoveredCard === index
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                    transform:
                      hoveredCard === index ? "scale(1.05)" : "scale(1)",
                    transition: "all 0.5s ease",
                  }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    color: "#242424",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#666",
                    marginBottom: "0.75rem",
                  }}
                >
                  {member.role}
                </p>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#3F37C9",
                    fontWeight: "600",
                  }}
                >
                  {member.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FINAL CTA SECTION - Matching Home Page Design Exactly */}
      <BlogSection />
      <div
        style={{
          maxWidth: "1400px",
          margin: "4rem auto 2rem",
          padding: "0 1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            padding: "4rem 2rem",
            background: "#242424",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Grid Pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.03,
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Top Border Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(90deg, #3F37C9 0%, #5046DB 100%)",
              transformOrigin: "left",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "4rem",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  color: "#3F37C9",
                  textTransform: "uppercase",
                }}
              >
                LET'S WORK TOGETHER
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "#ffffff",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                }}
              >
                Ready to Transform Your Business?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                style={{
                  fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: "1.7",
                }}
              >
                Let's discuss how we can help you achieve your goals with
                tailored solutions and expert guidance.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1.25rem 3rem",
                  backgroundColor: "#3F37C9",
                  color: "#ffffff",
                  border: "none",
                  fontSize: "1.0625rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5046DB";
                  e.target.style.boxShadow =
                    "0 8px 24px rgba(63, 55, 201, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#3F37C9";
                  e.target.style.boxShadow = "none";
                }}
              >
                <span>Start Project</span>
                <HiArrowRight style={{ fontSize: "1.375rem" }} />
              </motion.button>

              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1.125rem 2.875rem",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid rgba(255, 255, 255, 0.2)",
                  fontSize: "1.0625rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ffffff";
                  e.target.style.color = "#242424";
                  e.target.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#ffffff";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
              >
                <HiPlay style={{ fontSize: "1.375rem" }} />
                <span>Case Studies</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Border Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3px",
              background: "linear-gradient(90deg, #3F37C9 0%, #5046DB 100%)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;