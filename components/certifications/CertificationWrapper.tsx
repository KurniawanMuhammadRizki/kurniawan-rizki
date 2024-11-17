import { useScroll } from "framer-motion";
import { useRef } from "react";
import CertificationCard from "./CertificationCard";

const certifications = [
  {
    title: "Software Engineering DTI Graduate",
    imgUrl: "/certifications/purwadhika.png",
    issued: "Issued Oct 2024",
    issuer: "Purwadhika Digital Technology School",
    color: "#F1F5F9",
  },
  {
    title: "ITBox Certificate",
    imgUrl: "/certifications/itbox.jpg",
    issued: "Issued Sep 2022",
    issuer: "ITBox",
    color: "#E2E8F0",
    credentials: "Credential ID 27534",
  },
  {
    title: "Microsoft Certified Azure Data Fundamentals",
    imgUrl: "/certifications/microsoft.png",
    issued: "Issued Jul 2022",
    issuer: "Microsoft",
    color: "#CBD5E1",
  },
  {
    title: "Junior Web Programmer",
    imgUrl: "/certifications/bnsp.webp",
    issued: "Issued May 2022 · Expires May 2025",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    color: "#94A3B8",
  },
];

const CertificationWrapper: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative min-h-screen bg-white">
      {certifications.map((certification, i) => {
        const targetScale = 1 - (certifications.length - i) * 0.05;
        return (
          <CertificationCard
            key={`p_${i}`}
            i={i}
            {...certification}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default CertificationWrapper;
