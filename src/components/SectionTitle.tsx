import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'center' | 'right';
}

export default function SectionTitle({ title, subtitle, alignment = 'center' }: SectionTitleProps) {
  const alignClass = alignment === 'center' ? 'text-center items-center' : 'text-right items-end';

  return (
    <div className={`flex flex-col ${alignClass} px-4 sm:px-0`}>
      <p
        className="text-[20px] sm:text-[28px] md:text-[35px] text-[#2c4653] leading-tight"
        dir="rtl"
      >
        {title}
      </p>
      <p
        className="text-[16px] sm:text-[20px] md:text-[25px] text-[rgba(44,70,83,0.8)] opacity-70 mt-2 leading-relaxed"
        dir="rtl"
      >
        {subtitle}
      </p>
    </div>
  );
}
