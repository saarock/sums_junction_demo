import GradientColor from "../../GradientColor";
import UnderLineStyle from "../../UnderLineStyle";

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

  return (
    <>
      {/* Partner Logos Section */}
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
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-4xl mx-auto mt-16">
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
                  <a href={currentOrgDetails.redirectURI} target="_blank">
                    <div className="group cursor-pointer text-center">
                      <div className="glass-card rounded-3xl p-6 md:p-8 hover:scale-105 transition-all duration-500">
                        <div className="rounded-2xl p-4 mb-4">
                          <img
                            src={`${currentOrgDetails.imgSrc}`}
                            alt="SUMS Nepal Logo"
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
