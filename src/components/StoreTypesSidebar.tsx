import React from "react";
import svgPaths from "../imports/svg-smqeqw6krr";

interface StoreTypeItemProps {
  title: string;
  description: string;
  iconType: "grocery" | "clothing" | "hypermarket" | "branches";
}

function StoreTypeItem({ title, description, iconType }: StoreTypeItemProps) {
  return (
    <div className="flex w-full items-center justify-end gap-3 sm:gap-5 text-white">
      <div className="flex flex-1 flex-col items-end justify-center text-right">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-tight" dir="rtl">{title}</p>
        <p className="text-[12px] sm:text-[13px] md:text-[15px] opacity-70 mt-1 leading-relaxed" dir="rtl">{description}</p>
      </div>
      
      {/* Icon */}
      <div className="shrink-0">
        {iconType === "grocery" && (
          <div className="h-[43.5px] w-[43.611px]">
            <svg className="size-full" fill="none" viewBox="0 0 48 47">
              <path d={svgPaths.p1b3f84c0} stroke="#5DBA47" strokeWidth="3" />
              <path d={svgPaths.p1292fe80} stroke="#5DBA47" strokeWidth="3" />
              <path d={svgPaths.p3d8cc000} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              <path d={svgPaths.p16d2dc0} stroke="#5DBA47" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        )}
        {iconType === "clothing" && (
          <div className="h-[33px] w-[44px]">
            <svg className="size-full" fill="none" viewBox="0 0 44 33">
              <path d={svgPaths.p1fc0d280} fill="#5DBA47" />
            </svg>
          </div>
        )}
        {iconType === "hypermarket" && (
          <div className="h-[40.5px] w-[43.875px]">
            <svg className="size-full" fill="none" viewBox="0 0 48 44">
              <path d={svgPaths.p2967a100} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            </svg>
          </div>
        )}
        {iconType === "branches" && (
          <div className="h-[42.863px] w-[40px]">
            <svg className="size-full" fill="none" viewBox="0 0 44 47">
              <path d={svgPaths.p36516200} stroke="#5DBA47" strokeWidth="2.5" />
              <path d={svgPaths.p5447c80} stroke="#5DBA47" strokeWidth="2.5" />
              <path d={svgPaths.p1f1cd80} stroke="#5DBA47" strokeWidth="2.5" />
              <path d={svgPaths.p3410b200} stroke="#5DBA47" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function StoreTypesSidebar() {
  const storeTypes = [
    {
      title: "السوبرماركت والبقالات الكبيرة",
      description: "تشمل متاجر الأغذية والمشروبات، حيث نركز على تحسين تجربة التسوق وتخفيف الازدحام.",
      iconType: "grocery" as const
    },
    {
      title: "متاجر الملابس والأحذية",
      description: "نقدم حلولًا مبتكرة لتلبية احتياجات العملاء وتعزيز الولاء للعلامة التجارية",
      iconType: "clothing" as const
    },
    {
      title: "الهايبر ماركت والمتاجر متعددة الأقسام",
      description: "نساعد هذه المتاجر في إدارة تدفق العملاء بشكل فعال وتحسين تجربة التسوق",
      iconType: "hypermarket" as const
    },
    {
      title: "الفروع المتوسطة والصغيرة",
      description: "نقدم خدمات متدرجة تناسب حجم المتجر، مع التركيز على تحسين مستوى الخدمة وولاء العملاء.",
      iconType: "branches" as const
    }
  ];

  return (
    <div className="w-full max-w-[500px] rounded-[15px] sm:rounded-[20px] bg-[#2c4653] px-4 sm:px-6 py-6 sm:py-8 md:py-10 block  lg:absolute z-[1000] left-[-90px] top-[-50px]">
      {/* Title */}
      <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col items-end justify-center text-right text-white">
        <p className="text-[20px] sm:text-[25px] md:text-[30px] leading-tight" dir="rtl">أنواع المتاجر المدعومة</p>
        <p className="text-[14px] sm:text-[17px] md:text-[20px] opacity-70 mt-1 sm:mt-2" dir="rtl">حلول مبتكرة لتجربة تسوق مثالية</p>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        {storeTypes.map((store, index) => (
          <StoreTypeItem
            key={index}
            title={store.title}
            description={store.description}
            iconType={store.iconType}
          />
        ))}
      </div>
    </div>
  );
}