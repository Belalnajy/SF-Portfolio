import PageDecorations from './PageDecorations';
import DecorativeBackground from './DecorativeBackground';

export function AboutSection() {
  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-[80px] overflow-hidden hidden lg:block">
        {/* Decorations */}
        <DecorativeBackground />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="flex  flex-row items-center justify-between gap-[20px] ">
            {/* Left - Content */}
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-[30px] items-center lg:items-end w-full lg:w-auto order-1">
              <TitleBlock />
              <DescriptionText />
            </div>

            {/* Right - Phone Image */}
            <div className="flex justify-center lg:justify-end order-2">
              <PhoneDisplay />
            </div>
          </div>
        </div>
      </section>

      {/* For Mobile */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-[80px] overflow-hidden block md:hidden"
        style={{ paddingBottom: 0 }}
      >
        <DecorativeBackground />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="flex  flex-col sm:flex-row items-center justify-between gap-8 lg:gap-0">
            {/* Left - Content */}
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-[30px] items-center lg:items-end w-full lg:w-auto">
              <TitleBlock />
              <PhoneDisplay />

              <DescriptionText />
            </div>

            {/* Right - Phone Image */}
            <div className="flex justify-center lg:justify-end "></div>
          </div>
        </div>
      </section>
    </>
  );
}

function TitleBlock() {
  return (
    <div className="flex flex-col items-end gap-[2px] w-full pb-[10px] md:pb-[20px]">
      <p className="text-[#2c4653] text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-bold  text-right pb-[5px] md:pb-[20px]">
        <span className="text-[#5dba47]">Smart & Fast Shopping</span>
        <span> حول</span>
      </p>
      <p className="text-[rgba(44,70,83,0.8)] text-[14px] sm:text-base md:text-xl lg:text-[25px] font-bold opacity-70 text-right">
        كل ما تحتاجه من عروض وتسوق ذكي دون طوابير أو انتظار
      </p>
    </div>
  );
}

function DescriptionText() {
  return (
    <div className="relative w-full" dir="rtl">
      <p className="text-[rgba(44,70,83,0.8)] text-[14.6px] sm:text-sm md:text-lg lg:text-[30px] font-semibold opacity-70  text-right leading-relaxed">
        <span className="text-[#5dba47] font-bold">Smart & Fast Shopping</span>
        {
          ' هو تطبيق للخدمة الذاتية داخل المتاجر  يمنحك تجربة سلسة وذكية، حيث تستمتع بالعروض والخصومات الحصرية، وتتسوّق بخدمة ذاتية توفر لك الخصوصية والراحة، مع حلول دفع سريعة وآمنة تتيح لك إنهاء مشترياتك دون طوابير أو تأخير، لتجعل كل زيارة للمتجر أكثر متعة وسهولة.'
        }
      </p>
    </div>
  );
}

function PhoneDisplay() {
  return (
    <div className="relative h-[300px] w-[238px] sm:h-[400px] sm:w-[318px] md:h-[480px] md:w-[381px] lg:h-[540px] lg:w-[429.286px] ">
      {/* Decorative circle */}
      <div className="absolute left-0 top-[19.47px] sm:top-[26px] md:top-[31.2px] lg:top-[35.04px] flex items-center justify-center">
        <div className="rotate-[358.991deg] w-[222px] h-[222px] sm:w-[296px] sm:h-[296px] md:w-[355px] md:h-[355px] lg:w-auto lg:h-auto">
          <img src="/Ellipse.png" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Phone image */}
      <div className="absolute left-[26px] sm:left-[35px] md:left-[42px] lg:left-[47px] top-0 h-[300px] w-[186px] sm:h-[400px] sm:w-[249px] md:h-[480px] md:w-[298px] lg:h-[540px] lg:w-[336px]">
        <img
          src="/iphone.png"
          alt="Smart Shopping App"
          className="absolute h-[110.48%] left-[-0.01%] top-[-6.45%] w-[100.02%] max-w-none object-contain"
        />
      </div>
    </div>
  );
}
