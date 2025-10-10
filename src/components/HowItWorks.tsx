import How2 from "./How-2.tsx";
import svgPaths from "./svg-5tl7sxp3us.ts";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import DownloadAppModal from "./DownloadAppModal";
function Title() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['Cairo:Bold',_sans-serif] font-bold items-center justify-center leading-[normal] left-[calc(50%+17.5px)] not-italic pb-[8px] pt-0 px-0 text-nowrap text-right top-[132px] translate-x-[-50%] whitespace-pre" data-name="TITLE">
      <p className="relative shrink-0 text-[#2c4653] text-[35px]" dir="auto">
        كيفية عمل تطبيقنا ؟
      </p>
      <p className="opacity-70 relative shrink-0 text-[20px] text-[rgba(44,70,83,0.8)]" dir="auto">
        خطوات بسيطة لتسوّق أذكى وأسهل
      </p>
    </div>
  );
}

function Lang({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#5dba47] hover:bg-[#4da93a] box-border content-stretch flex gap-[5px] h-[75px] items-center justify-center px-[20px] py-[5px] relative rounded-[15px] shrink-0 w-[260px] transition-colors cursor-pointer" 
      data-name="lang"
    >
      <p className="font-['Cairo:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre" dir="auto">
        أحصل على التطبيق الان
      </p>
    </button>
  );
}

function Text({ onDownloadClick }: { onDownloadClick: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[calc(50%+17.5px)] top-[790px] translate-x-[-50%] w-[700px]" data-name="text">
      <p className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[20px] text-[rgba(44,70,83,0.7)] text-nowrap text-right whitespace-pre" dir="auto">
        تجربة تسوق جديدة تبدأ بضغطة زر
      </p>
      <Lang onClick={onDownloadClick} />
    </div>
  );
}

function Done() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="done">
      <div className="absolute inset-[-6.25%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="85" rx="42.5" width="85" x="2.5" y="2.5" />
            <rect height="85" rx="42.5" stroke="var(--stroke-0, white)" strokeWidth="5" width="85" x="2.5" y="2.5" />
            <foreignObject x="25" y="25" width="40" height="40">
              <ShoppingCart className="w-10 h-10 text-white" />
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre" dir="auto">
        ابدأ التسوّق بنقرة واحدة
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[15px] w-[350px]" dir="auto">{`اضغط على زر "العربة" في التطبيق وابدأ رحلتك داخل المتجر.`}</p>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[1254px] top-[231px]" data-name="item">
      <Done />
      <Content />
    </div>
  );
}

function Done1() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="done">
      <div className="absolute inset-[-6.25%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="85" rx="42.5" width="85" x="2.5" y="2.5" />
            <rect height="85" rx="42.5" stroke="var(--stroke-0, white)" strokeWidth="5" width="85" x="2.5" y="2.5" />
            <path d={svgPaths.p35d27480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre" dir="auto">
        امسح وأضف منتجاتك
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[15px] text-center w-[350px]" dir="auto">
        استخدم الكاميرا لمسح المنتجات، أضفها إلى سلتك، وتابع العروض والخصومات لحظة بلحظة.
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[calc(50%+206.5px)] top-[326px] translate-x-[-50%]" data-name="item">
      <Done1 />
      <Content1 />
    </div>
  );
}

function Done2() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="done">
      <div className="absolute inset-[-6.25%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="85" rx="42.5" width="85" x="2.5" y="2.5" />
            <rect height="85" rx="42.5" stroke="var(--stroke-0, white)" strokeWidth="5" width="85" x="2.5" y="2.5" />
            <g id="Vector">
              <path d={svgPaths.p4df2400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p31c9c500} stroke="var(--stroke-0, white)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre" dir="auto">
        تحكّم في سلتك بكل سهولة
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[15px] text-center w-[350px]" dir="auto">
        راجع الكمية والأسعار مباشرة من التطبيق، وعدّل مشترياتك في أي وقت.
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[596px] top-[260px]" data-name="item">
      <Done2 />
      <Content2 />
    </div>
  );
}

