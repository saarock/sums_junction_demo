import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownRef = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2025-12-05T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdownRef.current) {
      gsap.fromTo(
        countdownRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: countdownRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={countdownRef}
      className="rounded-3xl p-8 text-center transition-all duration-500 w-full mt-16 "
    >
      <div className="glass-card p-12 rounded-3xl">
        <div className="mb-6">
          <h3 className="text-orange-400 text-xl mb-2">
            ⏳ Partner slots are disappearing fast claim your place in Nepal’s
            most ambitious innovation movement now
          </h3>
          <p className="text-white/80 hidden">
            With tech talents from all over Nepal, you don't wanna miss it for
            sure!
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="text-center">
            <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-white/60">Days</div>
          </div>
          <div className="text-3xl text-white/40">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-white/60">Hours</div>
          </div>
          <div className="text-3xl text-white/40">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-white/60">Minutes</div>
          </div>
          <div className="text-3xl text-white/40">:</div>
          <div className="text-center">
            <div className="text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-white/60">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}
