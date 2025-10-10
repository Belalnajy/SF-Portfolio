import { useState } from "react";
import { Plus } from "lucide-react";

export function FAQ() {
  return (
    <section className="overflow-hidden relative py-12 sm:py-16 md:py-20 lg:py-24" style={{ paddingTop: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-[40px]">
        {/* Title */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-[8px] mb-8 sm:mb-12 md:mb-16 lg:mb-[60px]">
          <h2 className="text-[#2c4653] text-2xl sm:text-3xl md:text-[35px] lg:text-[40px] font-bold text-center">
            الأسئلة الشائعة ؟
          </h2>
          <p className="text-[rgba(44,70,83,0.8)] text-sm sm:text-base md:text-xl lg:text-[25px] font-bold opacity-70 text-center px-4">
            <span>كل ما تحتاج إلى معرفته قبل الانطلاق مع </span>
            <span className="text-[#5dba47]">S&F</span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">
          <FAQItem question="هل أحتاج أن أكون خبيرًا بالتقنية؟" />
          <FAQItem question="هل ستؤثر الخدمة على وظيفة الكاشير؟" />
          <FAQItem question="هل هناك رسوم إضافية؟" />
          <FAQItem question="هل يمكنني الدفع نقدًا أو ببطاقتي؟" />
          <FAQItem question="هل أحتاج إلى إنترنت لاستخدام التطبيق؟" />
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question }: { question: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="w-full rounded-[15px] sm:rounded-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] bg-gradient-to-r from-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0.05)], from-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.6)] cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col items-end justify-center p-3 sm:p-4 md:p-[15px] w-full">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="w-5 h-5 sm:w-[20px] sm:h-[20px] flex-shrink-0">
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
              <Plus className="w-full h-full text-[#5DBA47]" strokeWidth={3} />
            </div>
          </div>
          
          <p className="text-[#2c4653] text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold text-right">
            {question}
          </p>
        </div>
        
        {isOpen && (
          <div className="mt-3 sm:mt-4 pr-6 sm:pr-8 text-right">
            <p className="text-[rgba(44,70,83,0.7)] text-xs sm:text-sm md:text-base lg:text-[16px]">
              نعم، التطبيق سهل الاستخدام ولا يتطلب خبرة تقنية. كل ما تحتاجه هو هاتف ذكي واتصال بالإنترنت.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