function IonQrCodeSharp() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="ion:qr-code-sharp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="ion:qr-code-sharp">
          <path d={svgPaths.pdcf00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pbe28800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pb5ee880} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pe583500} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Done3() {
  return (
    <div className="bg-[#5dba47] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-[5px] relative rounded-[1000px] shrink-0 size-[80px]" data-name="done">
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-[-5px] pointer-events-none rounded-[1005px]" />
      <IonQrCodeSharp />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre" dir="auto">
        إدفع كما تحب
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[15px] text-center w-[350px]" dir="auto">
        عند الانتهاء، انتقل للكاشير وشارك رمز الـ QR الخاص بسلتك. ادفع نقدًا، ببطاقتك البنكية أو من خلال التطبيق.
      </p>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[244px] top-[345px]" data-name="item">
      <Done3 />
      <Content3 />
    </div>
  );
}

function SolarStarBold() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="solar:star-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="solar:star-bold">
          <path d={svgPaths.p3261fb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Done4() {
  return (
    <div className="bg-[#5dba47] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-[5px] relative rounded-[1000px] shrink-0 size-[80px]" data-name="done">
      <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-[-5px] pointer-events-none rounded-[1005px]" />
      <SolarStarBold />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre" dir="auto">
        أنه رحلتك وشاركنا رأيك
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[15px] text-center w-[350px]" dir="auto">
        بعد الدفع، استلم مشترياتك فورًا وقم بتقييم تجربتك لمساعدتنا على تحسين الخدمة دائمًا.
      </p>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[calc(50%-153.5px)] top-[559px] translate-x-[-50%]" data-name="item">
      <Done4 />
      <Content4 />
    </div>
  );
}

function Done5() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="done">
      <div className="absolute inset-[-6.25%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="85" rx="42.5" width="85" x="2.5" y="2.5" />
            <rect height="85" rx="42.5" stroke="var(--stroke-0, white)" strokeWidth="5" width="85" x="2.5" y="2.5" />
            <g id="Vector">
              <path d={svgPaths.p3d375500} fill="white" />
              <path clipRule="evenodd" d={svgPaths.p163f2900} fill="white" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2cb09770} fill="white" fillRule="evenodd" />
              <path d={svgPaths.p870ad70} fill="#5DBA47" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[20px] text-nowrap whitespace-pre" dir="auto">
        اجمع النقاط واستمتع بالعروض
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[15px] text-center w-[350px]" dir="auto">
        إكسب نقاط مع كل عملية, وإستمتع بالعروض الخاصة والفورية
      </p>
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[1023px] top-[572px]" data-name="item">
      <Done5 />
      <Content5 />
    </div>
  );
}

function MobileStepCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center gap-[20px] ">
      {icon}
      <div className="flex flex-col items-center gap-[8px] text-center">
        <h3 className="text-[#2c4653] text-[20px] font-bold leading-tight">
          {title}
        </h3>
        <p className="text-[rgba(44,70,83,0.7)] text-[15px] font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function HowItWorks() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  
  return (
    <>
    <section className="relative w-full min-h-[1000px] lg:h-[1000px] py-0 md:py-[80px] overflow-hidden">
      {/* Background decorations - hidden on mobile */}
      <div className="hidden  xl:block absolute" data-name="Vector">
        <div className="absolute bottom-[-0.3%] left-[-0.24%] right-0 top-[-0.3%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(93, 186, 71, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 419 340">
            <g id="Vector" opacity="0.1">
              <path d={svgPaths.pc903900} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p389303f0} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p9b2fa80} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p157eac00} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.pb3a2200} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p163770f0} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p2438880} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p18515680} stroke="var(--stroke-0, #5DBA47)" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="hidden lg:block absolute h-[410.933px] left-[407.71px] top-[230.25px] w-[1020.79px]">
        <div className="absolute inset-[-0.85%_-0.29%_-0.85%_-0.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1028 419">
            <path d={svgPaths.p1a167d80} id="Vector 20" stroke="var(--stroke-0, #2C4653)" strokeDasharray="15 15" strokeOpacity="0.4" strokeWidth="7" />
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex absolute h-[212px] items-center justify-center left-[35px] top-[600px] w-[262px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[212px] relative w-[262px]" data-name="Vector">
            <div className="absolute bottom-[-0.47%] left-[-0.38%] right-0 top-[-0.47%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(93, 186, 71, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263 214">
                <g id="Vector" opacity="0.1">
                  <path d={svgPaths.p211cb0a0} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p10df6100} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p16f85700} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p2c6aa800} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p1917ff72} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.pc123c0} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p29f4d000} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.pfa46b80} stroke="var(--stroke-0, #5DBA47)" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute h-[275px] left-[1453px] top-[51px] w-[340px]" data-name="Vector">
        <div className="absolute bottom-[-0.36%] left-[-0.29%] right-0 top-[-0.36%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(93, 186, 71, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 341 277">
            <g id="Vector" opacity="0.1">
              <path d={svgPaths.p60c8280} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p138543f0} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p26da6300} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p11e44200} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p15f8fc00} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p38a91200} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p260253f0} fill="var(--fill-0, #5DBA47)" />
              <path d={svgPaths.p3da95c70} stroke="var(--stroke-0, #5DBA47)" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="hidden lg:flex absolute h-[422px] items-center justify-center left-0 top-0 w-[522px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[422px] relative w-[522px]" data-name="Vector">
            <div className="absolute bottom-[-0.24%] left-[-0.19%] right-0 top-[-0.24%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(93, 186, 71, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 523 424">
                <g id="Vector" opacity="0.1">
                  <path d={svgPaths.p3f5938a0} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p37221780} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p386f9a00} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p13ef4c80} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p24d73240} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p24de6280} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p1b1f5880} fill="var(--fill-0, #5DBA47)" />
                  <path d={svgPaths.p2279eef0} stroke="var(--stroke-0, #5DBA47)" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop layout with absolute positioning */}
      <div className="hidden lg:block">
        <Title />
        <Text onDownloadClick={() => setShowDownloadModal(true)} />
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
      </div>
      
      {/* Mobile layout - vertical stack */}
      {/* <div className=" flex flex-col md:block lg:hidden xl:hidden items-center gap-[60px] px-[20px]">
        <div className="flex flex-col items-center gap-[8px] mb-[20px]">
          <h2 className="text-[#2c4653] text-[28px] font-bold text-center">
            كيفية عمل تطبيقنا ؟
          </h2>
          <p className="text-[rgba(44,70,83,0.8)] text-[16px] font-bold opacity-70 text-center">
            خطوات بسيطة لتسوّق أذكى وأسهل
          </p>
        </div>
        
        <MobileStepCard
          icon={<Done />}
          title="ابدأ التسوّق بنقرة واحدة"
          description='اضغط على زر "العربة" في التطبيق وابدأ رحلتك داخل المتجر.'
        />
        
        <MobileStepCard
          icon={<Done1 />}
          title="امسح وأضف منتجاتك"
          description="استخدم الكاميرا لمسح المنتجات، أضفها إلى سلتك، وتابع العروض والخصومات لحظة بلحظة."
        />
        
        <MobileStepCard
          icon={<Done2 />}
          title="تحكّم في سلتك بكل سهولة"
          description="راجع الكمية والأسعار مباشرة من التطبيق، وعدّل مشترياتك في أي وقت."
        />
        
        <MobileStepCard
          icon={<Done4 />}
          title="أنه رحلتك وشاركنا رأيك"
          description="بعد الدفع، استلم مشترياتك فورًا وقم بتقييم تجربتك لمساعدتنا على تحسين الخدمة دائمًا."
        />
        
        <MobileStepCard
          icon={<Done3 />}
          title="إدفع كما تحب"
          description="عند الانتهاء، انتقل للكاشير وشارك رمز الـ QR الخاص بسلتك. ادفع نقدًا، ببطاقتك البنكية أو من خلال التطبيق."
        />
        
        <div className="flex flex-col items-center gap-[10px] mt-[20px]">
          <p className="text-[rgba(44,70,83,0.7)] text-[18px] font-semibold text-center">
            تجربة تسوق جديدة تبدأ بضغطة زر
          </p>
          <Lang />
        </div>
      </div> */}

        <How2 />


    </section>
    
    {/* Download App Modal */}
    <DownloadAppModal isOpen={showDownloadModal} onClose={() => setShowDownloadModal(false)} />
    </>
  );
}

export default HowItWorks;
