import svgPaths from "./svg-j8hh0czyyu";
import { ShoppingCart } from "lucide-react";

function Title() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['Cairo:Bold',_sans-serif] font-bold items-center justify-center leading-[normal] left-1/2 not-italic pb-[5px] pt-0 px-0 text-nowrap text-right top-[95px] translate-x-[-50%] whitespace-pre" data-name="TITLE">
      <p className="relative shrink-0 text-[#2c4653] text-[25px]" dir="auto">
        كيفية عمل تطبيقنا ؟
      </p>
      <p className="opacity-70 relative shrink-0 text-[15px] text-[rgba(44,70,83,0.8)]" dir="auto">
        خطوات بسيطة لتسوّق أذكى وأسهل
      </p>
    </div>
  );
}

function Done() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="done">
      <div className="absolute inset-[-10%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(252, 252, 252, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="55" rx="27.5" width="55" x="2.5" y="2.5" />
            <rect height="55" rx="27.5" stroke="var(--stroke-0, #FCFCFC)" strokeWidth="5" width="55" x="2.5" y="2.5" />
            <foreignObject x="15" y="15" width="30" height="30">
              <ShoppingCart className="w-full h-full text-white" strokeWidth={2} />
            </foreignObject>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[15px] text-nowrap whitespace-pre" dir="auto">
        ابدأ التسوّق بنقرة واحدة
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[12px] text-center w-[195px]" dir="auto">{`اضغط على زر "العربة" في التطبيق وابدأ رحلتك داخل المتجر.`}</p>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[220px] top-[195px]" data-name="item">
      <Done />
      <Content />
    </div>
  );
}

function Done1() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="done">
      <div className="absolute inset-[-10%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(252, 252, 252, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="55" rx="27.5" width="55" x="2.5" y="2.5" />
            <rect height="55" rx="27.5" stroke="var(--stroke-0, #FCFCFC)" strokeWidth="5" width="55" x="2.5" y="2.5" />
            <path d={svgPaths.p1cca5180} id="Vector" stroke="var(--stroke-0, #FCFCFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[15px] text-nowrap whitespace-pre" dir="auto">
        امسح وأضف منتجاتك
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[12px] text-center w-[195px]" dir="auto">
        استخدم الكاميرا لمسح المنتجات، أضفها إلى سلتك، وتابع العروض والخصومات.
      </p>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[15px] top-[268px]" data-name="item">
      <Done1 />
      <Content1 />
    </div>
  );
}

function Done2() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="done">
      <div className="absolute inset-[-10%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(252, 252, 252, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="55" rx="27.5" width="55" x="2.5" y="2.5" />
            <rect height="55" rx="27.5" stroke="var(--stroke-0, #FCFCFC)" strokeWidth="5" width="55" x="2.5" y="2.5" />
            <g id="Vector">
              <path d={svgPaths.p38af0500} fill="var(--fill-0, #FCFCFC)" />
              <path d={svgPaths.p2df6b300} stroke="var(--stroke-0, #FCFCFC)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[15px] text-nowrap whitespace-pre" dir="auto">
        تحكّم في سلتك بكل سهولة
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[12px] text-center w-[195px]" dir="auto">
        راجع الكمية والأسعار مباشرة من التطبيق، وعدّل مشترياتك في أي وقت.
      </p>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[220px] top-[370px]" data-name="item">
      <Done2 />
      <Content2 />
    </div>
  );
}

