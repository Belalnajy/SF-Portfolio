import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";
import PageDecorations from "../components/PageDecorations";
import svgPaths from "../imports/svg-k73wl4kmgb";

interface SuccessPageProps {
  onBackHome?: () => void;
}




export default function SuccessPage({ onBackHome }: SuccessPageProps) {
  const navigate = useNavigate();
  
  const handleBackHome = () => {
    if (onBackHome) {
      onBackHome();
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Header />
      <div className=" pt-[130px] md:pt-[120px] pb-8 md:pb-12" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.01) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
        {/* Title */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px] mb-8 md:mb-12 lg:mb-[70px]">
          <div className="flex gap-[10px] items-center justify-end">
            <p className="font-extrabold leading-[normal] not-italic text-[#2c4653] text-base sm:text-lg md:text-[20px]" dir="auto">
              نموذج طلب الخدمة
            </p>
            <div className="bg-[#5dba47] h-[30px] md:h-[40px] rounded-br-[20px] rounded-tl-[20px] shrink-0 w-[6px] md:w-[8px]" />
          </div>
        </div>

        {/* Success Message Card */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="relative bg-white min-h-[400px] md:min-h-[555px] overflow-clip rounded-[15px] md:rounded-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.2)] max-w-[1360px] mx-auto py-12 md:py-16 lg:py-20">
            {/* Decorations */}
            <PageDecorations />

            {/* Main Content */}
            <div className="flex flex-col gap-[20px] items-center justify-center px-4 md:px-8">
              {/* Top Section */}
              <div className="flex flex-col gap-[15px] items-center">
                <p className="font-bold leading-[normal] not-italic text-[#2c4653] text-xl md:text-[25px] text-center" dir="auto">
                  متحمسون لانضمامك إلينا !
                </p>

                {/* Success Icon */}
                <div className="h-[100px] md:h-[139px] w-[104px] md:w-[144px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 139">
                    <g>
                      <g>
                        <path d={svgPaths.p255f7b80} fill="#5DBA47" fillOpacity="0.3" />
                        <path d={svgPaths.p39773f80} fill="#5DBA47" />
                      </g>
                      <g>
                        <path d={svgPaths.p3e2b5a00} fill="#5DBA47" fillOpacity="0.3" />
                        <path d={svgPaths.p1d3f4f00} fill="#5DBA47" />
                      </g>
                      <path d={svgPaths.p258f7000} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                    </g>
                  </svg>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-[5px] items-center justify-center leading-[normal] not-italic text-center max-w-[492px]">
                  <p className="font-bold text-[#2c4653] text-lg md:text-[20px]" dir="auto">
                    شكرًا لك على تقديم طلبك للانضمام إلى منصتنا
                  </p>
                  <p className="font-semibold text-sm md:text-[16px] text-[rgba(44,70,83,0.8)]" dir="auto">
                    لقد استلمنا بياناتك بنجاح, وسيقوم فريقنا بمراجعتها والتواصل معك في أقرب وقت, نحن متحمسون لأن نكون جزءًا من نجاح متجرك، ونعدك بتجربة تسوّق مبتكرة تزيد من رضا عملائك.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={handleBackHome}
                className="bg-[#5dba47] flex gap-[10px] h-[55px] md:h-[65px] items-center justify-center px-[30px] py-[15px] rounded-[15px] w-full max-w-[300px] hover:bg-[#4da338] transition-colors"
              >
                <div className="flex flex-col font-bold justify-center leading-[0] not-italic text-[18px] text-white">
                  <p className="leading-[normal] whitespace-pre" dir="auto">
                    الصفحة الرئيسية
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
