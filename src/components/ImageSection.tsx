import React from "react";
import imgStore from "../assets/99a317a7bd01441a7394e3b1d400e307149c9429.png"

export default function ImageSection() {
  return (
<div className="relative h-[400px] sm:h-[500px] md:h-[612px] w-full max-w-[947px] overflow-hidden rounded-[20px] sm:rounded-[25px]">
  {/* Background Image */}
  <img 
    src={imgStore} 
    alt="Store solutions" 
    className="size-full object-cover"
  />

  {/* Gradient Overlay from bottom */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

  {/* Text Overlay */}
  <div className="absolute left-4 sm:left-8 md:left-[211px] bottom-8 sm:bottom-12 md:bottom-14 flex flex-col items-end text-right text-white px-4 sm:px-0">
    <p className="text-[20px] sm:text-[30px] md:text-[40px] leading-tight" dir="rtl">
      حلول لمشاكل الطوابير والولاء
    </p>
    <p className="mt-2 w-full sm:w-[500px] md:w-[706px] text-[14px] sm:text-[18px] md:text-[22px] opacity-80 leading-relaxed" dir="rtl">
      هو دعم جميع المتاجر التي تشهد حركة عملاء عالية وتواجه تحديات مثل طوابير الانتظار أو مشاكل في ولاء العملاء، مما يساعدها على تحقيق أقصى استفادة من تجربتها التجارية.
    </p>
  </div>
</div>

  );
}