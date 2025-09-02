import React, { useState, useEffect } from "react";
import { Input } from "../../ui/input";
import UnderLineStyle from "../../UnderLineStyle";
import PrimaryButton from "../../PrimaryButton";
import { saveEmail } from "../../../services/emailServices";

const ReadytoJoin = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(""); // <-- Toast state

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleClick = async (e: any) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      await saveEmail(email);
      setToast("Pre-registered!"); 
      setEmail(""); // clear input
    } catch (err) {
      setError("Failed to save email. Please try again.");
    }
    setLoading(false);
  };

  // Hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl mb-8 text-white font-bold">
                Ready to Join?
              </h2>
              <UnderLineStyle />
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto mt-6">
                Pre-register and we will reach out to you ASAP when applications open!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-80 input bg-white/10 border border-white/30 text-white focus:ring-2 focus:ring-purple-500"
                />

                <PrimaryButton
                  text={`${loading ? "Please wait..." : "Pre-Register Me"}`}
                  disabled={loading}
                  isMb={false}
                  onClick={handleClick}
                />
              </div>

              {error && <p className="text-red-400 text-sm mt-3">{error}</p>}

              {/* Toast notification */}
              {toast && (
                <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-out">
                  {toast}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 3s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default ReadytoJoin;
