import React from 'react';

export function Partners() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-[8px] mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]">
          <h2 className="text-[#2c4653] text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-bold text-center">
            شركاء النجاح
          </h2>
          <p className="text-[rgba(44,70,83,0.8)] text-sm sm:text-base md:text-lg lg:text-[20px] font-bold opacity-70 text-center px-4">
            خدماتنا متوفرة في أكبر أسواق السعودية
          </p>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          <PartnerCard>
            <img
              src="/Partners/panda.png"
              alt="Panda Markets"
              className="object-contain w-full h-full"
            />
          </PartnerCard>

          <PartnerCard>
            <img
              src="/Partners/centrepoint.png"
              alt="Partner 2"
              className="object-contain w-full h-full"
            />
          </PartnerCard>

          <PartnerCard>
            <img
              src="/Partners/othaim.png"
              alt="أسواق العثيم"
              className="object-contain w-full h-full"
            />
          </PartnerCard>

          <PartnerCard>
            <img
              src="/Partners/carrefour.png"
              alt="Carrefour"
              className="object-contain w-full h-full"
            />
          </PartnerCard>

          <PartnerCard>
            <img
              src="/Partners/jarir.png"
              alt="Partner 5"
              className="object-contain w-full h-full"
            />
          </PartnerCard>

          <PartnerCard>
            <img
              src="/Partners/raya.png"
              alt="Partner 6"
              className="object-contain w-full h-full"
            />
          </PartnerCard>

          <PartnerCard>
            <img
              src="/Partners/dukan.png"
              alt="Partner 7"
              className="object-contain w-full h-full"
            />
          </PartnerCard>
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center overflow-clip px-2 py-3 sm:px-[6px] sm:py-[14px] rounded-[15px] sm:rounded-[20px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[150px] md:h-[150px] lg:w-[162px] lg:h-[162px] bg-white hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}
