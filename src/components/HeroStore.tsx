import svgPaths from "../imports/svg-ehumhacyno";
import imgBanner from "/herostorebanner.png";

export default function HeroStore() {
  return (
    <section className="relative h-[450px] sm:h-[550px] lg:h-[600px] w-full overflow-hidden mt-12 md:mt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imgBanner} 
          alt="Shopping store background" 
          className="size-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0.4)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)]" />
      </div>

      {/* Decorative Background Elements - Desktop Only */}
      <div className="hidden lg:block absolute -top-[76px] left-[754px] h-[931px] w-[1407px] opacity-30">
        <svg className="size-full" fill="none" viewBox="0 0 1415 939">
          <g>
            {[495.5, 548.5, 601.5, 654.5, 707.5, 760.5, 813.5, 866.5, 919.5].map((cx, i) => (
              <ellipse key={i} cx={cx} cy="465.5" fill="#132C38" rx="491.5" ry="465.5" />
            ))}
          </g>
        </svg>
      </div>

      {/* Green Circle Bottom Left */}
      <div className="absolute -left-[30px] sm:-left-[53px] bottom-[-40px] lg:bottom-[-70px] size-[150px] sm:size-[200px] lg:size-[288px]">
        <svg className="size-full" fill="none" viewBox="0 0 278 278">
          <circle cx="139" cy="139" fill="#5DBA47" fillOpacity="0.7" r="139" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row" dir="rtl">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col justify-center items-start text-right px-5 py-16 space-y-8" dir="rtl">
          <div className="space-y-2">
            <h1 className="text-[26px] sm:text-[28px] text-[#5dba47] font-bold leading-tight" dir="rtl">
              لأن عميلك أغلى...
            </h1>
            <h2 className="text-[20px] sm:text-[22px] text-white font-medium" dir="rtl">
              اجعل رحلته في متجرك أذكى وأريح
            </h2>
          <div className="space-y-3 text-[15px] sm:text-[16px] text-white/90 leading-relaxed max-w-[350px]" dir="rtl">
            <p>هل سئمت من رؤية العملاء يتركون عرباتهم بسبب الطوابير الطويلة؟</p>
            <p>المنافسة لم تعد بالسعر فقط، بل بالتجربة. نحن نقدم لك حلًا تقنيًا متكاملًا يرفع مبيعاتك ويزيد ولاء عملائك.</p>
          </div>
          </div>
          <button className="bg-[#5dba47] hover:bg-[#4da339] text-white font-semibold px-8 py-4 rounded-[20px] text-[16px] sm:text-[18px] transition-all duration-300" dir="rtl">
            كن شريك نجاح
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full">
          <div className="flex-1 flex flex-col justify-center items-start pr-12 xl:pr-16 space-y-8" dir="rtl">
            <div className="space-y-3 text-right" dir="rtl">
              <h1 className="text-[32px] xl:text-[35px] text-[#5dba47] font-bold leading-tight">
                لأن عميلك أغلى...
              </h1>
              <h2 className="text-[22px] xl:text-[25px] text-white font-medium leading-tight">
                اجعل رحلته في متجرك أذكى وأريح
              </h2>
            </div>
            <div className="space-y-4 text-[20px] xl:text-[24px] text-white/80 leading-relaxed text-right" dir="rtl">
              <p>هل سئمت من رؤية العملاء يتركون عرباتهم بسبب الطوابير الطويلة؟</p>
              <p>المنافسة لم تعد بالسعر فقط، بل بالتجربة. نحن نقدم لك حلًا تقنيًا متكاملًا يرفع مبيعاتك ويزيد ولاء عملائك.</p>
            </div>
            <div className="text-right">
              <button className="bg-[#5dba47] hover:bg-[#4da339] text-white font-bold px-10 py-5 rounded-[20px] text-[18px] xl:text-[21px] transition-all duration-300">
                كن شريك نجاح
              </button>
            </div>
          </div>
        </div>

        {/* Logo - Bottom Left (Desktop only) */}
        <div className=" lg:block absolute left-[10px]  bottom-[20px] xl:left-8 xl:bottom-12">
          <div className="space-y-2">
            <div className="h-[40px] w-[70px] sm:w-[110px] xl:h-[48px] xl:w-[135px]">
              <svg className="size-full" fill="none" viewBox="0 0 135 49">
                <g>
                  <path d={svgPaths.p3e78b200} fill="white" />
                  <path clipRule="evenodd" d={svgPaths.p2cb46b80} fill="white" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1f005400} fill="white" fillRule="evenodd" />
                  <path d={svgPaths.p30741e00} fill="#2C4653" />
                </g>
              </svg>
            </div>
            <div className="hidden sm:block h-[32px] w-[120px] sm:w-[172px] xl:h-[45px] xl:w-[172px]">
              <svg className="size-full" fill="none" viewBox="0 0 172 45">
                <g>
                  <path d={svgPaths.p225fda00} fill="white" />
                  <path d={svgPaths.p12aba780} fill="white" />
                  <path d={svgPaths.p11503432} fill="white" />
                  <path d={svgPaths.p3b61880} fill="white" />
                  <path d={svgPaths.pf1203c0} fill="white" />
                  <path d={svgPaths.p12f4b100} fill="white" />
                  <path d={svgPaths.p3fe29500} fill="white" />
                  <path d={svgPaths.p14574400} fill="white" />
                  <path d={svgPaths.p335b4e80} fill="white" />
                  <path d={svgPaths.p4bbb00} fill="white" />
                  <path d={svgPaths.p988000} fill="#2C4653" />
                  <path d={svgPaths.p27a10e00} fill="#2C4653" />
                  <path d={svgPaths.p3ef57d00} fill="#2C4653" />
                  <path d={svgPaths.p1852c500} fill="#2C4653" />
                  <path d={svgPaths.p34ce8680} fill="#2C4653" />
                  <path d={svgPaths.pe917100} fill="#2C4653" />
                  <path d={svgPaths.p19c42a00} fill="#2C4653" />
                  <path d={svgPaths.p203d0080} fill="#2C4653" />
                  <path d={svgPaths.p35d0a270} fill="#2C4653" />
                  <path d={svgPaths.p330fb200} fill="#2C4653" />
                  <path d={svgPaths.p30d4b5f2} fill="#2C4653" />
                  <path d={svgPaths.p6d8ec80} fill="#2C4653" />
                  <path d={svgPaths.p2729c00} fill="#2C4653" />
                  <path d={svgPaths.p2a091200} fill="#2C4653" />
                  <path d={svgPaths.p1fc2c900} fill="#2C4653" />
                  <path d={svgPaths.p1d413300} fill="#2C4653" />
                  <path d={svgPaths.p2a1a8000} fill="#2C4653" />
                  <path d={svgPaths.p2bf45f00} fill="#2C4653" />
                  <path d={svgPaths.p12e62280} fill="#2C4653" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
