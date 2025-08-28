import React from "react";

const PartnerLogos = () => {
  const orgName = [
    {
      name: "Cogknit Oy",
      imgSrc: "./images/cogknit_logo.webp",
    },
    {
      name: "SUMS Nepal",
      imgSrc: "./images/sumsLogo.png",
    },
  ];

  return (
    <>
      {/* Partner Logos Section */}
      <section className="py-16 relative min-h-80">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-900/5 to-black/0"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl text-white/90 mb-8">
                Proudly Organized By
              </h3>
              <div className=" gap-8 lg:gap-12 flex items-center justify-center max-w-4xl mx-auto">
                {/* <div className="group cursor-pointer text-center">
                  <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                    <div className="bg-white rounded-2xl p-6 mb-4 shadow-lg">
                      <img
                        src="/cogknit-logo.png"
                        alt="Cogknit Logo"
                        className="h-12 md:h-16 mx-auto object-contain filter contrast-125"
                      />
                    </div>
                    <p className="text-white/80 text-lg">Cogknit Oy</p>
                  </div>
                </div> */}
                {orgName.map((currentOrgDetails) => (
                  <div className="group cursor-pointer text-center">
                    <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                      <div className="rounded-2xl p-4 mb-4">
                        <img
                          src={`${currentOrgDetails.imgSrc}`}
                          alt="SUMS Nepal Logo"
                          className="h-60 md:h-60 w-60 mx-auto object-contain filter contrast-125"
                        />
                      </div>
                      <p className="text-white/80 text-lg">{currentOrgDetails.name}</p>
                    </div>
                  </div>
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
