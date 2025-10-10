
export function Hero() {
  return (
    <>
      {/* Mobile Hero Section - Shows only on mobile */}
      <section className="block md:hidden relative pt-[130px] pb-[60px] overflow-hidden bg-gradient-to-b from-white to-[#f8fdf6]" dir="rtl">
        <div className="container mx-auto px-[20px]">
          <div className="flex flex-col items-center gap-[25px]">
            {/* Title */}
            <div className="flex flex-col items-center gap-[8px]">
              <h1 className="text-[#5dba47] text-[28px] font-bold text-right">
                Smart and Fast Shopping
              </h1>
              <p className="text-[#2c4653] text-[18px] font-bold text-right">
                نحن شريكك لتجربة تسوق أسرع
              </p>
            </div>

            {/* Description */}
            <p className="text-[rgba(44,70,83,0.7)] text-[13.6px] font-medium text-right leading-relaxed">
              <span>ودع الانتظار في الطوابير الطويلة ... مع
              <span className="text-[#5dba47] font-bold"> Smart & Fast Shopping </span>
              تسوق براحة, اعرف أسعارك وعروضك لحظة بلحظة, وادفع بسرعة بدون إضاعة وقتك. لان وقتك أغلى.</span>
            </p>

            {/* Illustration */}
            <div className="w-full max-w-[350px] my-[20px]">
              <img 
                src="/hero.png" 
                alt="Smart Shopping Illustration" 
                className="w-full h-auto"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-[15px] w-full max-w-[320px]">
              <button className="flex items-center justify-center h-[60px] w-full px-[20px] rounded-[12px] bg-[#5dba47] hover:bg-[#4da93a] transition-colors shadow-md">
                <span className="text-white text-[18px] font-bold">
                  أحصل على التطبيق الان
                </span>
              </button>
              <button className="flex items-center justify-center h-[60px] w-full px-[20px] rounded-[12px] bg-white border-2 border-[#5dba47] hover:bg-[rgba(93,186,71,0.05)] transition-colors">
                <span className="text-[#5dba47] text-[18px] font-bold">
                  كن شريك نجاح
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop & iPad Hero Section - Shows on tablet and desktop */}
      <section className="hidden md:block lg:block xl:block relative pt-[120px] pb-[80px] overflow-hidden" dir="rtl">
        {/* Background decorative elements */}
        <DecorativeBackground />
        
        <div className="container mx-auto px-[40px]" dir="ltr">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Illustration */}
            <div className="order-1 lg:order-2">
              <img 
                src="/hero.png" 
                alt="Smart Shopping Illustration" 
                className="w-full max-w-[660px] h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 flex flex-col items-end gap-[30px]">
              <div className="flex flex-col items-end gap-[7px]">
                <p className="text-[#5dba47] text-[35px] font-bold text-right whitespace-nowrap">
                  Smart and Fast Shopping
                </p>
                <p className="text-[#2c4653] text-[25px] font-bold opacity-90 text-center">
                  نحن شريكك لتجربة تسوق أسرع
                </p>
              </div>

              <div className="flex flex-col gap-[30px] items-end w-full max-w-[700px]">
                <p className="text-[rgba(44,70,83,0.6)] text-[24px] font-semibold text-right w-full leading-relaxed">
                  <span className="text-[#5dba47]">Smart & Fast Shopping </span>
                  <span>ودع الانتظار في الطوابير الطويلة ... مع تسوق براحة, اعرف أسعارك وعروضك لحظة بلحظة, وادفع بسرعة بدون إضاعة وقتك. لان وقتك أغلى.</span>
                </p>
                
                <p className="text-[rgba(44,70,83,0.7)] text-[22px] font-bold text-right w-full">
                  تجربة تسوق جديدة تبدأ بضغطة زر
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-[20px] items-center">
              <button className="flex items-center justify-center h-[75px] w-[260px] px-[20px] py-[5px] rounded-[15px] bg-[rgba(44,70,83,0.05)] hover:bg-[rgba(44,70,83,0.1)] transition-colors">
                  <span className="text-[#5dba47] text-[20px] font-bold whitespace-nowrap">
                    كن شريك نجاح
                  </span>
                </button>
                <button className="flex items-center justify-center h-[75px] w-[260px] px-[20px] py-[5px] rounded-[15px] bg-[#5dba47] hover:bg-[#4da93a] transition-colors">
                  <span className="text-white text-[20px] font-bold whitespace-nowrap">
                    أحصل على التطبيق الان
                  </span>
                </button>
                
        
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DecorativeBackground() {
  return (
    <>
      {/* Top right decoration */}
      <div className="absolute h-[422px] right-0 top-[235px] w-[522px] opacity-10 pointer-events-none hidden lg:block">
        <svg className="block size-full" fill="none" viewBox="0 0 523 424">
          <g opacity="0.1">
            <path d="M146.093 282.055C146.093 293.57 136.759 302.905 125.246 302.905C113.733 302.905 104.399 293.57 104.399 282.055C104.399 270.54 113.733 261.206 125.246 261.206C136.759 261.206 146.093 270.54 146.093 282.055Z" fill="#5DBA47"/>
            <path d="M176.112 209.498C176.112 214.104 172.378 217.838 167.773 217.838C163.168 217.838 159.435 214.104 159.435 209.498C159.435 204.892 163.168 201.158 167.773 201.158C172.378 201.158 176.112 204.892 176.112 209.498Z" fill="#5DBA47"/>
            <path d="M159.435 84.3992C159.435 89.0052 155.701 92.7391 151.096 92.7391C146.491 92.7391 142.757 89.0052 142.757 84.3992C142.757 79.7932 146.491 76.0593 151.096 76.0593C155.701 76.0593 159.435 79.7932 159.435 84.3992Z" fill="#5DBA47"/>
          </g>
        </svg>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute h-[338px] right-[-35px] top-[1643px] w-[418px] opacity-10 pointer-events-none hidden lg:block">
        <svg className="block size-full" fill="#5DBA47" viewBox="0 0 419 340" opacity="0.1">
          <circle cx="100" cy="100" r="40" />
          <circle cx="300" cy="200" r="60" />
        </svg>
      </div>
    </>
  );
}
