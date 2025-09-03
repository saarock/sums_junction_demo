import GradientColor from "../../GradientColor";
import UnderLineStyle from "../../UnderLineStyle";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PartnerLogos = () => {
  const orgName = [
    {
      name: "Cogknit Oy",
      imgSrc: "./images/cogknit_logo.webp",
      redirectURI: "https://www.cogknit.io/",
    },
    {
      name: "SUMS Nepal",
      imgSrc: "./images/sumsLogo.png",
      redirectURI: "https://sumsnepal.com/",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".group");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section className="py-16 relative min-h-80 ">
        <GradientColor />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-900/5 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
                Proudly Organized By
              </h2>

              <UnderLineStyle />
              <div
                ref={containerRef}
                className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-4xl mx-auto mt-16"
              >
                {orgName.map((currentOrgDetails, index) => (
                  <a
                    key={index}
                    href={currentOrgDetails.redirectURI}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="group cursor-pointer text-center">
                      <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                        <div className="rounded-2xl p-4 mb-4">
                          <img
                            src={`${currentOrgDetails.imgSrc}`}
                            alt={`${currentOrgDetails.name} Logo`}
                            className="h-60 md:h-60 w-60 mx-auto object-contain filter contrast-125"
                          />
                        </div>
                        <p className="text-white/80 text-lg">
                          {currentOrgDetails.name}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerLogos;
