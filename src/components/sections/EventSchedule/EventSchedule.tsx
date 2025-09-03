import { Calendar } from "lucide-react";
import React, { useRef, useEffect } from "react";
import UnderLineStyle from "../../UnderLineStyle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventSchedule = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-pink-900/70"></div>
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("./images/one.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
              Event Schedule
            </h2>
            <UnderLineStyle />

            <div ref={cardRef} className="glass-card rounded-3xl p-16 mt-6">
              <div className="text-center">
                <div className="glass-subtle rounded-full p-8 w-fit mx-auto mb-8">
                  <Calendar className="w-16 h-16 text-purple-400" />
                </div>
                <h3 className="text-3xl mb-4 text-white font-bold">
                  Coming Soon...
                </h3>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  We're putting together an amazing schedule packed with
                  workshops, mentoring sessions, and networking opportunities.
                  Stay tuned for the full agenda!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventSchedule;