function IonQrCodeSharp() {
  return (
    <div className="absolute left-1/2 size-[25px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="ion:qr-code-sharp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="ion:qr-code-sharp">
          <path d={svgPaths.p2065de00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.p1009c80} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
          <path d={svgPaths.p21652a00} fill="var(--fill-0, #FCFCFC)" id="Vector_3" />
          <path d={svgPaths.p17323980} fill="var(--fill-0, #FCFCFC)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Done3() {
  return (
    <div className="bg-[#5dba47] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-[5px] relative rounded-[1000px] shrink-0 size-[50px]" data-name="done">
      <div aria-hidden="true" className="absolute border-[#fcfcfc] border-[5px] border-solid inset-[-5px] pointer-events-none rounded-[1005px]" />
      <IonQrCodeSharp />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[15px] text-nowrap whitespace-pre" dir="auto">
        إدفع كما تحب
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[12px] text-center w-[195px]" dir="auto">
        عند الانتهاء، انتقل للكاشير وشارك رمز الـ QR الخاص بسلتك. ادفع نقدًا، ببطاقتك البنكية أو من خلال التطبيق.
      </p>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[15px] top-[470px]" data-name="item">
      <Done3 />
      <Content3 />
    </div>
  );
}

function SolarStarBold() {
  return (
    <div className="absolute left-1/2 size-[29px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="solar:star-bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
        <g id="solar:star-bold">
          <path d={svgPaths.p3dae4580} fill="var(--fill-0, #FCFCFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Done4() {
  return (
    <div className="bg-[#5dba47] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-[5px] relative rounded-[1000px] shrink-0 size-[50px]" data-name="done">
      <div aria-hidden="true" className="absolute border-[#fcfcfc] border-[5px] border-solid inset-[-5px] pointer-events-none rounded-[1005px]" />
      <SolarStarBold />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[15px] text-nowrap whitespace-pre" dir="auto">
        أنه رحلتك وشاركنا رأيك
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[12px] text-center w-[195px]" dir="auto">
        بعد الدفع، استلم مشترياتك فورًا وقم بتقييم تجربتك لمساعدتنا على تحسين الخدمة دائمًا.
      </p>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[220px] top-[554px]" data-name="item">
      <Done4 />
      <Content4 />
    </div>
  );
}

function Done5() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="done">
      <div className="absolute inset-[-10%]" style={{ "--fill-0": "rgba(93, 186, 71, 1)", "--stroke-0": "rgba(252, 252, 252, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <g id="done">
            <rect fill="var(--fill-0, #5DBA47)" height="55" rx="27.5" width="55" x="2.5" y="2.5" />
            <rect height="55" rx="27.5" stroke="var(--stroke-0, #FCFCFC)" strokeWidth="5" width="55" x="2.5" y="2.5" />
            <g id="Vector">
              <path d={svgPaths.p38a9dcc0} fill="#FCFCFC" />
              <path clipRule="evenodd" d={svgPaths.p32485730} fill="#FCFCFC" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2b8a2c80} fill="#FCFCFC" fillRule="evenodd" />
              <path d={svgPaths.p10d5a600} fill="#5DBA47" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] not-italic relative shrink-0 text-[#2c4653]" data-name="content">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold relative shrink-0 text-[15px] text-nowrap whitespace-pre" dir="auto">
        اجمع النقاط واستمتع بالعروض
      </p>
      <p className="font-['Cairo:Medium',_sans-serif] font-medium relative shrink-0 text-[12px] text-center w-[195px]" dir="auto">
        إكسب نقاط مع كل عملية, وإستمتع بالعروض الخاصة والفورية
      </p>
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[67px] top-[696px]" data-name="item">
      <Done5 />
      <Content5 />
    </div>
  );
}

function Lang() {
  return (
    <div className="absolute bg-[#5dba47] box-border content-stretch flex gap-[5px] h-[65px] items-center justify-center left-1/2 px-[20px] py-[5px] rounded-[15px] top-[858px] translate-x-[-50%] w-[400px]" data-name="lang">
      <p className="font-['Cairo:Bold',_sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[17px] text-white w-[173px]" dir="auto">
        أحصل على التطبيق الان
      </p>
    </div>
  );
}

export default function Group2() {
  return (
    <div className="relative lg:hidden w-full overflow-hidden flex justify-center">
      <div className="relative w-[430px] h-[1164px] origin-center scale-[0.907] sm:scale-100" style={{ height: '1056px' }}>
        <div className="absolute bg-white h-[1164px] left-0 top-0 w-full" />
        <div className="absolute h-[515.826px] left-[107.58px] top-[193.67px] w-[217.415px]">
          <div className="absolute inset-[-0.29%_-0.43%_-0.22%_-0.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 519">
              <path d={svgPaths.p38bd5200} id="Vector 45" stroke="var(--stroke-0, #2C4653)" strokeDasharray="10 10" strokeOpacity="0.4" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <Title />
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Item4 />
        <Item5 />
        <Lang />
      </div>
    </div>
  );
}